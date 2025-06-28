import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Skills from './pages/Skills'
import Footer from './components/Footer'
import EducationTimeline from './pages/EducationTimeline'
import Pages from './pages/pages'

function App() {

  return (
    <div>
      <Navbar />
      {/* 
      <Home />
      <About />
      <EducationTimeline/>
      <Skills />
      <Projects />
      <Contact />
      */}
     
      <Routes>
        <Route path="/" element={<Pages />} />  
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/skill" element={<Skills />} /> 
      </Routes>
    
      <Footer />
    </div>
  )
}

export default App;
