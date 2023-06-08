import React from 'react';
import Socialicons from '../others/Socialicons';
import Emaildiv from '../others/Emaildiv';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-row-event">
          <h2>Event</h2>
          <a href="#">Copyright events</a>
          <a href="#">All rights reserved.</a>
          <Socialicons/>
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
          <Emaildiv />
        </div>        
      </div>

{/* ----------------------------------- */}
      <div className="footer-mobile">
        <div className="m-footer-row-event">
            <h2>Event</h2>
            <a href="#">Company</a>
            <a href="#">Support</a>
            <a href="#">Stay up to date</a>
        </div>
          <Emaildiv />
          <div className="m-hr"></div>
          <div className="m-bottom-footer">
            <div className="m-footer-copyright">
            <a href="#">All rights reserved.</a>
            <a href="#">Copyright events</a>
            </div>
            <div className="m-footer-logo">
              <Socialicons/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
