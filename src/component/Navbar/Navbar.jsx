import React from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        Event
      </a>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#" className="login-btn">
              Login
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

export default Navbar;
