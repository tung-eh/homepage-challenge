import React from 'react'

import introImg from '../images/heroImage.jpg'

const IntroSection = () => (
  <div className="grid place-items-center gap-16 w-full py-14">
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
      <div className="grid gap-12 max-w-sm">
        <h1 className="text-5xl font-medium text-gray-600">
          Story, emotion and purpose
        </h1>
        <p className="text-gray-500">
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>
        <div>
          <div className="text-sm text-gray-400 mb-2">
            Want us to contact you
          </div>
          <div className="relative">
            <input
              className="bg-gray-100 text-gray-700 rounded-xl outline-none w-full py-4 pl-6 pr-12"
              placeholder="Email"
            />
            <button className="absolute top-1  right-1 bottom-1 bg-blue-500 text-white rounded-xl w-24">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IntroSection
