// src/StudentList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fungsi untuk mengambil data mahasiswa dari server
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <h3>{student.name}</h3>
            <p>Address: {student.address}</p>
            {student.photo && (
              <img
                src={`http://localhost:5000/${student.photo}`}
                alt={student.name}
                style={{ width: "100px", height: "100px" }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;

