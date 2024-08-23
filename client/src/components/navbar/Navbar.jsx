import './Navbar.css'


const Navbar = () => {
 

  return (
    <div className="nav_container">

        <div className = 'navbar'>
            <div className = "nav-logo">
              <img src="https://i.ibb.co/1Qy0zMz/logo5-removebg-preview.png" alt="logo5-removebg-preview"/>
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
