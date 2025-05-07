import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";
import axios from "axios";  // import axios to make HTTP requests

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/v1/users/login", {
        email,
        password,
      });

      if (res.status === 200) {
        const { role } = res.data.user;
        const id = res.data.user.id;
        const expiration = new Date().getTime() + 2 * 60 * 60 * 1000;
        localStorage.setItem(
          "userSession",
          JSON.stringify({ id,role, email, expiresAt: expiration })
        );
        if (role === "guest") {
          navigate("/patientDashboard");
        } else if (role === "doctor") {
          navigate("/doctorDashboard");
        }
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setMessage(err.response.data.message || "Invalid email or password");
      } else {
        setMessage("An error occurred. Please try again.",err);
      }
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
