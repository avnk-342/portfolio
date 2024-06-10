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
                <li>Home</li>
                <li>Social</li>
                <li><button className="nav-contact-btn">Contact</button>
                  <div className="sub-menu-1">
                    <ul>
                      <li>Linkdin</li>
                      <li>Github</li>
                      <li>Email</li>
                    </ul>

                  </div>
                  
                </li>
            </ul>

            

        </div>
    </div>
  )
}

export default Navbar
