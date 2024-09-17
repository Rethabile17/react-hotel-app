import  React from 'react'
import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";
import "./rooms.css";


function Rooms() {
  return (
    <div className='room'>
        <div className='room-page'>
            <div className='room-top'>
                <div className='room-top-part'>
                    <div>
                    <img className="room-top-logo" src={logo} alt="" />
                   </div>

                   <div>
                   <p>Single Rooms area</p>
                   </div>


                   <div>
                   <button>back to home</button>
                   </div>
                
                </div>

            </div>

        </div>
    </div>
  )
}

export default Rooms