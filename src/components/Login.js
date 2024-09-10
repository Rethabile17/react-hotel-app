

function Login() {
  return (
    <div className="Login">
        <div className="title">
            <h1>welcome</h1>
            <p>login</p>
            <div>
                <input className="inputEmail" type="text" value="email" placeholder="Email"/>
                <input className="inputPassword" type="text" value="password" placeholder="password"/>
                <p>Forgot password ?</p>
                </div>
                <div>
                    <input className="inputButton" type="Button" value="Login"/>
                    <p>Do not have yet? <span className="register">Register</span></p>
                    
                </div>
        </div>
        <div className="image"></div>
      
    </div>
  );
}

export default  Login;
