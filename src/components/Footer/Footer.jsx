import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/">
            <img src={assets.logo} alt="logo-icon" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            deleniti quia ab unde iusto laboriosam libero nulla earum veritatis
            voluptas labore, aliquid impedit eos aut incidunt quas ad alias ut?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook-icon" />
            <img src={assets.twitter_icon} alt="twitter-icon" />
            <img src={assets.linkedin_icon} alt="linkedin-icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 254876</li>
            <li>contact@tomato.in</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 Tomato.com- All rights reserved{" "}
      </p>
    </div>
  );
}

export default Footer;
