import React from "react";
import "./Home.css";
import Nav from "../components/nav";
// import Hero from "../components/hero";
import About from "../components/About";
import Sites from "./gallery";
import ServicerDetails from "../components/servicerDetails";
import Rate from "../components/rate";
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();

  const siteButton = () => {
    Navigate("/siteroom");
  };

  return (
    <div className="home-page">
      <div className="hero">
        <Nav />
        <h1 className="home-page-hero-heading">Where style meet Luxury</h1>
        <button className="book-now-btn" onClick={siteButton}>Book Now</button>
      </div>
      <div className="about-us"></div>
      <div></div>
      <div></div>

      <h1 className="about-heading"  style={{paddingTop:"3%"}}>About us</h1>
      <About />

      <h1 className="Service-head"   style={{paddingTop:"3%"}}>Gallery</h1>

      <h1 className="Sites-head"    style={{paddingTop:"3%"}}></h1>
      <Sites />

      <h1 className="servicerDetails-head">why choose us</h1>
      <ServicerDetails />


      <h1 className="rate-head"></h1>
      <Rate/>



    </div>
  );
}

export default Home;
