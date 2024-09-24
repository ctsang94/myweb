import { useState } from 'react'
import './App.css'
import Aboutme from './components/Aboutme/Aboutme'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header/>
      <Hero />
      <Projects/>
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
