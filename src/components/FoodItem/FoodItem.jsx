import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useState, useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

//................................
function FoodItem({ item }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={item.image} alt="food-image" />
        {!cartItems[item._id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            onClick={() => addToCart(item._id)}
          ></img>
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(item._id)}
            />
            <p>{cartItems[item._id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(item._id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{item.name}</p>
          <img src={assets.rating_starts} />
        </div>
        <p className="food-item-description">{item.description}</p>
        <p className="food-item-price">${item.price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
