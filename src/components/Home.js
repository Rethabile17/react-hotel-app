import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";
import "./Home.css"



function Home() {
    return (
        <div className="home">
            <div className="home-page">
                <div className="home-image">
                    <div className="home-navbar">
                       <img className="home-logo" src={logo} />
                       <div>
                       <p> ROYAL KING & QUEEN HOTEL
                       </p>
                       </div>
                       <div>
            <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <div className="home-about">
                <li>
                  <a href="">About </a>
                </li>
                </div>
              </ul>
              </div>
            
            <div>
                <div>
                    <button  className="home-logout-button" >Logout</button>
                    </div>
          </div>
                    </div>
                    <div className="home-cover">
                        <div className="home-cover-body">
                            <p> GET GRAND AND COMFORT</p>

                            <p>WELCOME  TO THE PLACE WHERE GRAND
                            MEET AFFORDABILITY </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    );
  }
  
  export default Home;