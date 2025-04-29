// 


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileList from './FileList.jsx'; // Import FileList

const FileFilter = () => {
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [sem, setSem] = useState('');
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

  // Handle search button click
  const handleSearch = () => {
    if (!branch || !year || !sem || !subject) {
      alert("Please select all filters.");
      return;
    }

    // Redirect with query params
    navigate(`/Resource?branch=${branch}&year=${year}&semester=${sem}&subject=${subject}`);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-3">Filter Files</h2>

      {/* Branch Dropdown */}
      <select value={branch} onChange={(e) => setBranch(e.target.value)} className="p-2 border rounded w-full mb-2">
        <option value="">Select Branch</option>
        <option value="extc">Electronics & Telecommunication</option>
        <option value="comps">Computer Engineering</option>
        <option value="it">Information Technology</option>
      </select>

      {/* Year Dropdown */}
      <select value={year} onChange={(e) => setYear(e.target.value)} className="p-2 border rounded w-full mb-2">
        <option value="">Select Year</option>
        <option value="1st">1st Year</option>
        <option value="2nd">2nd Year</option>
        <option value="3rd">3rd Year</option>
      </select>

      {/* Semester Dropdown */}
      <select value={sem} onChange={(e) => setSem(e.target.value)} className="p-2 border rounded w-full mb-2">
        <option value="">Select Semester</option>
        <option value="sem1">Semester 1</option>
        <option value="sem2">Semester 2</option>
        <option value="sem3">Semester 3</option>
        <option value="sem4">Semester 4</option>
        <option value="sem5">Semester 5</option>
        <option value="sem6">Semester 6</option>
        <option value="sem7">Semester 7</option>
        <option value="sem8">Semester 8</option>
      </select>

      {/* Subject Input */}
      <input
        type="text"
        placeholder="Enter Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />

      {/* Search Button */}
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Search
      </button>

      {/* Pass Filters to FileList */}
      <FileList branch={branch} year={year} sem={sem} subject={subject} />
    </div>
  );
};

export default FileFilter;
