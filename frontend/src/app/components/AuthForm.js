'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaUserGraduate, FaChalkboardTeacher, FaGoogle } from 'react-icons/fa';

export default function AuthForm({ type }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [role, setRole] = useState('student'); // Default role

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let profilePicUrl = null;
    if (type === 'register' && profilePic) {
      profilePicUrl = await uploadProfilePic();
      if (!profilePicUrl) return; // Stop if upload failed
    }

    try {
      const response = await fetch(`/api/auth/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(type === 'register' ? { name, username, email, password, role, profilePic: profilePicUrl } : { email, password }),
      });

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }

      if (response.ok) {
        console.log(`${type} successful:`, data);
        // Redirect based on user role from response
        window.location.href = data.role === 'student' ? '/dashboard/student' : '/dashboard/teacher';
      } else {
        console.error(`${type} failed:`, data.message);
        // Show error message to user
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      // Show error message to user
    }
  };

  const uploadProfilePic = async () => {
    if (!profilePic) return null;

    const formData = new FormData();
    formData.append('profilePic', profilePic);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.text();
      return data;
    } catch (error) {
      console.error('Profile picture upload error:', error);
      alert('Profile picture upload failed.');
      return null;
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
          {type === 'login' ? 'Sign in to your account' : 'Create your account'}
        </h2>
        <p className="text-sm text-gray-700">
          {type === 'login' ? 'Enter your credentials to access your account' : 'Fill in the information to get started'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {type === 'register' && (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        )}
        
        {type === 'register' && (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        )}
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaLock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        {type === 'register' && (
          <div className="space-y-3">
            <div className="mb-2">
              <label htmlFor="profilePic" className="block text-gray-700 text-sm font-medium mb-2">Profile Picture</label>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  {profilePic ? (
                    <img 
                      src={URL.createObjectURL(profilePic)} 
                      alt="Profile preview" 
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <FaUser className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Choose File
                  <input
                    type="file"
                    id="profilePic"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                    className="sr-only"
                  />
                </label>
                <span className="ml-2 text-sm text-gray-700">
                  {profilePic ? profilePic.name : 'No file chosen'}
                </span>
              </div>
            </div>
            
            <div>
              <label htmlFor="role" className="block text-gray-700 text-sm font-medium mb-2">I am a</label>
              <div className="grid grid-cols-2 gap-3">
                <div 
                  className={`flex items-center justify-center p-3 border ${role === 'student' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded-lg cursor-pointer hover:bg-gray-50 transition-colors`}
                  onClick={() => setRole('student')}
                >
                  <FaUserGraduate className={`h-5 w-5 mr-2 ${role === 'student' ? 'text-blue-500' : 'text-gray-400'}`} />
                  <span className={`${role === 'student' ? 'font-medium text-blue-700' : 'text-gray-700'}`}>Student</span>
                </div>
                <div 
                  className={`flex items-center justify-center p-3 border ${role === 'teacher' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded-lg cursor-pointer hover:bg-gray-50 transition-colors`}
                  onClick={() => setRole('teacher')}
                >
                  <FaChalkboardTeacher className={`h-5 w-5 mr-2 ${role === 'teacher' ? 'text-blue-500' : 'text-gray-400'}`} />
                  <span className={`${role === 'teacher' ? 'font-medium text-blue-700' : 'text-gray-700'}`}>Teacher</span>
                </div>
              </div>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className="sr-only"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
          </div>
        )}
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-medium transition-colors duration-200 transform shadow-md hover:shadow-lg"
          >
            {type === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </div>
        
        {type === 'login' && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-blue-600 hover:text-blue-500 cursor-pointer">
              Forgot password?
            </div>
          </div>
        )}
      </form>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-700">Or continue with</span>
        </div>
      </div>
      
      <div>
        <a 
          href="/api/auth/google"
          className="w-full flex items-center justify-center py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
          Sign {type === 'login' ? 'in' : 'up'} with Google
        </a>
      </div>
      
      <div className="text-center text-sm text-gray-700">
        {type === 'login' ? (
          <p>
            Don't have an account?{' '}
            <a href="/register" className="font-medium text-blue-700 hover:text-blue-600">Sign up</a>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <a href="/login" className="font-medium text-blue-700 hover:text-blue-600">Sign in</a>
          </p>
        )}
      </div>
    </div>
  );
}