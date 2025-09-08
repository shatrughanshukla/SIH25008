'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaUserCircle, FaSignOutAlt, FaCog, FaUser } from 'react-icons/fa';

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function onClickOutside(e) {
      if (!menuRef.current || !btnRef.current) return;
      if (!menuRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onEsc(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/dashboard" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-bold text-xl tracking-tight">Disaster Dashboard</span>
            </a>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/dashboard/chatbot"
              className="text-white hover:bg-blue-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Chatbot
            </a>
            <a
              href="/dashboard/leaderboard"
              className="text-white hover:bg-blue-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              LeaderBoard
            </a>
            <a
              href="/dashboard/about"
              className="text-white hover:bg-blue-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              About
            </a>

            {/* Profile dropdown */}
            <div className="relative" ref={menuRef}>
              <button
                ref={btnRef}
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-2 text-white bg-white/0 hover:bg-blue-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                aria-haspopup="menu"
                aria-expanded={open}
              >
                <FaUserCircle className="text-white text-lg" aria-hidden="true" />
                <span>Profile</span>
                <FaChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {open && (
                <div
                  role="menu"
                  aria-label="Profile menu"
                  className="absolute right-0 mt-2 w-52 origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black/5 focus:outline-none overflow-hidden"
                >
                  <a
                    href="/dashboard/profile"
                    role="menuitem"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    <FaUser aria-hidden="true" /> My Account
                  </a>
                  <a
                    href="/dashboard/settings"
                    role="menuitem"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    <FaCog aria-hidden="true" /> Settings
                  </a>
                  <div className="h-px bg-gray-200" />
                  <button
                    type="button"
                    role="menuitem"
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    onClick={() => {
                      setOpen(false);
                      // TODO: hook your sign-out method here
                      // e.g., signOut();
                    }}
                  >
                    <FaSignOutAlt aria-hidden="true" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* (Optional) Mobile: keep simple or add a hamburger later */}
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
