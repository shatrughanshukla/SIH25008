'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { FaBook, FaCalendarAlt, FaClipboardList, FaBell, FaUserCircle } from 'react-icons/fa';
import AuthDiagnosticTool from '@/app/components/AuthDiagnosticTool';

export default function StudentDashboard() {
  const { user, loading, getUserProfile, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  
useEffect(() => {
  // If not loading and no user, redirect to login
  if (!loading && !user) {
    console.log('No user detected, redirecting to login');
    router.push('/login');
    return; // Early return prevents further execution
  }
  
  // If user exists, get the latest profile data
  if (user) {
    let isMounted = true; // Flag to track component mount state
    
    // Set loading state before API call
    setIsLoading(true);
    
    // Add a small delay to prevent rapid consecutive calls
    const timeoutId = setTimeout(async () => {
      try {
        // Get user profile data with allowRetry=false to prevent infinite loops
        const profileData = await getUserProfile(false);
        
        // If component unmounted during the API call, don't update state
        if (!isMounted) {
          console.log('Component unmounted, skipping state updates');
          return;
        }
        
        console.log('Profile loaded successfully');
        setIsLoading(false);
        
        // If profile data is null, redirect to login
        if (!profileData) {
          console.log('No profile data returned, redirecting to login');
          router.push('/login');
          return;
        }
        
        // Verify user role is student, redirect otherwise
        if (profileData.role !== 'student') {
          console.log('User is not a student, redirecting');
          router.push(`/dashboard/${profileData.role}`);
          return;
        }
      } catch (error) {
        // Only update state and redirect if component is still mounted
        if (isMounted) {
          console.error('Error fetching user profile:', error);
          setIsLoading(false);
          router.push('/login');
        }
      }
    }, 300);
    
    // Cleanup function to handle unmounting
    return () => {
      console.log('Dashboard useEffect cleanup - preventing state updates after unmount');
      clearTimeout(timeoutId);
      isMounted = false;
    };
  } else {
    setIsLoading(false);
  }
}, [loading, user, router]); // getUserProfile is intentionally excluded from dependencies to prevent infinite loops
  
  // Show loading spinner when fetching profile
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600 text-lg">Loading student dashboard...</p>
      </div>
    );
  }

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6 w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md border border-blue-200 transform transition-transform hover:scale-105">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-4 mr-4 shadow-md">
                    <FaBook className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Courses</h3>
                    <p className="text-3xl font-bold text-blue-600">4</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md border border-green-200 transform transition-transform hover:scale-105">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-4 mr-4 shadow-md">
                    <FaClipboardList className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Assignments</h3>
                    <p className="text-3xl font-bold text-green-600">7</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md border border-purple-200 transform transition-transform hover:scale-105">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-4 mr-4 shadow-md">
                    <FaCalendarAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Upcoming Events</h3>
                    <p className="text-3xl font-bold text-purple-600">2</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Recent Activities</h3>
            <div className="space-y-4">
              {[
                { title: 'Earthquake Safety Module Completed', time: '2 hours ago', icon: FaBook, color: 'blue' },
                { title: 'Assignment Submitted: Flood Prevention', time: 'Yesterday', icon: FaClipboardList, color: 'green' },
                { title: 'Mock Drill Scheduled', time: '3 days ago', icon: FaCalendarAlt, color: 'purple' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md border-l-4 border-${activity.color}-500 hover:bg-${activity.color}-50 transition-colors">
                  <div className={`bg-${activity.color}-100 p-3 rounded-full mr-4`}>
                    <activity.icon className={`text-${activity.color}-500`} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{activity.title}</p>
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
            <p className="text-gray-700">Your enrolled courses will appear here.</p>
          </div>
        );
      case 'assignments':
        return (
          <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Assignments</h2>
            <p className="text-gray-700">Your assignments will appear here.</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Notifications</h2>
            <p className="text-gray-600">Your notifications will appear here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-700 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with welcome banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user?.name || 'Student'}!</h1>
              <p className="mt-2 text-blue-100">Your disaster management training dashboard</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              {user?.profilePic ? (
                <img 
                  src={user.profilePic} 
                  alt="Profile" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow" 
                />
              ) : (
                <img 
                  src="/uploads/default.png" 
                  alt="Default Profile" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow" 
                />
              )}
              <div className="ml-4">
                <p className="font-medium">{user?.username || 'student@example.com'}</p>
                <p className="text-sm text-blue-200">Student</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-xl shadow-lg p-5 h-fit">
            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Navigation</h2>
            <nav className="space-y-2">
              {[
                { name: 'Overview', id: 'overview', icon: FaBook },
                { name: 'My Courses', id: 'courses', icon: FaBook },
                { name: 'Assignments', id: 'assignments', icon: FaClipboardList },
                { name: 'Notifications', id: 'notifications', icon: FaBell },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-all ${activeTab === item.id 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' 
                    : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  <item.icon className={`mr-3 ${activeTab === item.id ? 'text-white' : 'text-blue-500'}`} />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
              
              {/* Profile and Logout */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <button
                  onClick={() => router.push('/profile')}
                  className="flex items-center w-full px-4 py-3 text-left rounded-lg hover:bg-gray-100 text-gray-700 transition-all"
                >
                  <FaUserCircle className="mr-3 text-blue-500" />
                  <span className="font-medium">My Profile</span>
                </button>
                
                <button
                  onClick={logout}
                  className="flex items-center w-full px-4 py-3 text-left rounded-lg hover:bg-red-50 text-red-600 transition-all mt-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
      
      {/* Add the diagnostic tool for debugging authentication issues */}
      <AuthDiagnosticTool />
    </div>
  );
}