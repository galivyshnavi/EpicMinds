import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const validUsers = [
    { username: "krishna@gmail.com", password: "1234" },
    { username: "vyshnavi", password: "12345" }
  ];

  const handleLogin = () => {
    const foundUser = validUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      navigate("/admin"); // redirect
    } else {
      setMessage("❌ Invalid username or password. Try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
}
