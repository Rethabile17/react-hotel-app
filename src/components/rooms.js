import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";
import Single from "../images/6f7235447ca2c37edf7df110269d363b.png";
import "./rooms.css";

function Rooms() {
  return (
    <div className="room">
      <div className="room-page">
        <div className="room-head">
          <div >
            <img className="room-top" src={Single} />
          </div>

          <div className="room-down">
            <p>room no :1</p>
            <p>side: north</p>
            <p>flood: upstart</p>
            <p>Price: R18000</p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
