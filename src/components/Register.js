
import "./Register.css"

function Register() {
    return (
      <div className="Login2">
          <div className="title2">
              <p>login</p>
              <div>
                <input className="inputFullName2" type="text" value="email" placeholder="FullName"/>
                  <input className="inputEmail2" type="text" value="email" placeholder="Email"/>
                  <input className="inputPassword2" type="text" value="password" placeholder="password"/>
                  </div>
                  <div>
                      <input className="inputButton2" type="Button" value="Create Account"/>
                      <p>Already have an account? <span className="register2">Login</span></p>
                      <p>or</p>
                  </div>
          </div>
          <div className="image2"></div>
        
      </div>
    );
  }
  
  export default  Register;