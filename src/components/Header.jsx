import { useState } from 'react';
import './Header.css';
const navItems = ['Odkrywaj', 'Moje podróże'];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">

      <a className="header-left" href="#">
        <h1 className="logo">TravelPlanner</h1>
        <img className="logo-icon" src="header-icon.svg" alt="Logo" />
      </a>
      <button
        type="button"
        className="header-burger"
        aria-label="Otwórz menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}>

        <span></span>
        <span></span>
        <span></span>

      </button>
      <div className="header-right">
        <nav className={isMenuOpen ? 'main-nav is-open' : 'main-nav'}>
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" onClick={() => setIsMenuOpen(false)}>{item}</a>
              </li>
              
            ))}
            <li>
              <a href="#" className="main-nav__login" onClick={() => setIsMenuOpen(false)}>Zaloguj się</a>


            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;