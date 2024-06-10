import React from 'react'
import "./Skill.css"


const Skill = () => {
  
  

  const btnNext = () =>{
    let box = document.querySelector(".row-list")
    box.scrollLeft = box.scrollLeft + 70;
  }

  const btnPrev = () =>{
    let box = document.querySelector(".row-list")
    box.scrollLeft = box.scrollLeft - 70;
  
    console.log()
  }
 
  
  return (
    <div className="main">
        <div className="heading">
            <h2>Skills</h2>
        </div>
        <div className="carousel">
          <button className='nextbtn' onClick={btnNext}>Next</button>
          <div className="row-list">
            <div><p className='testdiv'>Java</p></div>
            <div><p>SQL</p></div>
            <div><p>Python</p></div>
            <div><p>React</p></div>
            <div><p>Django</p></div>
            <div><p>Django</p></div>
            <div><p>Django</p></div>
            <div><p>Django</p></div>
            <div><p>Django</p></div>
            <div><p>Django</p></div>
            <div><p>Django</p></div>
            <div><p>LOLOL</p></div>
          </div>
          <button className='prevbtn' onClick={btnPrev}>Prev</button>        
        </div>
    </div>
  )
}

export default Skill