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

        {/* Project Hero */}
        <div className="project-hero">
          <div className="hero-content">
            <h1 className="project-title">UNICEF Internal AI Bot</h1>
            <p className="project-subtitle">Building a Trusted, Multi-Layered AI for Knowledge Management</p>
          </div>
        </div>

        {/* Project Template */}
        <ProjectTemplate
          goal="Build a trusted, multi-layered AI system for knowledge management that helps UNICEF staff access and share critical information efficiently and securely."
          userRole="UX Designer & AI Interaction Specialist"
          tools="Figma, Miro, Azure AI, Power BI, SharePoint, UserTesting"
          collaboration="UNICEF IT Team, Knowledge Management Team, AI Engineers, Content Specialists"
          timeline="10 months (Research: 3 months, Design: 4 months, Development: 3 months)"
          challenges="Building trust in AI systems within a humanitarian organization, ensuring data security and privacy for sensitive information, and creating user-friendly interfaces for staff with varying technical backgrounds."
        />

        {/* Project Stats */}
        <div className="project-stats">
          <div className="stat">
            <span className="stat-number">15K+</span>
            <span className="stat-label">Staff Members</span>
          </div>
          <div className="stat">
            <span className="stat-number">190+</span>
            <span className="stat-label">Countries</span>
          </div>
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">Accuracy Rate</span>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <div className="content-section">
            <h2>About UNICEF AI Bot</h2>
            <p>
              The UNICEF Internal AI Bot is a sophisticated knowledge management system designed
              to support UNICEF&apos;s global operations across 190+ countries. This multi-layered AI
              solution provides trusted, accurate information retrieval and decision support for
              UNICEF&apos;s 15,000+ staff members, enabling more efficient humanitarian work and
              better outcomes for children worldwide.
            </p>
          </div>

          <div className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Multi-Layered AI Architecture</h3>
                <p>Advanced AI system with multiple layers for different types of knowledge processing and decision support.</p>
              </div>
              <div className="feature-item">
                <h3>Trust & Safety Framework</h3>
                <p>Built-in trust mechanisms ensuring reliable, verified information for critical humanitarian decisions.</p>
              </div>
              <div className="feature-item">
                <h3>Global Knowledge Base</h3>
                <p>Comprehensive database covering UNICEF policies, procedures, and best practices across all regions.</p>
              </div>
              <div className="feature-item">
                <h3>Real-time Assistance</h3>
                <p>Instant access to relevant information and guidance for field operations and emergency response.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technical Implementation</h2>
            <div className="implementation-grid">
              <div className="impl-item">
                <h3>AI/ML Infrastructure</h3>
                <p>Advanced machine learning models with natural language processing and knowledge graph technologies.</p>
              </div>
              <div className="impl-item">
                <h3>Security & Privacy</h3>
                <p>Enterprise-grade security with data encryption, access controls, and privacy protection measures.</p>
              </div>
              <div className="impl-item">
                <h3>Scalable Architecture</h3>
                <p>Cloud-based infrastructure supporting global deployment with high availability and performance.</p>
              </div>
              <div className="impl-item">
                <h3>Integration Capabilities</h3>
                <p>Seamless integration with existing UNICEF systems and third-party humanitarian tools.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technologies & Tools</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>AI/ML</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">Knowledge Graphs</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Redis</span>
                  <span className="tech-tag">Docker</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Infrastructure</h3>
                <div className="tech-tags">
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">Monitoring</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Project Impact</h2>
            <p>
              The UNICEF Internal AI Bot has significantly improved knowledge management across
              the organization, serving 15,000+ staff members in 190+ countries with 95% accuracy.
              The system has reduced information retrieval time by 70% and improved decision-making
              speed for emergency responses. Key achievements include establishing a trusted AI
              framework for humanitarian work and creating a scalable knowledge management platform
              that supports UNICEF&apos;s mission to protect children&apos;s rights worldwide.
            </p>
          </div>

          <div className="content-section">
            <h2>Project Links</h2>
            <div className="project-links">
              <a
                href="https://github.com/yourusername/unicef-ai-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                View Source Code
              </a>
              <a
                href="https://unicef-ai-demo.com"
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

export default Unicef;
