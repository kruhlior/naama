import './styles/ProjectTemplate.css';
import SummaryBox from './SummaryBox';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProjectTemplate = ({
  customHeader,
  goal,
  userRole,
  tools,
  collaboration,
  timeline,
  challenges,
}) => {
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Only apply scroll behavior on mobile
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px - show back button (header will hide)
          setShowBackButton(true);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - hide back button (header will show)
          setShowBackButton(false);
        }
      } else {
        // Always hide back button on desktop
        setShowBackButton(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="project-template">
      {/* Mobile Back Button */}
      <button
        className={`mobile-back-button ${showBackButton ? 'visible' : ''}`}
        onClick={handleBackToHome}
      >
        ←
      </button>
      {/* Custom Header Section */}
      {customHeader && (
        <div className="project-custom-header">
          {customHeader}
        </div>
      )}

      {/* Goal Section */}
      <div className="goal-section">
        <h3 className="section-title">Goal</h3>
        <p className="goal-text">{goal}</p>
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <h3 className="section-title">Summary</h3>
        <div className="summary-grid">
          <SummaryBox
            icon="/icons/role.png"
            title="My Role"
            content={userRole}
          />
          <SummaryBox
            icon="/icons/tools.png"
            title="Tools"
            content={tools}
          />
          <SummaryBox
            icon="/icons/collaboration.png"
            title="Collaboration"
            content={collaboration}
          />
          <SummaryBox
            icon="/icons/timeline.png"
            title="Timeline"
            content={timeline}
          />
        </div>
      </div>


      {/* Challenges Section */}
      {challenges && (
        <div className="challenges-section">
          <h3 className="challenges-title">Challenges and solutions</h3>
          <p className="challenges-text">{challenges}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectTemplate;
