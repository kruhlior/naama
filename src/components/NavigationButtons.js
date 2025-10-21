import { useState, useEffect } from 'react';
import './styles/NavigationButtons.css';

const NavigationButtons = ({ activeCategory, onCategoryChange }) => {
  const [isFixed, setIsFixed] = useState(false);

  const categories = [
    { id: 'recent', label: 'Recent Work', icon: '/icons/nav-recent.png' },
    { id: 'ai', label: 'AI', icon: '/icons/nav-ai.png' },
    { id: 'b2b', label: 'B2B', icon: '/icons/nav-b2b.png' },
    { id: 'web', label: 'Web', icon: '/icons/nav-web.png' },
    { id: 'mobile', label: 'Mobile', icon: '/icons/nav-mobile.png' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height to determine when to fix the nav
      const heroSection = document.querySelector('.hero-section');
      const workSection = document.querySelector('.work-sections');
      if (heroSection && workSection) {
        const heroHeight = heroSection.offsetHeight;
        const workSectionTop = workSection.offsetTop;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Fix nav when scrolled past the hero section OR when in the work section area
        setIsFixed(scrollTop > heroHeight || scrollTop >= workSectionTop - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navigation-buttons ${isFixed ? 'fixed' : ''}`}>
      <div className="nav-background">
        <img src="/nav.png" alt="Navigation background" />
      </div>

      {/* Category Icon - Only show active category */}
      <div className="nav-category-icons">
        {categories.map((category) => (
          activeCategory === category.id && (
            <img
              key={`${category.id}-icon`}
              src={category.icon}
              alt={`${category.label} icon`}
              className="nav-category-icon active"
            />
          )
        ))}
      </div>

      <div className="nav-links">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`nav-link ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => {
              console.log('Clicked category:', category.id);
              onCategoryChange(category.id);
            }}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationButtons;
