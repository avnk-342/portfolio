import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
 

  return (
    <div className="nav_container">

        <div className = 'navbar'>
            <div className = "nav-logo">
              <p>AK</p>
            </div>
        </div>
        <div className="nav-links-div">
          <ul className='nav-links-list'>
            <li ><Link className='nav-links-list-element' to="about">About</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
