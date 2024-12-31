import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from "./components/hero/Hero"
import Skill from './components/skill/Skill'
import Footer from './components/Footer/Footer'
import Project from './components/proj/Project'
import Navbar from './components/navbar/Navbar'
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpeedInsights/>
    <Navbar/>
    <Hero/>
    <Skill/>
    <Project/>
    <Footer/>
  </StrictMode>,
)
