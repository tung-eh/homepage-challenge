import React from 'react'

import Icon from '../Icon'

const services = [
  {
    icon: 'edit',
    color: 'blue-500',
    title: 'UI/UX Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',
  },
  {
    icon: 'code',
    color: 'green-500',
    title: 'Front End',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',
  },
  {
    icon: 'storage',
    color: 'red-500',
    title: 'Back End',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',
  },
]

const ServiceCard = ({ icon, color, title, description }) => {
  const buttonClasses = `transition-all duration-500 group-hover:bg-${color} group-hover:text-white border-2 border-${color} bg-white text-${color}`

  return (
    <div className="group grid justify-items-start gap-8 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:scale-105 px-8 py-10">
      <div className={`rounded-2xl bg-${color} text-white p-4`}>
        <Icon className="fill-current w-8 h-8" name={icon} />
      </div>
      <h2 className={` font-bold text-2xl text-gray-800`}>{title}</h2>
      <p className="text-gray-500">{description}</p>
      <button className={`rounded-xl font-medium ${buttonClasses} py-2 px-4`}>
        Get started
      </button>
    </div>
  )
}

const ServicesSection = () => (
  <div className="grid place-items-center min-h-screen w-full" id="services">
    <div className="grid gap-14 w-full max-w-screen-xl px-8 py-24">
      <h1 className="text-4xl font-medium text-gray-600 max-w-sm">
        We offer high demand services
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </div>
)

export default ServicesSection
