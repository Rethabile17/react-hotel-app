import "./Home.css"

function Home() {
    return (
      <div className="home">
        <div className="hero">
            <div className="navbar">
                <div>
                    <h1>Logo</h1>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>
                                <a href="">ROYAL KING & QUEEN HOTEL</a>
                            </li>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <div>
                                <input className="home-button" type="button" value="Log out"/>
                            </div>
                        </ul>
                    </div>
            </div>
            <div className="heard">
            WELCOME  TO THE PLACE WHERE GRAND
            MEET AFFORDABILITY 
            </div>
        </div>
          
      </div>
    );
  }
  
  export default Home;