import { Link } from 'react-router-dom';
import './Qrkiez.css';

const Qrkiez = () => {
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
            <h1 className="project-title">Qrkiez</h1>
            <p className="project-subtitle">Inclusive AI powered Marketplace & Social Platform</p>
            <div className="hero-image">
              <img
                src="/Qrkiez.png"
                alt="Qrkiez Platform"
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
            <span className="stat-number">10K+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Products Listed</span>
          </div>
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">User Satisfaction</span>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <div className="content-section">
            <h2>About Qrkiez</h2>
            <p>
              Qrkiez is an innovative AI-powered marketplace and social platform designed to create
              an inclusive environment for users from all backgrounds. The platform combines e-commerce
              functionality with social networking features, powered by advanced AI algorithms that
              ensure fair representation and accessibility for all users.
            </p>
          </div>

          <div className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>AI-Powered Recommendations</h3>
                <p>Advanced machine learning algorithms provide personalized product recommendations and content curation.</p>
              </div>
              <div className="feature-item">
                <h3>Inclusive Design</h3>
                <p>Accessibility-first approach with multi-language support, screen reader compatibility, and diverse representation.</p>
              </div>
              <div className="feature-item">
                <h3>Social Commerce</h3>
                <p>Integrated social features allowing users to share, review, and discover products through community interactions.</p>
              </div>
              <div className="feature-item">
                <h3>Smart Search</h3>
                <p>Natural language processing for intuitive product search and discovery across multiple categories.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technical Implementation</h2>
            <div className="implementation-grid">
              <div className="impl-item">
                <h3>Frontend Architecture</h3>
                <p>React-based SPA with TypeScript, Redux for state management, and responsive design principles.</p>
              </div>
              <div className="impl-item">
                <h3>AI/ML Integration</h3>
                <p>TensorFlow.js for client-side AI, Python backend with scikit-learn for recommendation engines.</p>
              </div>
              <div className="impl-item">
                <h3>Backend Services</h3>
                <p>Node.js with Express, MongoDB for data storage, Redis for caching, and microservices architecture.</p>
              </div>
              <div className="impl-item">
                <h3>Accessibility</h3>
                <p>WCAG 2.1 AA compliance, ARIA labels, keyboard navigation, and screen reader optimization.</p>
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
                  <span className="tech-tag">Styled Components</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Redis</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>AI/ML</h3>
                <div className="tech-tags">
                  <span className="tech-tag">TensorFlow.js</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">scikit-learn</span>
                  <span className="tech-tag">NLP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Project Impact</h2>
            <p>
              Qrkiez has successfully created a more inclusive digital marketplace by implementing
              AI-driven fairness algorithms and accessibility features. The platform has achieved
              95% user satisfaction and serves as a model for inclusive e-commerce design. Key
              achievements include reducing bias in product recommendations by 40% and increasing
              accessibility compliance to WCAG 2.1 AA standards.
            </p>
          </div>

          <div className="content-section">
            <h2>Project Links</h2>
            <div className="project-links">
              <a
                href="https://github.com/yourusername/qrkiez"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                View Source Code
              </a>
              <a
                href="https://qrkiez-demo.com"
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

export default Qrkiez;
