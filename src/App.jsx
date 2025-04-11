import React from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Medicine from "../components/Medicine";
import Register from "../components/Register";
import Login from "../components/Login";
import PatientDashboard from "../components/Dashboard/PatientDashboard";
import DoctorDashboard from "../components/Dashboard/DoctorDashboard";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicine />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/patientDashboard" element={<PatientDashboard/>}/>
        <Route path="/doctorDashboard" element={<DoctorDashboard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
