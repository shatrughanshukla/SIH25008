'use client';

import { useEffect, useState } from 'react';
import NotificationCard from './NotificationCard';

export default function NotificationsList() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);

  // Fetch once on mount, then refresh every 60s
  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch('/api/alerts', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (active) setItems(json.items || []);
      } catch (err) {
        if (active) setError(err.message || 'Failed to load alerts');
      }
    };

    load();
    const iv = setInterval(load, 60000);
    return () => { active = false; clearInterval(iv); };
  }, []);

  if (error) return <p className="text-sm text-red-600">Error: {error}</p>;
  if (items === null) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-16 animate-pulse rounded-xl bg-gray-100" />
        ))}
      </div>
    );
  }
  if (!items.length) return <p className="text-sm text-gray-500">No recent alerts.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(a => (
        <NotificationCard key={a.uid || `${a.kind}-${a.id}`} alert={a} />
      ))}
    </div>
  );
}
