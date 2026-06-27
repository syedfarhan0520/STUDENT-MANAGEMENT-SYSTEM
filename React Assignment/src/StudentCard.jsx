import React from "react";

function StudentCard({ student, deleteStudent }) {
  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p>Roll No: {student.roll}</p>
      <p>Marks: {student.marks}</p>

      <button onClick={() => deleteStudent(student.roll)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;