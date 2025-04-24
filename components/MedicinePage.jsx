import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Medicine.css';

const MedicinePage = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/medicines')
      .then((response) => {
        setMedicines(response.data); 
      })
      .catch((error) => {
        console.log("Error fetching medicines:", error);
      });
  }, []);

  return (
    <div className="table-container">
      <h1>Medicines</h1>
      {medicines.length > 0 ? (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Expiry Date</th>
                <th>Use</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => (
                <tr key={medicine.id}>
                  <td>{medicine.medname}</td>
                  <td>{medicine.expirydate}</td>
                  <td>{medicine.use}</td>
                  <td>${medicine.price}</td>
                  <td>{medicine.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No medicines available</p>
      )}
    </div>
  );
};

export default MedicinePage;
