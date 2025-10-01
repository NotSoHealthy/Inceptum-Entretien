import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__container container">
        <Link to="/" className="site-title site-title--image">
          <img src="/assets/images/logo-cantinetta.png" alt="Saviora" />
        </Link>
        <nav className="navigation nav--main">
          <ul className="menu">
            <li className="menu-item">
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => isActive ? 'current-menu-item' : ''}
              >
                Accueil
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink 
                to="/carte" 
                className={({ isActive }) => isActive ? 'current-menu-item' : ''}
              >
                La Carte
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink 
                to="/esprit" 
                className={({ isActive }) => isActive ? 'current-menu-item' : ''}
              >
                L'esprit
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink 
                to="/presse" 
                className={({ isActive }) => isActive ? 'current-menu-item' : ''}
              >
                Presse
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'current-menu-item' : ''}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
