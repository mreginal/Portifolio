import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Design from "./pages/Projects/Design.jsx"
import Website from "./pages/Projects/Website.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/website" element={<Website/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
