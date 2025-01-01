import React from 'react'
import "./Project.css"
import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from 'react';
import { db } from '../../config/firestore'

const Project = () => {
  const [projects, setProjects] = useState([]);
  const projectCollectionRef = collection(db, "project_info")
  
  const getProjects = async () => {
    try {

      const data = await getDocs(projectCollectionRef)
      const filteredData = data.docs.map((doc) => ({...doc.data()}))
      setProjects(filteredData)

    } catch (error) {
      console.error(error)
    }
    
  }

  useEffect(() => {
    getProjects()
  }, []); 
  
  return (
    <div className='project-main' id='projects'>
      <h1 className='heading-project'>Projects</h1>
      <div className='project-list-row-2'>
        {projects.map((project,index)=>(
          <a href={project.git_link} target='_blank' className='project_links' title='view project on github'>
            <div className='col' key={index}>
              <img src={project.image_link} alt="" />
              <h4> {project.name} </h4>
              <p> {project.description} </p>
            </div>
          </a>
        ))}
      </div>
      
    </div>
  )
}

export default Project