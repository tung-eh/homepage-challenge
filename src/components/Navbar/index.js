import React, { useState } from 'react'

import HamburgerIcon from './HamburgerIcon'
import Logo from '../Logo'
import Navs from '../Navs'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((x) => !x)

  return (
    <div className="relative flex justify-between items-center w-full max-w-screen-2xl text-gray-700 px-8 py-10">
      <Logo />
      <div className="hidden md:grid grid-cols-5 justify-items-center font-medium text-xl text-gray-600 gap-6">
        <Navs />
      </div>
      <HamburgerIcon xForm={open} onClick={toggle} />
      <div
        className={`${
          open ? '' : 'pointer-events-none'
        } fixed z-10 top-0 left-0 w-full h-full text-white`}
      >
        <div
          className="absolute bg-blackrussian transition-all duration-1000"
          style={{
            width: '100%',
            height: '100%',
            transitionDuration: '1s',
            clipPath: open ? 'circle(100%)' : 'circle(0 at 125% -25%)',
          }}
        />
        <div
          className={`absolute w-full h-full grid place-items-center content-center gap-6 text-2xl transition-opacity duration-1000 ${
            open ? 'opacity-1' : 'opacity-0'
          }`}
        >
          <Navs onClickItem={toggle} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
