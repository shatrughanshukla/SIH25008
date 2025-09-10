module.exports = [
"[project]/.next-internal/server/app/api/alerts/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/ndma.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNdmaCapAlerts",
    ()=>getNdmaCapAlerts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__XMLParser$3e$__ = __turbopack_context__.i("[project]/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-route] (ecmascript) <export default as XMLParser>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__XMLParser$3e$__["XMLParser"]({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    trimValues: true,
    textNodeName: '#text'
});
function asArray(x) {
    return Array.isArray(x) ? x : x ? [
        x
    ] : [];
}
function shortId(str) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha1').update(String(str || '')).digest('hex').slice(0, 16);
}
function pickText(x) {
    if (x == null) return null;
    if (typeof x === 'string' || typeof x === 'number') return String(x);
    if (typeof x === 'object') return x['#text'] || x._text || x.value || null;
    return null;
}
function capSeverityToBadge(s) {
    const k = String(s || '').toLowerCase();
    if (k === 'extreme') return 'Extreme';
    if (k === 'severe') return 'Severe';
    if (k === 'moderate') return 'Moderate';
    if (k === 'minor') return 'Minor';
    return 'Severe';
}
/** polygon "lat,lon lat,lon ..." -> centroid [lon,lat] */ function centroidFromPolygon(polyStr = '') {
    const pts = polyStr.trim().split(/\s+/).map((p)=>{
        const [lat, lon] = p.split(',').map(Number);
        return [
            lon,
            lat
        ];
    }).filter(([lon, lat])=>Number.isFinite(lon) && Number.isFinite(lat));
    if (!pts.length) return null;
    const [sl, sb] = pts.reduce(([a, b], [lon, lat])=>[
            a + lon,
            b + lat
        ], [
        0,
        0
    ]);
    return [
        sl / pts.length,
        sb / pts.length
    ];
}
/** circle "lat,lon radiusKm" -> [lon,lat] */ function centerFromCircle(circleStr = '') {
    const m = circleStr.trim().match(/^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/);
    if (!m) return null;
    const lat = parseFloat(m[1]), lon = parseFloat(m[2]);
    return Number.isFinite(lat) && Number.isFinite(lon) ? [
        lon,
        lat
    ] : null;
}
function buildXmlUrl(identifier) {
    if (!identifier) return null;
    // Use the FULL identifier (keep the IN- prefix)
    return `https://sachet.ndma.gov.in/cap_public_website/FetchXMLFile?identifier=${encodeURIComponent(identifier)}`;
}
async function fetchWithTimeout(url, ms = 4000) {
    const ctrl = new AbortController();
    const t = setTimeout(()=>ctrl.abort(), ms);
    try {
        const res = await fetch(url, {
            signal: ctrl.signal,
            next: {
                revalidate: 60
            }
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.text();
    } finally{
        clearTimeout(t);
    }
}
function isEnglishLangCode(v = '') {
    const s = String(v).trim().toLowerCase();
    if (!s) return false;
    // matches: en, en-in, en_us, english, etc.
    return s === 'en' || s.startsWith('en-') || s.startsWith('en_') || s === 'english';
}
function looksEnglish(text = '') {
    const s = String(text || '').trim();
    if (!s) return false;
    // crude but fast: ratio of basic ASCII letters, digits, spaces, and common punctuations
    const ascii = s.match(/[A-Za-z0-9 ,.;:!?'()"“”‘’\-–—\/\\]/g)?.length || 0; // note: escaped /
    const total = s.length;
    return ascii / total >= 0.75; // at least 75% ASCII-ish
}
async function getNdmaCapAlerts(limit = 5) {
    const rssUrl = process.env.NDMA_CAP_RSS;
    if (!rssUrl) throw new Error('NDMA_CAP_RSS not set');
    const res = await fetch(rssUrl, {
        next: {
            revalidate: 60
        }
    });
    if (!res.ok) throw new Error(`NDMA RSS failed: ${res.status}`);
    const xml = await res.text();
    const j = parser.parse(xml);
    const items = asArray(j?.rss?.channel?.item);
    const base = items.map((i)=>{
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
            uid,
            id: identifier || uid,
            identifier: identifier || null,
            title: pickText(i.title) || 'Alert',
            time: sent ? new Date(sent).toISOString() : null,
            location: '—',
            severity: 'Unknown',
            link: humanUrl || xmlUrl,
            xmlUrl,
            coords,
            event: ''
        };
    });
    base.sort((a, b)=>new Date(b.time || 0) - new Date(a.time || 0));
    const top = base.slice(0, limit);
    // Enrich from CAP XML (prefer English block)
    await Promise.allSettled(top.map(async (a)=>{
        if (!a.xmlUrl) return;
        try {
            const capXml = await fetchWithTimeout(a.xmlUrl, 4000);
            const capJ = parser.parse(capXml);
            const alert = capJ?.['cap:alert'] || {};
            const infosRaw = alert?.['cap:info'];
            const infos = Array.isArray(infosRaw) ? infosRaw : infosRaw ? [
                infosRaw
            ] : [];
            const langOf = (inf)=>pickText(inf?.['cap:language']) || '';
            const headOf = (inf)=>pickText(inf?.['cap:headline']) || '';
            const areaOf = (inf)=>{
                const areaRaw = inf?.['cap:area'];
                const areas = Array.isArray(areaRaw) ? areaRaw : areaRaw ? [
                    areaRaw
                ] : [];
                return pickText(areas[0]?.['cap:areaDesc']) || '';
            };
            // Rank infos: explicit English first, then those that "look English", then others
            const ranked = [
                ...infos
            ].sort((x, y)=>{
                const xe = isEnglishLangCode(langOf(x)) ? 2 : looksEnglish(headOf(x) + ' ' + areaOf(x)) ? 1 : 0;
                const ye = isEnglishLangCode(langOf(y)) ? 2 : looksEnglish(headOf(y) + ' ' + areaOf(y)) ? 1 : 0;
                return ye - xe; // higher score first
            });
            const info = ranked[0] || {};
            const sevRaw = pickText(info?.['cap:severity']);
            const ev = pickText(info?.['cap:event']) || 'Alert';
            const head = headOf(info);
            const areaDesc = areaOf(info);
            // ALWAYS override from XML; default severity to 'Severe' when missing/unknown
            a.severity = capSeverityToBadge(sevRaw); // defaults unknown -> 'Severe'
            a.event = ev;
            a.title = head || (areaDesc ? `${ev} – ${areaDesc}` : ev);
            a.location = areaDesc || a.location;
            // mark language for filtering: explicit code OR heuristic
            const code = langOf(info);
            a._isEnglish = isEnglishLangCode(code) || looksEnglish(a.title + ' ' + a.location);
        } catch  {
            // On enrichment failure, be conservative: not English
            a._isEnglish = false;
            // still normalize severity in case upstream set something odd
            a.severity = capSeverityToBadge(a.severity);
        }
    }));
    // Return English only (explicit 'en*' or looks-English heuristic)
    const englishOnly = top.filter((a)=>!!a._isEnglish);
    return englishOnly;
} // <-- missing brace added here
}),
"[project]/src/app/api/alerts/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/alerts/route.js
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "revalidate",
    ()=>revalidate,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ndma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ndma.js [app-route] (ecmascript)");
;
const runtime = 'nodejs';
const revalidate = 60;
async function GET() {
    try {
        // Only NDMA CAP; keep it lean (top 5)
        const items = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ndma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNdmaCapAlerts"])(5);
        return Response.json({
            items
        }, {
            headers: {
                'Cache-Control': 's-maxage=60, stale-while-revalidate=300'
            }
        });
    } catch (e) {
        // Graceful failure: empty list (your UI already shows "No recent alerts.")
        return Response.json({
            items: [],
            error: e.message
        }, {
            status: 200
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__64e0463e._.js.map