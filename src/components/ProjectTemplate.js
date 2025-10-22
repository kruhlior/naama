import './styles/ProjectTemplate.css';
import SummaryBox from './SummaryBox';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProjectTemplate = ({
  customHeader,
  userRole,
  tools,
  collaboration,
  timeline,
  challenges,
  customSectionBeforeSummary,
  specialProjectSection,
  firstChallengeSection,
  secondChallengeSection,
  projectImpactSection,
  hideSummarySection = false,
}) => {
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Only apply scroll behavior on mobile
      if (window.innerWidth <= 768) {
        // Get hero section height to determine when header becomes visible
        const heroSection = document.querySelector('.hero-section') ||
                           document.querySelector('.project-custom-header') ||
                           document.querySelector('.project-title-section');
        const heroHeight = heroSection ? heroSection.offsetHeight : 100;

        if (currentScrollY <= heroHeight) {
          // At or above hero section - hide back button (header is visible)
          setShowBackButton(false);
        } else if (currentScrollY > heroHeight) {
          // Below hero section - show back button (header is hidden)
          setShowBackButton(true);
        }
      } else {
        // Always hide back button on desktop
        setShowBackButton(false);
      }
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


      {/* Custom Section Before Summary */}
      {customSectionBeforeSummary && (
        <div className="custom-section-before-summary">
          {customSectionBeforeSummary}
        </div>
      )}

      {/* Summary Section */}
      {!hideSummarySection && (
        <div className="summary-section hero-entrance-5">
          <h3 className="section-title">At a Glance</h3>
          <div className="summary-grid section-content">
            <SummaryBox
              icon="/icons/role.png"
              title="My Role"
              content={userRole}
              className="hero-entrance-6"
            />
            <SummaryBox
              icon="/icons/tools.png"
              title="Tools"
              content={tools}
              className="hero-entrance-7"
            />
            <SummaryBox
              icon="/icons/collaboration.png"
              title="Collaboration"
              content={collaboration}
              className="hero-entrance-8"
            />
            <SummaryBox
              icon="/icons/timeline.png"
              title="Timeline"
              content={timeline}
              className="hero-entrance-9"
            />
          </div>
        </div>
      )}

      {/* Special Project Section */}
      {specialProjectSection && (
        <div className="special-project-wrapper">
          {specialProjectSection}
        </div>
      )}

      {/* Challenges Section */}
      {challenges && (
        <div className="challenges-section hero-entrance-10">
          <h3 className="challenges-title">Challenges and solutions</h3>
          <div className="section-content">
            {challenges !== 'Balancing AI personalization with user privacy, ensuring accessibility across diverse user groups, and creating intuitive interfaces for complex AI features while maintaining trust and transparency in algorithmic decision-making.' && (
              <p className="challenges-text">{challenges}</p>
            )}
          </div>
        </div>
      )}

      {/* First Challenge Section */}
      {firstChallengeSection && (
        <div className="first-challenge-wrapper">
          {firstChallengeSection}
        </div>
      )}

      {/* Second Challenge Section */}
      {secondChallengeSection && (
        <div className="second-challenge-wrapper">
          {secondChallengeSection}
        </div>
      )}

      {/* Project Impact Section */}
      {projectImpactSection && (
        <div className="project-impact-wrapper">
          {projectImpactSection}
        </div>
      )}
    </div>
  );
};

export default ProjectTemplate;
