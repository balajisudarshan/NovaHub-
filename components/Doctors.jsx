import React, { useEffect, useState } from "react";
import "./styles/DoctorCard.css";

const DoctorCard = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://67f9d237094de2fe6ea27209.mockapi.io/api/doctors/doctos")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  return (
    <div className="doctor-container">
      <h2>Our Doctors</h2>
      <div className="doctor-grid">
        {doctors.map((doc) => (
          <div className="doctor-card" key={doc.id}>
            <img src={doc.avatar} alt={doc.name} className="doctor-avatar" />
            <h3>{doc.name}</h3>
            <p><strong>Specialty:</strong> {doc.specialisation}</p>
            {/* <p><strong>Experience:</strong> {doc.experience}</p>
            <p><strong>Email:</strong> {doc.email}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCard;
