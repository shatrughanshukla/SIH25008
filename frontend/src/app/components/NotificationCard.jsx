import Link from 'next/link';

export default function NotificationCard({ alert }) {
  const isExternal = alert.link && /^https?:\/\//i.test(alert.link);

  const internalHref =
      alert.kind === 'earthquake' ? `/earthquakes/${alert.id}` :
      alert.kind === 'flood'      ? `/floods/${alert.id}` :
      (alert.kind === 'cap' && alert.identifier) ? `/alerts/cap/${encodeURIComponent(alert.identifier)}` :
      null;

  const Wrapper = ({children}) => {
    if (isExternal) {
      return (
        <a
          href={alert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-gray-200 p-3 bg-white hover:bg-gray-50 transition"
        >
          {children}
        </a>
      );
    }
    if (internalHref) {
      return (
        <Link
          href={internalHref}
          className="block rounded-xl border border-gray-200 p-3 bg-white hover:bg-gray-50 transition"
          prefetch
        >
          {children}
        </Link>
      );
    }
    // no link at all
    return (
      <div className="block rounded-xl border border-gray-200 p-3 bg-white">
        {children}
      </div>
    );
  };

  return (
    <Wrapper>
      <div className="flex items-center justify-between gap-2">
        <strong className="font-semibold text-sm text-gray-800">{alert.title}</strong>
        <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs bg-gray-100 text-gray-900">
          {alert.severity || '—'}
        </span>
      </div>
      <div className="mt-1 flex items-center gap-2 text-xs text-gray-700">
        <time>{alert.time ? new Date(alert.time).toLocaleString('en-IN') : '—'}</time>
        <span>•</span>
        <span className="truncate">📍 {alert.location || '—'}</span>
      </div>
    </Wrapper>
  );
}
