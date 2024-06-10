import React from 'react'
import "./Skill.css"


const Skill = () => {
  let box = document.querySelector(".row-list")

  const btnNext = () =>{
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }

  const btnPrev = () =>{
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)
  }
 
  
  return (
    <div className="main">
        <div className="heading">
            <h2>Skills</h2>
        </div>
        <div className="carousel">
          <button className='nextbtn' onClick={btnNext}>Next</button>
          <div className="row-list">
            <div><p>Java</p></div>
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