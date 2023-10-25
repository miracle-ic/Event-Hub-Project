import React from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { LoginLink, LogoLink, MainContainer } from "../Styled/Styled";

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <MainContainer>
      <div className="navwrap">
      <LogoLink to="/home">
        Event
      </LogoLink>
      <div className="nav-links">
        <ul>
          <li>
            <LoginLink to="/login">
              Login
            </LoginLink>
          </li>
          <li>
            <a href="#" className="create-event-btn">
              Create event
            </a>
          </li>
        </ul>
      </div>
      <AiOutlineMenu className="icon-menu" />
      </div>
      </MainContainer>
    </nav>
    
  );
};

export default Navbar;
