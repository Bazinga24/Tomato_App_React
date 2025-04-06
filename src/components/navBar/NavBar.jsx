import React, { useContext } from "react";
import "./NavBar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
function NavBar({ loginHandler }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="nav-bar">
      <Link to="/">
        <img src={assets.logo} alt="App-logo" className="logo" />
      </Link>
      <ul className="nav-bar-menu">
        <Link
          to="/"
          className={menu == "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={menu == "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={menu == "mobile" ? "active" : ""}
          onClick={() => setMenu("mobile")}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          className={menu == "contact" ? "active" : ""}
          onClick={() => setMenu("contact")}
        >
          Contact-Us
        </a>
      </ul>
      <div className="nav-bar-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-bar-search-icon">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>
        <button onClick={loginHandler}>Sign in</button>
      </div>
    </div>
  );
}

export default NavBar;
