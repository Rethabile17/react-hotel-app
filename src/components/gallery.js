import React from "react";
import Fun from "../images/Indoor-Adventure-Parks.png";
import Golf from "../images/gpirst-spring-golf-pair-resort-in-distance.png";
import Sky from "../images/3-2-crop-girl-skydiving-in-black-tank-top.png";
import Flying from "../images/best-hot-air-balloon-rides-cappadocia-turkey.png";
import gym from "../images/four-seasons-hotel-seoul_photo-via-booking-dot-com.png";
import pool from "../images/Disneys-Coronado-Springs-Resort_Full_8203.png";
import spa from  "../images/south-africa-spa-hotels-555x322.png";
import Breakfast from "../images/petit_dej_main.png";
import "./gallery.css";

function Sites() {
  
  return (

    <>

    <h1 style={{textAlign:"center" , color:"#201719"}}>Gallery</h1>
    <p className="gallery-p">Explore the beauty and charm of our hotel through our curated photo gallery. From elegant rooms and serene pools to vibrant dining spaces and stunning views, get a glimpse of the exceptional experiences that await you.</p>
    <div className="Sites">
         
    <div className="gallery">

    
        <div>
        <img className="sites-image"  src={Fun} />
        </div>

        <div>
        <img  className="sites-image" src={pool} />
        </div>

        <div>
        <img className="sites-image" src={Sky} />

        </div>

        <div>
        <img className="sites-image" src={Breakfast} />
        </div>
        
        <div>
        <img  className="sites-image" src={Golf} />
        </div>

        <div>
        <img className="sites-image"  src={gym} />
        </div>


        <div>
        <img className="sites-image" src={spa} />
        </div>

        <div>
        <img className="sites-image" src={Flying} />
        </div>
       
        <div>
        <img className="sites-image" src="https://colossal-caracara.transforms.svdcdn.com/staging/blog/hotel-activities.jpg?w=2880&h=1168&auto=compress%2Cformat&fit=crop&dm=1683894539&s=35661edbcfeab60623d44fa7816480d9" />
        </div>

        <div>
        <img className="sites-image" src="https://www.thealexhotel.ie/wp-content/uploads/sites/4/2018/02/shutterstock_646581520.jpg" />
        </div>
      
    </div>
  
    </div>

    </>
  );
}

export default Sites;
