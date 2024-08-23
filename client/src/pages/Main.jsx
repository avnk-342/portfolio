import React from 'react'
import Hero from "../components/hero/Hero"
import Skill from '../components/skill/Skill'
import Footer from '../components/Footer/Footer'
import Project from '../components/proj/Project'

const Main = () => {
  return (
    <div>
      <Hero/>
      <Skill/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default Main