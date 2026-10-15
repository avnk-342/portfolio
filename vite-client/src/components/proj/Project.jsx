import React from 'react'
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
    <div id="projects" className="mt-25">
      <h2 className="font-mono text-xl underline">
        Engineering Projects
      </h2>

      <div className="flex flex-col gap-8 mt-10">
        {projects.map((project, index) => {
          const techList = Array.isArray(project.tech_stack)
            ? project.tech_stack
            : typeof project.tech_stack === 'string'
              ? project.tech_stack.split(',').map((tech) => tech.trim()).filter(Boolean)
              : []

          return (
            <div
              key={project.id || `${project.name}-${index}`}
              className={`relative flex items-center rounded-lg bg-light-cards p-6 ${index % 2 !== 0 ? 'flex-row-reverse' : ''} fade-in`}
            >
              <div className="project-content">
                <p className="mb-2 font-mono text-[0.9rem] text-primary">{project.type || 'Featured Project'}</p>
                <h3 className="mb-3 text-[1.8rem]">{project.name}</h3>

                <div className="mb-6 rounded bg-bg-light p-3">
                  <p className="text-justify">{project.description}</p>
                </div>

                {techList.length > 0 && (
                  <ul className="mb-1 flex list-none gap-6 font-mono text-[0.85rem]">
                    {techList.map((tech, techIndex) => (
                      <li key={`${project.name}-${tech}-${techIndex}`}>{tech}</li>
                    ))}
                  </ul>
                )}

                <div className="flex gap-4 text-[1.3rem]">
                  {project.git_link && (
                    <a className="text-text-bright transition-colors hover:text-primary" href={project.git_link} target="_blank" rel="noreferrer" title="View project on GitHub">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  )}

                  {project.case_study_link && (
                    <a className="text-text-bright transition-colors hover:text-primary" href={project.case_study_link} title="Read Case Study">
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