import './App.css';
import Main from "./pages/Main"
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Resume from './pages/Resume';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path='/resume' element={<Resume/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
