import React from "react";
import "./eventdetails.css";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundBack } from "react-icons/io";

const Eventdetails = () => {
  return (
    <>
      <Navbar />
      <div className="ed-banner-container">
        <div className="ed-banner-content">
            <div className="ed-writeup-banner">
              <span>Eko All Night Pool Party Festival</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                vivamus penatibus viverra aliquam diam.
              </p>
            </div>
            <div className="date-time-card">
                <span>Date & Time</span>
                <p>Saturday, Nov 06, 2021 at 20:30PM</p>
                <a href="#">+ Add to Calender</a>
                <button type="#" class="btn-buy-ticket">Buy Ticket</button>
                <button type="#" class="btn-save-ticket">Save Ticket</button>
            </div>
            <div className="back">
            <a href="#"><IoIosArrowRoundBack className="back-icon"/> Go Back</a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Eventdetails;
