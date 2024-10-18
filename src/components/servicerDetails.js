import React from "react"; 
import Rate from "./rate";
import "./servicerDetails.css";

import Hotel from "../images/view-luxurious-hotel-hallway.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faCoffee , faBroom, faSwimmer , faDumbbell,faCar ,faSoap ,faSpa   } from '@fortawesome/free-solid-svg-icons';

function servicerDetails() {
  return (
    <div className="container">

<h1 className="servicerDetails-head" style={{ color:"#201719"}}>Hotel Amenities & Services</h1>

<p className="facility-p">Our hotel offers a range of top-notch facilities designed to enhance your stay. Enjoy seamless connectivity with complimentary Wi-Fi, relax by our inviting swimming pool, and take advantage of convenient on-site parking. Whether you're here for business or leisure, our amenities cater to all your needs for a comfortable and enjoyable experience.</p>
    <div className="servicerDetails">
     
        <div>
          
        <FontAwesomeIcon icon={faWifi} />
          <br>
          </br>

         
        </div>
        <div>
          
        <FontAwesomeIcon icon={faCoffee} />;
        </div>

        <div>
        <FontAwesomeIcon icon={faBroom} />;
        </div>

        <div>
        <FontAwesomeIcon icon={faSwimmer } />;
        </div>

        <div>
        <FontAwesomeIcon icon={faDumbbell  } />;
        </div>


        <div>
        <FontAwesomeIcon icon={faCar  } />;
        </div>

        <div>
        <FontAwesomeIcon icon={faSoap  } />;
        </div>

        <div>
        <FontAwesomeIcon icon={faSpa  } />;
        </div>

      
    </div>
   

    </div>
  );
}

export default servicerDetails;
