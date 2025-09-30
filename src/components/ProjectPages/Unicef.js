import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import './Unicef.css';

const Unicef = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page unicef">
      <div className="container">
        {/* Back Button */}
        <div className="back-button">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>

        {/* Project Template */}
        <ProjectTemplate
          customHeader={
            <div className="project-title-section">
              <h1 className="project-title">UNICEF AI-Powered bot</h1>
              <h2 className="project-subtitle">Building a Trusted, Multi-Layered AI for Knowledge Management</h2>
              <div className="project-image-section">
                <img
                  src="/projects/unicef-hero.png"
                  alt="UNICEF AI Bot"
                  className="project-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
                <img
                  src="/projects/unicef-tldr.png"
                  alt="UNICEF TLDR"
                  className="project-tldr-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
            </div>
          }
          goal="Create a secure and intuitive AI chatbot and knowledge management interface tailored to the needs of UNICEF employees, promoting efficiency and trust in AI technologies and supporting informed decision-making in critical areas."
          userRole="UX consultant<br/>• UX Research<br/>• UX/UI Design<br/>"
          tools="• Figma<br/>• Jira<br/>• Chet GPT<br/>"
          collaboration="Worked closely with UNICEF stakeholders; knowledge managers, IT specialists, operational staff, and AI engineers"
          timeline="2024 (6 months)"
          challenges="Building trust in AI systems within a humanitarian organization, ensuring data security and privacy for sensitive information, and creating user-friendly interfaces for staff with varying technical backgrounds."
        />
         
       </div>
    </div>
  );
};

export default Unicef;
