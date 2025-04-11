import React from "react";
import "./styles/PatientDashboard.css";

const PatientDashboard = () => {
  return (
    <div className="patientDashboardHolder">
      <div className="heading">
        <h2>Welcome, Patient</h2>
      </div>

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
