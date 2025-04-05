import React from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Medicine from "../components/Medicine";
import Register from "../components/Register";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicine />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
};

export default App;
