import React from 'react'
import "./Skill.css"
import prevImg from "../../assets/arrow-prev.png"
import nextImg from "../../assets/arrow-next.png"


const Skill = () => {
  
  

  const btnNext = () =>{
    let box = document.querySelector(".row-list")
    box.scrollLeft = box.scrollLeft + 250;
  }

  const btnPrev = () =>{
    let box = document.querySelector(".row-list")
    box.scrollLeft = box.scrollLeft - 250;
  }
 
  
  return (
    <div className="main">
        <div className="heading">
            <h2>Skills</h2>
        </div>
        
        <div className="carousel">
          
          <ul className="row-list">
            <li><div className='skill-card'><p>Java</p></div></li>
            <li><div className='skill-card'><p>SQL</p></div></li>
            <li><div className='skill-card'><p>Python</p></div></li>
            <li><div className='skill-card'><p>React</p></div></li>
            <li><div className='skill-card'><p>Django</p></div></li>
            <li><div className='skill-card'><p>Django</p></div></li>
            <li><div className='skill-card'><p>Django</p></div></li>
            <li><div className='skill-card'><p>Django</p></div></li>
            <li><div className='skill-card'><p>Django</p></div></li>
            <li><div className='skill-card'><p>Django</p></div></li>
            <li><div className='skill-card'><p>Django</p></div></li>
            <li><div className='skill-card'><p>LOLOL</p></div></li>
          </ul>
          
          <div className="btns">
            <button onClick={btnPrev}>Prev</button>
            <button onClick={btnNext}>Next</button>
          </div>
          
        </div>
        
       
    </div>
  )
}

export default Skill