import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import view1 from "../images/6f7235447ca2c37edf7df110269d363b.png";
import view2 from "../images/Plank-Slider-2.jpg";
import view3 from "../images/prado_luxury_hotel_room_standard_family_inner_view.png";
import "./roomDetails.css";

function RoomDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const room = location.state.room;

  const [arrivalDate, setArrivalDate] = useState('');
  const [leaveDate, setLeaveDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateStayTime = (arrivalDate, leaveDate) => {
    const ArrivalDate = new Date(arrivalDate);
    const LeaveDate = new Date(leaveDate);
    const DiffTime = Math.abs(LeaveDate - ArrivalDate);
    return Math.ceil(DiffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotalPrice = () => {
    const dailyRate = room.price; // Use the room's price as the daily rate
    const amountOfDays = calculateStayTime(arrivalDate, leaveDate);
    console.log("Amount of Days:", amountOfDays); // Debugging line
    return dailyRate * amountOfDays;
  };

  const updateTotalPrice = () => {
    if (arrivalDate && leaveDate) {
      const price = calculateTotalPrice();
      setTotalPrice(price);
    } else {
      setTotalPrice(0);
    }
  };

  useEffect(() => {
    updateTotalPrice();
  }, [arrivalDate, leaveDate]); // Update total price when dates change

  const imgButton = () => {
    console.log("Total Price on Booking:", totalPrice); // Debugging line
    navigate("/checkoutDetails", {
      state: {
        location,
        totalPrice
      }
    });
  };

  return (
    <div className="roomDetails">
      <div className="roomDetails-page">
        <div className="roomDetails-top">
          <div>
            <img src={view1} alt="" className="view1" />
          </div>

          <div className="roomDetails-views">
            <div>
              <img src={view2} alt="" className="view2" />
            </div>
            <div>
              <img src={view3} alt="" className="view3" />
            </div>
          </div>
        </div>

        <div className="roomDetails-down">
          <div>
            <p>{room.description}</p>

            <div className="roomDetails-down-page">
              <p>{room.roomType}</p>
              <p>{room.roomNumber}</p>
              <p>R{room.price} per night</p>
              <p>{room.guest}</p>

              {/* Input fields for arrival and leave dates */}
              <input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                placeholder="Arrival Date"
              />
              <input
                type="date"
                value={leaveDate}
                onChange={(e) => setLeaveDate(e.target.value)}
                placeholder="Leave Date"
              />

              {/* Display total price */}
              <div className="totalPrice">
                <p>Total Price: R{totalPrice.toFixed(2)}</p>
              </div>

              <div>
                <button className="roomDetails-button" onClick={imgButton}>
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
