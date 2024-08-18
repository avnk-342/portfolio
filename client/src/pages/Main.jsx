import React from 'react'
import Hero from "../components/hero/Hero"
import Skill from '../components/skill/Skill'
import Footer from '../components/footer/Footer'
import Project from '../components/proj/Project'
// import Standing from '../components/standings/Standing'
const Main = () => {
  return (
    <div>
      <Hero/>
      <Skill/>
      
      <Project/>
      {/* <Standing/> */}
      <Footer/>
    </div>
  )
}

export default Main