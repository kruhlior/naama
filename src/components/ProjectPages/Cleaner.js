import { Link } from 'react-router-dom';
import './Cleaner.css';

const Cleaner = () => {
  return (
    <div className="project-page cleaner">
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
            <h1 className="project-title">Bullshit Cleaner</h1>
            <p className="project-subtitle">Solo AI Project</p>
            <div className="hero-image">
              <img
                src="/Cleaning.gif"
                alt="Bullshit Cleaner AI Tool"
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
            <span className="stat-label">Texts Processed</span>
          </div>
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">Accuracy Rate</span>
          </div>
          <div className="stat">
            <span className="stat-number">Solo</span>
            <span className="stat-label">Project</span>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <div className="content-section">
            <h2>About Bullshit Cleaner</h2>
            <p>
              Bullshit Cleaner is a self-initiated solo AI project that transforms messy,
              exaggerated text into clear, concise communication. This innovative tool
              combines advanced natural language processing with intuitive UX design to
              help users cut through corporate jargon, marketing fluff, and unnecessary
              complexity. The project demonstrates the power of AI in improving communication
              clarity and accessibility.
            </p>
          </div>

          <div className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>AI Text Analysis</h3>
                <p>Advanced NLP algorithms that identify and flag unnecessary jargon, buzzwords, and overly complex language.</p>
              </div>
              <div className="feature-item">
                <h3>Smart Simplification</h3>
                <p>Intelligent text rewriting that maintains meaning while improving clarity and readability.</p>
              </div>
              <div className="feature-item">
                <h3>Real-time Processing</h3>
                <p>Instant text analysis and cleaning with immediate feedback and suggestions for improvement.</p>
              </div>
              <div className="feature-item">
                <h3>User-friendly Interface</h3>
                <p>Intuitive design that makes complex AI technology accessible to everyday users.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technical Implementation</h2>
            <div className="implementation-grid">
              <div className="impl-item">
                <h3>Natural Language Processing</h3>
                <p>Custom NLP models trained to identify corporate jargon, buzzwords, and unnecessarily complex language patterns.</p>
              </div>
              <div className="impl-item">
                <h3>Text Generation</h3>
                <p>Advanced text generation algorithms that rewrite content while preserving original meaning and intent.</p>
              </div>
              <div className="impl-item">
                <h3>User Experience Design</h3>
                <p>Carefully crafted UX that makes AI-powered text cleaning accessible and enjoyable for all users.</p>
              </div>
              <div className="impl-item">
                <h3>Performance Optimization</h3>
                <p>Optimized processing pipeline ensuring fast, real-time text analysis and cleaning capabilities.</p>
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
                  <span className="tech-tag">Transformers</span>
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">OpenAI API</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Frontend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Tailwind CSS</span>
                  <span className="tech-tag">Vite</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Redis</span>
                  <span className="tech-tag">Docker</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Project Impact</h2>
            <p>
              Bullshit Cleaner has processed over 10,000 texts with a 95% accuracy rate,
              helping users transform complex, jargon-heavy content into clear, accessible
              communication. This solo project demonstrates the potential of AI in improving
              everyday communication and showcases innovative UX design that makes advanced
              technology approachable. Key achievements include developing a unique AI model
              for text simplification and creating an intuitive interface that makes complex
              AI technology accessible to non-technical users.
            </p>
          </div>

          <div className="content-section">
            <h2>Project Links</h2>
            <div className="project-links">
              <a
                href="https://github.com/yourusername/bullshit-cleaner"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                View Source Code
              </a>
              <a
                href="https://bullshit-cleaner-demo.com"
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

export default Cleaner;
