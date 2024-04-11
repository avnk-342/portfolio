import React from 'react'
import "./Project.css"

const Project = () => {
  return (
    <div className='project-main'>
      <div className='project-list-div'>
        <ul className='project-list'>
          <li className='project-list-item'>
            <div><p>Alzheimer project</p></div>
          </li>
          <li className='project-list-item'>
            <div><p>android calculator app</p></div>
          </li>
          <li className='project-list-item'>
            <div><p>Medi sync website</p></div>
          </li>
        </ul>
      </div>
      <div className='description'>
        <h2>Projects</h2>
      </div>
    </div>
  )
}

export default Project