// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify'; // Import Toast notifications

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const API_BASE_URL = "http://localhost:5000/api/auth"; // Backend URL

//   // Load user data from API or local storage
//   const loadUserData = async () => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}/me`, { withCredentials: true });
//       if (res.data.success) {
//         setUser(res.data.data);
//         localStorage.setItem('user', JSON.stringify(res.data.data));
//       } else {
//         setUser(null);
//         localStorage.removeItem('user');
//       }
//     } catch (error) {
//       setUser(null);
//       localStorage.removeItem('user');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     } else {
//       loadUserData();
//     }
//     setLoading(false);
//   }, []);

//   const register = async (userData) => {
//     try {
//       const res = await axios.post(`${API_BASE_URL}/register`, userData, { withCredentials: true });
//       if (res.data.success) {
//         await loadUserData();
//         toast.success("Registration successful! 🎉");
//         return { success: true };
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data?.error || 'Registration failed';
//       toast.error(errorMessage);
//       return { success: false, error: errorMessage };
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const res = await axios.post(`${API_BASE_URL}/login`, { email, password }, { withCredentials: true });
//       if (res.data.success) {
//         await loadUserData();
//         toast.success("Logged in successfully! ✅");
//         return { success: true };
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data?.error || 'Authentication failed';
//       toast.error(errorMessage);
//       return { success: false, error: errorMessage };
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.get(`${API_BASE_URL}/logout`, { withCredentials: true });
//       setUser(null);
//       localStorage.removeItem('user');
//       toast.info("Logged out successfully! 👋");
//       return { success: true };
//     } catch (error) {
//       const errorMessage = error.response?.data?.error || 'Logout failed';
//       toast.error(errorMessage);
//       return { success: false, error: errorMessage };
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, register, login, logout, isAuthenticated: !!user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import Toast notifications

const AuthContext = createContext(null);



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = "http://localhost:5000/api/auth"; // Backend URL

  // Load user data from API or local storage
  const loadUserData = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/me`, { withCredentials: true });
      if (res.data.success) {
        setUser(res.data.data);
        localStorage.setItem('user', JSON.stringify(res.data.data));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    } catch (error) {
      setUser(null);
      localStorage.removeItem('user');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      loadUserData();
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/register`, userData, { withCredentials: true });
      if (res.data.success) {
        await loadUserData();
        toast.success("Registration successful! 🎉");
        return { success: true };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Registration failed';
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/login`, { email, password }, { withCredentials: true });
      if (res.data.success) {
        await loadUserData();
        toast.success("Logged in successfully! ✅");
        return { success: true };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Authentication failed';
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${API_BASE_URL}/logout`, { withCredentials: true });
      setUser(null);
      localStorage.removeItem('user');
      toast.info("Logged out successfully! 👋");
      return { success: true };
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Logout failed';
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);