import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Features from './components/Features/Features'
import About from './components/About/About'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Team from './components/Team/Team'
import ContactMe from './components/ContactMe/ContactMe'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header />
      <Features />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Team />
      <ContactMe />
    </>
  )
}

export default App