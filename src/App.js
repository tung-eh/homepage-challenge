import React from 'react'

import Footer from './components/Footer'
import IntroSection from './components/IntroSection'
import Logo from './components/Logo'
import Navs from './components/Navs'
import PortfolioSection from './components/PortfolioSection'
import ServicesSection from './components/ServicesSection'
import TeamSection from './components/TeamSection'

function App() {
  return (
    <div className="grid grid-rows-layout justify-items-center min-h-screen">
      <div className="flex justify-between items-center w-full max-w-screen-2xl text-gray-700 px-8 py-10">
        <Logo />
        <div className="grid grid-cols-5 justify-items-center font-medium text-xl text-gray-600 gap-6">
          <Navs />
        </div>
      </div>
      <IntroSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default App
