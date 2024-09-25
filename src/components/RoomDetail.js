import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import view1 from "../images/6f7235447ca2c37edf7df110269d363b.png";
import view2 from "../images/Plank-Slider-2.jpg";
import view3 from "../images/prado_luxury_hotel_room_standard_family_inner_view.png";
import "./roomDetails.css";
import { TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon , FacebookShareButton,FacebookIcon } from 'react-share';

function RoomDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const room = location.state?.room;

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
    const dailyRate = room.price;
    const amountOfDays = calculateStayTime(arrivalDate, leaveDate);
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

  const shareUrl = window.location.href;



  useEffect(() => {
    updateTotalPrice();
  }, [arrivalDate, leaveDate]);

  const imgButton = () => {
    navigate("/checkoutDetails", {
      state: {
        room,
        roomType: room.roomType, // Make sure to pass the roomType
        arrivalDate,
        leaveDate,
        totalPrice,
      },
    });
  };

  return (
    <div className="roomDetails">
      <div className="roomDetails-page">
        <div className="roomDetails-top">
        <div>
           
            <TwitterShareButton url={shareUrl} title={`Check out this room: ${room.roomType}, Price: R${room.price}, Arrival: ${arrivalDate}, Leave: ${leaveDate}`}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton url={shareUrl} title={`Check out this room: ${room.roomType}, Price: R${room.price}, Arrival: ${arrivalDate}, Leave: ${leaveDate}`}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <FacebookShareButton url={shareUrl} title={`Check out this room: ${room.roomType}, Price: R${room.price}, Arrival: ${arrivalDate}, Leave: ${leaveDate}`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            
          </div>
          <div>
            <img src={view1} alt="" className="view1" />
          </div>
          <div className="roomDetails-views">
            <div><img src={view2} alt="" className="view2" /></div>
            <div><img src={view3} alt="" className="view3" /></div>
          </div>
        </div>

        <div className="roomDetails-down">
          <div>
            <p>{room.description}</p>
            <div className="roomDetails-down-page">
              <p>{room.roomType}</p>
              <p>{room.roomNumber}</p>
              <p>R{room.price} per night</p>
              <p>only {room.guest} can stay in this room</p>
              
              <input
                className="roomDetail-input"
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                placeholder="Arrival Date"
              />
              <input
                className="roomDetail-input"
                type="date"
                value={leaveDate}
                onChange={(e) => setLeaveDate(e.target.value)}
                placeholder="Leave Date"
              />

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
