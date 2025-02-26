import {Link} from 'react-router-dom'
import "./About.css"
import pfp from "../../assets/developer-image.jpg"

const About = () => {
  return (
      <div>
        <div className='about-section-nav'>
          <Link to="/" className='back-button' >/Back</Link>
        </div>

        <div className='about-section-main-container'>
          <div className='about-section-holder-div'>
            <div className='photo-intro'>
              <img src={pfp} alt="" />
              <h4>Anmol Koundal</h4>
            </div>
          </div>
        </div>
        
      </div>
    
  )
}

export default About