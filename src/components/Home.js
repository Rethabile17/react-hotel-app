import React from "react";
import "./Home.css";
import  Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/About";
import Service from "../components/Service";

function Home() {
  

  return (

    <div>
      <Nav/>
      <Hero/>

      <h1 className="about-heading">About us</h1>
      <About/>
      
    <h1  className="Service-head">The service we offered</h1> 
      <Service/>
    </div>
    
     );
}

export default Home;
