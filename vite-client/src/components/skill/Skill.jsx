import React from 'react'
import "./Skill.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase, faNetworkWired } from '@fortawesome/free-solid-svg-icons';


const Skill = () => {
  
  

  const btnNext = () =>{
    let box = document.querySelector(".row-list")
    box.scrollLeft += 250;
  }

  const btnPrev = () =>{
    let box = document.querySelector(".row-list")
    box.scrollLeft -= 250;
  }
  // setInterval(btnNext,2000)
 
  
  return (
    <div id="expertise" class="expertise">
        <h2 class="section-title fade-in">Technical Arsenal</h2>
        <div class="expertise-container fade-in">
            <div class="glass-card">
                <FontAwesomeIcon icon={faServer} className='card-icon' />
                <h3>Core Backend</h3>
                <p>Designing scalable, decoupled microservices and monolithic architectures with a focus on maintainability.</p>
                <div class="tech-stack">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>Python</span>
                </div>
            </div>

            <div class="glass-card">
                <FontAwesomeIcon icon={faDatabase} className='card-icon' />
                <h3>Data Engineering</h3>
                <p>Building automated extraction, normalization, and classification pipelines for complex datasets.</p>
                <div class="tech-stack">
                    <span>Pandas</span>
                    <span>ETL</span>
                    <span>SQL</span>
                </div>
            </div>

            <div class="glass-card">
                <FontAwesomeIcon icon={faNetworkWired} className='card-icon' />
                <h3>Infrastructure & Algorithms</h3>
                <p>Deploying self-hosted solutions and writing optimized, algorithmically sound code for intensive computations.</p>
                <div class="tech-stack">
                    <span>DSA</span>
                    <span>Linux</span>
                    <span>QEA</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill