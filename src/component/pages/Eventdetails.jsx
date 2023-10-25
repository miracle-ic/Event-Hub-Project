import React from "react";
import "./eventdetails.css";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundBack } from "react-icons/io";
import Socialiconscs from "../others/Socialiconscs";
import Event from "../Event/Event";
import Footer from "../Footer/Footer";
import { MainContainer } from "../Styled/Styled";
import Reveal from "../Reveal/Reveal";
import RevealAppear from "../Reveal/RevealAppear";

const Eventdetails = () => {
  return (
    <>
      <Navbar />
      <div className="event-details-container">
        {/* -----------------------------------Open Tag container */}
        <div className="ed-banner-container">

          <MainContainer>
            {/* ---------wrap here */}
            <div className="ed-banner-content">
              <Reveal>
              <div className="ed-writeup-banner">
                <span>Eko All Night Pool Party Festival</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  vivamus penatibus viverra aliquam diam.
                </p>
              </div>
              </Reveal>

              <RevealAppear>
              <div className="date-time-card">
                <span>Date & Time</span>
                <p>Saturday, Nov 06, 2021 at 20:30PM</p>
                <a href="#">+ Add to Calender</a>
                <button type="#" class="btn-buy-ticket">
                  Buy Ticket
                </button>
                <button type="#" class="btn-save-ticket">
                  Save Ticket
                </button>
              </div>
              </RevealAppear>

              <div className="back">
                <a href="#">
                  <IoIosArrowRoundBack className="back-icon" /> Go Back
                </a>
              </div>
            </div>
            {/* --------------end banner content */}
          </MainContainer>
        </div>

        <div className="details-container">
          <MainContainer>
          <Reveal>
          <div className="des-loc-wrapper">
            <div className="des-div">
              <span className="span-des">Description</span>
              <p className="p-des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                adipiscing nibh nisi auctor sagittis risus eu ac. Neque et
                pulvinar cum mi sed ullamcorper ornare morbi aliquam. Neque,
                quam natoque feugiat quisque. Adipiscing viverra egestas lorem
                convallis. Interdum ipsum fusce elementum dolor a semper. Lectus
                elit ac viverra lorem nunc vitae. Laoreet morbi auctor ultrices
                augue interdum elementum facilisis in proin. Commodo auctor
                adipiscing id sit leo.<br></br>
                <br></br>
                Et pulvinar et ornare aliquam dignissim. Ut semper pulvinar
                nulla est nulla lectus. Tincidunt mauris eu mollis viverra eget.
                In dolor eget ridiculus venenatis. Eget elementum erat nisl
                justo turpis nulla. Rhoncus luctus amet, mi eu varius. Et id
                imperdiet malesuada sem eu viverra neque. A, dui morbi vitae
                placerat eget mi in rhoncus. In molestie elementum volutpat ac.
                Quisque arcu, egestas scelerisque egestas volutpat feugiat morbi
                nisi. Feugiat pulvinar vitae mauris ultrices diam molestie
                mattis vel mi. Fermentum integer tortor orci ut consequat
                consectetur lectus.
                <br></br>
                <br></br>
                Pretium odio enim elementum placerat vel mauris turpis. Etiam
                amet, ornare sed dui elementum, suspendisse quis sapien. Id amet
                tempor, donec pulvinar. Consectetur ut mauris vitae, eget
                ultricies egestas non netus. Risus est pellentesque nibh diam
                malesuada tellus adipiscing in fermentum. Malesuada commodo
                fames turpis phasellus leo scelerisque interdum. Faucibus
                phasellus sit erat faucibus. Nibh porttitor mi nulla malesuada
                consequat sit neque.
              </p>
            </div>

            <div className="loc-div">
              <span className="span-loc">Event Location</span>
              <div className="img-loc"></div>

              <span className="span-share">Share with Friends</span>
              <div className="icon-social-circle">
                <Socialiconscs />
              </div>
            </div>
            {/* ----------close des-loc-wrapper */}
          </div>
          </Reveal>

          <Reveal>
          <div className="date-time-wrapper">
            <span className="span-date-time">Date and Time</span>
            <div className="date-time-container">
              <div className="start-date-time">
                <span className="span-dates">Start Date</span>
                <p>09/06/2022</p>
              </div>
              <div className="start-date-time">
                <span className="span-dates">End Date</span>
                <p>09/06/2022</p>
              </div>
              <div className="start-date-time">
                <span className="span-dates">Time</span>
                <p>09/06/2022</p>
              </div>
            </div>
          </div>
          </Reveal>

          <Reveal>
          <div className="contact-organizer">
            <span className="span-organizer">How to contact the organizer</span>
            <p>
              Pleace visit <a href="#">https://samplewebsite.com/contact-us</a>{" "}
              or refer to the FAQ section for all questions.
            </p>
          </div>
          </Reveal>

          <Reveal>
          <div className="other-events-wrapper">
            <span className="span-other">Other event you might like</span>
            <div className="other-events">
              <Event />
              <Event />
              <Event />
            </div>
          </div>
          </Reveal>

          {/* ----------close details container */}
          </MainContainer>
        </div>
        {/* -----------------------------------Close Tag container */}
      </div>
      <Footer />
    </>
  );
};

export default Eventdetails;
