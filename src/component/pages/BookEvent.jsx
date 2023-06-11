import React from "react";
import "./bookevent.css";
import Navbar from "../Navbar/Navbar";
import TicketModel from "../Ticket-Model/TicketModel";
import { CiCircleAlert } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import upload from '../others/upload.svg';

const BookEvent = () => {
  return (
    <>
      <Navbar />
      {/* -----------------------------------------------------event-book Container - Body */}
      <div className="event-book-container">
        {/* -----------------------------------event-book Details - Div */}
        <div className="event-book-details">
          <div className="book-details">
            <div className="event-message-alert">
              <CiCircleAlert className="a-icon" />
              <p>
                Note that for every ticket sold, there would be a 9.99%
                deduction.
              </p>
            </div>
            {/* -----------------------------------event-book Header - Div */}
            <div className="event-book-header">
              <h2>Basic Info</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            {/* ----------------------------------- Input Form - Div */}

            <form
              action=""
              method="post"
              target="_blank"
              autocomplete="off"
              className="form-div"
            >
              {/* -----------------------------------Event Title Input - Div */}
              <div className="event-title-input-container">
                <input type="text" id="event-title-input" />
                <label for="event-title-input" class="title-label">
                  Event Title
                </label>
              </div>
              {/* -----------------------------------Ogranizer Input - Div */}
              <div className="event-organizer-input-container">
                <input type="text" id="event-organizer-input" />
                <label for="organizer-input" class="organizer-label">
                  Organizer
                </label>
              </div>
              {/* -----------------------------------Event Models - Div */}
              <div className="event-modals">
                <div className="ticket-modal">
                  <select name="ticket" id="ticket-input">
                    <option value="Lagos"></option>
                  </select>
                  <label for="ticket-input" class="ticket-label">
                    Ticket Class
                  </label>
                  <IoIosArrowDown className="arrow-down-icon" />
                </div>

                <div className="category-modal">
                  <select name="ticket" id="category-input">
                    <option value="Lagos"></option>
                  </select>
                  <label for="ticket-input" class="category-label">
                    Category
                  </label>
                  <IoIosArrowDown className="arrow-down-icon" />
                </div>
              </div>

              {/* -----------------------------------Upload Container - Div */}
              <div className="upload-container">
                <span className="span1">Upload Event Banner</span>
                <div className="upload-line"></div>
                <img src={upload} className="upload-icon" alt="upload icon" />
                <span className="span1">Upload from file</span>
                <span className="span2">or click here to drag image</span>
                <span className="span3">PNG or JPG only</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookEvent;
