import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../components/nav.css';

const Nav = () => {
  const [activeItem, setActiveItem] = useState('Home'); // Set 'Home' as default active item
  const handleMenuClick = (item) => {
    setActiveItem(item); // Update active item when clicked
  };

  const navigate = useNavigate();


  const handleNav = () =>{
    navigate("/userprofile")
  }

  const handleAbout = () =>{
    navigate("/about")
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
        <h1>Logo</h1>
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
          onClick={() => handleMenuClick('Contact')}
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
