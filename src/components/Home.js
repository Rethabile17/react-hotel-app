import React from "react";
import "./Home.css";
import Nav from "../components/nav";
 import Hero from "../components/hero";
import About from "../components/About";
import Sites from "./gallery";
import ServicerDetails from "../components/servicerDetails";
import Rate from "../components/rate";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

function Home() {
  const Navigate = useNavigate();

  const siteButton = () => {
    Navigate("/siteroom");
  };

  return (
    <div>
        <Nav />
      <Hero />
    
      

     
      <About />

    

   
      <Sites />

      
      <ServicerDetails />


      <Rate/>

      <Footer/>


      


    </div>
  );
}

export default Home;
