import React from 'react'
import Navbar from '../components/Navbar';
import Home from './Home';
import About from './About';
import EducationTimeline from './EducationTimeline';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../components/Footer';

const Pages = () => {
    return (
        <div>
            <Home />
            <About />
            <EducationTimeline />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Pages;