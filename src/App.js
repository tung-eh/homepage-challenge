import React from 'react'

import Footer from './components/Footer'
import IntroSection from './components/IntroSection'
import Navbar from './components/Navbar'
import PortfolioSection from './components/PortfolioSection'
import ServicesSection from './components/ServicesSection'
import TeamSection from './components/TeamSection'

function App() {
  return (
    <div
      className="grid grid-rows-layout justify-items-center min-h-screen"
      id="home"
    >
      <Navbar />
      <IntroSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default App
