'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  ShieldAlert,        // logo
  MessageSquare,      // Chatbot
  Clapperboard,       // Reels
  Trophy,             // LeaderBoard
  Info,               // About
  UserRound,          // Profile avatar
  ChevronDown,        // Profile caret
  User,               // My Account
  Settings,           // Settings
  LogOut,              // Logout
  Phone
} from 'lucide-react';

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close on outside click + Esc
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

  const navLink =
    'text-white hover:bg-blue-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 inline-flex items-center gap-2';

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/dashboard/student" className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="text-white font-bold text-xl tracking-tight">
                Disaster Dashboard
              </span>
            </a>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/dashboard/chatbot" className={navLink}>
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Chatbot
            </a>
            <a href="/dashboard/student/reels" className={navLink}>
              <Clapperboard className="h-4 w-4" aria-hidden="true" />
              Reels
            </a>
            <a href="/dashboard/student/leaderboard" className={navLink}>
              <Trophy className="h-4 w-4" aria-hidden="true" />
              LeaderBoard
            </a>
            <a href="/dashboard/contact" className={navLink}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Emergency Contact
            </a>
            <a href="/dashboard/about" className={navLink}>
              <Info className="h-4 w-4" aria-hidden="true" />
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
                <UserRound className="h-5 w-5 text-white" aria-hidden="true" />
                <span>Profile</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
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
                    <User className="h-4 w-4" aria-hidden="true" />
                    My Account
                  </a>
                  <a
                    href="/dashboard/settings"
                    role="menuitem"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    <Settings className="h-4 w-4" aria-hidden="true" />
                    Settings
                  </a>
                  <div className="h-px bg-gray-200" />
                  <button
                    type="button"
                    role="menuitem"
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    onClick={() => {
                      setOpen(false);
                      // TODO: hook your sign-out method here
                    }}
                  >
                    <LogOut className="h-4 w-4" aria-hidden="true" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* (Optional) Mobile: add a hamburger later if needed */}
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
