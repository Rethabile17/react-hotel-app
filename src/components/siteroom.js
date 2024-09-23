import React from "react";
import { useNavigate } from "react-router-dom";
import Singe from "../images/6f7235447ca2c37edf7df110269d363b.png";
import Couple from "../images/600x422.png";
import Family from "../images/prado_luxury_hotel_room_standard_family_inner_view.png";
import "./siteroom.css";



function Siteroom() {

    const navigate = useNavigate();

    const goToRooms = () => {
      navigate("/rooms");
    };
   return (
    <div class="siteroom-container">
        <div className='siteroom'>
            <div> 
                <h1>Rooms type</h1>
                </div>
              <div  className="siteroom-page">
                  <img className="siteroom-image" src={Singe} alt="" />
                  <button className="siteroom-page-button" onClick={goToRooms}>Singe</button>
              </div>
              <div className="siteroom-page">
              <img className="siteroom-image" src={Couple} alt="" />
              <button className="siteroom-page-button" onClick={goToRooms}>Couple</button>
        
              </div>
              <div  className="siteroom-page">
              <img className="siteroom-image" src={Family} alt="" />
              <button className="siteroom-page-button" onClick={goToRooms}>Family</button>
        
              </div>
        
          </div>
    </div>
   )
 }
 
 export default Siteroom;