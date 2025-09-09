'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '@/app/context/ToastContext';

export default function AuthSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = useToast();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Display a message to the user immediately
  useEffect(() => {
    toast.showSuccessToast('Login successful! Redirecting to dashboard...');
  }, [toast]);

  useEffect(() => {
    const token = searchParams.get('token');
    const userId = searchParams.get('userId');

    console.log('Auth Success Page - Token:', token ? 'Present' : 'Missing');
    console.log('Auth Success Page - UserId:', userId ? 'Present' : 'Missing');

    if (token && userId) {
      // Fetch user data to get role and other information
      const apiUrl = 'http://localhost:5000/api/users/profile';
      console.log('Fetching user profile from:', apiUrl);
      
      fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log('Profile API Response Status:', response.status);
          if (!response.ok) {
            throw new Error(`Failed to fetch user profile: ${response.status}`);
          }
          return response.json();
        })
        .then(userData => {
          console.log('User data received:', userData);
          // Create user object with token and user data
          const user = {
            _id: userId,
            name: userData.name,
            email: userData.email,
            role: userData.role || 'student', // Default to student if role is missing
            token: token
          };

          console.log('Saving user to localStorage:', user);
          // Save user to localStorage
          localStorage.setItem('user', JSON.stringify(user));
          
          // Show success message
          toast.showSuccessToast('Successfully logged in with Google!');
          setLoading(false);
          
          // Redirect based on user role
          const redirectPath = userData.role === 'teacher' ? '/dashboard/teacher' : '/dashboard/student';
          console.log('Redirecting to:', redirectPath);
          
          // Add a small delay before redirecting to ensure localStorage is updated
          setTimeout(() => {
            router.push(redirectPath);
          }, 1000);
        })
        .catch(error => {
          console.error('Error during Google auth success:', error);
          setError(error.message);
          setLoading(false);
          toast.showErrorToast(`Authentication error: ${error.message}`);
          setTimeout(() => {
            router.push('/login');
          }, 3000);
        });
    } else {
      setError('Missing token or user ID');
      setLoading(false);
      toast.showErrorToast('Authentication failed. Missing token or user ID.');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }
  }, [searchParams, router, toast]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {error ? 'Authentication Error' : 'Completing login...'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {error 
              ? `Error: ${error}. Redirecting to login page...` 
              : 'Please wait while we redirect you to your dashboard.'}
          </p>
          {/* Debug info - only visible during development */}
          <div className="mt-4 p-4 bg-gray-100 rounded text-left text-xs">
            <p>Debug Info:</p>
            <p>Token: {searchParams.get('token') ? 'Present' : 'Missing'}</p>
            <p>User ID: {searchParams.get('userId') ? 'Present' : 'Missing'}</p>
            <p>Current URL: {typeof window !== 'undefined' ? window.location.href : 'N/A'}</p>
          </div>
        </div>
        <div className="flex justify-center">
          {loading ? (
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          ) : error ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}