import React from 'react'
import './Project.css'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../../config/firestore'

const Project = () => {
  const [projects, setProjects] = useState([])
  const projectCollectionRef = collection(db, 'project_info')

  const getProjects = async () => {
    try {
      const data = await getDocs(projectCollectionRef)
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setProjects(filteredData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <div id="projects" className="projects main">
      <h2 className="section-title fade-in">
        Engineering Projects
      </h2>

      <div className="project-list">
        {projects.map((project, index) => {
          const techList = Array.isArray(project.tech_stack)
            ? project.tech_stack
            : typeof project.tech_stack === 'string'
              ? project.tech_stack.split(',').map((tech) => tech.trim()).filter(Boolean)
              : []

          return (
            <div
              key={project.id || `${project.name}-${index}`}
              className={`project-feature ${index % 2 !== 0 ? 'reverse' : ''} fade-in`}
            >
              <div className="project-content">
                <p className="project-overline">{project.type || 'Featured Project'}</p>
                <h3>{project.name}</h3>

                <div className="project-description">
                  <p>{project.description}</p>
                </div>

                {techList.length > 0 && (
                  <ul className="project-tech-list">
                    {techList.map((tech, techIndex) => (
                      <li key={`${project.name}-${tech}-${techIndex}`}>{tech}</li>
                    ))}
                  </ul>
                )}

                <div className="project-links">
                  {project.git_link && (
                    <a href={project.git_link} target="_blank" rel="noreferrer" title="View project on GitHub">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  )}

                  {project.case_study_link && (
                    <a href={project.case_study_link} title="Read Case Study">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Project