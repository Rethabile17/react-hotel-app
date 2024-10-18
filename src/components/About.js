import React from "react";
import Hotel from "../images/98827f1c13da20e9455fcc69afa91eb7.jpg";
import "./About.css";
function About() {
  return (

    <>

 
    <div className="about">
        <div>
        <img className="about-imag" src={Hotel} />   
        </div>
      <div>
      <h1 style={{textAlign:"center", paddingTop:"3%" , color:"#201719"}}>About us </h1>
      <p className="about-p">
        Nestled in the heart of downtown, Hotel Serenity offers a tranquil 
        escape from the city's hustle and bustle. This elegant boutique hotel 
        features modern, stylish rooms with plush bedding and state-of-the-art
        amenities. Guests can enjoy a complimentary gourmet breakfast each 
        morning, relax in the cozy lounge area, or unwind at the rooftop bar 
        with panoramic city views. The hotel's attentive staff provides 
        exceptional service, ensuring a personalized and memorable stay. 
        Whether you're visiting for business or leisure, Hotel Serenity 
        combines comfort, sophistication, and convenience.
      </p>
      </div>
    </div>
    </>
  );
}

export default About;
