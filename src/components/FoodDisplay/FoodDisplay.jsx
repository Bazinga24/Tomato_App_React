import React from "react";
import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You !</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          {
            if (category === "All" || category === item.category) {
              return <FoodItem item={item} key={index} />;
            }
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
