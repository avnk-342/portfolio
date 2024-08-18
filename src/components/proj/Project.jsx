import React from 'react'
import "./Project.css"
import prevImg from "../../assets/arrow-prev.png"
import nextImg from "../../assets/arrow-next.png"

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
      
      <div className='heading project-heading'>
        <h2>Projects</h2>
      </div>
      
      <div className='project-list-div'>
        
        <div className="carousel-list">
          <ul className='project-list'>
            <div className='project-card'><li><p>Alzheimer detection</p></li></div>
            <div className='project-card'><li><p>Calculatir android app</p></li></div>
            <div className='project-card'><li><p>Movie Recommendation System</p></li></div>
          </ul>
        </div>

        <div className="btns">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
      </div>
      
    </div>
  )
}

export default Project