import React from "react";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";
import Image01 from "../images/city-background-panoramic-view.png"
import "./Forgot.css"

function Forgot() {
    return (
      <div className="forgot">
      <div className="forgot-page">
        <div className="forgot-half1">
          <div className="forgot-half1-top">
            <h1>Forgot password</h1>
            <div>
              <img src={logo} />
            </div>
          </div>
          <div className="forgot-half1-bottom">
          <p className="forgot-p">Enter your email below to receive password reset instruction</p>
            <input className="forgot-half1-bottom-input" type="text" placeholder="email address" />
            <button className="forgot-button">Send</button>
          </div>
        </div>
        <div className="forgot-half2">
          <img
            className="forgot-image"
            src={Image01}
            alt="A panoramic view of the city"
          />
        </div>
      </div>
    </div>



    );
  }
  
  export default  Forgot;
  