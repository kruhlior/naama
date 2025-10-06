import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    closeMenu();
    window.scrollTo(0, 0);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Check if current page is a project page
  const isProjectPage = location.pathname.startsWith('/projects/') ||
                       location.pathname.includes('qrkiez') ||
                       location.pathname.includes('portal') ||
                       location.pathname.includes('unicef') ||
                       location.pathname.includes('lloyd') ||
                       location.pathname.includes('myriad') ||
                       location.pathname.includes('amdocs') ||
                       location.pathname.includes('cleaner');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only apply scroll behavior on mobile project pages
      if (window.innerWidth <= 768 && isProjectPage) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px - hide header (back button will show)
          setIsHeaderVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show header (back button will hide)
          setIsHeaderVisible(true);
        }
      } else {
        // Always show header on desktop or non-project pages
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isProjectPage]);

  return (
    <header className={`header ${!isHeaderVisible ? 'header-hidden' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={handleLogoClick}>
            <img src="/logo.png" alt="Logo" className="logo-image" />
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${isActive('/')}`}
                  onClick={closeMenu}
                >
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${isActive('/about')}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${isActive('/contact')}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
