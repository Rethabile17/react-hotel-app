import "../components/hero.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const handleNav = () =>{
    navigate('/rooms')
  }
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
        Experience Unmatched Comfort and Exceptional Service, Where Every Stay Feels Like a Getaway.
        </h1>
        <button className="btn-hero" onClick={handleNav}>Rooms</button>
      </div>
    </div>
  );
};
export default Hero;