import React, { useState } from 'react'
import TimeLine from '../TimeLine/TimeLine'
import "./HistoryProfile.css"

const HistoryProfle = () => {
    
    const data = {
        experience: [
            { date: 'May 2025 - July 2025', title: 'Flutter Developer', subtitle: 'Reto India'}
        ],
        education: [
            { date: 'September 2021 - Auguest 2025', title: 'B.Tech CSE', subtitle: 'Amity University Mumbai'}
        ]
    }

  return (
    <div className='historyProfle'>
        <div className='tabControls'>
            <div className='tab-item'>Education</div>
            <div className='tab-item'>Experience</div>
        </div>

        <div className='timeline-view'>
            <div className='timelineView-div1'><TimeLine items={data["experience"]} /></div>
            <div className='timelineView-div2'><TimeLine items={data["education"]} /></div>
            
        </div>

    </div>
  )
}

export default HistoryProfle