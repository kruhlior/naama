import { useState, useEffect } from 'react';
import './styles/NavigationButtons.css';

const NavigationButtons = ({ activeCategory, onCategoryChange }) => {
  const [isFixed, setIsFixed] = useState(false);

  const categories = [
    { id: 'recent', label: 'Recent Works' },
    { id: 'ai', label: 'AI' },
    { id: 'b2b', label: 'B2B' },
    { id: 'web', label: 'WEB Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height to determine when to fix the nav
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Fix nav when scrolled past the hero section
        setIsFixed(scrollTop > heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navigation-buttons ${isFixed ? 'fixed' : ''}`}>
      <div className="container">
        <div className="work-menu">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`work-menu-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationButtons;
