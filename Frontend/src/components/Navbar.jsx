// import React from 'react';
// import { Home, BookOpen, MessageCircle, Info, LogIn, LogOut } from 'lucide-react';
// import { useNavigate } from "react-router-dom";
// import { useAuth } from '../auth/auth-provider';

// function Navbar() {
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();
  
//   const handleLogout = async () => {
//     await logout();
//     // alert("Logged out successfully")
//     navigate('/');
//   };

//   const navItems = (
//     <div className="flex text-lg gap-6">
//       <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
//         <a href="/" className="flex items-center gap-1">
//           <Home size={18} />
//           <span>Home</span>
//         </a>
//       </li>
//       <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
//         <a href="/info" className="flex items-center gap-1">
//           <BookOpen size={18} />
//           <span>Resource</span>
//         </a>
//       </li>
//       <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
//         <a className="flex items-center gap-1">
//           <MessageCircle size={18} />
//           <span>Contact</span>
//         </a>
//       </li>
//       <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
//         <a className="flex items-center gap-1">
//           <Info size={18} />
//           <span>About</span>
//         </a>
//       </li>
//     </div>
//   );

//   return (
//     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50">
//       <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/5 backdrop-blur-sm -z-10 rounded-b-lg"></div>

//       <div className="navbar bg-transparent shadow-none text-white text-3xl ">
//         <div className="navbar-start">
//           <a className="btn btn-ghost bg-transparent text-4xl shadow-none border-none group flex items-center gap-2">
//             <span className="text-blue-500 font-bold transition-all duration-300 group-hover:text-white group-hover:scale-105">
//               Eng
//             </span>
//             <span className="font-bold transition-all duration-300 group-hover:text-blue-500 group-hover:scale-105">
//               Prep
//             </span>
//           </a>
//         </div>

//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navItems}</ul>
//         </div>

//         <div className="navbar-end">
//           {user ? (
//             <button 
//               onClick={handleLogout} 
//               className="btn bg-red-600 text-white border-none hover:bg-red-500 transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer">
//               <LogOut size={18} />
//               <span>Logout</span>
//             </button>
//           ) : (
//             <button 
//               onClick={() => navigate('/login')} 
//               className="btn bg-blue-700 text-white border-none hover:bg-blue-600 transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer">
//               <LogIn size={18} />
//               <span>Login</span>
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



import React from 'react';
import { Home, BookOpen, MessageCircle, Info, LogIn, LogOut, User } from 'lucide-react';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from '../auth/auth-provider';

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  // Public navigation items - available to all users
  const publicNavItems = (
    <div className="flex text-lg gap-6">
      <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
        <Link to="/" className="flex items-center gap-1">
          <Home size={18} />
          <span>Home</span>
        </Link>
      </li>

      <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
        <Link to="/login" className="flex items-center gap-1">
          <BookOpen size={18} />
          <span >Resources</span>
        </Link>
      </li>
      <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
        <Link to="/login" className="flex items-center gap-1">
          <User size={18} />
          <span>Profile</span>
        </Link>
      </li>
      
      <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
        <Link to="/about" className="flex items-center gap-1">
          <Info size={18} />
          <span>About</span>
        </Link>
      </li>
     
    </div>
  );

  // Protected navigation items - only for authenticated users
  const protectedNavItems = (
    <div className="flex text-lg gap-6">
      <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
        <Link to="/" className="flex items-center gap-1">
          <Home size={18} />
          <span>Home</span>
        </Link>
      </li>
      <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
        <Link to="/info" className="flex items-center gap-1">
          <BookOpen size={18} />
          <span >Resources</span>
        </Link>
      </li>
      {/* <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
        <Link to="/contact" className="flex items-center gap-1">
          <MessageCircle size={18} />
          <span>Contact</span>
        </Link>
      </li> */}
      <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
        <Link to="/about" className="flex items-center gap-1">
          <Info size={18} />
          <span>About</span>
        </Link>
      </li>
      <li className="transition-all duration-300 hover:scale-110 hover:text-blue-400 flex items-center">
        <Link to="/profile" className="flex items-center gap-1">
          <User size={18} />
          <span>Profile</span>
        </Link>
      </li>
    </div>
  );

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/5 backdrop-blur-sm -z-10 rounded-b-lg"></div>

      <div className="navbar bg-transparent shadow-none text-white text-3xl ">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost bg-transparent text-4xl shadow-none border-none group flex items-center gap-2">
            <span className="text-blue-500 font-bold transition-all duration-300 group-hover:text-white group-hover:scale-105">
              Eng
            </span>
            <span className="font-bold transition-all duration-300 group-hover:text-blue-500 group-hover:scale-105">
              Prep
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user ? protectedNavItems : publicNavItems}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-10 font-semibold">
              <span className="text-sm hidden md:block">Welcome, {user.username}</span>
              <button 
                onClick={handleLogout} 
                className="btn bg-red-600 text-white border-none hover:bg-red-500 transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer">
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/login')} 
              className="btn bg-blue-700 text-white border-none hover:bg-blue-600 transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer">
              <LogIn size={18} />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;