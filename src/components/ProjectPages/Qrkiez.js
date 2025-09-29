import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import './Qrkiez.css';

const Qrkiez = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page qrkiez">
      <div className="container">
        {/* Back Button */}
        <div className="back-button">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>

        {/* Project Hero */}
        <div className="project-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="project-title">Inclusive AI powered Marketplace & Social Platform</h1>
              <p className="project-subtitle">Leading UX strategy to transform the provider experience at scale.</p>
            </div>
            <div className="hero-image">
              <img
                src="/projects/qrkiez.gif"
                alt="Qrkiez Platform"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
            <div className="hero-tldr-image">
              <img
                src="/projects/qrkiez-tldr.png"
                alt="Qrkiez TLDR"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Project Template */}
        <ProjectTemplate
          goal="Create an inclusive AI-powered marketplace and social platform that connects diverse communities while ensuring accessibility and user-friendly experiences for all users."
          userRole="Lead UX Designer & Product Strategist"
          tools="Figma, Adobe Creative Suite, Miro, UserTesting, Analytics"
          collaboration="Product Manager, Engineering Team, Marketing Team, Community Managers"
          timeline="6 months (Research: 1 month, Design: 3 months, Testing: 2 months)"
          challenges="Balancing AI personalization with user privacy, ensuring accessibility across diverse user groups, and creating intuitive interfaces for complex AI features while maintaining trust and transparency in algorithmic decision-making."
        />
      </div>
    </div>
  );
};

export default Qrkiez;
