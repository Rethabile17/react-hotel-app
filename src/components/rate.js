import React from "react";
import Oberoi from "../images/family.png";
import Kanye from "../images/05-12-21-happy-people.png";
import Johnny from "../images/depositphotos_25350645-Happy-Couple.png";
import Akira from "../images/Happiest+person+in+the+world.png";
import "./rate.css";

function Rate() {
  return (
    <div className="rate">
      <div className="rate-page">
        <div className="rate-images">
          <img className="rate-image" src={Oberoi} />
          <img className="rate-image" src={Kanye} />
          <img className="rate-image" src={Johnny} />
          <img className="rate-image" src={Akira} />
        </div>
      </div>
    </div>
  );
}

export default Rate;
