import React from "react";
import "./checkoutDetails.css";
import { useLocation, useNavigate } from "react-router-dom";

function CheckoutDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Safely access room and totalPrice
  const room = location.state?.room; 
  const totalPrice = location.state?.totalPrice;

  // Handle the case when the state is undefined
  if (!room || totalPrice === undefined) {
    return <div>Error: No booking details found.</div>;
  }

  const restButton = () => {
    navigate("/");
  };

  return (
    <div className="checkoutview">
      <div className="checkoutview-page">
        <div className="form">
          <p>Total Price: R{totalPrice.toFixed(2)}</p>
        </div>
        <div>
          <button className="checkButton" onClick={restButton}>Reserve</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutDetails;
