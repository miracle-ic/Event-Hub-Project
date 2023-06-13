import React from "react";
import "./usernav.css";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

const Usernav = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        Event
      </a>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#" className="user-avatar-div">
              <img
                src="https://res.cloudinary.com/dafxzu462/image/upload/v1685714317/user-image_royude.png"
                alt="user profile avatar"
                width={40}
                height={40}
              />
              Tochukwu
              <IoIosArrowDown className="user-arrow-icon" />
            </a>
          </li>
          <li>
            <a href="#" className="create-event-btn">
              Create event
            </a>
          </li>
        </ul>
      </div>
      <AiOutlineMenu className="icon-menu" />
    </nav>
  );
};

export default Usernav;
