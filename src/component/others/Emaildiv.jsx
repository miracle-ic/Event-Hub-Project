import React from "react";
import "./emaildiv.css";
import { FiSend } from "react-icons/fi";

const Emaildiv = () => {
  return (
    <div className="m-email-div">
      <input type="email" placeholder="Your email address" id="m-footer-email" />
      <FiSend className="send-icon" />
    </div>
  );
};

export default Emaildiv;
