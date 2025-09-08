import 'server-only';
import { XMLParser } from 'fast-xml-parser';
import crypto from 'crypto';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
  trimValues: true,
  textNodeName: '#text',
});

function asArray(x){ return Array.isArray(x) ? x : (x ? [x] : []); }
function shortId(str){ return crypto.createHash('sha1').update(String(str || '')).digest('hex').slice(0,16); }
function pickText(x){
  if (x == null) return null;
  if (typeof x === 'string' || typeof x === 'number') return String(x);
  if (typeof x === 'object') return x['#text'] || x._text || x.value || null;
  return null;
}
function capSeverityToBadge(s){
  const k = String(s || '').toLowerCase();
  if (k === 'extreme') return 'Extreme';
  if (k === 'severe')  return 'Severe';
  if (k === 'moderate')return 'Moderate';
  if (k === 'minor')   return 'Minor';
  return 'Severe';
}
/** polygon "lat,lon lat,lon ..." -> centroid [lon,lat] */
function centroidFromPolygon(polyStr=''){
  const pts = polyStr.trim().split(/\s+/).map(p=>{
    const [lat, lon] = p.split(',').map(Number);
    return [lon, lat];
  }).filter(([lon,lat])=>Number.isFinite(lon)&&Number.isFinite(lat));
  if (!pts.length) return null;
  const [sl, sb] = pts.reduce(([a,b],[lon,lat])=>[a+lon,b+lat],[0,0]);
  return [sl/pts.length, sb/pts.length];
}
/** circle "lat,lon radiusKm" -> [lon,lat] */
function centerFromCircle(circleStr=''){
  const m = circleStr.trim().match(/^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/);
  if (!m) return null;
  const lat = parseFloat(m[1]), lon = parseFloat(m[2]);
  return (Number.isFinite(lat) && Number.isFinite(lon)) ? [lon, lat] : null;
}
function buildXmlUrl(identifier){
  if (!identifier) return null;
  // Use the FULL identifier (keep the IN- prefix)
  return `https://sachet.ndma.gov.in/cap_public_website/FetchXMLFile?identifier=${encodeURIComponent(identifier)}`;
}
async function fetchWithTimeout(url, ms=4000){
  const ctrl = new AbortController();
  const t = setTimeout(()=>ctrl.abort(), ms);
  try{
    const res = await fetch(url, { signal: ctrl.signal, next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(t);
  }
}

/**
 * Fetch NDMA CAP (RSS) → normalize → enrich top N from the CAP XML.
 * - Picks English info block when available (en or en-IN)
 * - ALWAYS overrides severity & location from XML (so no "Unknown")
 */
export async function getNdmaCapAlerts(limit = 5){
  const rssUrl = process.env.NDMA_CAP_RSS;
  if (!rssUrl) throw new Error('NDMA_CAP_RSS not set');

  const res = await fetch(rssUrl, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`NDMA RSS failed: ${res.status}`);

  const xml = await res.text();
  const j = parser.parse(xml);
  const items = asArray(j?.rss?.channel?.item);

  const base = items.map(i => {
    const identifier = pickText(i['cap:identifier']) || pickText(i.guid);
    const sent = pickText(i['cap:sent']) || pickText(i.pubDate) || null;

    // Try coordinates if present in RSS (rare)
    let coords = null;
    const poly = pickText(i['cap:polygon']) || pickText(i['cap:area']?.['cap:polygon']);
    const circle = pickText(i['cap:circle']) || pickText(i['cap:area']?.['cap:circle']);
    if (poly) coords = centroidFromPolygon(poly);
    if (!coords && circle) coords = centerFromCircle(circle);

    const xmlUrl = buildXmlUrl(identifier);
    const humanUrl = pickText(i.link) || null;

    // React-safe unique key
    const uid = shortId(`${identifier || ''}|${sent || ''}`);

    return {
      kind: 'cap',
      uid,                          // Use this in React keys
      id: identifier || uid,
      identifier: identifier || null,
      title: pickText(i.title) || 'Alert', // will be replaced by English headline from XML
      time: sent ? new Date(sent).toISOString() : null,
      location: '—',                // will be filled from XML
      severity: 'Unknown',          // will be overridden by XML
      link: humanUrl || xmlUrl,     // keep something clickable
      xmlUrl,
      coords,
      event: '',
    };
  });

  base.sort((a,b)=>new Date(b.time||0)-new Date(a.time||0));
  const top = base.slice(0, limit);

  // Enrich from CAP XML (prefer English block)
  await Promise.allSettled(top.map(async a => {
    if (!a.xmlUrl) return;
    try{
      const capXml = await fetchWithTimeout(a.xmlUrl, 4000);
      const capJ = parser.parse(capXml);
      const alert = capJ?.['cap:alert'] || {};
      const infosRaw = alert?.['cap:info'];
      const infos = Array.isArray(infosRaw) ? infosRaw : (infosRaw ? [infosRaw] : []);
      const pickLang = (inf) => {
        const lang = (pickText(inf?.['cap:language']) || '').toLowerCase();
        return lang === 'en' || lang === 'en-in';
      };
      const info = infos.find(pickLang) || infos[0] || {};

      const sev = pickText(info?.['cap:severity']);      // e.g., Severe
      const ev  = pickText(info?.['cap:event']) || 'Alert';
      const head= pickText(info?.['cap:headline']) || '';
      const areaRaw = info?.['cap:area'];
      const areas = Array.isArray(areaRaw) ? areaRaw : (areaRaw ? [areaRaw] : []);
      const areaDesc = pickText(areas[0]?.['cap:areaDesc']) || '';

      // ALWAYS override from XML (fixes "Unknown" + non-English)
      a.severity = capSeverityToBadge(sev || a.severity);
      a.event = ev;
      a.title = head || (areaDesc ? `${ev} – ${areaDesc}` : ev);
      a.location = areaDesc || a.location;
    } catch {
      // ignore enrichment failures
    }
  }));

  return top;
}
