import React from 'react'
import "./Skill.css"


const Skill = () => {
 
  
  return (
    <div className="main">
        <div className="heading">
            <h2>Skills</h2>
        </div>
        <div className="carousel enable-animation">

            <ul className='list-skill marquee__content'>
              <li className="list-item-skill li1">
                <div><p>Java</p></div>
              </li>
              <li className="list-item-skill li2">
                <div><p>SQL</p></div>
              </li>
              <li className="list-item-skill li3">
                <div><p>Python</p></div>
              </li>
              <li className="list-item-skill li4">
                <div><p>React</p></div>
              </li>
              <li className="list-item-skill li5">
                <div><p>Django</p></div>
              </li>
            </ul>
          
        </div>
    </div>
  )
}

export default Skill