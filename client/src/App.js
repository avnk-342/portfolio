import './App.css';
import Main from "./pages/Main"
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
