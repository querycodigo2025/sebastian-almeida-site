import { useState, useEffect } from 'react'

const WHATSAPP_NUMBER = '5511999290121'
const WHATSAPP_MSG = encodeURIComponent('Olá Sebastian! Gostaria de saber mais sobre suas mentorias e treinamentos.')

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Livros', href: '#livros' },
    { label: 'Método Query', href: '#metodo-query' },
    { label: 'Programas', href: '#programas' },
    { label: 'Contato', href: '#cta' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-DEFAULT/95 backdrop-blur-md border-b border-gold/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-serif text-xl font-bold tracking-wide">
          <span className="gold-text">Sebastian</span>
          <span className="text-white"> Almeida</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-gold transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-gold text-sm py-2.5 px-6"
        >
          Falar com Sebastian
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 bg-gold mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-gold mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-gold transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-DEFAULT/98 backdrop-blur-md border-t border-gold/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-gold text-base tracking-wide transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm mt-2"
          >
            Falar com Sebastian
          </a>
        </div>
      )}
    </header>
  )
}
