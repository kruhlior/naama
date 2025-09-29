import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import './Lloyd.css';

const Lloyd = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page lloyd">
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
            <h1 className="project-title">Lloyd</h1>
            <p className="project-subtitle">Real world Video AI Assistant App</p>
          </div>
        </div>

        {/* Project Template */}
        <ProjectTemplate
          goal="Guide users from abstract AI concepts to real adoption by creating an intuitive video AI assistant app that makes complex technology accessible and useful in everyday scenarios."
          userRole="UX Designer & AI Product Designer"
          tools="Figma, Principle, After Effects, React Native, AI APIs, UserTesting"
          collaboration="Product Manager, AI Engineers, Mobile Developers, Video Specialists"
          timeline="7 months (Research: 2 months, Design: 3 months, Development: 2 months)"
          challenges="Making complex AI technology accessible to everyday users, ensuring real-time video processing works smoothly across different devices, and building user trust in AI-powered video analysis."
        />

        {/* Project Stats */}
        <div className="project-stats">
          <div className="stat">
            <span className="stat-number">1M+</span>
            <span className="stat-label">Video Interactions</span>
          </div>
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat">
            <span className="stat-number">85%</span>
            <span className="stat-label">User Adoption</span>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <div className="content-section">
            <h2>About Lloyd</h2>
            <p>
              Lloyd is a groundbreaking real-world Video AI Assistant App that bridges the gap
              between abstract AI technology and practical user adoption. The app transforms
              complex AI capabilities into intuitive, user-friendly experiences, guiding users
              through a seamless journey from initial curiosity to full product engagement.
            </p>
          </div>

          <div className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Video AI Processing</h3>
                <p>Advanced computer vision and natural language processing for real-time video analysis and interaction.</p>
              </div>
              <div className="feature-item">
                <h3>User Onboarding</h3>
                <p>Intuitive guided experience that helps users understand and adopt AI technology naturally.</p>
              </div>
              <div className="feature-item">
                <h3>Real-time Assistance</h3>
                <p>Instant AI-powered responses and suggestions based on video content and user context.</p>
              </div>
              <div className="feature-item">
                <h3>Adaptive Learning</h3>
                <p>AI system that learns from user interactions to provide increasingly personalized experiences.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technical Implementation</h2>
            <div className="implementation-grid">
              <div className="impl-item">
                <h3>Computer Vision</h3>
                <p>Advanced image and video processing using state-of-the-art deep learning models for object detection and scene understanding.</p>
              </div>
              <div className="impl-item">
                <h3>Natural Language Processing</h3>
                <p>Sophisticated NLP models for understanding user queries and generating contextual responses.</p>
              </div>
              <div className="impl-item">
                <h3>Real-time Processing</h3>
                <p>Optimized architecture for low-latency video processing and instant AI responses.</p>
              </div>
              <div className="impl-item">
                <h3>User Experience Design</h3>
                <p>Carefully crafted UX that makes complex AI technology accessible to everyday users.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technologies & Tools</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>AI/ML</h3>
                <div className="tech-tags">
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">OpenCV</span>
                  <span className="tech-tag">PyTorch</span>
                  <span className="tech-tag">Transformers</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Mobile</h3>
                <div className="tech-tags">
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">iOS</span>
                  <span className="tech-tag">Android</span>
                  <span className="tech-tag">Camera API</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">WebRTC</span>
                  <span className="tech-tag">Redis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Project Impact</h2>
            <p>
              Lloyd has successfully achieved 85% user adoption rate, processing over 1 million
              video interactions with 50,000+ active users. The app has revolutionized how
              users interact with AI technology, reducing the learning curve by 60% and
              increasing user engagement by 150%. Key achievements include creating an
              intuitive bridge between complex AI capabilities and real-world applications,
              making advanced technology accessible to mainstream users.
            </p>
          </div>

          <div className="content-section">
            <h2>Project Links</h2>
            <div className="project-links">
              <a
                href="https://github.com/yourusername/lloyd"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                View Source Code
              </a>
              <a
                href="https://lloyd-demo.com"
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

export default Lloyd;
