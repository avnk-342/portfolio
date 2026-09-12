import React, { useState } from 'react'
import "./TimeLine.css"

const TimeLine = ({ items }) => {

  return (
    <div className='timeline-main-div'>
        {items.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
                <spam className="timeline-date">{item.date}</spam>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                <p className="timeline-description">{item.description}</p>
            </div>
          </div>  
        ))}
    </div>
  )
}

export default TimeLine