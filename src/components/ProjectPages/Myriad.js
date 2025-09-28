import { Link } from 'react-router-dom';
import './Myriad.css';

const Myriad = () => {
  return (
    <div className="project-page myriad">
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
            <h1 className="project-title">Myriad</h1>
            <p className="project-subtitle">Company website full redesign</p>
            <div className="hero-image">
              <img
                src="/Myriad.gif"
                alt="Myriad Website Redesign"
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
            <span className="stat-number">40%</span>
            <span className="stat-label">Conversion Increase</span>
          </div>
          <div className="stat">
            <span className="stat-number">60%</span>
            <span className="stat-label">User Engagement</span>
          </div>
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">User Satisfaction</span>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <div className="content-section">
            <h2>About Myriad Website Redesign</h2>
            <p>
              The Myriad company website redesign project focused on creating a seamless journey
              for both patients and healthcare providers. This comprehensive redesign transformed
              the existing website into a modern, user-friendly platform that improves accessibility,
              streamlines user flows, and enhances the overall user experience for all stakeholders
              in the healthcare ecosystem.
            </p>
          </div>

          <div className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Patient Portal</h3>
                <p>Intuitive patient portal with appointment scheduling, medical records access, and secure messaging.</p>
              </div>
              <div className="feature-item">
                <h3>Provider Dashboard</h3>
                <p>Comprehensive dashboard for healthcare providers with patient management and workflow optimization tools.</p>
              </div>
              <div className="feature-item">
                <h3>Responsive Design</h3>
                <p>Mobile-first approach ensuring optimal experience across all devices and screen sizes.</p>
              </div>
              <div className="feature-item">
                <h3>Accessibility Compliance</h3>
                <p>WCAG 2.1 AA compliant design with screen reader support and keyboard navigation.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technical Implementation</h2>
            <div className="implementation-grid">
              <div className="impl-item">
                <h3>User Experience Design</h3>
                <p>Comprehensive UX research and design system implementation for consistent user experience across all touchpoints.</p>
              </div>
              <div className="impl-item">
                <h3>Performance Optimization</h3>
                <p>Advanced performance optimization techniques including lazy loading, image compression, and CDN integration.</p>
              </div>
              <div className="impl-item">
                <h3>Security & Compliance</h3>
                <p>HIPAA-compliant security measures with encrypted data transmission and secure authentication systems.</p>
              </div>
              <div className="impl-item">
                <h3>Analytics Integration</h3>
                <p>Comprehensive analytics setup for tracking user behavior and measuring conversion metrics.</p>
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
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">Tailwind CSS</span>
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
                <h3>Design</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Figma</span>
                  <span className="tech-tag">Adobe XD</span>
                  <span className="tech-tag">Sketch</span>
                  <span className="tech-tag">Principle</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Project Impact</h2>
            <p>
              The Myriad website redesign achieved remarkable results with a 40% increase in conversion
              rates and 60% improvement in user engagement. The project successfully created a seamless
              journey for both patients and healthcare providers, resulting in 95% user satisfaction.
              Key achievements include reducing page load times by 50%, improving accessibility scores
              to WCAG 2.1 AA compliance, and establishing a scalable design system for future updates.
            </p>
          </div>

          <div className="content-section">
            <h2>Project Links</h2>
            <div className="project-links">
              <a
                href="https://github.com/yourusername/myriad"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                View Source Code
              </a>
              <a
                href="https://myriad-demo.com"
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

export default Myriad;
