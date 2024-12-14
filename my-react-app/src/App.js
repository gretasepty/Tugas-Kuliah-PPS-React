// src/App.js
import React from "react";
import StudentEntryForm from "./StudentEntryForm";
import StudentList from "./StudentList";

function App() {
  return (
    <div className="App">
      <h1>Student Entry Application</h1>
      <StudentEntryForm />
      <hr/>
      <StudentList />
    </div>
  );
}

export default App; 

