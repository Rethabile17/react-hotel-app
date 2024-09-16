import  React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";
import "./nav.css"

function Nav() {
  return (
    <div className='navbar'>
        <div  className="nav-logo">
            <img src={logo} />
        </div>

        <div className="menu">
        <ul>
          
            <li><a>Home</a></li>
            <li><a>About</a></li>
        </ul>
        </div>

        <div  className="menu">
            <button>Logout</button>
        </div>
       

    </div>
  )
}

export default Nav