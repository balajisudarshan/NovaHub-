import React from "react";
import medicalImg from "./doctore.png";
import "./styles/Home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="homeContainer">
        <div className="homeContent">
          <h1>
            Compassion, Care, and Commitment – <span>Your Health</span>,{" "}
            <span>Our Priority</span>
          </h1>
          <div className="btnContainer">
            <button className="bookBtn">Book your appointment now</button>
          </div>
        </div>
        <div className="imageHome">
          <img src={medicalImg} alt="Doctor" />
        </div>
      </div>

      <div className="testimonialSection">
        <h2>What Our Patients Say</h2>
        <div className="testimonialContainer">
          <div className="testimonial">
            <p>"The doctors here saved my life! Highly recommend!"</p>
            <h4>- Sarah Williams</h4>
          </div>
          <div className="testimonial">
            <p>"The best hospital experience I've ever had. Excellent service!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial">
            <p>"Clean facilities, friendly staff, and expert doctors."</p>
            <h4>- Emily Johnson</h4>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
