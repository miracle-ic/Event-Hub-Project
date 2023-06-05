import React from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Event</div>
      <ul className="navbar-menu">
        <li>
          <div className="login">Login</div>
        </li>
        <li>
          <div className="create-event">Create event</div>
        </li>
      </ul>
      <AiOutlineMenu className="icon-menu" />
    </nav>
  );
};

export default Navbar;
