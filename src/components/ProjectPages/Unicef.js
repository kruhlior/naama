import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import ProblemBox from '../ProblemBox';
import SolutionBox from '../SolutionBox';
import './Unicef.css';

const Unicef = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    };

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    // Auto-advance carousel every 5 seconds
    const autoAdvance = setInterval(nextSlide, 5000);

    // Cleanup
    return () => {
      if (nextBtn) nextBtn.removeEventListener('click', nextSlide);
      if (prevBtn) prevBtn.removeEventListener('click', prevSlide);
      dots.forEach((dot, index) => {
        dot.removeEventListener('click', () => {
          currentSlide = index;
          showSlide(currentSlide);
        });
      });
      clearInterval(autoAdvance);
    };
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

        {/* Project Template */}
        <ProjectTemplate
          customHeader={
            <div className="project-title-section">
              <h1 className="project-title">UNICEF AI-Powered bot</h1>
              <h2 className="project-subtitle">Building a Trusted, Multi-Layered AI for Knowledge Management</h2>
              <div className="project-image-section">
                <img
                  src="/projects/unicef-hero.png"
                  alt="UNICEF AI Bot"
                  className="project-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
                <img
                  src="/projects/unicef-tldr.png"
                  alt="UNICEF TLDR"
                  className="project-tldr-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
            </div>
          }
          goal="Build a trusted, multi-layered AI system for knowledge management that helps UNICEF staff access and share critical information efficiently and securely."
          userRole="UX consultant<br/>• UX Research<br/>• UX/UI Design<br/>"
          tools="• Figma<br/>• Jira<br/>• Chet GPT<br/>"
          collaboration="Worked closely with UNICEF stakeholders; knowledge managers, IT specialists, operational staff, and AI engineers"
          timeline="2024 (6 months)"
        />

        {/* Unique Needs Section */}
        <div className="unique-needs-section">
          <div className="unique-needs-content">
            <div className="unique-needs-text">
              <h3 className="unique-needs-title">The Unique Needs of UNICEF Employees</h3>
              <p>
                As a global organization dedicated to protecting and improving the lives of children, UNICEF tackles complex challenges across humanitarian, political, and social domains.
                UNICEF employees operate in a dynamic and high-pressure environment, requiring tools that support a diverse range of workflows, from global humanitarian efforts to localized community programs.
              </p>
              <p>To support their work they need:</p>
              <ul>
                <li><strong>Accessible Knowledge:</strong> Easy access to accurate and up-to-date information across global and local contexts.</li>
                <li><strong>Transparency & Trust:</strong> Tools that prioritize ethical AI use, data privacy, and clear communication.</li>
                <li><strong>Reliable Information:</strong> Dependable knowledge sources are critical due to UNICEF&apos;s direct impact on children&apos;s lives and its involvement in sensitive political and social matters.</li>
                <li><strong>User-Friendliness:</strong> Intuitive interfaces catering to varying technical expertise.</li>
                <li><strong>Global Collaboration:</strong> Support for diverse cultural and linguistic needs across regions.</li>
                <li><strong>Efficiency Under Pressure:</strong> Reliable systems to streamline workflows in high-stakes environments.</li>
              </ul>
            </div>
            <div className="unique-needs-image">
              <img
                src="/projects/unicef-kids.png"
                alt="UNICEF Kids"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="key-features-section">
          <h3 className="key-features-title">Key Features</h3>
          <div className="key-features-grid">
            <div className="key-feature-item">
              <h4 className="key-feature-title">Multi-Layered AI Architecture</h4>
              <p className="key-feature-text">Advanced AI system with multiple layers for different types of knowledge processing and decision support.</p>
            </div>
            <div className="key-feature-item">
              <h4 className="key-feature-title">Trust & Safety Framework</h4>
              <p className="key-feature-text">Built-in trust mechanisms ensuring reliable, verified information for critical humanitarian decisions.</p>
            </div>
            <div className="key-feature-item">
              <h4 className="key-feature-title">Global Knowledge Base</h4>
              <p className="key-feature-text">Comprehensive database covering UNICEF policies, procedures, and best practices across all regions.</p>
            </div>
            <div className="key-feature-item">
              <h4 className="key-feature-title">Real-time Assistance</h4>
              <p className="key-feature-text">Instant access to relevant information and guidance for field operations and emergency response.</p>
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="challenges-section">
          <h3 className="challenges-title">Challenges and solutions</h3>
        </div>

        {/* Challenges Image */}
        <div className="challenges-image-section">
          <img
            src="/projects/unices-challange1.png"
            alt="UNICEF Challenges"
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
              problem="Promote secure, contextual AI use"
              problemMore="Ensure that AI is used responsibly, with clear access controls and context-specific interactions"
            />
            <SolutionBox
              solution="Layered knowledge chat"
              solutionMore="A chatbot interface that integrates seamlessly with UNICEF's Global, Group, and Personal Knowledge Layers. Providing clear visual distinctions between layers (e.g., color coding, icons) and ensured contextual document retrieval. Security concerns were addressed by incorporating robust access control features."
            />
          </div>
        </div>

        {/* Image Carousel */}
        <div className="image-carousel-section">
          <div className="carousel-container">
            <div className="carousel-track">
              <div className="carousel-slide active">
                <img
                  src="/projects/unicef-global.png"
                  alt="UNICEF Global Knowledge Base"
                  className="carousel-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
              <div className="carousel-slide">
                <img
                  src="/projects/unicef-personal.png"
                  alt="UNICEF Personal Knowledge Base"
                  className="carousel-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
              <div className="carousel-slide">
                <img
                  src="/projects/unicef-groups.png"
                  alt="UNICEF Groups Knowledge Base"
                  className="carousel-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
            </div>
            <div className="carousel-controls">
              <button className="carousel-btn prev" aria-label="Previous image">
                ‹
              </button>
              <div className="carousel-dots">
                <span className="dot active" data-slide="0" />
                <span className="dot" data-slide="1" />
                <span className="dot" data-slide="2" />
              </div>
              <button className="carousel-btn next" aria-label="Next image">
                ›
              </button>
            </div>
          </div>
        </div>

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
