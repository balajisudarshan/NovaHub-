import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Medicine.css";
import { FaCartPlus } from "react-icons/fa";

const Medicine = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/medicines")
      .then((res) => setMedicines(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = (medicine) => {
    alert(`Added ${medicine.medicineName} to cart!`);
  };

  return (
    <div className="medicine-container">
      <h2 className="medicine-title">Medicine List</h2>
      <table className="medicine-table">
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Description</th>
            <th>Expiry Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine._id}>
              <td>{medicine.medicineName}</td>
              <td>{medicine.brand}</td>
              <td>₹{medicine.price}</td>
              <td>{medicine.description}</td>
              <td>{medicine.expDate}</td>
              <td>
                <button
                  className="add-cart-btn"
                  onClick={() => handleAddToCart(medicine)}
                  title="Add to Cart"
                >
                  <FaCartPlus />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medicine;
