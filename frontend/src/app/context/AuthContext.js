'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { validateToken, getApiBaseUrl, clearAuthState } from '../utils/auth';
import { useToast } from './ToastContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  // Load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login user
  const login = async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Login failed';
        toast.showErrorToast(errorMessage);
        throw new Error(errorMessage);
      }

      const data = await response.json();
      
      // Save user to state and localStorage
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      toast.showSuccessToast('Login successful');
      
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Register user
  const register = async (userData) => {
    try {
      const formData = new FormData();
      
      // Append all user data to formData
      Object.keys(userData).forEach(key => {
        formData.append(key, userData[key]);
      });
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (!response.ok) {
        // Handle specific error messages from the backend
        let errorMessage = data.message || 'Registration failed';
        if (data.message === 'User already exists') {
          errorMessage = 'A user with this email already exists';
        } else if (data.message === 'Username already exists') {
          errorMessage = 'This username is already taken';
        }
        toast.showErrorToast(errorMessage);
        throw new Error(errorMessage);
      }

      // Save user to state and localStorage
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      toast.showSuccessToast('Registration successful!');
      
      return data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  // Logout user
  const logout = () => {
    setUser(null);
    clearAuthState(); // Using clearAuthState from utils/auth.js
    toast.showInfoToast('You have been logged out');
    window.location.href = '/';
  };

  // Using getApiBaseUrl from utils/auth.js

  // Check if token is expired and needs refresh
  const checkTokenValidity = (token) => {
    if (!token) return false;
    
    try {
      const validation = validateToken(token);
      console.log('Token validation result:', validation);
      return validation.valid;
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  };

  // Refresh the authentication token
  const refreshToken = async () => {
    try {
      if (!user || !user.token) {
        console.error('No user or refresh token available');
        return false;
      }

      console.log('Attempting to refresh token...');
      const response = await fetch(`${getApiBaseUrl()}/api/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: user.token }),
        credentials: 'include',
      });

      if (!response.ok) {
        console.error('Token refresh failed:', response.status);
        // If refresh fails, log out the user
        setUser(null);
        clearAuthState();
        return false;
      }

      const data = await response.json();
      
      // Update user with new token
      const updatedUser = { ...user, token: data.token };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      console.log('Token refreshed successfully');
      return true;
    } catch (error) {
      console.error('Error refreshing token:', error);
      return false;
    }
  };

  // Get current user profile with improved error handling and token management
  const getUserProfile = async () => {
    try {
      // Check if user is authenticated
      if (!user || !user.token) {
        console.error('No authentication token available');
        toast.showErrorToast('You need to log in first');
        return null; // Return null instead of throwing to prevent app crash
      }

      // Log token for debugging (first 10 chars only for security)
      const tokenPreview = user.token.substring(0, 10) + '...';
      console.log(`Fetching profile with token: ${tokenPreview}`);
      
      try {
        // Check if token is valid before making the request
        if (!checkTokenValidity(user.token)) {
          console.log('Token appears to be expired, attempting refresh...');
          const refreshed = await refreshToken();
          if (!refreshed) {
            console.error('Token refresh failed, redirecting to login');
            toast.showWarningToast('Your session has expired. Please log in again.');
            setUser(null);
            clearAuthState();
            return null;
          }
        }
      } catch (validationError) {
        console.error('Token validation failed:', validationError.message || validationError);
        // If token validation fails completely, try to refresh
        const refreshed = await refreshToken();
        if (!refreshed) {
          toast.showWarningToast('Authentication error. Please log in again.');
          setUser(null);
          clearAuthState();
          return null;
        }
      }

      // Determine API URL
      const apiUrl = `${getApiBaseUrl()}/api/users/profile`;
      console.log(`Making request to: ${apiUrl}`);
      
      let response;
      try {
        response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          // Prevent caching to always get fresh data
          cache: 'no-store',
          // Add credentials for cookie-based auth if needed
          credentials: 'include'
        });
      } catch (fetchError) {
        // Handle network errors (offline, DNS failure, etc)
        const errorMessage = fetchError.message || 'Network connection error';
        console.error('Network error during profile fetch:', errorMessage);
        toast.showErrorToast('Unable to connect to the server. Please check your internet connection.');
        return null;
      }

      // Handle different response statuses
      if (!response.ok) {
        // Log detailed response information for debugging
        const errorDetails = {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
          headers: Object.fromEntries([...response.headers.entries()])
        };
        console.error('Profile fetch failed with details:', errorDetails);
        
        // Handle authentication errors
        if (response.status === 401) {
          console.error('Unauthorized: Token rejected by server');
          toast.showWarningToast('Your session has expired. Please log in again.');
          // Try to refresh token once
          const refreshed = await refreshToken();
          if (!refreshed) {
            // Clear user data if unauthorized and refresh failed
            setUser(null);
            clearAuthState();
            return null;
          }
          // Retry with new token (but only once to prevent infinite loops)
          return getUserProfile();
        }
        
        // Try to get error details from response
        let errorMessage = `Failed to fetch user profile: ${response.status} ${response.statusText}`;
        let errorData = {};
        try {
          errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
          console.error('Server error response:', errorData);
        } catch (e) {
          // If parsing JSON fails, use default error message
          console.error('Could not parse error response:', e.message);
        }
        
        // Show user-friendly error message based on status code
        if (response.status === 403) {
          toast.showErrorToast('You don\'t have permission to access this resource.');
        } else if (response.status === 404) {
          toast.showErrorToast('Your profile information could not be found.');
        } else if (response.status >= 500) {
          toast.showErrorToast('The server encountered an error. Please try again later.');
        } else {
          toast.showErrorToast('Failed to load your profile. Please try again.');
        }
        
        // For other error codes, return null instead of throwing
        return null;
      }

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        console.error('Error parsing profile response:', parseError.message);
        toast.showErrorToast('There was a problem processing the server response.');
        return null;
      }
      
      if (!data) {
        console.error('Profile data is empty or invalid');
        toast.showErrorToast('Your profile information appears to be incomplete.');
        return null;
      }
      
      console.log('Profile fetched successfully:', data.name || data.email || 'Unknown user');
      
      // Update user in state and localStorage with latest data
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return data;
    } catch (error) {
      // Log detailed error information
      console.error('Get profile error:', {
        message: error.message || 'Unknown error',
        stack: error.stack,
        name: error.name,
        code: error.code
      });
      
      // Show a generic error message to the user
      toast.showErrorToast('An unexpected error occurred while loading your profile.');
      
      // Return null instead of throwing to prevent app crash
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        getUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};