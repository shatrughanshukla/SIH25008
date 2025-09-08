'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronLeft, FaUserCircle, FaPlay, FaBookOpen, FaListUl } from 'react-icons/fa';
import DashboardHeader from '@/app/components/DashboardHeader';

function Section({ title, children }) {
  return (
    <section className="bg-white rounded-xl shadow-md p-5 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Accordion({ label, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800 hover:bg-gray-50"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2">
          <FaListUl className="text-gray-500" />
          {label}
        </span>
        <FaChevronDown
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && <div className="p-4 bg-white text-sm text-gray-700">{children}</div>}
    </div>
  );
}

export default function EarthquakeModulePage() {
  return (
    <>
      <DashboardHeader />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Top bar: back + module + profile */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link
                  href="/student/dashboard"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
                  prefetch
                >
                  <FaChevronLeft /> Back
                </Link>
                <span className="text-sm text-gray-400">|</span>
                <span className="text-sm">
                  <span className="font-semibold text-gray-900">Earthquake</span>{' '}
                  <span className="text-blue-700">Module</span>
                </span>
              </div>
              <Link
                href="/student/dashboard/profile"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
                prefetch
              >
                <FaUserCircle className="text-xl" />
                Profile
              </Link>
            </div>
          </div>

          {/* 1. Knowledge & Resources */}
          <Section title="1. Knowledge & Resources">
            <div className="space-y-3">
              <Accordion label="FAQs ▾ (expand to view)">
                <ul className="list-disc pl-5 space-y-1">
                  <li>What should I do during strong shaking?</li>
                  <li>How do I prepare a family emergency kit?</li>
                  <li>What to check at home after an earthquake?</li>
                </ul>
              </Accordion>

              <Accordion label="Videos ▾ (expand to view)">
                <ul className="list-disc pl-5 space-y-1">
                  <li><a className="text-blue-700 hover:underline" href="#">Drop, Cover, Hold On (2 min)</a></li>
                  <li><a className="text-blue-700 hover:underline" href="#">Securing Furniture at Home</a></li>
                  <li><a className="text-blue-700 hover:underline" href="#">Community Evacuation Drills</a></li>
                </ul>
              </Accordion>

              <Accordion label="PDFs ▾ (expand to view)">
                <ul className="list-disc pl-5 space-y-1">
                  <li><a className="text-blue-700 hover:underline" href="#">Earthquake Preparedness Checklist (PDF)</a></li>
                  <li><a className="text-blue-700 hover:underline" href="#">School Safety Plan (PDF)</a></li>
                </ul>
              </Accordion>
            </div>
          </Section>

          {/* 2. Assignment */}
          <Section title="2. Assignment (Do or Die Task)">
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Example:</span> “Arrange the correct evacuation steps for a classroom during an earthquake.”
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/student/dashboard/earthquake/assignment"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 shadow-sm"
                  prefetch
                >
                  <FaBookOpen aria-hidden="true" />
                  Start Assignment
                </Link>
                <span className="text-xs text-gray-500">Estimated time: 10–15 mins</span>
              </div>
            </div>
          </Section>

          {/* 3. Drill Game */}
          <Section title="3. Drill Game (Simulation)">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/student/dashboard/earthquake/drill"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 shadow-sm"
                prefetch
              >
                <FaPlay aria-hidden="true" />
                Play Game
              </Link>
              <span className="text-xs text-gray-500">Learn by doing — safe, guided practice.</span>
            </div>
          </Section>

          {/* Footer mini-links */}
          <div className="text-center text-xs text-gray-500 pt-2 pb-6">
            <div className="inline-flex items-center gap-3">
              <Link href="/about" className="hover:text-gray-700" prefetch>About</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-gray-700" prefetch>Contact</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-gray-700" prefetch>Terms</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
