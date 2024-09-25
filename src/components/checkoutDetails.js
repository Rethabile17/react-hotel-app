import React from "react";
import "./checkoutDetails.css";
import { useLocation, useNavigate } from "react-router-dom";

function CheckoutDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  // Safely access room details
  const room = location.state?.room;
  const totalPrice = location.state?.totalPrice;
  const arrivalDate = location.state?.arrivalDate;
  const leaveDate = location.state?.leaveDate;
  const roomType = location.state?.roomType;

  // Handle the case when the state is undefined
  if (!room || totalPrice === undefined || !arrivalDate || !leaveDate || !roomType) {
    return <div>Error: No booking details found.</div>;
  }

  const restButton = () => {
    navigate("/payment");
  };

  return (
    <div className="checkoutview">
      <div className="checkoutview-page">
        <div className="form">
          <p>Room Type: {roomType}</p>
          <p>Arrival Date: {arrivalDate}</p>
          <p>Leave Date: {leaveDate}</p>
          <p>Total Price: R{totalPrice.toFixed(2)}</p>
        </div>
        <div>
          <button className="checkButton" onClick={restButton}>Reserve</button>
        </div>
        <div>
        <button className="checkButton" onClick={restButton}>checkOut</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutDetails;
