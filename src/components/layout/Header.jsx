import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__container container">
        <Link to="/" className="site-title site-title--image">
          <img src="/assets/images/logo-cantinetta.png" alt="Saviora" />
        </Link>
        
        <button 
          className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navigation nav--main ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul className="menu">
            <li className="menu-item">
              <NavLink to="/" end className={({ isActive }) => isActive ? 'current-menu-item' : ''} onClick={closeMenu}>
                Accueil
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/carte" className={({ isActive }) => isActive ? 'current-menu-item' : ''} onClick={closeMenu}>
                La Carte
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/esprit" className={({ isActive }) => isActive ? 'current-menu-item' : ''} onClick={closeMenu}>
                L'esprit
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/presse" className={({ isActive }) => isActive ? 'current-menu-item' : ''} onClick={closeMenu}>
                Presse
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'current-menu-item' : ''} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/admin" className={({ isActive }) => isActive ? 'current-menu-item' : ''} onClick={closeMenu}>
                Admin
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
