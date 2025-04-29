import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [sem, setSem] = useState('');
  const [subject, setSubject] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('branch', branch);
    formData.append('year', year);
    formData.append('sem', sem);
    formData.append('subject', subject);

    const response = await fetch('http://localhost:5173/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    alert(`File uploaded: ${data.url}`);
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input type="text" placeholder="Branch" onChange={(e) => setBranch(e.target.value)} />
      <input type="text" placeholder="Year" onChange={(e) => setYear(e.target.value)} />
      <input type="text" placeholder="Semester" onChange={(e) => setSem(e.target.value)} />
      <input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadForm;