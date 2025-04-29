// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const Resource = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
  
//   const branch = queryParams.get("branch");
//   const year = queryParams.get("year");
//   const semester = queryParams.get("semester");

//   const [subjects, setSubjects] = useState([]);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchResources = async () => {
//       if (!branch || !year || !semester) {
//         setError("Missing required query parameters.");
//         return;
//       }

//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/files/search?branch=${branch}&year=${year}&semester=${semester}`
//         );
        
//         if (!response.ok) {
//           throw new Error("Failed to fetch resources.");
//         }

//         const data = await response.json();

//         if (data.success) {
//           setSubjects(data.data);
//           setError(null); // Reset error
//         } else {
//           setSubjects([]);
//           setError("No resources found.");
//         }
//       } catch (error) {
//         console.error("Error fetching resources:", error);
//         setError("An error occurred while fetching resources.");
//       }
//     };

//     fetchResources();
//   }, [branch, year, semester]);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-1/4 bg-white p-4 border-r">
//         <h2 className="text-xl font-bold mb-4">Subjects</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <ul>
//           {subjects.map((subject, index) => (
//             <li
//               key={index}
//               className={`p-2 rounded-md cursor-pointer hover:bg-blue-100 ${
//                 selectedSubject?.subject === subject.subject ? "bg-blue-300" : ""
//               }`}
//               onClick={() => setSelectedSubject(subject)}
//             >
//               {subject.subject}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {selectedSubject ? (
//           <>
//             <h2 className="text-2xl font-bold mb-4">{selectedSubject.subject}</h2>
//             <ul className="space-y-2">
//               {selectedSubject.files && selectedSubject.files.length > 0 ? (
//                 selectedSubject.files.map((file, index) => (
//                   <li
//                     key={index}
//                     className="p-2 bg-white rounded-md shadow-md hover:bg-gray-200 cursor-pointer"
//                   >
//                     📂 {file.title} -{" "}
//                     <a
//                       href={file.cloudinary_url}
//                       className="text-blue-500 underline"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Download
//                     </a>
//                   </li>
//                 ))
//               ) : (
//                 <p className="text-gray-500">No files available for this subject.</p>
//               )}
//             </ul>
//           </>
//         ) : (
//           <p className="text-gray-500">Select a subject to view resources.</p>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Resource;





// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { FaFilePdf } from "react-icons/fa";

// const Resource = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);

//   const branch = queryParams.get("branch");
//   const year = queryParams.get("year");
//   const semester = queryParams.get("semester");

//   const [subjects, setSubjects] = useState([]);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async (retryCount = 3) => {
//       if (!branch || !year || !semester) return;

//       setLoading(true);
//       setError("");

//       try {
//         console.log("Fetching with:", { branch, year, semester });

//         const response = await fetch(
//           `http://localhost:5000/api/files/search?branch=${encodeURIComponent(branch)}&year=${encodeURIComponent(year)}&semester=${encodeURIComponent(semester)}`
//         );

//         if (!response.ok) {
//           if (retryCount > 0) {
//             console.warn(`Retrying... (${3 - retryCount + 1})`);
//             return fetchData(retryCount - 1); // Retry the request
//           }
//           throw new Error(`HTTP Error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log("Fetched Data:", result);

//         setSubjects(result.success && result.data.length > 0 ? result.data : []);
//       } catch (err) {
//         console.error("Fetching error:", err.message);
//         setError("Failed to load resources. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [branch, year, semester]);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-1/4 bg-white p-4 border-r">
//         <h2 className="text-xl font-bold mb-4">Subjects</h2>
//         {loading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : subjects.length === 0 ? (
//           <p>No resources found.</p>
//         ) : (
//           <ul>
//             {subjects.map((subject, index) => (
//               <li
//                 key={index}
//                 className={`p-2 rounded-md cursor-pointer hover:bg-blue-100 ${
//                   selectedSubject?.title === subject.title ? "bg-blue-300" : ""
//                 }`}
//                 onClick={() => setSelectedSubject(subject)}
//               >
//                 {subject.title}
//               </li>
//             ))}
//           </ul>
//         )}
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {selectedSubject ? (
//           <>
//             <h2 className="text-2xl font-bold mb-4">{selectedSubject.title}</h2>
//             <p className="text-lg mb-4">
//               {selectedSubject.subject} - {selectedSubject.year} {selectedSubject.branch} {selectedSubject.semester}
//             </p>

//             {/* PDF Download Section */}
//             <div className="flex items-center space-x-3">
//               <a
//                 href={selectedSubject.cloudinary_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-red-500 text-3xl"
//               >
//                 <FaFilePdf />
//               </a>
//               <span>Click the icon to view/download the file</span>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-500">Select a subject to view resources.</p>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Resource;


/////////new schema
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaFilePdf, FaBook, FaFileAlt } from "react-icons/fa";

const Resource = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const branch = queryParams.get("branch");
  const year = queryParams.get("year");
  const semester = queryParams.get("semester");

  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedResourceType, setSelectedResourceType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!branch || !year || !semester) return;

      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `http://localhost:5000/api/files/search?branch=${encodeURIComponent(branch)}&year=${encodeURIComponent(year)}&semester=${encodeURIComponent(semester)}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success && Array.isArray(result.data)) {
          setSubjects(result.data);
        } else {
          setError("No resources found for the selected criteria.");
          setSubjects([]);
        }
      } catch (err) {
        console.error("Fetching error:", err.message);
        setError("Failed to load resources. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [branch, year, semester]);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedResourceType(null);
  };

  const renderResourceList = () => {
    if (!selectedSubject || !selectedResourceType) return null;

    const resources = selectedSubject.resources[selectedResourceType];
    return (
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-3 text-white">
          {selectedResourceType === 'lectures' ? 'Lecture Notes' : 'Previous Year Questions'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.cloudinary_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 shadow-lg rounded-lg flex items-center space-x-3 hover:bg-blue-100 transition-all"
            >
              <FaFilePdf className="text-red-500 text-2xl" />
              <span className="text-blue-600 font-medium">{resource.title}</span>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2036914.jpg')",
        backgroundSize: "100% 100%", // Adjusts image to fit the div
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",  // Sets the width to full viewport
        height: "100vh",
       }} // 🔹 Set your image path here
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/60 bg-opacity-50" ></div>

      <div className="relative flex flex-col lg:flex-row min-h-screen p-6">
        {/* Sidebar - Subject List */}
        <aside className="lg:w-1/3 bg-white p-6 shadow-md rounded-lg" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2036914.jpg')",
        
       }}>
          <h2 className="text-2xl font-bold mb-4">Subjects</h2>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : subjects.length === 0 ? (
            <p className="text-gray-500">No resources found for the selected criteria.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subjects.map((subject) => (
                <div
                  key={subject._id}
                  className={`p-4 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-all ${
                    selectedSubject?._id === subject._id ? "bg-blue-300 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => handleSubjectClick(subject)}
                >
                  <h3 className="font-semibold">{subject.title}</h3>
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="lg:flex-1 lg:ml-6 mt-6 lg:mt-0 bg-white p-6 shadow-md rounded-lg" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2036914.jpg')",
        
      }}>
          {selectedSubject ? (
            <>
              <h2 className="text-3xl font-bold mb-2">{selectedSubject.title}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {selectedSubject.year} - {selectedSubject.branch} - {selectedSubject.semester}
              </p>

              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setSelectedResourceType('lectures')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                    selectedResourceType === 'lectures'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  <FaBook />
                  <span>Lecture Notes</span>
                </button>
                <button
                  onClick={() => setSelectedResourceType('pyqs')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                    selectedResourceType === 'pyqs'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  <FaFileAlt />
                  <span>Previous Year Questions</span>
                </button>
              </div>

              {renderResourceList()}
            </>
          ) : (
            <p className="text-gray-500">Select a subject to view resources.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Resource;
