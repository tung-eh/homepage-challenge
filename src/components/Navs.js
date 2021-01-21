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

const Navs = ({ onClickItem = () => {} }) =>
  navs.map(({ text, link, onClick = () => {} }, index) =>
    link ? (
      <a href={link} key={index} onClick={onClickItem}>
        {text}
      </a>
    ) : (
      <button
        className="text-left"
        onClick={() => {
          onClick()
          onClickItem()
        }}
        key={index}
        style={{ fontWeight: 'inherit' }}
      >
        {text}
      </button>
    )
  )

export default Navs
