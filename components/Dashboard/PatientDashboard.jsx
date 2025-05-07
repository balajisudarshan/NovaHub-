import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/PatientDashboard.css";

const PatientDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sessionData = JSON.parse(localStorage.getItem("userSession"));
    const id = sessionData?.id;
    console.log(id);
    if (!sessionData || sessionData.role !== "guest") {
      window.location.href = "/login";
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/users/${id}`
        );
        setUserData(response.data.user);
        console.log(userData);
        setLoading(false);
      } catch (err) {
        setError("Error fetching user details.");
        setLoading(false);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="patientDashboardHolder">
      <div className="heading">
        <h2>
          Welcome,
          <span
            style={{
              color: "#1565C0",
              fontWeight: "600",
              backgroundColor: "#E3F2FD",
              padding: "4px 10px",
              borderRadius: "8px",
            }}
          >
            {userData?.first_name} {userData?.last_name}
          </span>
        </h2>
      </div>

      {/* Your Medicines Section */}
      <div className="medicineHolder">
        <h2>Your Medicines</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Dosage</th>
                <th>Timings</th>
                <th>Duration</th>
                <th>Doctor Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paracetamol</td>
                <td>500mg</td>
                <td>Morning, Night</td>
                <td>5 Days</td>
                <td>Dr. Smith</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <div className="appointmentBooking">
        <h2>Book an Appointment</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Specialization</th>
                <th>Timing</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dr. John Doe</td>
                <td>Cardiologist</td>
                <td>10:00 AM - 1:00 PM</td>
                <td>₹500</td>
                <td>
                  <button className="bookBtn">Book Appointment</button>
                </td>
              </tr>
              <tr>
                <td>Dr. Emily Roy</td>
                <td>Dermatologist</td>
                <td>2:00 PM - 5:00 PM</td>
                <td>₹400</td>
                <td>
                  <button className="bookBtn">Book Appointment</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
