'use client';

import { useState } from 'react';
import { useToast } from '../context/ToastContext';

export default function TestToastPage() {
  const toast = useToast();
  const [message, setMessage] = useState('');
  
  const showToast = (type) => {
    const toastMessage = message || `This is a ${type} toast notification`;
    
    switch(type) {
      case 'success':
        toast.showSuccessToast(toastMessage);
        break;
      case 'error':
        toast.showErrorToast(toastMessage);
        break;
      case 'warning':
        toast.showWarningToast(toastMessage);
        break;
      case 'info':
        toast.showInfoToast(toastMessage);
        break;
      default:
        toast.showToast(toastMessage);
    }
  };
  
  const simulateAuthError = () => {
    toast.showErrorToast('Profile fetch failed: Unauthorized. Token rejected by server.');
  };
  
  const simulateNetworkError = () => {
    toast.showErrorToast('Unable to connect to the server. Please check your internet connection.');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Toast Notification Test</h1>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Custom Message
          </label>
          <input
            type="text"
            id="message"
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
            placeholder="Enter a custom message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => showToast('success')}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Success Toast
          </button>
          
          <button
            onClick={() => showToast('error')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Error Toast
          </button>
          
          <button
            onClick={() => showToast('warning')}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Warning Toast
          </button>
          
          <button
            onClick={() => showToast('info')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Info Toast
          </button>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Simulate Auth Errors</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={simulateAuthError}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Auth Error
            </button>
            
            <button
              onClick={simulateNetworkError}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Network Error
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}