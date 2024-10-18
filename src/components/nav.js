import { useState } from 'react';
import '../components/nav.css';
const Nav = () => {
  const [activeItem, setActiveItem] = useState('Home'); // Set 'Home' as default active item
  const handleMenuClick = (item) => {
    setActiveItem(item); // Update active item when clicked
  };
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
          onClick={() => handleMenuClick('About')}
        >
          About
        </li>
        <li
          className={activeItem === 'Services' ? 'active' : ''}
          onClick={() => handleMenuClick('Services')}
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
          className={activeItem === 'Blog' ? 'active' : ''}
          onClick={() => handleMenuClick('Blog')}
        >
          Blog
        </li>
      </ul>
    </div>
  );
};

export default Nav;
