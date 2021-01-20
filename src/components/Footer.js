import React from 'react'

import ContactForm from './ContactForm'
import Icon from '../Icon'
import Logo from './Logo'
import Navs from './Navs'

const Footer = () => (
  <div className="grid place-items-center bg-blackrussian w-full">
    <div className="w-full max-w-screen-xl text-white p-8">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between my-8 mb-28">
        <div className="grid gap-2">
          <Navs />
        </div>
        <div>
          <Logo className="mb-3" />
          <div className="grid grid-cols-3 gap-2">
            <Icon className="w-6 h-6" name="instagram" />
            <Icon className="w-6 h-6" name="linkedin" />
            <Icon className="w-6 h-6" name="twitter" />
          </div>
        </div>
        <ContactForm className="max-w-xs" />
      </div>
      <div className="text-center text-xs text-gray-300">
        Tung Teng @ DevChallenges.io
      </div>
    </div>
  </div>
)

export default Footer
