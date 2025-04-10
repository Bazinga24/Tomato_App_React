import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here !</h2>
        <p>
          Choose from a diverse menu featuring delectable array of dishes
          crafted with the finest ingridients and culinary expertise.Our mission
          is to satisfy your cravings and elevate your dinning experience,one
          delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
