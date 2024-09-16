import  React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Hero.css"

function Hero() {
     const Navigate = useNavigate();





     
        Navigate('/')
     

    return (
      <div className='hero'>
        <div>
            <h1>Where style meet Luxury</h1>
            <button>book now</button>
        </div>
        </div>
    
          
         
  

    )
  }
  
  export default Hero;