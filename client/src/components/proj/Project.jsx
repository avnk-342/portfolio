import React from 'react'
import "./Project.css"

const Project = () => {
  let movement = 500;
  const prev = () =>{
    let list = document.querySelector(".project-list");
    list.scrollLeft -= movement; 
  }

  const next = () =>{
    let list = document.querySelector(".project-list");
    list.scrollLeft += movement;
  }

  return (
    <div className='project-main'>
      
      <div className='description'>
        <h2>Projects</h2>
      </div>
      
      <div className='project-list-div'>
        
        <div className="carousel-list">
          <ul className='project-list'>
            <li><div className='project-card'><p>Alzheimer detection</p></div></li>
            <li><div className='project-card'><p>Alzheimer detection</p></div></li>
            <li><div className='project-card'><p>Alzheimer detection</p></div></li>
            <li><div className='project-card'><p>Alzheimer detection</p></div></li>
            <li><div className='project-card'><p>Alzheimer detection</p></div></li>
          </ul>
        </div>

        <div className='btns'>
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
      </div>
      
    </div>
  )
}

export default Project