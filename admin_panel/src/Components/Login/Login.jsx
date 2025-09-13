import React, { useState } from "react";
import "./Login.css"; 

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Allowed users
  const validUsers = [
    { username: "krishna@gmail.com", password: "1234" },
    { username: "vyshnavi", password: "12345" },
  ];

  const handleLogin = () => {
    const foundUser = validUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      setMessage(`✅ Welcome, ${username}! You are logged in.`);
    } else {
      setMessage("❌ Invalid username or password. Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">USER LOGIN</h2>

        <div className="input-container">
          <span className="icon">👤</span>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-container">
          <span className="icon">🔒</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          LOGIN
        </button>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
