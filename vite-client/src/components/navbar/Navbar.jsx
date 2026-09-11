import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navItems = [
  { label: 'Home', href: '#hero', exact: true },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
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
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="nav_content">
        <div className="navbar">
            <h1 className="nav_logo">
              &lt;AK<span className="logo-span">/</span>&gt;
            </h1>
        </div>

        <nav className="nav-links-div" aria-label="Main navigation">
          <ul className="nav-links-list">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <NavLink
                    to={item.to}
                    end={item.exact}
                    className={({ isActive }) =>
                      isActive
                        ? `nav-links-list-element ${item.button ? 'btn-outline ' : 'active'}`
                        : `nav-links-list-element ${item.button ? 'btn-outline ' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    href={item.href}
                    className="nav-links-list-element"
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
