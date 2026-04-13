import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import {useEffect, useState} from 'react'
import './App.css'



function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode === 'true'
  })

  //Guardar cambios
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  //Aplicar al body
  useEffect(() => {
    if(darkMode){
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

    <section id="hero">
      <Hero />
    </section>
      
    <section id="about">
      <About />
    </section>
    
    <section id="projects"> 
      <Projects />
    </section>
    
    <section id="contact">
      <Contact />
    </section>  
      
    <Footer />
    </>
  )
}

export default App