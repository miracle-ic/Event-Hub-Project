import React from "react";
import "./ticketmodel.css";

const TicketModel = () => {
  return (
    <div className="card">
      <div className="content">
        <span className="circle"></span>
        <div className="ticketprice">
          <div className="ticketcon">
            <span className="ticket">VVIP Ticket</span>
            <span className="available">100 available</span>
          </div>
          <div className="price">₦200,000</div>
        </div>
      </div>
    </div>
  );
};

export default TicketModel;
