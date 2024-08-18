import React from 'react'
import "./Project.css"
import takeplace from "../../assets/developer-8764526_1280.jpg"

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
            <li><div className='project-card'>
              <img src={takeplace} alt="" />
              <p>Alzheimer detection</p>
            
            </div></li>
            <li><div className='project-card'>
              <img src={takeplace} alt="" />
              <p>Calculatir android app</p>
            </div></li>
            <li><div className='project-card'>
              <img src={takeplace} alt="" />
              <p>Movie Recommendation System</p>
            </div></li>
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