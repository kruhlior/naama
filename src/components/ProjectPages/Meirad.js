import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import './Meirad.css';

const Meirad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page meirad">
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
            <h1 className="project-title">Meirad</h1>
            <p className="project-subtitle">Healthcare provider portal</p>
            <div className="hero-image">
              <img
                src="/Portal.png"
                alt="Meirad Healthcare Portal"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Project Template */}
        <ProjectTemplate
          goal="Transform complex medical workflows into a simple, scalable solution that improves healthcare provider efficiency and patient care quality."
          userRole="Lead UX Designer & Product Strategist"
          tools="Figma, Adobe XD, Sketch, InVision, UserTesting, Analytics"
          collaboration="Product Manager, Medical Professionals, Engineering Team, QA Team"
          timeline="8 months (Research: 2 months, Design: 4 months, Testing: 2 months)"
        />

        {/* Project Stats */}
        <div className="project-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Healthcare Providers</span>
          </div>
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Patient Records</span>
          </div>
          <div className="stat">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <div className="content-section">
            <h2>About Meirad</h2>
            <p>
              Meirad is a comprehensive healthcare provider portal designed to transform complex
              medical workflows into simple, scalable solutions. The platform streamlines patient
              management, appointment scheduling, and medical record access for healthcare providers,
              improving efficiency and patient care quality.
            </p>
          </div>

          <div className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Patient Management</h3>
                <p>Comprehensive patient profiles with medical history, appointments, and treatment plans.</p>
              </div>
              <div className="feature-item">
                <h3>Appointment Scheduling</h3>
                <p>Intelligent scheduling system with automated reminders and conflict resolution.</p>
              </div>
              <div className="feature-item">
                <h3>Medical Records</h3>
                <p>Secure, HIPAA-compliant access to patient records with advanced search capabilities.</p>
              </div>
              <div className="feature-item">
                <h3>Analytics Dashboard</h3>
                <p>Real-time insights into patient flow, appointment patterns, and provider performance.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technical Implementation</h2>
            <div className="implementation-grid">
              <div className="impl-item">
                <h3>Security & Compliance</h3>
                <p>HIPAA-compliant architecture with end-to-end encryption and audit trails.</p>
              </div>
              <div className="impl-item">
                <h3>Scalable Architecture</h3>
                <p>Microservices-based design supporting thousands of concurrent users.</p>
              </div>
              <div className="impl-item">
                <h3>Integration Capabilities</h3>
                <p>Seamless integration with existing EHR systems and third-party medical devices.</p>
              </div>
              <div className="impl-item">
                <h3>User Experience</h3>
                <p>Intuitive interface designed for healthcare professionals with minimal training requirements.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technologies & Tools</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>Frontend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Redux</span>
                  <span className="tech-tag">Material-UI</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Redis</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Security</h3>
                <div className="tech-tags">
                  <span className="tech-tag">OAuth 2.0</span>
                  <span className="tech-tag">JWT</span>
                  <span className="tech-tag">HIPAA</span>
                  <span className="tech-tag">SSL/TLS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Project Impact</h2>
            <p>
              Meirad has successfully transformed healthcare workflows for over 500 healthcare providers,
              managing more than 50,000 patient records with 99.9% uptime. The platform has reduced
              appointment scheduling time by 60% and improved patient satisfaction scores by 40%.
              Key achievements include achieving full HIPAA compliance and seamless integration with
              existing healthcare systems.
            </p>
          </div>

          <div className="content-section">
            <h2>Project Links</h2>
            <div className="project-links">
              <a
                href="https://github.com/yourusername/meirad"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                View Source Code
              </a>
              <a
                href="https://meirad-demo.com"
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

export default Meirad;
