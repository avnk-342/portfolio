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

        <div className="btns">
            <button onClick={prev}>
              <img src={prevImg} alt="" srcset="" />
            </button>
            <button onClick={next}>
              <img src={nextImg} alt="" />
            </button>
          </div>
      </div>
      
    </div>
  )
}

export default Project