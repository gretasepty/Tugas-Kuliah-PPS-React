// src/StudentEntryForm.js
import React, { useState } from "react";
import axios from "axios";

function StudentEntryForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("photo", photo);

    try {
      const response = await axios.post("http://localhost:5000/add-student", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(response.data.message);
      setName("");
      setAddress("");
      setPhoto(null);
    } catch (error) {
      console.error("Error uploading student data", error);
      setMessage("Error adding student");
    }
  };

  return (
    <div>
      <h2>Student Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Photo:</label>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default StudentEntryForm;

