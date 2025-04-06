import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";
function ExploreMenu({ category, categoryHandler }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu </h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring delectable array of dishes.Our
        mission is to satisfy your cravings and elevate your dinning
        experience,one delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              className="explore-menu-list-item"
              key={index}
              onClick={() => categoryHandler(item.menu_name)}
            >
              <img
                src={item.menu_image}
                className={category === item.menu_name ? "active" : ""}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
