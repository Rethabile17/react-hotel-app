
import "./Forgot.css"

function Forgot() {
    return (
      <div className="forgot3">
          <div className="title3">
            <div>
              <h1>forgot password ?</h1>
              <p>logo</p>
              <p>Enter your email below to receive password reset instruction</p>
              </div>
  
              <div className="input-text3">
                  <input className="inputs3" type="text" value="email" placeholder="Email"/>
                  </div>
                  <br></br>
                  <div>
                      <input className="inputButton3" type="Button" value="Send"/>
                      
                  </div>
          </div>
          <div className="forgot-image"></div>
        
      </div>
    );
  }
  
  export default  Forgot;
  