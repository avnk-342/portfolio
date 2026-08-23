import React from 'react'
import Hero from "../../components/hero/Hero"
import Footer from '../../components/Footer/Footer'
import Project from '../../components/proj/Project'
import AboutHero from '../../components/aboutHero/AboutHero'
import Skill from '../../components/skill/Skill'

const Home = () => {
  return (
    <>
        <Hero/>
        <AboutHero/>
        <Skill/>
        <Project/>
        <Footer/>
    </>
  )
}

export default Home