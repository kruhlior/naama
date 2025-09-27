import './styles/NavigationButtons.css';

const NavigationButtons = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'recent', label: 'Recent Works' },
    { id: 'ai', label: 'AI' },
    { id: 'b2b', label: 'B2B' },
    { id: 'web', label: 'WEB Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  return (
    <div className="navigation-buttons">
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
