const navs = [
  { text: 'Home', link: '#home' },
  { text: 'Services', link: '#services' },
  { text: 'Our Works', link: '#portfolio' },
  { text: 'Clients', link: '#team' },
  {
    text: 'Contact',
    onClick: () => {
      const input = document.querySelector('input#contact_email')

      input.scrollIntoView({ behaviour: 'smooth', block: 'center' })
      input.focus({ preventScroll: true })
    },
  },
]

const Navs = () =>
  navs.map(({ text, link, onClick = () => {} }, index) =>
    link ? (
      <a href={link} key={index}>
        {text}
      </a>
    ) : (
      <button className="text-left" onClick={onClick} key={index}>
        {text}
      </button>
    )
  )

export default Navs
