import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from "./components/hero/Hero"
import Skill from './components/skill/Skill'
import Footer from './components/Footer/Footer'
import Project from './components/proj/Project'
import Navbar from './components/navbar/Navbar'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import IndividualProject from './pages/Projects/IndividualProject'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/project/:id",
      element: <IndividualProject/>
    }
  ]

  // createRoutesFromElements(
  //   <Route path="/" element={<Home />}>
  //     <Route path="/about" element={<About />} />
  //   </Route>
  // )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <SpeedInsights/>
  </StrictMode>,
)
