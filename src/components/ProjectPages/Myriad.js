import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import './Myriad.css';

const Myriad = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="project-page myriad">
      <div className="container">
        {/* Back Button */}
        <div className="back-button">
          <button onClick={handleBackToHome} className="back-link">
            ← Back to Home
          </button>
        </div>

        {/* Project Hero */}
        <div className="project-custom-header">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="project-title">Transforming medical company web experience</h1>
              <p className="project-subtitle">unified disparate experiences into a seamless journey for patients and healthcare providers</p>
              <a href="https://myriad.com/" target="_blank" rel="noopener noreferrer" className="website-link">
                Visit Myriad website
              </a>
            </div>
            <div className="hero-image">
              <img
                src="/Myriad.gif"
                alt="Myriad Project"
                className="project-image"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Myriad-2 GIF Section */}
        <div className="myriad-2-section">
          <img
            src="/projects/Myriad-2.gif"
            alt="Myriad Project Process"
            className="myriad-2-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Project Template */}
        <ProjectTemplate
          customSectionBeforeSummary={
            <div className="goal-section">
              <h3 className="section-title">Goal</h3>
              <div className="goal-content">
                <div className="goal-text">
                  To transform Myriad&apos;s fragmented web experience into a cohesive, user-centered platform that serves both patients seeking genetic testing information and healthcare providers requiring clinical resources, while ensuring HIPAA compliance and improving overall user satisfaction.
                </div>
                <div className="tldr-image-container">
                  <img
                    src="/projects/TLDR-myriad.png"
                    alt="Myriad TLDR"
                    className="tldr-image"
                    onError={(e) => {
                      e.target.src = '/placeholder-large.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          }
          userRole="Lead UX Designer & Web Strategist"
          tools="Figma, Adobe Creative Suite, WordPress, HTML/CSS, UserTesting, Analytics"
          collaboration="Marketing Team, Healthcare Providers, Web Developers, Content Team"
          timeline="7 months (Research: 1 month, Design: 3 months, Development: 3 months)"
          challenges="Balancing patient and provider needs in a single platform, ensuring HIPAA compliance throughout the redesign, and creating intuitive navigation for users with varying technical skills."
        />

        {/* First Challenge Section */}
        <div className="challenge-section">
          <h3 className="challenge-title">1st Challenge:<br /><strong>Creating parallel experiences for patient and providers</strong></h3>
          <div className="challenge-image-section">
            <img
              src="/projects/myriad-users.png"
              alt="Myriad Users Challenge"
              className="challenge-image desktop-image"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
            <img
              src="/projects/myriad-users-mobile.png"
              alt="Myriad Users Challenge Mobile"
              className="challenge-image mobile-image"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
          </div>

          {/* Problem and Solution Boxes */}
          <div className="problem-solution-section">
            <div className="problem-solution-grid">
              <div className="problem-box">
                <div className="problem-icon">
                  <img src="/icons/question.png" alt="Challenge" />
                </div>
                <div className="problem-content">
                  <h4 className="problem-title">Challenge:</h4>
                  <p className="problem-text">Creating distinct yet cohesive user experiences for patients and healthcare providers within a single platform</p>
                  <p className="problem-more-text">The existing system treated both user types identically, leading to confusion and inefficient workflows. Patients needed simple, intuitive interfaces while providers required comprehensive tools and data access.</p>
                </div>
              </div>
              <div className="solution-box">
                <div className="solution-icon">
                  <img src="/icons/solution.png" alt="Solution" />
                </div>
                <div className="solution-content">
                  <h4 className="solution-title">Solution:</h4>
                  <p className="solution-text">Designed parallel user journeys with role-based interfaces and personalized dashboards</p>
                  <p className="solution-more-text">Created distinct entry points and navigation patterns for each user type while maintaining design consistency. Implemented role-based permissions and customized workflows to meet specific user needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Users Image */}
        <div className="challenge-users-section">
          <img
            src="/projects/Myriad-challenge-users.png"
            alt="Myriad Challenge Users"
            className="challenge-users-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Challenge Users Image 2 */}
        <div className="challenge-users-section">
          <img
            src="/projects/Myriad-challenge-users-2.png"
            alt="Myriad Challenge Users 2"
            className="challenge-users-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Second Challenge Section */}
        <div className="challenge-section">
          <h3 className="challenge-title">2nd Challenge:<br /><strong>Scalability</strong></h3>

          {/* Problem and Solution Boxes */}
          <div className="problem-solution-section">
            <div className="problem-solution-grid">
              <div className="problem-box">
                <div className="problem-icon">
                  <img src="/icons/question.png" alt="Challenge" />
                </div>
                <div className="problem-content">
                  <h4 className="problem-title">Challenge:</h4>
                  <p className="problem-text">Create scalable solution to support a growing portfolio</p>
                  <p className="problem-more-text">The company&apos;s diverse and growing portfolio of genetic tests required a scalable web solution that could evolve with future products.</p>
                </div>
              </div>
              <div className="solution-box">
                <div className="solution-icon">
                  <img src="/icons/solution.png" alt="Solution" />
                </div>
                <div className="solution-content">
                  <h4 className="solution-title">Solution:</h4>
                  <p className="solution-text">Pages templates, Consistent design</p>
                  <p className="solution-more-text">Designed flexible page templates that accommodate all current and future genetic tests. Ensured consistency in layout and branding while allowing for customization based on product needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="challenge-image-section">
            <img
              src="/projects/Myriad-tests.png"
              alt="Myriad Tests"
              className="challenge-image desktop-image"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
            <img
              src="/projects/Myriad-tests-mobile.png"
              alt="Myriad Tests Mobile"
              className="challenge-image mobile-image"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
          </div>
        </div>

        {/* Third Challenge Section */}
        <div className="challenge-section">
          <h3 className="challenge-title">3rd Challenge:<br /><strong>Supporting main business goal</strong></h3>

          {/* Problem and Solution Boxes */}
          <div className="problem-solution-section">
            <div className="problem-solution-grid">
              <div className="problem-box">
                <div className="problem-icon">
                  <img src="/icons/question.png" alt="Challenge" />
                </div>
                <div className="problem-content">
                  <h4 className="problem-title">Challenge:</h4>
                  <p className="problem-text">Supporting main user and business goal - Finding the right test</p>
                  <p className="problem-more-text">Whether you are patient or provider, the single most critical task for users visiting the site was to quickly find the right genetic test for their needs. It is also critical to support the main company revenue driver - ordering genetic tests.</p>
                </div>
              </div>
              <div className="solution-box">
                <div className="solution-icon">
                  <img src="/icons/solution.png" alt="Solution" />
                </div>
                <div className="solution-content">
                  <h4 className="solution-title">Solution:</h4>
                  <p className="solution-text">However you are searching for a genetic test, You&apos;ll find it!</p>
                  <p className="solution-more-text">Developed multiple search pathways tailored to different user behaviors: search by specialty, health area, or test name. Organized tests into intuitive categories informed by thorough user research. Provided clear descriptions and implemented advanced filtering tools to ensure users could efficiently locate the most relevant tests.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="challenge-image-section">
            <img
              src="/projects/Myriad-Challenge-serach.png"
              alt="Myriad Search Challenge"
              className="challenge-image desktop-image"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
            <img
              src="/projects/Myriad-Challenge-serach.png"
              alt="Myriad Search Challenge Mobile"
              className="challenge-image mobile-image"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
          </div>
        </div>

        {/* Project Impact Section */}
        <div className="project-impact-section">
          <h3 className="section-title">Project Impact</h3>
          <div className="section-content">
            <p className="project-impact-text">
              The Myriad website redesign achieved remarkable results with a 40% increase in conversion rates and 60% improvement in user engagement. The project successfully created a seamless journey for both patients and healthcare providers, resulting in 95% user satisfaction. Key achievements include reducing page load times by 50%, improving accessibility scores to WCAG 2.1 AA compliance, and establishing a scalable design system for future updates.
            </p>

            {/* Project Stats */}
            <div className="project-stats" style={{ marginTop: '2rem' }}>
              <div className="stat">
                <span className="stat-number">↑ 40%</span>
                <span className="stat-label">Conversion</span>
              </div>
              <div className="stat">
                <span className="stat-number">↑ 35%</span>
                <span className="stat-label">Site Visits</span>
              </div>
              <div className="stat">
                <span className="stat-number">↑ 40%</span>
                <span className="stat-label">Total Pages Views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Screen Width Impact Image */}
        <div className="myriad-impact-section">
          <img
            src="/projects/myriad-impact.jpg"
            alt="Myriad Project Impact"
            className="myriad-impact-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default Myriad;
