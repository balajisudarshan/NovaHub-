import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const expiration = new Date().getTime() + 2 * 60 * 60 * 1000;
    if (email === "patient@gmail.com" && password === "patient@123") {
      localStorage.setItem(
        "userSession",
        JSON.stringify({ role: "patient", email, expiresAt: expiration })
      );
      navigate("/patientDashboard");
    } else if (email === "doctor@gmail.com" && password === "doctor@123") {
      localStorage.setItem(
        "userSession",
        JSON.stringify({ role: "doctor", email, expiresAt: expiration })
      );
      navigate("/doctorDashboard");
    } else {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
