'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUserCircle, FaArrowRight } from 'react-icons/fa';
import NotificationsList from '@/app/components/NotificationsList';
import DashboardHeader from '@/app/components/DashboardHeader';

// small, accessible progress bar
function ProgressBar({ value = 0, label = 'Progress' }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-gray-600">{label}</span>
        <span className="text-xs text-gray-500">{pct}%</span>
      </div>
      <div
        className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label={label}
      >
        <div
          className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function StudentDashboard() {
  // If you want to vary the dummy progress per card, tweak these:
  const modules = [
    {
      key: 'earthquake',
      title: 'Earthquake',
      href: '/dashboard/student/earthquakes',
      progress: 45,
      accent: 'from-blue-600 to-indigo-600',
    },
    {
      key: 'fire',
      title: 'Fire',
      href: '/dashboard/fire',
      progress: 10,
      accent: 'from-rose-600 to-orange-600',
    },
    {
      key: 'flood',
      title: 'Flood',
      href: '/dashboard/floods',
      progress: 30,
      accent: 'from-cyan-600 to-blue-600',
    },

  ];

  return (
    <>
      <DashboardHeader />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">

          {/* Top: Welcome */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <FaUserCircle className="text-5xl sm:text-6xl text-gray-400" />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Welcome back, Student Name</h1>
                <p className="text-sm text-gray-600">Here’s your disaster management training overview.</p>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Alerts!</h2>
              {/* optional: a small refresh hint or time */}
            </div>
            <NotificationsList />
          </div>

          {/* Three cards in a row (stack on small) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modules.map((m) => (
              <div key={m.key} className="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col">
                <div className="mb-4">
                  <div className={`inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium text-white bg-gradient-to-r ${m.accent} shadow-sm`}>
                    {m.title}
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-3">
                    Continue your learning module on {m.title.toLowerCase()} preparedness.
                  </p>
                  <ProgressBar value={m.progress} label={`${m.title} module`} />
                </div>

                <div className="mt-5">
                  <Link
                    href={m.href}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 shadow-sm transition-colors"
                    prefetch
                  >
                    Continue
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
