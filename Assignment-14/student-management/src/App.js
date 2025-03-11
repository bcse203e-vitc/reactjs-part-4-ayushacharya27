import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", age: 18, grade: "A", email: "john@example.com", phone: "123-456-7890", address: "New York" },
    { id: 2, name: "Jane Smith", age: 19, grade: "B", email: "jane@example.com", phone: "987-654-3210", address: "California" }
  ]);

  const addStudent = (student) => {
    setStudents([...students, { id: Date.now(), ...student }]);
  };

  return (
    <div>
      <h1>🎓 Student Management System</h1>
      <Routes>
        <Route path="/" element={<StudentList students={students} />} />
        <Route path="/add-student" element={<StudentForm addStudent={addStudent} />} />
        <Route path="/student/:id" element={<StudentDetails students={students} />} />
      </Routes>
    </div>
  );
};

export default App;
