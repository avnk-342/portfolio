import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '#hero', exact: true },
  // { label: 'About', href: '#about' },
  // { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact', button: true },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToSection = (href) => {
    if (href.startsWith('#')) {
      const section = document.querySelector(href)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className={`fixed left-0 top-0 z-50 w-full border-b px-8 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'border-white/10 bg-secondary-light-bg py-4 shadow-lg' : 'border-transparent bg-secondary-light-bg py-6'}`}>
      <div className="mx-auto flex max-w-300 items-center justify-between">
        <div className="text-2xl font-bold text-text-dark">
          &lt;AK<span className="text-green-600">/</span>&gt;
        </div>

        <nav aria-label="Main navigation">
          <ul className="flex list-none items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <NavLink
                    to={item.to}
                    end={item.exact}
                    className={({ isActive }) =>
                      `font-mono text-sm transition-colors hover:text-text-dark ${item.button ? 'rounded border border-black px-4 py-2 text-text-dark' : 'text-text-dark'} ${isActive ? 'text-text-dark' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    href={item.href}
                    className={`font-mono text-sm transition-colors hover:text-text-dark ${item.button ? 'rounded border border-black px-4 py-2 text-text-dark' : 'text-text-dark'}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleScrollToSection(item.href)
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Navbar
