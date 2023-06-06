import React from "react";
import { FiSend } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import "./footer2.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-row-event">
          <h2>Event</h2>
          <a href="#">Copyright events</a>
          <a href="#">All rights reserved.</a>
          <div className="social-icons">
            <a href="#">
              <BsInstagram className="icon" />
            </a>
            <a href="#">
              <BsDribbble className="icon" />
            </a>
            <a href="#">
              <BsTwitter className="icon" />
            </a>
            <a href="#">
              <BsYoutube className="icon" />
            </a>
          </div>
        </div>

        <div className="footer-row1">
          <h2>Company</h2>
          <a href="#">About us</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
          <a href="#">Testimonials</a>
        </div>

        <div className="footer-row1">
          <h2>Support</h2>
          <a href="#">Help center</a>
          <a href="#">Terms of service</a>
          <a href="#">Legal</a>
          <a href="#">Privacy policy</a>
        </div>

        <div className="footer-email-form">
          <h2>Stay up to date</h2>
          <div className="email-div">
            <input
              type="email"
              placeholder="Your email address"
              id="footer-email"
            />
            <FiSend className="send-icon" />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Footer;
