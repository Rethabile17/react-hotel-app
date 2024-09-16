import React from "react";
import { useNavigate } from "react-router-dom";
import Image01 from "../images/city-background-panoramic-view.png";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";

import { Outlet, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const Navigate = useNavigate();

  const loginBtn = (()=>{
    Navigate('/home')
  })




     
 
  return (
    <div className="login">
      <div className="login-page">
        <div className="login-page-half1">
          <div className="login-page-half1-top">
            <h1>Welcome Back</h1>
            <div>
              <img src={logo} />
            </div>
          </div>
          <div className="login-page-half1-bottom">
            <input className="login-page-half1-bottom-input" type="text" placeholder="email address" />
            <input className="login-page-half1-bottom-input" type="text" placeholder="password" />
            <p className="login-p"> Forgot password ?</p>
            <button className="login-button"  onClick={loginBtn}>Login</button>
           <Link  to={`register`}>   <p className="login-p">Do not have yet ?  <span className="login-register">Register</span></p></Link>
          </div>
        </div>
        <div className="login-page-half2">
          <img
            className="login-page-image"
            src={Image01}
            alt="A panoramic view of the city"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
