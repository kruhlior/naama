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

        {/* Project Hero */}
        <div className="project-hero">
          <div className="hero-content">
            <h1 className="project-title">Amdocs</h1>
            <p className="project-subtitle">Telecom Enterprise Solution</p>
            <div className="hero-image">
              <img
                src="/Amdocs.png"
                alt="Amdocs Telecom Solution"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Project Template */}
        <ProjectTemplate
          goal="Design a Fierce Innovation Award-winning enterprise solution that streamlines complex telecom workflows and improves operational efficiency for large-scale telecommunications companies."
          userRole="Senior UX Designer & Enterprise Solution Architect"
          tools="Figma, Sketch, InVision, Jira, Confluence, UserTesting, Analytics"
          collaboration="Product Managers, Telecom Experts, Engineering Teams, QA Teams, Stakeholders"
          timeline="12 months (Research: 3 months, Design: 6 months, Testing: 3 months)"
        />

        {/* Project Stats */}
        <div className="project-stats">
          <div className="stat">
            <span className="stat-number">Fierce</span>
            <span className="stat-label">Innovation Award</span>
          </div>
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Enterprise Clients</span>
          </div>
          <div className="stat">
            <span className="stat-number">70%</span>
            <span className="stat-label">Workflow Efficiency</span>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <div className="content-section">
            <h2>About Amdocs Telecom Solution</h2>
            <p>
              The Amdocs Telecom Enterprise Solution is a Fierce Innovation Award–winning
              enterprise solution that revolutionized the telecommunications industry. This
              comprehensive platform streamlines complex workflows, enabling telecom companies
              to deliver superior customer experiences while optimizing operational efficiency.
              The solution addresses critical challenges in billing, customer management, and
              service delivery across the entire telecom ecosystem.
            </p>
          </div>

          <div className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Billing Management</h3>
                <p>Advanced billing system with real-time processing, multi-currency support, and automated invoicing capabilities.</p>
              </div>
              <div className="feature-item">
                <h3>Customer Experience</h3>
                <p>Comprehensive customer management platform with 360-degree view and personalized service delivery.</p>
              </div>
              <div className="feature-item">
                <h3>Service Orchestration</h3>
                <p>Intelligent service orchestration with automated provisioning and lifecycle management.</p>
              </div>
              <div className="feature-item">
                <h3>Analytics & Insights</h3>
                <p>Advanced analytics dashboard providing real-time insights into customer behavior and business performance.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technical Implementation</h2>
            <div className="implementation-grid">
              <div className="impl-item">
                <h3>Microservices Architecture</h3>
                <p>Scalable microservices-based architecture ensuring high availability and seamless scalability for enterprise operations.</p>
              </div>
              <div className="impl-item">
                <h3>Cloud-Native Design</h3>
                <p>Cloud-native solution with containerization and orchestration for optimal performance and resource utilization.</p>
              </div>
              <div className="impl-item">
                <h3>API-First Approach</h3>
                <p>Comprehensive API ecosystem enabling seamless integration with existing telecom infrastructure and third-party systems.</p>
              </div>
              <div className="impl-item">
                <h3>Security & Compliance</h3>
                <p>Enterprise-grade security with compliance frameworks ensuring data protection and regulatory adherence.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technologies & Tools</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Spring Boot</span>
                  <span className="tech-tag">Microservices</span>
                  <span className="tech-tag">Docker</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Database</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Oracle</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Redis</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Infrastructure</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">Jenkins</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Project Impact</h2>
            <p>
              The Amdocs Telecom Enterprise Solution achieved remarkable success, winning the
              prestigious Fierce Innovation Award for its groundbreaking approach to telecom
              operations. The solution serves over 500 enterprise clients worldwide, improving
              workflow efficiency by 70% and reducing operational costs by 40%. Key achievements
              include streamlining complex billing processes, enhancing customer satisfaction
              scores by 50%, and establishing a scalable platform that supports millions of
              transactions daily across global telecom networks.
            </p>
          </div>

          <div className="content-section">
            <h2>Project Links</h2>
            <div className="project-links">
              <a
                href="https://github.com/yourusername/amdocs"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                View Source Code
              </a>
              <a
                href="https://amdocs-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amdocs;
