import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image01 from "../images/city-background-panoramic-view.png";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";

import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../redux/authSlice";
import "./Login.css";
import { Audio } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const { user, loader, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
   
const handleForgot =() =>{
  navigate('/Forgot')
}

  useEffect(() => {
    if (user) {
      alert("login successful");
      navigate("/");
    }
  }, [user, navigate]);

  const loginBtn = () => {
    dispatch(signIn({ email, password }));

    // Navigate('/home')
  };

  return (
    <div className="login">
      <div className="login-page">
        <div className="login-page-half1">
          <div className="login-page-half1-top">

          <div>
              <img src={logo}  className="auth-logo"/>
            </div>
            <h1  style={{paddingTop:"5%"}}> Welcome Back</h1>
          </div>
          <div className="login-page-half1-bottom">
            <input
              className="login-page-half1-bottom-input"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="login-page-half1-bottom-input"
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="login-p" onClick={handleForgot}> Forgot password ?</p>
            <button className="login-button" onClick={loginBtn}>
              Login
            </button>
            {loader ? (
              <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            ) : (
              <h1></h1>
            )}
            {error && <p>Error : {error} </p>}
            <Link to={"/register"}>
              {" "}
              <p className="login-p">
                Do not have yet ?{" "}
                <span className="login-register">Register</span>
              </p>
            </Link>
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
