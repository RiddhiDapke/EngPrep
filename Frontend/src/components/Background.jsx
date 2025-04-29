import React from 'react'
// import Info from './Info.jsx';
import { useNavigate } from 'react-router-dom';
const Background = () => {
  const navigate = useNavigate();
    return (
      <div className="relative w-full h-screen">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center " 
          // style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2036914.jpg')" }} 
          style={{ 
            backgroundImage: "url('https://wallpapercave.com/wp/wp2036914.jpg')",
             // Moves image slightly to the right
          }} 
        ></div>
  
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>
  
        {/* Content on top of the background */}
        <div className="relative flex items-center py-65 px-12">
          <h1 className="text-white text-5xl font-bold">Exclusive College Resources <br/> & Premium Books - 100% Free!</h1>
          
        </div>
        <div className='text-white relative px-12 -mt-60 font-bold'>
          <p>
          Access a curated collection of top-tier academic materials, textbooks, and study guides—all for free! 
          <br />
          Elevate your learning experience with high-quality resources designed to help you excel in your studies. 
          <br />
          No hidden fees, no barriers—just pure knowledge at your fingertips.
          </p>
        </div>
        <button className='relative text-brown btn px-12 mx-12 mt-4 hover:bg-yellow-500' onClick={()=> navigate('/Info')}>
          Get Started
        </button>
      </div>
    );
  };
  
  export default Background;


//upload
