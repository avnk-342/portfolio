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
      
      <div className='heading project-heading'>
        <h2>Projects</h2>
      </div>
      
      <div className='project-list-div'>
        
        <div className="carousel-list">
          <ul className='project-list'>
            
            <li><div className='project-card'>
              <div className="project-image">
                <img src="https://i.ibb.co/qNP3hL4/alzheimer-home.png" alt="alzheimer-home" />
              </div>
              <div className="project-info">
                <h4>Alzheimer Detection Website</h4>
                <p>A website to detect level of dementia from MRI scans. Made by React and uses machine learnin in API to predict level of dementia with ~70% accuracy</p>
                <a href="https://github.com/avnk-342/alzheimer_detection_ML.git">Know More</a>
              </div>
            </div></li>

            <li><div className='project-card'>
              <div className="project-image">
                <img src="https://i.ibb.co/QrmvzmP/encrypt-home.png" alt="encrypt-home"/>
              </div>
              <div className="project-info">
                <h4>Encrypt-n-Decrypt</h4>
                <p>It is a simple software helps to encrypt and decrypt text with help of user generated key. Its made with Python and used tkinter to create simple GUI in efficient time</p>  
                <a href="https://github.com/avnk-342/alzheimer_detection_ML.git">Know More</a>
              </div>
            </div></li>

            <li><div className='project-card'>
              <div className="project-image">
                <img src="https://i.ibb.co/kKbyw90/movie-recommender-home.png" alt="movie-recommender-home" />
              </div>
              <div className="project-info">
                <h4>Movie Recommendation System</h4>
                <p>A Recommendation system that list top 5 movies the user may like based on his first selection. Deployed using StreamLit with simple user interface. User NLTK and scikit-learn to create Recommendation system.</p>
                <a href="">Know More</a>
              </div>
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