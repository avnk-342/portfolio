// import logo from "/home/vodkov/myFiles/gitRepos/portfolio/client/src/assets/logo_sample.png"
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
 

  return (
    <div className="nav_container">

        <div className = 'navbar'>
            <div className = "nav-logo">
                {/* <img src={logo} alt="" /> */}
            </div>
            <ul className= "nav-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            

        </div>
    </div>
  )
}

export default Navbar
