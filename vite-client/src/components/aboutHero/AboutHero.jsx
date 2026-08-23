import React from 'react'
import "./AboutHero.css"

const AboutHero = () => {
  return (
    <div id="about" class="about main">
        <h2 class="section-title fade-in"><span class="mono-accent">02.</span> About My Journey</h2>
        <div class="about-grid fade-in">
            <div class="about-text">
                <p>My engineering journey began in Quality Engineering and Assurance, where I developed a rigorous, detail-oriented approach to code. Now, my primary focus is strictly on backend development, where logic, efficient data handling, and robust architecture are paramount.</p>
                <p>I am deeply invested in mastering core principles, currently working through advanced Data Structures and Algorithms to optimize performance at scale. Beyond the codebase, I'm maintaining a strict discipline—whether that's hitting a push/pull/legs split at the gym, prepping for my IELTS and future Master's studies, or tinkering with home server configurations.</p>
            </div>
            
            <div class="terminal-window">
                <div class="terminal-header">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                </div>
                <div class="terminal-body">
                    <p><span class="prompt">guest@portfolio:~$</span> cat current_focus.txt</p>
                    <p class="output"> Mastering Java & Spring Boot ecosystems</p>
                    <p class="output"> Implementing custom FIFO logic for financial ETLs</p>
                    <p class="output"> Deep-diving into 'Introduction to Algorithms'</p>
                    <p><span class="prompt">guest@portfolio:~$</span> <span class="typing-cursor">_</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHero