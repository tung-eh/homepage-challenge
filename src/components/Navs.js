const navs = [
  { text: 'Home' },
  { text: 'Services' },
  { text: 'Our Works' },
  { text: 'Clients' },
  { text: 'Contact' },
]

const Navs = () =>
  navs.map(({ text }, index) => (
    <a href="#somewhere" key={index}>
      {text}
    </a>
  ))

export default Navs
