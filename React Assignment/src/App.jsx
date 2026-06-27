import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    roll: "",
    name: "",
    marks: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.roll || !form.name || !form.marks) {
      setError("All fields are required!");
      return;
    }

    if (isNaN(form.marks)) {
      setError("Marks must be a number!");
      return;
    }

    setStudents([...students, form]);
    setForm({ roll: "", name: "", marks: "" });
    setError("");
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  return (
    <div className="container">
      <h1>🎓 Student Management System</h1>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="roll"
            placeholder="Roll Number"
            value={form.roll}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="marks"
            placeholder="Marks"
            value={form.marks}
            onChange={handleChange}
          />

          <button type="submit">Add Student</button>
        </form>

        {error && <p className="error">{error}</p>}
      </div>

      {students.length > 0 && (
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr key={index}>
                  <td>{s.roll}</td>
                  <td>{s.name}</td>
                  <td>{s.marks}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteStudent(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;