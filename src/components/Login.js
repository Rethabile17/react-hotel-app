import "./Login.css";
import React from "react";
import Image01 from "../images/city-background-panoramic-view.png";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";

function Login() {
  return (
    <div className="login">
      {/* <div className="title">
            <h1>welcome</h1>
            <p>logo</p>
            <div className="input-text">
                <input className="inputs" type="text" value="email" placeholder="Email"/>
                <input className="inputs" type="text" value="password" placeholder="password"/>
                <p>Forgot password ?</p>
                </div>
                <div>
                    <input className="inputButton" type="Button" value="Login"/>
                    <p>Do not have yet? <span className="register">Register</span></p>
                    
                </div>
        </div>
        <div className="image"></div> */}
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
            <button className="login-button">Login</button>
            <p className="login-p">Do not have yet ?  <span className="login-register">Register</span></p>
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
