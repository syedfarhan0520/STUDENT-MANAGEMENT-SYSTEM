import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent }) {
  return (
    <div className="list">
      {students.map((student) => (
        <StudentCard
          key={student.roll}
          student={student}
          deleteStudent={deleteStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;