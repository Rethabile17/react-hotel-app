import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";
import google from "../images/Google (1).png";
import apple from "../images/Apple Logo.png";
import Image01 from "../images/city-background-panoramic-view.png";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../redux/authSlice";
import "./Register.css";
import Spinner from "react-bootstrap/Spinner";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, loader, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      alert("register successful");
      navigate("/");
    }
  }, [user, navigate]);

  const create = () => {
    dispatch(signUp({ email, password }));
    // Navigate("/");
  };

  return (
    <div className="register">
      <div className="register-page">
        <div className="register-half1">
          <div className="register-half1-top">
            <h1>Welcome Back</h1>
            <div>
              <img src={logo} />
            </div>
          </div>
          <div className="register-half1-bottom">
            <input
              className="register-half1-bottom-input"
              type="text"
              placeholder="fullName"
            />
            <input
              className="register-half1-bottom-input"
              value={email}
              type="text"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="register-half1-bottom-input"
              type="text"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="register-button" onClick={create}>
              Create Account
            </button>
            {loader ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <h1></h1>
            )}
            {error && <p>Error : {error} </p>}
            <Link to={`/`}>
              {" "}
              <p className="register-p">
                Already have an account ?{" "}
                <span className="register-login">Login</span>
              </p>
            </Link>

            <p>
              <span>
                <img className="register-image" src={google} alt="" />
              </span>{" "}
              or{" "}
              <span>
                <img className="register-image" src={apple} alt="" />
              </span>
            </p>
          </div>
        </div>
        <div className="register-page-half2">
          <img
            className="register-page-image"
            src={Image01}
            alt="A panoramic view of the city"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
