import React from "react";
import gym from "../images/four-seasons-hotel-seoul_photo-via-booking-dot-com.png";
import pool from "../images/Disneys-Coronado-Springs-Resort_Full_8203.png";
import spa from  "../images/south-africa-spa-hotels-555x322.png";
import Breakfast from "../images/petit_dej_main.png";
import "./Service.css";


import "./Login.css";

function Service() {
  



     
 
  return (

    
    <div className="Service">
         
        <div className="Service-page">

        
            <div>
                <p>Gym</p>
            <img src={gym} />
            </div>

            <div>
                <p>Pool</p>
            <img src={pool} />
            </div>

            <div>
                <p>Spa</p>
            <img src={spa} />
            </div>

            <div>
                <p>Breakfast</p>
            <img src={Breakfast} />
            </div>
           
        </div>
      
    </div>
  );
}

export default Service;
