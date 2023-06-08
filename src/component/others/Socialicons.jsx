import React from 'react'
import "./socialicons.css";
import { BsInstagram } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Socialicons = () => {
  return (
    <div className="m-social-icons">
            <a href="#">
              <BsInstagram className="m-icon" />
            </a>
            <a href="#">
              <BsDribbble className="m-icon" />
            </a>
            <a href="#">
              <BsTwitter className="m-icon" />
            </a>
            <a href="#">
              <BsYoutube className="m-icon" />
            </a>
          </div>
  )
}

export default Socialicons