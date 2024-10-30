import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";
import '../components/nav.css';

const Nav = () => {
  const [activeItem, setActiveItem] = useState('Home'); 
  const handleMenuClick = (item) => {
    setActiveItem(item); 
  };

  const navigate = useNavigate();


  const handleNav = () =>{
    navigate("/userprofile")
  }

  const handleAbout = () =>{
    navigate("/about")
  }

  const  handleContact = () =>{
    navigate("/footer")
  }

  const handleLogout = () =>{
    navigate("/")
  }

  const handleServicer = () =>{
    navigate("/servicerDetails")
  }
  
  return (
    <div className="nav-container">
      <div>
        <img src={logo}  className="nav-logo" alt='Hotel Logo'/>
      </div>
      <ul>
        <li
          className={activeItem === 'Home' ? 'active' : ''}
          onClick={() => handleMenuClick('Home')}
        >
          Home
        </li>
        <li
          className={activeItem === 'About' ? 'active' : ''}
          onClick={() =>{
            handleAbout() 
           handleMenuClick('About')}}
        >
          About
        </li>
        <li
          className={activeItem === 'Services' ? 'active' : ''}
          onClick={() =>{
            handleServicer()
           handleMenuClick('Services')}}
        >
          Services
        </li>
        <li
          className={activeItem === 'Contact' ? 'active' : ''}
          onClick={() =>{
            handleContact()
           handleMenuClick('Contact')}}
        >
          Contact
        </li>
        <li
          className={activeItem === 'UserProfile' ? 'active' : ''}
          onClick={() =>{ 
            handleNav()
            handleMenuClick('UserProfile')}}
        >
          UserProfile
        </li>
        <li
          className={activeItem === '/' ? 'active' : ''}
          onClick={() =>{
            handleLogout()
            handleMenuClick('/')}}

        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Nav;
