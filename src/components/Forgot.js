import React, { useState ,useEffect }from "react";

import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";
import Image01 from "../images/city-background-panoramic-view.png";
import { useSelector, useDispatch } from "react-redux";
import { resetPassword } from "../redux/authSlice";
import "./Forgot.css"

function Forgot() {


  const [email, setEmail] = useState("");
  const [error, setError]= useState("")


  const dispatch = useDispatch();

  
  const Forgot= async () => {
    
      try {
        await dispatch(resetPassword({ email })).unwrap();
        alert("Password reset link sent!");
      } catch (error) {
        setError(error.message || "Failed to send password reset link");
      }
    
  };

 


    return (
      <div className="forgot">
      <div className="forgot-page">
        <div className="forgot-half1">
          <div className="forgot-half1-top">
          <div>
              <img src={logo} className="auth-logo"/>
            </div>
            
            <h1>Forgot password</h1>
            
          </div>
          <div className="forgot-half1-bottom">
          <p className="forgot-p">Enter your email below to receive password reset instruction</p>
            <input onChange={(e) => setEmail(e.target.value)} className="forgot-half1-bottom-input" type="text" placeholder="Email " />
            <button className="forgot-button" onClick={Forgot }>Send</button>
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
  