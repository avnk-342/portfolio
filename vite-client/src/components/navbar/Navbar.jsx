import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
 

  return (
    <div className="nav_container">

        <div className = 'navbar'>
            <div className = "nav-logo">
              <NavLink className="logo-navlink" to="/" end><h1>&lt;AK<span className='logo-span'>/</span>&gt;</h1></NavLink>
            </div>
        </div>

        <div className="nav-links-div">
          <ul className='nav-links-list'>
            <li ><NavLink className='nav-links-list-element' to="/" end>Home</NavLink></li>
            <li ><NavLink className='nav-links-list-element' to="/" end>About</NavLink></li>
            <li ><NavLink className='nav-links-list-element' to="/" end>Experties</NavLink></li>
            <li ><a className='nav-links-list-element' href="#" onClick="scrollToDiv">Projects</a></li>
            <li ><NavLink className='nav-links-list-element' to="/" end>Contact</NavLink></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
