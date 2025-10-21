import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    closeMenu();
    if (isMobile && isProjectPage) {
      navigate(-1); // Go back to previous page
    } else {
      window.scrollTo(0, 0);
    }
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial mobile state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Apply scroll behavior on mobile for all pages
      if (isMobile) {
        // Get hero section height to determine when to hide/show header
        const heroSection = document.querySelector('.hero-section');
        const heroHeight = heroSection ? heroSection.offsetHeight : 100;

        if (currentScrollY <= heroHeight) {
          // At or above hero section - always show header
          setIsHeaderVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > heroHeight) {
          // Scrolling down and past hero section - hide header
          setIsHeaderVisible(false);
        }
        // Don't show header when scrolling up unless we're back at hero section
      } else {
        // Always show header on desktop
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobile]);

  return (
    <header className={`header ${!isHeaderVisible ? 'header-hidden' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={handleLogoClick}>
            {isMobile && isProjectPage ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="back-arrow">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <img src="/logo.png" alt="Logo" className="logo-image" />
            )}
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
