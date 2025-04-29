// 


import React, { useEffect, useState } from 'react';

const FileList = ({ branch, year, sem, subject }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      if (!branch || !year || !sem || !subject) return; // Prevent unnecessary API calls

      try {
        const response = await fetch(
          `http://localhost:5000/api/files/search?branch=${encodeURIComponent(branch)}&year=${encodeURIComponent(year)}&semester=${encodeURIComponent(sem)}&subject=${encodeURIComponent(subject)}`
        );
        const data = await response.json();
        if (data.success) {
          setFiles(data.data);
        } else {
          // setFiles([]); // No files found
          setFiles(data.success ? data.data : []); // ✅ Handles 'no files found' properly
        }
      } catch (error) {
        console.error("Error fetching files:", error);
        setFiles([]);
      }
    };

    fetchFiles();
  }, [branch, year, sem, subject]);

  return (
    <div>
      <h2>Uploaded Files</h2>
      {files.length === 0 ? (
        <p>No files available for the selected filters.</p>
      ) : (
        files.map((file, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h4>{file.title}</h4>
            <embed 
              src={file.cloudinary_url}  
              type="application/pdf" 
              width="100%" 
              height="600px" 
              alt="File preview" 
            />
            <p>
              <a href={file.cloudinary_url} target="_blank" rel="noopener noreferrer">
                View {file.title} in full
              </a>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default FileList;
