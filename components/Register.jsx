import React, { useState } from 'react';
import './styles/Register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'guest',
    address: ''
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');  // new state for message type (success or error)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match!');
      setMessageType('error');  // set the message type to error
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/v1/users/register', formData);
      setMessage(res.data.msg || 'Registered successfully!');
      setMessageType('success');  // set the message type to success
      alert("Registered successfully!");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setMessage(err.response.data.message);
        setMessageType('error');  // set the message type to error
      } else {
        setMessage('Registration failed');
        setMessageType('error');  // set the message type to error
      }
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Create Account</h2>
      {message && (
        <p
          style={{
            color: messageType === 'success' ? 'green' : 'red',
            textAlign: 'center',
          }}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={handleChange}
          value={formData.username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          value={formData.phone}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          onChange={handleChange}
          value={formData.address}
        />
        {/* <select name="role" onChange={handleChange} value={formData.role}>
          <option value="guest">Guest</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        </select> */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
