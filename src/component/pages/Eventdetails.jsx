import React from "react";
import "./eventdetails.css";
import Navbar from "../Navbar/Navbar";

const Eventdetails = () => {
  return (
    <>
      <Navbar />
      <div className="ed-banner-container">
        <div className="ed-banner-content">
          <div className="ed-writeup-wrapper">
            <div className="ed-writeup-banner">
              <span>Eko All Night Pool Party Festival</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                vivamus penatibus viverra aliquam diam.
              </p>
            </div>
          </div>

          <div className="date-time-div">
            <div className="date-time-card">vjhdsjvr</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventdetails;
