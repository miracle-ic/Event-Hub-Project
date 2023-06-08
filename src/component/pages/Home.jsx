import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Event from "../Event/Event";
import { BsArrowRight } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Navbar2 from '../others/Navbar2'
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-banner">
        <div className="center-text">
          <p>Connect to all the event happening around you</p>
          <div className="banner-explore">
            <h2>Explore More</h2>
            <BsArrowRight className="icon-arrow" />
            {/* <HiArrowRight className="icon-arrow" /> */}
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------Next Session */}
      <div className="container-upcoming-event">
        <div className="event-search-container">
          {/* -----------------------------------------------------Search */}
          <div className="search-event-div">
            <h2>What are you looking?</h2>
            <div className="search-div">
              <input
                type="text"
                placeholder="Search events"
                id="search-input"
              />
            </div>
          </div>

          {/* -----------------------------------------------------Location */}
          <label class="location-event-div">
            <h2>Location</h2>
            <div class="location-div">
              <select name="city" id="location-input">
                <option value="Lagos">Lagos, Nigeria</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
              <MdArrowDropDown class="icon-location" />
            </div>
          </label>

          {/* -----------------------

          ------------------------------Date */}

          {/* -----------------------------------------------------Date */}
          <div className="date-event-div">
            <h2>When</h2>
            <div className="date-div">
              <input type="date" placeholder="Any date" id="date-input" />
              <MdArrowDropDown className="icon-date" />
            </div>
          </div>
          <div className="search-send-btn">
            <HiArrowRight className="icon-send" />
          </div>
        </div>

        {/* -----------------------------------------------------Next Session */}
        {/* ---------------------------------------Upcoming Event */}
        <div className="upcoming-event">
          {/* --------------------------------Header - Upcoming Event */}
          <div className="header-upcoming-event">
            <h2>Upcoming Event</h2>
            {/* ------------------------Filter div */}
            <div className="filter-upcoming-event">
              <div className="filter-category-div">
                <select name="city" id="category-input">
                  <option value="Category">All Category</option>
                </select>
                <MdKeyboardArrowDown class="icon-filter" />
              </div>
              <div className="filter-event-type-div">
                <select name="city" id="event-type-input">
                  <option value="Event Type">Event Type</option>
                </select>
                <MdKeyboardArrowDown class="icon-filter" />
              </div>
            </div>
          </div>
          <div className="event-container">
            {/* --------------------------------Events - Upcoming Event */}
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
          </div>
          {/* --------------------------------Events - Upcoming Event */}
          <div className="load-more-events">Load More Events</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
