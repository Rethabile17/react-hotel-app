import React from "react";
import Oberoi from "../images/family.png";
import Kanye from "../images/05-12-21-happy-people.png";
import Johnny from "../images/depositphotos_25350645-Happy-Couple.png";
import Akira from "../images/Happiest+person+in+the+world.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import the star icon
import "./rate.css";

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {Array.from({ length: 5 }, (_, index) => (
                <FontAwesomeIcon 
                    key={index} 
                    icon={faStar} 
                    color={index < rating ? "#FFD700" : "#D3D3D3"} // Gold for filled stars, light grey for empty stars
                />
            ))}
        </div>
    );
};

function Rate() {
    return (

      <div>
        <h1 className="Reviews">Reviews</h1>
        <div className="rate">
            <div className="card-testimony">
                <img className="rate-image" src={Oberoi} alt="The Oberoi family" />
                <div className="container">
                    <h4>
                        <b>The Oberoi family</b>
                    </h4>
                    <p>
                        "My family and I had an amazing stay at this hotel. The warm
                        hospitality, comfortable accommodations, and excellent amenities
                        truly made us feel at home. It's easy to see why we're giving this
                        hotel a 5-star rating! We can't wait to return for another
                        unforgettable experience."
                    </p>
                    <StarRating rating={5} />
                </div>
            </div>

            <div className="card-testimony">
                <img className="rate-image" src={Kanye} alt="Kanye" />
                <div className="container">
                    <h4>
                        <b>Kanye</b>
                    </h4>
                    <p>
                        "This hotel is on another level! The energy here is unmatched, and
                        the service is phenomenal. From the luxurious rooms to the
                        incredible amenities, every detail is designed to impress. I'm giving
                        this place 5 stars without a doubt. I will be back to recharge and
                        create!"
                    </p>
                    <StarRating rating={5} />
                </div>
            </div>

            <div className="card-testimony">
                <img className="rate-image" src={Johnny} alt="Johnny & Mia" />
                <div className="container">
                    <h4>
                        <b>Johnny & Mia</b>
                    </h4>
                    <p>
                        "Johnny and I had a lovely honeymoon at this hotel. The romantic
                        atmosphere and attentive service made our stay special. While there
                        were a few minor hiccups, we appreciated the comfortable
                        accommodations and beautiful surroundings. We happily give this
                        hotel 4 stars and look forward to returning for more memorable
                        moments."
                    </p>
                    <StarRating rating={4} />
                </div>
            </div>

            <div className="card-testimony">
                <img className="rate-image" src={Akira} alt="Akira" />
                <div className="container">
                    <h4>
                        <b>Akira</b>
                    </h4>
                    <p>
                        "I had a wonderful stay at this hotel and would give it 4.5 stars! The
                        amenities exceeded my expectations. I also enjoyed the delicious
                        breakfast and had a blast at the gym. The skydiving experience was
                        thrilling. There were just a couple of small things that could be
                        improved, but overall, it was a fantastic experience. I can't wait
                        to come back!"
                    </p>
                    <StarRating rating={4.5} />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Rate;
