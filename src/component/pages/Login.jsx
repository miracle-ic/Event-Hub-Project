import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { BsGoogle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import "./login.css";

const Login = () => {
  return (
    <>
      <Navbar />
      {/* -----------------------------------------------------Login Container - Body */}
      <div className="login-container">
        {/* -----------------------------------Login Details - Div */}
        <div className="login-details-container">
          <div className="login-details">
            {/* -----------------------------------Login Header - Div */}
            <div className="login-header">
              <h2>Login to your account</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            {/* ----------------------------------- Input Form - Div */}
            
            <form action="/submit-form" method="post" target="_blank" autocomplete="off">
            {/* -----------------------------------Login Email Input - Div */}
            <div className="login-input-container">
                <input type="email" id="login-input" />
                <label for="login-input" class="email-label">Email</label>
            </div>
            {/* -----------------------------------Login Password Input - Div */}
            <div className="password-input-container">
                <input type="password" id="password-input" />
                <label for="password-input" class="password-label">Password</label>
            </div>
            <div className="login-button">
                <a href="#">Forgot Password?</a>
                <button type="submit" class="btn-login">Login</button>
            </div>
            <hr></hr>
            <div className="line-or-container">
                <p>Or</p>
            </div>
            {/* -----------------------------------Google Login - Div */}
            <div className="google-login">
                <button type="submit" class="btn-google">Google</button>
                <BsGoogle className="google-icon" />
            </div>
            {/* -----------------------------------Facebook Login - Div */}
            <div className="facebook-login">
                <button type="submit" class="btn-facebook">Facebook</button>
                <BsFacebook className="facebook-icon" />
            </div>
            <div className="create-account-link">
                <p>Not yet registered? <a href="#">Create account</a></p>
            </div>
            </form>
          </div>
        </div>
        {/* -----------------------------------Login Image - Div */}
        {/* <div className="login-image"> */}
        <img
          src="https://res.cloudinary.com/dafxzu462/image/upload/v1685714337/login-image_fjsxp1.png"
          alt="login-image"
        />
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Login;
