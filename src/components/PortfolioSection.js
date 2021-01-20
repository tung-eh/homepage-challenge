import React from 'react'

import Icon from '../Icon'
import bookingImg from '../images/booking.png'
import juiceImg from '../images/juice-product.png'
import onboardImg from '../images/onboard.png'
import smarthomeImg from '../images/smarthome.jpg'

const projects = {
  shDashboard: {
    type: 'Full stack application',
    name: 'Smart home dashboard',
    image: smarthomeImg,
  },
  obApp: {
    type: 'UX/UI design',
    name: 'Onboard application',
    image: onboardImg,
  },
  bkSystem: {
    type: 'Mobile application',
    name: 'Booking system',
    image: bookingImg,
  },
  jpHomepage: {
    type: 'Front End application',
    name: 'Juice product homepage',
    image: juiceImg,
  },
}

const Project = ({ type, name, image, noMargin }) => (
  <div className={`flex flex-col w-full ${noMargin ? '' : 'mb-36'}`}>
    <img className="rounded-2xl mb-4" src={image} alt="demo" />
    <h3 className="font-light text-sm text-gray-400 mb-2">{type}</h3>
    <h2 className="font-medium text-2xl text-gray-700">{name}</h2>
  </div>
)

const PortfolioSection = () => (
  <div className="grid place-items-center w-full">
    <div className="grid gap-4 w-full max-w-screen-xl px-8 py-24">
      <h1 className="font-medium text-4xl text-gray-600 max-w-sm">
        Good design means good business
      </h1>
      <div className="grid grid-cols-2 gap-6 items-end">
        <div className="w-full">
          <Project {...projects.shDashboard} />
          <Project {...projects.bkSystem} noMargin />
        </div>
        <div className="flex flex-col w-full">
          <Project {...projects.obApp} />
          <Project {...projects.jpHomepage} />
          <button className="self-end flex items-center font-medium text-2xl text-blue-500">
            see more
            <Icon
              className="fill-current w-6 h-6 ml-3"
              name="arrow_right_alt"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default PortfolioSection
