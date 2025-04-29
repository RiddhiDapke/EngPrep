import React, { useState } from "react";

const UploadForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    year: "",
    branch: "",
    semester: "",
    resourceType: "lectures",
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) {
      alert("Please select a file.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("year", formData.year);
    formDataToSend.append("branch", formData.branch);
    formDataToSend.append("semester", formData.semester);
    formDataToSend.append("resourceType", formData.resourceType);
    formDataToSend.append("file", formData.file);

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        alert("File uploaded successfully!");
        closeModal();
      } else {
        alert("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold">Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded-md" required />
      </div>

      <div>
        <label className="block font-semibold">Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-2 border rounded-md" required />
      </div>

      <div>
        <label className="block font-semibold">Year</label>
        <select name="year" value={formData.year} onChange={handleChange} className="w-full p-2 border rounded-md" required>
          <option value="">Select Year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold">Branch</label>
        <input type="text" name="branch" value={formData.branch} onChange={handleChange} className="w-full p-2 border rounded-md" required />
      </div>

      <div>
        <label className="block font-semibold">Semester</label>
        <select name="semester" value={formData.semester} onChange={handleChange} className="w-full p-2 border rounded-md" required>
          <option value="">Select Semester</option>
          <option value="Semester 1">Semester 1</option>
          <option value="Semester 2">Semester 2</option>
          <option value="Semester 3">Semester 3</option>
          <option value="Semester 4">Semester 4</option>
          <option value="Semester 5">Semester 5</option>
          <option value="Semester 6">Semester 6</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold">Resource Type</label>
        <select name="resourceType" value={formData.resourceType} onChange={handleChange} className="w-full p-2 border rounded-md" required>
          <option value="lectures">Lecture Notes</option>
          <option value="pyqs">Previous Year Questions</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold">Upload File</label>
        <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded-md" required />
      </div>

      <div className="flex justify-between">
        <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={closeModal}>
          Cancel
        </button>
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
          Upload
        </button>
      </div>
    </form>
  );
};

export default UploadForm;
