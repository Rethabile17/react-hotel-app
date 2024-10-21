import React, {useState} from "react";
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
    const [showForm, setShowForm] = useState(false); // Form visibility
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log("New Review Submitted:", { name, review, rating });
      // Reset form and hide it after submission
      setName("");
      setReview("");
      setRating(0);
      setShowForm(false);
    };

    return (

      <div>
        <h1 className="Reviews">Reviews</h1>
        <div className="rate">
            <div className="card-testimony">
                <div className="top-rating">
                    <img className="rate-image" src={Oberoi} alt="The Oberoi family" />
                                   <h4>
                            <b>The Oberoi family</b>
                        </h4>
                </div>
                    <div className="container">
                    
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
            <div className="top-rating">
                    <img className="rate-image" src={Kanye} alt="The Oberoi family" />
                                   <h4>
                            <b>Khanya</b>
                        </h4>
                </div>
                <div className="container">
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
            <div className="top-rating">
                    <img className="rate-image" src={Johnny} alt="The Oberoi family" />
                                   <h4>
                            <b>Johnny and Mie</b>
                        </h4>
                </div>
                <div className="container">
              
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
              
            <div className="top-rating">
                    <img className="rate-image" src={Akira} alt="The Oberoi family" />
                                   <h4>
                            <b>Akira</b>
                        </h4>
                </div>
                <div className="container">
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
        {showForm && (
          <form onSubmit={handleFormSubmit} className="review-form">
            <h5>Give us your review so that we can improve your stay</h5>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Review:
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Rating:
                <input
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  min="1"
                  max="5"
                  required
                />
              </label>
            </div>
            <button type="submit">Submit Review</button>
          </form>
        )}

        {/* Add Review Button */}
        <div className="form-container">
          <button className="form-button" onClick={() => setShowForm(true)}>
            Add Review
          </button>
        </div>
        </div>
    );
}

export default Rate;
