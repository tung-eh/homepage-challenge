import React from 'react'

import ContactForm from './ContactForm'
import introImg from '../images/heroImage.jpg'

const IntroSection = () => (
  <div className="grid place-items-center gap-16 w-full py-14 mb-6">
    <div className="w-full max-w-screen-xl font-medium px-8">
      <h2 className="text-blue-400 mb-6">Unhappy with your website?</h2>
      <h1 className="text-5xl text-gray-600 max-w-xl">
        We create beautiful and fast web services
      </h1>
    </div>
    <div className="w-full max-w-screen-2xl px-8">
      <img className="w-full rounded-xl" src={introImg} alt="meeting" />
    </div>
    <div className="w-full max-w-screen-xl px-8">
      <div className="grid gap-12">
        <h1 className="text-5xl font-medium text-gray-600">
          Story, emotion and purpose
        </h1>
        <p className="text-gray-500 max-w-lg">
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>
        <ContactForm className="text-gray-400" />
      </div>
    </div>
  </div>
)

export default IntroSection
