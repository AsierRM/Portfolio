import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
    <Navbar />

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