import React from "react";
import "./Home.css";
import  Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/About";
import Service from "../components/Service";
import Sites from "../components/Sites"

function Home() {
  

  return (

    <div>
      <Nav/>
      <Hero/>

      <h1 className="about-heading">About us</h1>
      <About/>
      
    <h1  className="Service-head">The service we offered</h1> 
      <Service/>

      <h1 className="Sites-head">Place to visit and enjoy at the hotel</h1>
      <Sites/>
    </div>
    
     );
}

export default Home;
