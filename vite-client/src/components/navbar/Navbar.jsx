import './Navbar.css'


const Navbar = () => {
 

  return (
    <div className="nav_container">

        <div className = 'navbar'>
            <div className = "nav-logo">
              <p>AK</p>
            </div>
            <ul className= "nav-menu">
                <li><a href="https://drive.google.com/file/d/1rPWm8qOadRrM2U9oQWyWU8UOG2FI1TQK/view" target='_blank' >Resume</a></li>
                <li><a href="#projects">About</a></li>
                
            </ul>

            

        </div>
    </div>
  )
}

export default Navbar
