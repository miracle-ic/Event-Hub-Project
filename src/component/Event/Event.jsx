import React from "react";
import "./event.css";

const Event = () => {
  return (
    <div className="events">
      <img
        src="https://res.cloudinary.com/dafxzu462/image/upload/v1685714324/event-image_o6qwe9.png"
        alt="Event Image"
      />
      <div className="event-details">
        <div className="event-date">
          <p>Oct</p>
          <h3>28</h3>
        </div>
        <div className="event-title">
          <h3>Event Name which can be long</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus
            penatibus viverra aliquam diam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
