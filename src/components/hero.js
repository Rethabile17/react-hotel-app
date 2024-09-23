import  React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Hero.css"

function Hero() {
     const Navigate = useNavigate();

     const siteButton = () => {
      Navigate("/siteroom")
     }
     
    return (
      <div className='hero'>
        <div>
            <h1>Where style meet Luxury</h1>
            <button onClick={siteButton}  >book now</button>
        </div>
        </div>
    
          
         
  

    )
  }
  
  export default Hero;