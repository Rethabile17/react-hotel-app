import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Single from "../images/6f7235447ca2c37edf7df110269d363b.png";
import { fetchData } from "../redux/dbSlice";
import { TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, FacebookShareButton, FacebookIcon } from 'react-share';
import Heart from "../images/heart_6338857.png";
import "./rooms.css";
import Footer from "./footer";

function Rooms() {
  const Navigate = useNavigate();
  const {
    data = [],
    loading = false,
    error = null,
  } = useSelector((state) => state.db) || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const imgButton = (room) => {
    Navigate("/roomDetails", {
      state: { room },
    });
  };

  const shareUrl = window.location.href; 

  return (
    <div>
      <h1 className="room-header">Rooms</h1>
      <p className="room-text">
        Step into luxury and unwind in style. Our spacious rooms, premium
        amenities, and attentive service ensure a restful night and a refreshing
        morning. Discover the perfect blend of comfort and elegance.
      </p>
      <div className="room">
        {data.map((room, index) => (
          <div className="room-page" key={index}>
            <div className="room-head">
              <div>
                <img
                  className="room-top"
                  src={Single}
                  alt={`Room ${room.roomNumber}`}
                  onClick={() => imgButton(room)} 
                />
              </div>
              <div className="room-down">
                <p className="room-name">{room.roomType}</p>
                <p>Room No: {room.roomNumber}</p>
                <p className="room-price">Price: R{room.price}</p>
              </div>
              <div>
                <TwitterShareButton url={shareUrl} title={`Check out this room: ${room.roomType}, Price: R${room.price}`}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>

                <LinkedinShareButton url={shareUrl} title={`Check out this room: ${room.roomType}, Price: R${room.price}`}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>

                <FacebookShareButton url={shareUrl} title={`Check out this room: ${room.roomType}, Price: R${room.price}`}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>
              {/*<div className="like">
                <button><img className="heart" src={Heart} alt="Heart Icon" /></button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Rooms;
