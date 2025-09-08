'use client';

import { useState } from 'react';
import { FaBook, FaCalendarAlt, FaClipboardList, FaBell, FaUserCircle } from 'react-icons/fa';
import NotificationsList from '@/app/components/NotificationsList';
import DashboardHeader from '@/app/components/DashboardHeader';


export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center">
                  <div className="bg-blue-500 rounded-full p-3 mr-4">
                    <FaBook className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Courses</h3>
                    <p className="text-2xl font-bold text-blue-600">4</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-3 mr-4">
                    <FaClipboardList className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Assignments</h3>
                    <p className="text-2xl font-bold text-green-600">7</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="flex items-center">
                  <div className="bg-purple-500 rounded-full p-3 mr-4">
                    <FaCalendarAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Upcoming Events</h3>
                    <p className="text-2xl font-bold text-purple-600">2</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Recent Activities</h3>
            <div className="space-y-3">
              {[
                { title: 'Earthquake Safety Module Completed', time: '2 hours ago', icon: FaBook },
                { title: 'Assignment Submitted: Flood Prevention', time: 'Yesterday', icon: FaClipboardList },
                { title: 'Mock Drill Scheduled', time: '3 days ago', icon: FaCalendarAlt }
              ].map((activity, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                  <activity.icon className="text-gray-500 mr-3" />
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'courses':
        return (
          <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">My Courses</h2>
            <p className="text-gray-600">Your enrolled courses will appear here.</p>
          </div>
        );
      case 'assignments':
        return (
          <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Assignments</h2>
            <p className="text-gray-600">Your assignments will appear here.</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Notifications</h2>
            <NotificationsList />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <DashboardHeader/>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-center flex-col mb-6 pt-2">
              <FaUserCircle className="text-6xl text-gray-400 mb-2" />
              <h2 className="text-xl font-bold text-gray-800">Student Name</h2>
              <p className="text-sm text-gray-500">student@example.com</p>
            </div>
            
            <nav className="space-y-1">
              {[
                { name: 'Overview', id: 'overview', icon: FaBook },
                { name: 'My Courses', id: 'courses', icon: FaBook },
                { name: 'Assignments', id: 'assignments', icon: FaClipboardList },
                { name: 'Notifications', id: 'notifications', icon: FaBell },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full px-4 py-3 text-left rounded-md transition-colors ${activeTab === item.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  <item.icon className="mr-3" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's your disaster management training overview.</p>
            </div>
            
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}