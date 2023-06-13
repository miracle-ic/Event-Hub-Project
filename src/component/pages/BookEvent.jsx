import React from "react";
import "./bookevent.css";
import Usernav from '../Navbar/Usernav'
import Footer from "../Footer/Footer"
import { CiCircleAlert } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import upload from "../others/upload.svg";


const BookEvent = () => {
  return (
    <>
      <div className="header"><Usernav /></div>
      {/* -----------------------------------------------------event-book Container - Body */}
      <div className="event-book-container">
        {/* -----------------------------------event-book Details - Div */}
        <div className="event-book-details">
          <div className="book-details">
            <div className="m-logo">
                <a href="#" >Event</a>
            </div>
          
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

              {/* -----------------------------------Set Location Header - Div */}
              <div className="set-location-header">
                <h2>Location</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="location-btn">
                  <div className="online-btn">Online</div>
                  <div className="venue-btn">Venue</div>
                </div>
              </div>

              {/* -----------------------------------Save button - Div */}
              <div className="set-date-time-header">
                <h2>Date & Time</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>

                <div className="date-container">
                  <div className="start-date-btn">
                  <FaCalendarAlt className="calendar-icon" />
                    <div className="date-input-div">
                      <input type="text" id="event-start-input" placeholder="DD/MM/YYYY" />
                      <label for="event-start-input" class="event-start-label">
                        Event Starts
                      </label>
                    </div>
                  </div>

                  <div className="end-date-btn">
                  <FaCalendarAlt className="calendar-icon" />
                    <div className="date-input-div">
                      <input type="text" id="event-start-input" placeholder="DD/MM/YYYY" />
                      <label for="event-start-input" class="event-start-label">
                        Event Ends
                      </label>
                    </div>
                  </div>
                </div>

                <div className="date-container">
                  <div className="start-date-btn">
                  <FaCalendarAlt className="calendar-icon" />
                    <div className="date-input-div">
                      <input type="text" id="event-start-input" placeholder="00:00AM" />
                      <label for="event-start-input" class="event-start-label">
                        Start Time
                      </label>
                    </div>
                  </div>

                  <div className="end-date-btn">
                  <FaCalendarAlt className="calendar-icon" />
                    <div className="date-input-div">
                      <input type="text" id="event-start-input" placeholder="00:00PM" />
                      <label for="event-start-input" class="event-start-label">
                        End Time
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------Save button - Div */}
              <button type="" class="btn-save">
                Save & Continue
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="p-footer"><Footer /></div>
    </>
  );
};

export default BookEvent;
