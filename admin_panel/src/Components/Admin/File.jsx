import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";

export default function File() {
    const navigate = useNavigate();
  const { files, setFiles } = useContext(AppContext);

  const handleDelete = (id) => {
    setFiles(files.filter((f) => f.id !== id));
  };

  return (
    <>
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "15px",
          backgroundColor: "#f0f0f0",
          borderBottom: "2px solid #ccc",
          marginBottom: "30px",
        }}
      >
        <button onClick={() => navigate("/admin")}>🏠 Home</button>
        <button onClick={() => navigate("/people")}>👥 People</button>
        <button onClick={() => navigate("/file")}>📂 File</button>
      </div>
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>📂 Files List</h2>
      <ul style={{ listStyle: "none" }}>
        {files.map((file) => (
          <li key={file.id} style={{ margin: "10px 0" }}>
            {file.filename}
            <button
              onClick={() => handleDelete(file.id)}
              style={{ marginLeft: "15px", color: "red" }}
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
