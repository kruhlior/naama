import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import ProblemBox from '../ProblemBox';
import SolutionBox from '../SolutionBox';
import './Unicef.css';

const Unicef = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Carousel functionality
    const initCarousel = () => {
      const slides = document.querySelectorAll('.carousel-slide');
      const dots = document.querySelectorAll('.dot');
      const prevBtn = document.querySelector('.carousel-btn.prev');
      const nextBtn = document.querySelector('.carousel-btn.next');

      if (slides.length === 0) {
        // If elements not found, try again after a short delay
        setTimeout(initCarousel, 100);
        return;
      }

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

      // Cleanup function
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
    };

    // Initialize carousel
    const cleanup = initCarousel();

    // Return cleanup function
    return cleanup;
  }, []);

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="project-page unicef">
      <div className="container">
        {/* Back Button */}
        <div className="back-button">
          <button onClick={handleBackToHome} className="back-link">
            ← Back to Home
          </button>
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
          customSectionBeforeSummary={
            <div className="goal-section">
              <h3 className="section-title">Goal</h3>
              <div className="goal-content">
                <div className="goal-text">
                  To create a trusted, transparent AI assistant that UNICEF employees can rely on for accurate, verified information while building confidence in AI technology through clear communication, source citations, and user-friendly design.
                </div>
                <div className="tldr-image-container">
                  <img
                    src="/projects/unicef-tldr.png"
                    alt="UNICEF TLDR"
                    className="tldr-image"
                    onError={(e) => {
                      e.target.src = '/placeholder-large.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          }
          userRole="UX consultant<br/>• UX Research<br/>• UX/UI Design<br/>"
          tools="• Figma<br/>• Jira<br/>• Chat GPT<br/>"
          collaboration="Worked closely with UNICEF stakeholders; knowledge managers, IT specialists, operational staff, and AI engineers"
          timeline="2024 (6 months)"
        />

        {/* Unique Needs Section */}
        <div className="unique-needs-section">
          <h3 className="section-title">The Unique Needs of UNICEF Employees</h3>
          <div className="unique-needs-content section-content">
            <div className="unique-needs-text">
              <p>
                As a global organization dedicated to protecting and improving the lives of children, UNICEF tackles complex challenges across humanitarian, political, and social domains.
                UNICEF employees operate in a dynamic and high-pressure environment, requiring tools that support a diverse range of workflows, from global humanitarian efforts to localized community programs.
              </p>
              <p>To support their work they need:</p>
            </div>
            <div className="unique-needs-bullets-and-image">
              <div className="unique-needs-bullets">
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
        </div>

        {/* Challenges Section */}
        <div className="challenges-section">
          <h3 className="challenges-title">Challenges and solutions</h3>
        </div>

        {/* First Challenge Section Title */}
        <div className="challenge-section-title">
          <h3 className="challenge-title">1st challenge:<br /><strong>Build trust in AI</strong></h3>
        </div>

        {/* First Challenge Images (Build trust in AI) */}
        <div className="challenges-image-section">
          <div className="challenge-image-container">
            <img
              src="/projects/Unicef-challenge-1a.png"
              alt="UNICEF Challenge 1a"
              className="challenges-image"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
            <p className="challenge-image-caption">
              An opaque interface that left users uncertain about AI reliability and data sources.
            </p>
          </div>
          <div className="challenge-image-container">
            <img
              src="/projects/Unicef-challenge-1b.png"
              alt="UNICEF Challenge 1b"
              className="challenges-image"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
            <p className="challenge-image-caption">
              A transparent, conversational interface that cites sources and builds user confidence in AI responses.
            </p>
          </div>
        </div>

        {/* First Problem and Solution Boxes (Build trust in AI) */}
        <div className="problem-solution-section">
          <div className="problem-solution-grid">
            <ProblemBox
              problem="Build trust in AI"
              problemMore="Design UniBot to be a reliable, transparent AI assistant that UNICEF employees can trust for verified information."
            />
            <SolutionBox
              solution="Clear and transparent design"
              solutionMore="When I started to work on that project, building users' trust in AI was defined as the most important project goal. I knew immediately that I'm going to love that project :) To build trust, a transparent design replaced the old unclear interface, which employees previously avoided due to inefficiency and confusion. Features like clear feedback on AI processes, user-friendly navigation, and intuitive error-handling mechanisms rebuilt trust and encouraged adoption."
            />
          </div>
        </div>

        {/* Second Challenge Section Title */}
        <div className="challenge-section-title">
          <h3 className="challenge-title">2nd challenge:<br /><strong>Secure, contextual AI use</strong></h3>
        </div>

        {/* Second Challenge Image (Promote secure, contextual AI use) */}
        <div className="challenges-image-section">
          <img
            src="/projects/unicef-challange1.png"
            alt="UNICEF Challenge 2"
            className="challenges-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Second Problem and Solution Boxes (Promote secure, contextual AI use) */}
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
                  src="/projects/unibot-global.png"
                  alt="UNICEF Global Knowledge Base"
                  className="carousel-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
              <div className="carousel-slide">
                <img
                  src="/projects/unibot-personal.png"
                  alt="UNICEF Personal Knowledge Base"
                  className="carousel-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
              <div className="carousel-slide">
                <img
                  src="/projects/unibot-groups.png"
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
          <p className="carousel-description">Layered knowledge chat</p>
        </div>

        {/* Third Challenge Section Title */}
        <div className="challenge-section-title">
          <h3 className="challenge-title">3rd challenge:<br /><strong>Enhance knowledge management</strong></h3>
        </div>

        {/* Third Challenge Image */}
        <div className="challenges-image-section">
          <img
            src="/projects/unicef-challange3.png"
            alt="UNICEF Challenge 3"
            className="challenges-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Third Problem and Solution Boxes */}
        <div className="problem-solution-section">
          <div className="problem-solution-grid">
            <ProblemBox
              problem="Enhance knowledge management"
              problemMore="Create an intuitive system for organizing and retrieving UNICEF's knowledge resources."
            />
            <SolutionBox
              solution="Seamless knowledge upload, search, and retrieval"
              solutionMore="An interface supporting advanced knowledge management features, including bulk document uploads, metadata tagging, and a user-friendly search function. The system emphasized clarity, with filters and sorting options by knowledge layers, making knowledge discovery straightforward."
            />
          </div>
        </div>

        {/* Key Features Section */}
        <div className="key-features-section">
          <h3 className="section-title">Key Features</h3>
          <div className="key-features-grid section-content">
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

        {/* Project Impact Section */}
        <div className="project-impact-section">
          <h3 className="section-title">Project Impact</h3>
          <div className="project-impact-content">
            <div className="project-impact-text-section">
              <p className="project-impact-text">
                The UNICEF Internal AI Bot has significantly improved knowledge management across the organization, serving thousands of staff members in 190+ countries with 60% increase in trust & satisfaction scores. The system has reduced information retrieval time by 70% and improved decision-making speed for emergency responses. Key achievements include establishing a trusted AI framework for humanitarian work and creating a scalable knowledge management platform that supports UNICEF&apos;s mission to protect children&apos;s rights worldwide.
              </p>
            </div>
            <div className="project-impact-image-section">
              <img
                src="/projects/Unicef-impact.png"
                alt="UNICEF Project Impact"
                className="project-impact-image"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>

          {/* Project Stats - Centered to full page width */}
          <div className="project-stats" style={{ marginTop: '3rem' }}>
            <div className="stat">
              <span className="stat-number">↑ 60%</span>
              <span className="stat-label">Trust & Satisfaction Scores</span>
            </div>
            <div className="stat">
              <span className="stat-number">↓ 70%</span>
              <span className="stat-label">Information Retrieval Time</span>
            </div>
            <div className="stat">
              <span className="stat-number">190+</span>
              <span className="stat-label">Countries Served</span>
            </div>
          </div>
        </div>

        {/* UNICEF For Every Child Image - Full Screen Width */}
        <div className="unicef-for-every-child-section">
          <img
            src="/projects/UNICEF-for-every-child.png"
            alt="UNICEF For Every Child"
            className="unicef-for-every-child-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Unicef;
