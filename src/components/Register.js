import logo from "../images/Gold_Exclusive_Royal_Luxury_Hotel_Logo-removebg-preview 2.png";
import google from "../images/Google (1).png";
import apple from "../images/Apple Logo.png";
import Image01 from "../images/city-background-panoramic-view.png";
import "./Register.css"
function Register() {
    return (
      <div className="register">
      <div className="register-page">
        <div className="register-half1">
          <div className="register-half1-top">
            <h1>Welcome Back</h1>
            <div>
              <img src={logo} />
            </div>
          </div>
          <div className="register-half1-bottom">
            <input className="register-half1-bottom-input" type="text" placeholder="fullName" />
            <input className="register-half1-bottom-input" type="text" placeholder="email address" />
            <input className="register-half1-bottom-input" type="text" placeholder="password" />
            <button className="register-button">Create Account</button>
            <p className="register-p">Already have an account ?  <span className="register-login">Login</span></p>
            <p><span><img className="register-image" src={google} alt="" /></span> or <span><img className="register-image" src={apple} alt="" /></span></p>
          </div>
        </div>
        <div className="register-page-half2">
          <img
            className="register-page-image"
            src={Image01}
            alt="A panoramic view of the city"
          />
        </div>
      </div>
    </div>
    );
  }
  
  export default  Register;