import React from 'react'
import "./Standing.css"

const Standing = () => {
  

  return (
    <div className='maind'>
        <div className="description-standing">
            <h2>Standings</h2>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className='div-list'>
            <ul className='standing-list'>
                <li className='standing-list-item'>
                  <div>
                    <p>CodeForces</p>
                  </div></li>
                <li className='standing-list-item'>
                  <div>
                    <p>Kaggle</p>
                    <a href="https://www.kaggle.com/user32132"><button>know more</button></a>
                  </div></li>
                <li className='standing-list-item'>
                  <div>
                    <p>LeetCode</p>
                  </div></li>
            </ul>
        </div>
    </div>
  )
}

export default Standing