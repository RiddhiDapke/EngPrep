import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/auth-provider';

const LandingPage = () => {
  const navigate = useNavigate();
  const { setRole } = useAuth();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-amber-200">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2036914.jpg')" }}
      ></div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0"></div>

      {/* Content Box */}
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Select Login Type</h1>
        
        <button 
          onClick={() => navigate('/home')} 
          className="bg-green-500 text-white px-6 py-3 rounded-lg mb-4 w-full hover:bg-green-600 transition"
        >
          Login as User
        </button>
        
        <button 
          onClick={() => navigate('/home')} 
          className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
