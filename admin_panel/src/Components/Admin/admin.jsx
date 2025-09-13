import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

export default function Admin() {
  const navigate = useNavigate();
  const { people, setPeople, files, setFiles } = useContext(AppContext);

  const handleAddPerson = () => {
    const newPerson = {
      id: people.length + 1,
      username: `User${people.length + 1}`,
      password: `pass${people.length + 1}`,
    };
    setPeople([...people, newPerson]);
    navigate("/people"); 
  };

  const handleAddFile = () => {
    const newFile = {
      id: files.length + 1,
      filename: `File${files.length + 1}.txt`,
    };
    setFiles([...files, newFile]);
    navigate("/file");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Navbar */}
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
        <button onClick={() => navigate("/people")}>👥 People</button>
        <button onClick={() => navigate("/file")}>📂 File</button>
      </div>

      <h2>Admin Dashboard</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddPerson}>➕ Add People</button>
        <button onClick={handleAddFile} style={{ marginLeft: "20px" }}>
          ➕ Add File
        </button>
      </div>
    </div>
  );
}
