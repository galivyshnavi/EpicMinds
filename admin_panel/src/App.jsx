import React from "react";
import { Routes, Route } from "react-router-dom"; 
import LoginPage from "./Components/Login/Login";
import Admin from "./Components/Admin/admin";
import People from "./Components/Admin/People";
import File from "./Components/Admin/File";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/people" element={<People />} />
      <Route path="/file" element={<File />} />
    </Routes>
  );
}

export default App;
