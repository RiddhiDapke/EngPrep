// import React from 'react'

// import {Route,Routes, Navigate} from 'react-router-dom'


// import Resource from './Resource/Resource.jsx'
// import { data } from 'react-router-dom'
// import Home from './Home/Home.jsx'
// import Info from './Resource/Info.jsx'
// import FileFilter from './components/FileFilter.jsx'
// import { AuthProvider } from './auth/auth-provider.jsx'
// import Login from './auth/Login.jsx'
// import Register from './auth/Register.jsx'
// import ProtectedRoute from './auth/ProtectedRoute.jsx'
// import LandingPage from './components/LandingPage.jsx'
// // import Dashboard from './Dashboard/Dashboard.jsx'
// // import FileList from './FileList/FileList.jsx'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



// // import Info from './Resource/Info.jsx'

// const App = () => {
//   return (
//     <>
//      <ToastContainer position="top-right" autoClose={1000} />

//       <AuthProvider>
//       <Routes>
//         {/* <Route path ="/" element={<Navigate to="/login" />} /> */}
//         {/* <Route path="/" element={<LandingPage />} /> */}
//         <Route path="/" element={<Home />} />
//         <Route path="/Info" element={<Info/>}/>
//         <Route path="/Resource" element={<Resource/>}/>
//         <Route path="/files" element={<FileFilter/>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/protected" element={
//           <ProtectedRoute>
//             <Home/>
//           </ProtectedRoute>
//           } />
        

//       </Routes>
//       </AuthProvider>
//     </>
//   )
// }

// export default App


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/auth-provider';
import Login from './auth/Login';
import Register from './auth/Register';
import ProtectedRoute from './auth/ProtectedRoute';
// import Navbar from './component/Navbar';
import Resource from "./Resource/Resource";
import Home from "./Home/Home";
import Info from './Resource/Info';
import Navbar from './components/Navbar';







import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
     <ToastContainer position="top-right" autoClose={1000} />

    <AuthProvider>
      <Navbar />
      {/* <div className="pt-20">  */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/info" element={<Info />} />

          
          {/* Protected Routes */}
          <Route 
            path="/resource" 
            element={
              <ProtectedRoute>
                <Resource/>
              </ProtectedRoute>
            } 
          />

          {/* Redirect any unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      {/* </div> */}
    </AuthProvider>
    </>
   
  );
}

export default App;