import React from "react";
import "./ticketmodel.css";

const TicketModel = () => {
  return (
    <section className="radio-section">
      <div className="radio-list">
        <div className="radio-item">
          <input name="radio" id="radio1" type="radio" />
          <label htmlFor="radio1">
            <div className="ticket-wrapper">
              <div className="ticketcon">
                <span className="ticket">VVIP Ticket</span>
                <span className="available">100 available</span>
              </div>
              <div className="price">₦200,000</div>
            </div>
          </label>
        </div>

        {/* ----------------------------------- */}

        <div className="radio-item">
          <input name="radio" id="radio2" type="radio" />
          <label htmlFor="radio2">
          <div className="ticket-wrapper">
              <div className="ticketcon">
                <span className="ticket">VIP Ticket</span>
                <span className="available">85 available</span>
              </div>
              <div className="price">₦150,000</div>
            </div>
          </label>
        </div>

        <div className="radio-item">
          <input name="radio" id="radio3" type="radio" />
          <label htmlFor="radio3">
          <div className="ticket-wrapper">
              <div className="ticketcon">
                <span className="ticket">Regular Ticket</span>
                <span className="available">150 available</span>
              </div>
              <div className="price">₦5,000</div>
            </div>
          </label>
        </div>
      </div>
    </section>
  );
};

export default TicketModel;
