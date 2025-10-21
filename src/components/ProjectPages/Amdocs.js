import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import './Amdocs.css';

const Amdocs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page amdocs">
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
              <div className="hero-entrance-1">
                <h1 className="project-title">Amdocs CPQ - Simplifying Complex B2B Selling</h1>
                <h2 className="project-subtitle">Transforming enterprise telecom quoting through automation, clarity, and smart UX.</h2>
              </div>
              <div className="project-image-section hero-entrance-2">
                <img
                  src="/projects/Amdocs-hero.png"
                  alt="Amdocs CPQ Solution"
                  className="project-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
            </div>
          }
          userRole="Senior UX Designer in a cross-functional task force.<br/>Contributed to discovery, flow design, and interactive prototype."
          tools="Figma • Axure • Miro • UserTesting.com"
          collaboration="Worked closely with product managers, developers, and business stakeholders to align user needs, logic rules, and platform scalability."
          timeline="10 months (Research: 2 month, Design: 5 months, Development: 3 months)"
          customSectionBeforeSummary={
            <div>
              {/* Goal Section */}
              <div className="project-impact-section">
                <h3 className="section-title">Goal</h3>
                <div className="project-impact-content">
                  <div className="project-impact-text-section section-content">
                    <p className="project-impact-text">
                      To create an <strong>automated, scalable B2B CPQ solution</strong> for telecom providers - replacing manual, rigid tools with an integrated system that simplifies configuration, pricing, and approvals for large, multi-stakeholder enterprise deals.
                    </p>
                  </div>
                  <div className="project-impact-image-section">
                    <img
                      src="/projects/TLDR-amdocs.png"
                      alt="Amdocs TLDR"
                      className="project-impact-image"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          firstChallengeSection={
            <div>
              {/* The Challenge Section */}
              <div className="project-impact-section">
                <h3 className="section-title">The Challenge</h3>
                <div className="project-impact-content">
                  <div className="project-impact-text-section section-content">
                    <p className="project-impact-text">
                      Amdocs, known for its B2C platforms, was entering the complex B2B telecom space - where deals span months, involve multiple vendors, and require precision across configuration, pricing, and contract management.
                    </p>
                    <p className="project-impact-text">
                      Legacy tools were slow, opaque, and manually dependent, causing delays and loss of visibility across long quote lifecycles.
                    </p>
                  </div>
                  <div className="project-impact-image-section">
                    <img
                      src="/projects/Amdocs-goal.png"
                      alt="Amdocs Challenge"
                      className="project-impact-image"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          secondChallengeSection={
            <div>
              {/* The Solution Section */}
              <div className="project-impact-section">
                <h3 className="section-title">The Solution</h3>
                <div className="project-impact-content">
                  <div className="project-impact-text-section section-content">
                    <p className="project-impact-text">
                      We designed a <strong>flexible, role-based CPQ platform</strong> that streamlined configuration, pricing, and approvals through automation and clear UX logic.
                    </p>
                    <p className="project-impact-text">
                      Key innovations included:
                    </p>
                    <ul className="project-impact-text">
                      <li>A <strong>Quote Lifecycle Dashboard</strong> showing stage, status, owner, and blockers - improving transparency.</li>
                      <li>A <strong>Modular Configuration Interface</strong> with real-time validation and dependency logic.</li>
                      <li><strong>Role-specific views</strong> tailored for sales, operations, and vendors - reducing cognitive overload.</li>
                      <li>A <strong>scalable component library</strong> enabling rapid customization for future telecom clients.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Solution Images Section */}
              <div className="solution-images-section">
                <img
                  src="/projects/Amdocs-dashboard.png"
                  alt="Amdocs Dashboard"
                  className="solution-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
                <img
                  src="/projects/Amdocs-service.png"
                  alt="Amdocs Service"
                  className="solution-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
            </div>
          }
          projectImpactSection={
            <div>
              {/* Impact Section */}
              <div className="project-impact-section">
                <h3 className="section-title">Impact</h3>
                <div className="project-impact-content">
                  <div className="project-impact-text-section section-content">
                    <p className="project-impact-text">
                      The Amdocs CPQ solution achieved remarkable success, becoming the UX benchmark for subsequent B2B systems and winning the prestigious Fierce Innovation Award.
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="project-stats">
                <div className="stat">
                  <span className="stat-number">↓ 50%</span>
                  <span className="stat-label">quote cycle time</span>
                </div>
                <div className="stat">
                  <span className="stat-number">×14</span>
                  <span className="stat-label">more quotes</span>
                </div>
                <div className="stat">
                  <span className="stat-number">UX benchmark</span>
                  <span className="stat-label">for subsequent B2B systems</span>
                </div>
              </div>

              {/* Award Section */}
              <div className="project-impact-section">
                <h3 className="section-title">Winner of the Fierce Innovation Award</h3>
                <div className="project-impact-content">
                  <div className="project-impact-image-section">
                    <img
                      src="/projects/Amdocs-award.png"
                      alt="Amdocs Fierce Innovation Award"
                      className="project-impact-image"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Lessons Section */}
              <div className="project-impact-section">
                <h3 className="section-title">My Lessons from the Project</h3>
                <div className="project-impact-content">
                  <div className="project-impact-text-section section-content">
                    <p className="project-impact-text">
                      This project demonstrated how <strong>automation and UX clarity</strong> can redefine enterprise efficiency.
                    </p>
                    <p className="project-impact-text">
                      Designing for multi-role collaboration taught me the value of transparency, shared context, and trust in complex workflows - and how thoughtful UX can drive measurable business impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Full Screen Width Impact Image */}
        <div className="amdocs-impact-section">
          <img
            src="/projects/amdocs-impact.jpg"
            alt="Amdocs Project Impact"
            className="amdocs-impact-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default Amdocs;
