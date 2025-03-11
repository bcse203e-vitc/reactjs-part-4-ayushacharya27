import React from "react";
import { Link } from "react-router-dom";

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> (Age: {student.age}, Grade: {student.grade})
            <Link to={`/student/${student.id}`}> View Details </Link>
          </li>
        ))}
      </ul>
      <Link to="/add-student">
        <button>Add New Student</button>
      </Link>
    </div>
  );
};

export default StudentList;
