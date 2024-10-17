import React from "react";
import wifi from "../images/Wi-Fi.png";
import breakfast from "../images/Buffet Breakfast.png";
import houseKeeper from "../images/Housekeeper.png";
import gym from "../images/Gym.png";
import pool from "../images/Pool.png";
import privateParking from "../images/Parking.png";
import laundryService from "../images/Cleaning Service.png";
import spy from "../images/Spa.png";
import "./servicerDetails.css";

import Hotel from "../images/view-luxurious-hotel-hallway.png";

function servicerDetails() {
  return (
    <div className="servicerDetails">
      <div className="servicerDetails-icons">
        <img className=".service-img" src={wifi} />
        <img className=".service-img" src={breakfast} />
        <img className=".service-img" src={houseKeeper} />
        <img className=".service-img" src={gym} />
        <img className=".service-img" src={pool} />
        <img className=".service-img" src={privateParking} />
        <img className=".service-img" src={laundryService} />
        <img className=".service-img" src={spy} />
      </div>
      <div className="servicerDetails-image">
        <img className="servicerDetails-img" src={Hotel} />
      </div>
    </div>
  );
}

export default servicerDetails;
