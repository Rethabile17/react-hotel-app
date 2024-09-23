import React from "react";
import "./checkoutDetails.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CheckoutDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location:",location.state.location.state.room)
  const room=location.state.location.state.room;


  const restButton = () => {
    navigate("/")
  };

  return (
    <div className="checkoutview">
      <div className="checkoutview-page">
        <div className="form">
          <input type="date" placeholder="checkIn" />
          <input type="date" placeholder="checkOut" />
         <p>{room.price}</p>
         
        </div>
        <div>
          <button className="checkButton" onClick={restButton}>Reserve</button>
        </div>
      </div>
    </div>
  );
}
export default CheckoutDetails;
