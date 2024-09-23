import  React from 'react';
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='navbar'>
       

        <div className="menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/Forgot">Forgot</Link></li>
        </ul>
        </div>

        <div  className="menu">
            <button>Logout</button>
        </div>
       
        {/* <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Forgot" element={<Forgot/>}/>
        <Route path="/Nav" element={<Nav/>}/>
        <Route path="/Hero" element={<Hero/>}/>
        <Route path="/siteroom" element={<Siteroom/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>} />
        <Route path="/Sites" element={<Sites/>} />
        <Route path="/Roomart" element={<Roomart/>} /> */}
    </div>
  )
}

export default Nav