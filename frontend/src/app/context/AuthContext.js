'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      
      // Save user to state and localStorage
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      
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
        if (data.message === 'User already exists') {
          throw new Error('A user with this email already exists');
        } else if (data.message === 'Username already exists') {
          throw new Error('This username is already taken');
        } else {
          throw new Error(data.message || 'Registration failed');
        }
      }

      // Save user to state and localStorage
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      
      return data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  // Logout user
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  // Get current user profile
  const getUserProfile = async () => {
    try {
      if (!user || !user.token) {
        throw new Error('Not authenticated');
      }

      const response = await fetch('/api/users/profile', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        // Add cache: 'no-store' to prevent caching issues
        cache: 'no-store'
      });

      if (!response.ok) {
        // If token is expired or invalid, clear user data and redirect to login
        if (response.status === 401) {
          console.error('Authentication token expired or invalid');
          // Clear user data but don't redirect yet (let the component handle it)
          setUser(null);
          localStorage.removeItem('user');
          throw new Error('Not authenticated');
        }
        throw new Error('Failed to fetch user profile');
      }

      const data = await response.json();
      
      // Update user in state and localStorage with latest data
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return data;
    } catch (error) {
      console.error('Get profile error:', error);
      throw error;
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