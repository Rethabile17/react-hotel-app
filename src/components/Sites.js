import React from "react";
import Fun from "../images/Indoor-Adventure-Parks.png";
import Golf from "../images/gpirst-spring-golf-pair-resort-in-distance.png";
import Sky from "../images/3-2-crop-girl-skydiving-in-black-tank-top.png";
import Flying from "../images/best-hot-air-balloon-rides-cappadocia-turkey.png";
import "./Sites.css";

function Sites() {
  
  return (
    <div className="Sites">
         
    <div className="Sites-page">

    
        <div>
            <p>Fun park</p>
        <img src={Fun} />
        </div>

        <div>
            <p>Golf park</p>
        <img src={Golf} />
        </div>

        <div>
            <p>Sky diving</p>
        <img src={Sky} />
        </div>

        <div>
            <p>Air balloon flying</p>
        <img src={Flying} />
        </div>
       
    </div>
  
    </div>
  );
}

export default Sites;
