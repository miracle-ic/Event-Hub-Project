import React from 'react'
import "./socialiconscs.css";
import { BsInstagram } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Socialiconscs = () => {
  return (
    <div className="c-social-icons">
            <a href="#">
              <BsInstagram className="c-icon" />
            </a>
            <a href="#">
              <BsDribbble className="c-icon" />
            </a>
            <a href="#">
              <BsTwitter className="c-icon" />
            </a>
            <a href="#">
              <BsYoutube className="c-icon" />
            </a>
          </div>
  )
}

export default Socialiconscs