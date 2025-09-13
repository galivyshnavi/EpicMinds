import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Allowed users
  const validUsers = [
    { username: "krishna@gmail.com", password: "1234" },
    { username: "vyshnavi", password: "12345" }
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
