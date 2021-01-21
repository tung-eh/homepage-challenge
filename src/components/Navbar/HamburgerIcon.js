const HamburgerStick = ({ className }) => (
  <span
    className={
      'rounded w-6 h-1 transition-all duration-1000 transform ' + className
    }
  />
)

const HamburgerIcon = ({ xForm, onClick }) => (
  <button
    className="absolute z-20 right-8 grid md:hidden gap-1 place-items-center"
    onClick={onClick}
  >
    <HamburgerStick
      className={xForm ? 'bg-white opacity-0' : 'bg-gray-900 opacity-1'}
    />
    <HamburgerStick
      className={
        xForm
          ? 'bg-white rotate-45 scale-125'
          : 'bg-gray-900 rotate-0 scale-100'
      }
    />
    <HamburgerStick
      className={
        'absolute ' +
        (xForm
          ? 'bg-white -rotate-45 scale-125'
          : 'bg-gray-900 rotate-0 scale-100')
      }
    />
    <HamburgerStick
      className={xForm ? 'bg-white opacity-0' : 'bg-gray-900 opacity-1'}
    />
  </button>
)

export default HamburgerIcon
