import React from 'react'
import Hero from "../../components/hero/Hero"
import Footer from '../../components/Footer/Footer'
import Project from '../../components/proj/Project'
import AboutHero from '../../components/aboutHero/AboutHero'
import Skill from '../../components/skill/Skill'

const Home = () => {
  return (
    <>
        <Hero />
        <div className="relative z-20 rounded-t-[50px] bg-bg-light/50 backdrop-blur-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.2)] border-t border-white/20 p-6 md:p-12 pointer-events-auto text-text-dark">
          <Skill />
          <Project/>
          <Footer/>
        </div>
    </>
  )
}

export default Home