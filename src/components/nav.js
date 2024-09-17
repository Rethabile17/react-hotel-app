import  React from 'react'
import "./nav.css"

function Nav() {
  return (
    <div className='navbar'>
       

        <div className="menu">
        <ul>
          
            <li><a>Home</a></li>
            <li><a>About</a></li>
        </ul>
        </div>

        <div  className="menu">
            <button>Logout</button>
        </div>
       

    </div>
  )
}

export default Nav