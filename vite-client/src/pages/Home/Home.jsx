import React from 'react'
import Hero from "../../components/hero/Hero"
import Footer from '../../components/Footer/Footer'
import Project from '../../components/proj/Project'
import HistoryProfle from '../../components/HistoryProfile/HistoryProfle'

const Home = () => {
  return (
    <>
        <Hero/>
        <Project/>
        <HistoryProfle/>
        <Footer/>
    </>
  )
}

export default Home