import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import IndividualProject from './pages/Projects/IndividualProject'

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navbar/>
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/project/:id' element={<IndividualProject/>} />
                {/* <Route path='*' element={<page404/>} /> for handling 404 page */}
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App