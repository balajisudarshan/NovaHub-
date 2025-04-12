import React, { useState, useEffect } from "react";
import "./styles/Medicine.css";

const Medicine = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.fda.gov/drug/label.json?search=active_ingredient:*&limit=100")
      .then((res) => res.json())
      .then((data) => {
        setMedicines(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching medicine data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="medicine-container">
      <h2>Medicine List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="medicine-table">
          <thead>
            <tr>
              <th>Brand Name</th>
              <th>Generic Name</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((item, index) => (
              <tr key={index}>
                <td data-label="Brand Name">
                  {item.openfda?.brand_name?.[0] || "N/A"}
                </td>
                <td data-label="Generic Name">
                  {item.openfda?.generic_name?.[0] || "N/A"}
                </td>
                <td data-label="Purpose">
                  {item.purpose?.[0] || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Medicine;
