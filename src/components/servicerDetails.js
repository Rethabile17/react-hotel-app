import React from "react";
import Rate from "./rate";
import "./servicerDetails.css";

import Hotel from "../images/view-luxurious-hotel-hallway.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faCoffee,
  faBroom,
  faSwimmer,
  faDumbbell,
  faCar,
  faSoap,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";

function servicerDetails() {
  return (
    <div className="container">
      <h1 className="servicerDetails-head" style={{ color: "#201719" }}>
        Hotel Amenities & Services
      </h1>

      <p className="facility-p">
        Our hotel offers a range of top-notch facilities designed to enhance
        your stay. Enjoy seamless connectivity with complimentary Wi-Fi, relax
        by our inviting swimming pool, and take advantage of convenient on-site
        parking. Whether you're here for business or leisure, our amenities
        cater to all your needs for a comfortable and enjoyable experience.
      </p>
      <div className="servicerDetails">
        <div className="icon-container">
          <FontAwesomeIcon icon={faWifi} className="AwesomeIcon" />
          <p className="icon-name">WiFi</p>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faCoffee} className="AwesomeIcon" />
          <p className="icon-name">Breakfast</p>
        </div>

        <div className="icon-container">
          <FontAwesomeIcon icon={faBroom} className="AwesomeIcon" />
          <p className="icon-name">Cleaning</p>
        </div>

        <div className="icon-container">
          <FontAwesomeIcon icon={faSwimmer} className="AwesomeIcon" />
          <p className="icon-name">Pool</p>
        </div>

        <div className="icon-container">
          <FontAwesomeIcon icon={faDumbbell} className="AwesomeIcon" />
          <p className="icon-name">Gym</p>
        </div>

        <div className="icon-container">
          <FontAwesomeIcon icon={faCar} className="AwesomeIcon" />
          <p className="icon-name">Free Park</p>
        </div>

        <div className="icon-container">
          <FontAwesomeIcon icon={faSoap} className="AwesomeIcon" />
          <p className="icon-name">Laundry</p>
        </div>

        <div className="icon-container">
          <FontAwesomeIcon icon={faSpa} className="AwesomeIcon" />
          <p className="icon-name">Spa</p>
        </div>
      </div>
    </div>
  );
}

export default servicerDetails;
