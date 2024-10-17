import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png"

function Nav() {
  return (
    <div class="nav">
      <div className="navbar">
        <div>
          <img className="hotel-logo" src={logo} alt="Hotel Logo Image" />
        </div>
        <div>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          
          </ul>
        </div>
        <div>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
