import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";

function LoginPopup({ loginHandler }) {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="close-icon"
            onClick={loginHandler}
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing I agree to the terms of use and privacy policy !</p>
        </div>
        {currentState === "Login" && (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click Here </span>
          </p>
        )}
        {currentState === "Sign Up" && (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
