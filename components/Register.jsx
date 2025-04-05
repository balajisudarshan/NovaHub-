import React, { useState } from 'react';
import './styles/Register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'guest'
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/user/register', formData);
      setMessage(res.data.msg || 'Registered successfully!');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        setMessage(err.response.data.msg);
      } else {
        setMessage('Registration failed');
      }
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Create Account</h2>
      {message && <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="text" name="phoneNumber" placeholder="Phone Number" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />
        <select name="role" onChange={handleChange} value={formData.role}>
          <option value="guest">Guest</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
