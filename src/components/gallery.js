import React from "react";
import Fun from "../images/Indoor-Adventure-Parks.png";
import Golf from "../images/gpirst-spring-golf-pair-resort-in-distance.png";
import Sky from "../images/3-2-crop-girl-skydiving-in-black-tank-top.png";
import Flying from "../images/best-hot-air-balloon-rides-cappadocia-turkey.png";
import gym from "../images/four-seasons-hotel-seoul_photo-via-booking-dot-com.png";
import pool from "../images/Disneys-Coronado-Springs-Resort_Full_8203.png";
import spa from  "../images/south-africa-spa-hotels-555x322.png";
import Breakfast from "../images/petit_dej_main.png";
import "./gallery.css";

function Sites() {
  
  return (
    <div className="Sites">
         
    <div className="gallery">

    
        <div>
        <img className="sites-image"  src={Fun} />
        </div>

        <div>
        <img  className="sites-image" src={pool} />
        </div>

        <div>
        <img className="sites-image" src={Sky} />

        </div>

        <div>
        <img className="sites-image" src={Breakfast} />
        </div>
        
        <div>
        <img  className="sites-image" src={Golf} />
        </div>

        <div>
        <img className="sites-image"  src={gym} />
        </div>


        <div>
        <img className="sites-image" src={spa} />
        </div>

        <div>
        <img className="sites-image" src={Flying} />
        </div>
       
        

      
    </div>
  
    </div>
  );
}

export default Sites;
