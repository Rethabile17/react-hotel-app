import React from "react";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // Import social icons

import Right from "../images/Copyright All Rights Reserved.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <img src={logo} className="footer-img" alt="logo of the hotel" />
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Gallery</a>
        </div>
        <div className="contact-container">
          <h1 className="contact-header">Contact</h1>
          <p>+27 68 342 3344</p>
          <p>royalK&Q@gmail.com</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55988.402628792384!2d24.7201792!3d-28.7113216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b100a817a6cdf%3A0xacd6d3d2b14fb524!2sIbhotwe%20Guest%20House!5e0!3m2!1sen!2sza!4v1729499042872!5m2!1sen!2sza"
            width="600"
            height="250"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
