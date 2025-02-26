import React from 'react'
import Hero from "../../components/hero/Hero"
import Footer from '../../components/Footer/Footer'
import Project from '../../components/proj/Project'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Project/>
        <Footer/>
    </>
  )
}

export default Home