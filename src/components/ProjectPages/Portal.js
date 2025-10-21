import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import ProblemBox from '../ProblemBox';
import SolutionBox from '../SolutionBox';
import './Portal.css';

const Portal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="project-page portal">
      <div className="container">
        {/* Back Button */}
        <div className="back-button">
          <button onClick={handleBackToHome} className="back-link">
            ← Back to Home
          </button>
        </div>

        {/* Project Template */}
        <ProjectTemplate
          customHeader={
            <div className="project-title-section">
              <div className="hero-entrance-1">
                <h1 className="project-title">Healthcare provider portal</h1>
                <h2 className="project-subtitle">Leading UX strategy to transform the provider experience at scale.</h2>
              </div>
              <div className="project-image-section hero-entrance-2">
                <img
                  src="/Portal.png"
                  alt="Portal Healthcare Portal"
                  className="project-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
            </div>
          }
          customSectionBeforeSummary={
            <div className="goal-section">
              <h3 className="section-title">Goal</h3>
              <div className="goal-content">
                <div className="goal-text">
                  To transform the complex healthcare provider experience into an intuitive, efficient platform that streamlines workflows, reduces administrative burden, and improves patient care outcomes through thoughtful UX design and strategic implementation.
                </div>
                <div className="tldr-image-container">
                  <img
                    src="/projects/TLDRportal.png"
                    alt="Portal TLDR"
                    className="tldr-image"
                    onError={(e) => {
                      e.target.src = '/placeholder-large.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          }
          userRole="UX Team Manager<br/>• UX Strategy<br/>• Hands-on Design<br/>• UX Research<br/>• Team Leadership"
          tools="• Figma<br/>• Usertesting.com<br/>• Jira<br/>• Miro"
          collaboration="Worked with cross-functional teams, including product managers, engineers, and content writers."
          timeline="14 months (2022-2023)"
        />

        {/* Samples Section */}
        <div className="portal-samples-section">
          <h4 className="portal-samples-title">Ordering screens</h4>
          <img
            src="/projects/portal-samples-mobile.png"
            alt="Portal Samples"
            className="portal-samples-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Challenges Section */}
        <div className="challenges-section">
          <h3 className="challenges-title">Challenges and solutions</h3>
          <p className="challenges-text" />
        </div>

        {/* First Challenge Section Title */}
        <div className="challenge-section-title">
          <h3 className="challenge-title">1st problem: <strong>Unsubmitted orders</strong></h3>
        </div>

        {/* Challenges Image */}
        <div className="challenges-image-section">
          <img
            src="/projects/portal-chalang1.png"
            alt="Portal Challenges"
            className="challenges-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Problem and Solution Boxes */}
        <div className="problem-solution-section">
          <div className="problem-solution-grid">
            <ProblemBox
              problem="Unsubmitted orders due to long and frustrating process"
              problemMore="The previous ordering system was marked by a cumbersome and lengthy process, discouraging users and resulting in a significant number of abandoned submissions. "
            />
            <SolutionBox
              solution="Improving the ordering process"
              solutionMore="Through user interviews and usability testing, I mapped out all the issues that contributed to the frustrations of the ordering process. The new form was designed to address these pain points by simplifying data collection, ensuring only essential information was required, and integrating automated tools like auto-populate and autosuggestion to minimize manual input."
            />
          </div>
        </div>

        {/* Additional Challenge Images */}
        <div className="challenges-image-section">
          <img
            src="/projects/portal-chalange2.png"
            alt="Portal Challenge 2"
            className="challenges-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        <div className="challenges-image-section">
          <img
            src="/projects/portal-chalange3.png"
            alt="Portal Challenge 3"
            className="challenges-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Second Challenge Section Title */}
        <div className="challenge-section-title">
          <h3 className="challenge-title">2nd problem:<br /><strong>Existing tools dont support actual personas & workflows</strong></h3>
        </div>

        <div className="challenges-image-section">
          <img
            src="/projects/portal-chalange4.png"
            alt="Portal Challenge 4"
            className="challenges-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Second Problem and Solution Boxes */}
        <div className="problem-solution-section">
          <div className="problem-solution-grid">
            <ProblemBox
              problem="Misaligned Workflow"
              problemMore="Existing tools assumed a single user would complete orders in one sitting. In reality, ordering is a collaborative process spread across multiple users and stages"
            />
            <SolutionBox
              solution="Supporting collaboration dashboard with smart filtering"
              solutionMore="The new portal was redesigned to support true collaboration, aligning with how medical teams work together. Features like saving drafts, sharing tools, and flexible navigation allowed team members to complete orders at different stages, supporting the real, multi-user workflows observed in clinics. These updates made the process more efficient and user-friendly."
            />
          </div>
        </div>

        {/* Fifth Challenge Image */}
        <div className="challenges-image-section">
          <img
            src="/projects/portal-chalange5.png"
            alt="Portal Challenge 5"
            className="challenges-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Third Problem and Solution Boxes */}
        <div className="problem-solution-section">
          <div className="problem-solution-grid">
            <ProblemBox
              problem="Wrong Personas"
              problemMore="The tools were built for doctors, but most ordering was actually handled by medical teams: nurses, assistants, and genetic counselors."
            />
            <SolutionBox
              solution="Addressing the actual primary users"
              solutionMore="Redesign focused on medical teams -the real users. Unnecessary medical details were removed, workflows streamlined, and key questions addressed (e.g., what to include in the package, cost). The result: faster, more accurate, and informed order submissions."
            />
          </div>
        </div>

        {/* Sixth Challenge Image */}
        <div className="challenges-image-section">
          <img
            src="/projects/portal-chalange6.png"
            alt="Portal Challenge 6"
            className="challenges-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Project Impact Section */}
        <div className="project-impact-section">
          <h3 className="section-title">Project impact</h3>
          <div className="project-impact-content">
            <div className="project-impact-text-section section-content">
              <p className="project-impact-text">
                The Portal project achieved remarkable success with significant improvements across all key metrics. The redesigned platform delivered a 30% increase in ordering volumes, demonstrating enhanced user engagement and streamlined workflows. Order completion rates improved by 20%, indicating better user experience and reduced friction in the ordering process. Most notably, satisfaction scores increased by 40%, reflecting the project&apos;s success in creating a more intuitive and user-friendly platform that meets the needs of both service providers and customers.
              </p>
            </div>
            <div className="project-impact-image-section">
              <img
                src="/projects/Portal-impact.png"
                alt="Portal Project Impact"
                className="project-impact-image"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="project-stats">
          <div className="stat">
            <span className="stat-number">↑ 30%</span>
            <span className="stat-label">Ordering volumes</span>
          </div>
          <div className="stat">
            <span className="stat-number">↑ 20%</span>
            <span className="stat-label">Orders completion</span>
          </div>
          <div className="stat">
            <span className="stat-number">↑ 40%</span>
            <span className="stat-label">Satisfaction scores</span>
          </div>
        </div>

        {/* Full Screen Width Genetics Image */}
        <div className="portal-genetics-section">
          <img
            src="/projects/portal-genetics.jpg"
            alt="Portal Genetics"
            className="portal-genetics-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default Portal;
