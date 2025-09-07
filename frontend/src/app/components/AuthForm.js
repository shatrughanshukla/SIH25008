'use client';

import { useState } from 'react';

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

      const data = await response.json();

      if (response.ok) {
        console.log(`${type} successful:`, data);
        // Redirect to dashboard based on role or show success message
        if (data.role === 'student') {
          window.location.href = '/dashboard/student';
        } else if (data.role === 'teacher') {
          window.location.href = '/dashboard/teacher';
        }
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
    <form onSubmit={handleSubmit}>
      {type === 'register' && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}
      {type === 'register' && (
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {type === 'register' && (
        <div className="mb-4">
          <label htmlFor="profilePic" className="block text-gray-700 text-sm font-bold mb-2">Profile Picture:</label>
          <input
            type="file"
            id="profilePic"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {type === 'register' && (
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      )}
            <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-bold"
      >
        {type === 'login' ? 'Login' : 'Register'}
      </button>
          <div className="mt-6 text-center text-gray-600">
        {type === 'login' ? (
          <p>
            Don't have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline">Register here</a>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">Login here</a>
          </p>
        )}
        <p className="mt-2">
          <a href="/api/auth/google" className="text-red-600 hover:underline">Login with Google</a>
        </p>
      </div>
    </form>
  );
}