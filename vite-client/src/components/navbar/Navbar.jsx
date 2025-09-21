import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
 

  return (
    <div className="nav_container">

        <div className = 'navbar'>
            <div className = "nav-logo">
              {/* <p>AK</p> */}
              <NavLink className="logo-navlink" to="/" end>AK</NavLink>
            </div>
        </div>
        {/* <div className="nav-links-div">
          <ul className='nav-links-list'>
            <li ><NavLink className='nav-links-list-element' to="/" end>Home</NavLink></li>
            <li ><NavLink className='nav-links-list-element' to="/about">About</NavLink></li>
          </ul>
        </div> */}
    </div>
  )
}

export default Navbar
