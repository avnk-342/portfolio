import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (href) => {
    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`nav-enter fixed left-0 top-0 z-50 w-full border-b px-8 backdrop-blur-xl transition-all duration-300 ${scrolled ? "border-white/20 bg-bg-light py-4 shadow-lg" : "border-transparent py-6"}`}
    >
      <div className="mx-auto flex max-w-300 items-center justify-between">
        <div className="text-2xl font-bold text-text-dark">
          &lt;AK<span className="text-primary">/</span>&gt;
        </div>

        <nav aria-label="Main navigation">
          <ul className="flex list-none items-center gap-8">
            <li>
              <NavLink
                to="/"
                end
                className="font-mono text-sm text-text-dark transition-colors hover:text-primary"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects/"
                className="font-mono text-sm text-text-dark transition-colors hover:text-primary"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <a
                href="#contact"
                className="font-mono text-sm text-text-dark transition-colors hover:text-primary"
                onClick={(event) => {
                  event.preventDefault();
                  handleScrollToSection("#contact");
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1TwogLvijhMK0z0uR4B1rsdYMLWVitkO4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 rounded border border-primary px-4 py-2 font-mono text-sm text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
