import React from "react";
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";
import faceBook from "../images/Facebook (1).png";
import X from "../images/TwitterX.png";
import instagram from "../images/Instagram.png";
import linkedin from "../images/LinkedIn.png";
import Whatsapp from "../images/WhatsApp.png";
import YouTub from "../images/YouTube.png";
import Right from "../images/Copyright All Rights Reserved.png";
import "./footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="connect">
        <div>
          <img src={logo} className="logo"/>
        </div>
        <div>
          <h1>
            Royal <span>king & Queen Hotel</span>
          </h1>
          <div>
            <img src={Right}/>
          <p>All right reserved</p>
          </div>
         
        </div>
        <div>
          <p> Home</p>
          <p> About</p>
          <div>
            <p>Contact</p>
            <p>+0682104225</p>
            <p>RoyalKing&Queenhotel@gmail.com</p>
          </div>
          <div>
            <p>follow us</p>
            <di>
            <img className="sites-image" src={faceBook} />
            </di>
            <di>
            <img className="sites-image" src={X} />
              </di>
            <di>
            <img className="sites-image" src={instagram} />
            </di>
            <di>
            <img className="sites-image" src={linkedin} />
            </di>
            <di>
            <img className="sites-image" src={Whatsapp} />
            </di>
            <di>
            <img className="sites-image" src={YouTub} />
            </di>
          </div>
        </div>
      </div>
      <div className="reviews"></div>
      <div className="map"></div>
    </div>
  );
}

export default Footer;
