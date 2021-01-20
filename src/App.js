import React from 'react'

import IntroSection from './components/IntroSection'
import Logo from './components/Logo'
import PortfolioSection from './components/PortfolioSection'
import ServicesSection from './components/ServicesSection'
import TeamSection from './components/TeamSection'

const navs = [
  { text: 'Home' },
  { text: 'Services' },
  { text: 'Our Works' },
  { text: 'Clients' },
  { text: 'Contact' },
]

function App() {
  return (
    <div className="grid grid-rows-layout justify-items-center min-h-screen">
      <div className="flex justify-between items-center w-full max-w-screen-2xl px-8 py-10">
        <Logo />
        <div className="grid grid-cols-5 justify-items-center font-medium text-xl text-gray-600 gap-6">
          {navs.map(({ text }, index) => (
            <a href="#somewhere" key={index}>
              {text}
            </a>
          ))}
        </div>
      </div>
      <IntroSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <div className="text-center text-xs text-gray-400">
        Tung Teng @ DevChallenges.io
      </div>
    </div>
  )
}

export default App
