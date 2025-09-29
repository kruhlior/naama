import { Link } from 'react-router-dom';
import './Project2.css';

const Project2 = () => {
  return (
    <div className="project-page project2">
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
            <h1 className="project-title">AI Chatbot</h1>
            <p className="project-subtitle">Intelligent conversational AI with natural language processing</p>
          </div>
        </div>

        {/* Project Stats */}
        <div className="project-stats">
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">Accuracy Rate</span>
          </div>
          <div className="stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Conversations</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Availability</span>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <div className="content-section">
            <h2>About This Project</h2>
            <p>
              An advanced AI chatbot powered by machine learning algorithms and natural language processing.
              The system provides intelligent responses, learns from interactions, and integrates seamlessly
              with various platforms.
            </p>
          </div>

          <div className="content-section">
            <h2>Technical Implementation</h2>
            <div className="implementation-grid">
              <div className="impl-item">
                <h3>Natural Language Processing</h3>
                <p>Advanced NLP models for understanding user intent and context.</p>
              </div>
              <div className="impl-item">
                <h3>Machine Learning</h3>
                <p>Continuous learning from user interactions to improve responses.</p>
              </div>
              <div className="impl-item">
                <h3>API Integration</h3>
                <p>RESTful APIs for seamless integration with existing systems.</p>
              </div>
              <div className="impl-item">
                <h3>Real-time Processing</h3>
                <p>Instant response generation with sub-second latency.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technologies & Tools</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">FastAPI</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Frontend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">WebSocket</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Infrastructure</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Redis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Project Links</h2>
            <div className="project-links">
              <a
                href="https://github.com/yourusername/ai-chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                View Source Code
              </a>
              <a
                href="https://your-ai-chatbot-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                Try Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
