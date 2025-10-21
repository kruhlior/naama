import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import './Lloyd.css';

const Lloyd = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollCarousel = (direction) => {
    const currentActive = document.querySelector('.carousel-dot.active');
    const currentIndex = parseInt(currentActive.dataset.index);

    let newIndex;
    if (direction === 'left') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : 2;
    } else {
      newIndex = currentIndex < 2 ? currentIndex + 1 : 0;
    }

    scrollToImage(newIndex);
  };

  const scrollToImage = (index) => {
    const carousel = document.getElementById('challenge-carousel');
    const dots = document.querySelectorAll('.carousel-dot');

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    // Scroll to the new image
    const imageWidth = 300 + 16; // 300px width + 16px gap
    carousel.scrollTo({
      left: index * imageWidth,
      behavior: 'smooth',
    });
  };

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
        <div className="project-custom-header">
          <div className="hero-content">
            <div className="hero-text hero-entrance-1">
              <h1 className="project-title">Real world Video AI Assistant App</h1>
              <p className="project-subtitle">Strategy, Conversion, and Onboarding</p>
              <a href="https://apps.apple.com/us/app/lloyd-your-ai-superpower/id588199307" target="_blank" rel="noopener noreferrer" className="website-link">
                Lloyd App
              </a>
            </div>
            <div className="hero-image hero-entrance-2">
              <img
                src="/projects/Lloyd-hero-movie.gif"
                alt="Lloyd Project"
                className="project-image"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Hero GIF Section - Mobile Only */}
        <div className="hero-gif-section mobile-only">
          <img
            src="/projects/Lloyd-hero-movie.gif"
            alt="Lloyd Project"
            className="hero-gif-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>

        {/* Project Template */}
        <ProjectTemplate
          customSectionBeforeSummary={
            <div className="goal-section">
              <h3 className="section-title">Goal</h3>
              <div className="goal-content">
                <div className="goal-text">
                  To transform Lloyd from an abstract AI concept into a trusted, user-friendly mobile application that makes complex video AI technology accessible to everyday users, while building confidence through clear communication and smooth onboarding experiences.
                </div>
                <div className="tldr-image-container">
                  <img
                    src="/projects/TLDR-lloyd.png"
                    alt="Lloyd TLDR"
                    className="tldr-image"
                    onError={(e) => {
                      e.target.src = '/placeholder-large.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          }
          userRole="Product Strategy, Design Oversight, Data-Driven Decisions"
          tools="Google Analytics, Google Firebase, Figma, Chat GPT, Midjourney"
          collaboration="Product Manager, AI Engineers, Mobile Developers, Video Specialists"
          timeline="5 months (Research: 1 month, Design: 3 months, Development: 1 months)"
          challenges="Making complex AI technology accessible to everyday users, ensuring real-time video processing works smoothly across different devices, and building user trust in AI-powered video analysis."
        />

        {/* First Challenge Section */}
        <div className="challenge-section">
          <h3 className="challenge-title">1st challenge<br /><strong>New and unfamiliar technology</strong></h3>

          {/* Problem and Solution Boxes */}
          <div className="problem-solution-section">
            <div className="problem-solution-grid">
              <div className="problem-box">
                <div className="problem-icon">
                  <img src="/icons/question.png" alt="Challenge" />
                </div>
                <div className="problem-content">
                  <h4 className="problem-title">Challenge:</h4>
                  <p className="problem-text">Introducing a new technology</p>
                  <p className="problem-more-text">The app leverages advanced AI technologies that may seem abstract or complex to new users.</p>
                </div>
              </div>
              <div className="solution-box">
                <div className="solution-icon">
                  <img src="/icons/solution.png" alt="Solution" />
                </div>
                <div className="solution-content">
                  <h4 className="solution-title">Solution:</h4>
                  <p className="solution-text">Building the right mental model</p>
                  <ul className="solution-more-text">
                    <li>Designed a <strong>user-centric introduction</strong> that simplified the AI&apos;s functionality, using relatable use cases to create familiarity and trust.</li>
                    <li>Developed <strong>intuitive onboarding flows</strong> that educated users while showcasing the product&apos;s value.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Images */}
          <div className="challenge-images-section">
            <div className="challenge-images-grid" id="challenge-carousel">
              <div className="challenge-image-item">
                <img
                  src="/projects/Lloyd-challenge-1a.jpg"
                  alt="Lloyd Challenge 1a"
                  className="challenge-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
              <div className="challenge-image-item">
                <img
                  src="/projects/Lloyd-challenge-1b.jpg"
                  alt="Lloyd Challenge 1b"
                  className="challenge-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
              <div className="challenge-image-item">
                <img
                  src="/projects/Lloyd-challenge-1c.jpg"
                  alt="Lloyd Challenge 1c"
                  className="challenge-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
            </div>

            {/* Mobile Carousel Navigation */}
            <div className="carousel-navigation mobile-only">
              <button className="carousel-arrow carousel-arrow-left" onClick={() => scrollCarousel('left')}>
                ‹
              </button>
              <div className="carousel-dots">
                <button className="carousel-dot active" data-index="0" onClick={() => scrollToImage(0)} />
                <button className="carousel-dot" data-index="1" onClick={() => scrollToImage(1)} />
                <button className="carousel-dot" data-index="2" onClick={() => scrollToImage(2)} />
              </div>
              <button className="carousel-arrow carousel-arrow-right" onClick={() => scrollCarousel('right')}>
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Second Challenge Section */}
        <div className="challenge-section">
          <h3 className="challenge-title">2nd challenge<br /><strong>Complete product transition</strong></h3>

          {/* Challenge Image */}
          <div className="challenge-image-section">
            <img
              src="/projects/Lloyd-challenge-2a.png"
              alt="Lloyd Challenge 2a"
              className="challenge-image"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
          </div>

          {/* Problem and Solution Boxes */}
          <div className="problem-solution-section">
            <div className="problem-solution-grid">
              <div className="problem-box">
                <div className="problem-icon">
                  <img src="/icons/question.png" alt="Challenge" />
                </div>
                <div className="problem-content">
                  <h4 className="problem-title">Challenge:</h4>
                  <p className="problem-text">From Glide to Lloyd</p>
                  <p className="problem-more-text">Replacing Glide, a well-loved video messaging app, with the new AI-powered Lloyd meant navigating a delicate transition. The two products served entirely different purposes, so maintaining user trust and engagement during migration was critical.</p>
                </div>
              </div>
              <div className="solution-box">
                <div className="solution-icon">
                  <img src="/icons/solution.png" alt="Solution" />
                </div>
                <div className="solution-content">
                  <h4 className="solution-title">Solution:</h4>
                  <p className="solution-text">Strategic transition approach</p>
                  <ul className="solution-more-text">
                    <li><strong>Clear communication:</strong> Introduced Lloyd&apos;s AI value while honoring Glide&apos;s legacy.</li>
                    <li><strong>User trust:</strong> Addressed privacy and functionality gaps through transparency and user education.</li>
                    <li><strong>Smooth onboarding:</strong> Designed intuitive flows to guide Glide users seamlessly into Lloyd.</li>
                    <li><strong>Re-engagement:</strong> Created campaigns to highlight Lloyd&apos;s benefits and encourage adoption.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Second Challenge Additional Image */}
          <div className="challenge-image-section">
            <img
              src="/projects/Lloyd-challenge-2b.png"
              alt="Lloyd Challenge 2b"
              className="challenge-image"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
            <p className="challenge-image-caption">
              Defining user journeys by groups, based on their previous experience with the old app
            </p>
          </div>
        </div>

        {/* Third Challenge Section */}
        <div className="challenge-section third-challenge">
          <h3 className="challenge-title">3rd challenge<br /><strong>Conversion</strong></h3>

          {/* Problem and Solution Boxes */}
          <div className="problem-solution-section">
            <div className="problem-solution-grid">
              <div className="problem-box">
                <div className="problem-icon">
                  <img src="/icons/question.png" alt="Challenge" />
                </div>
                <div className="problem-content">
                  <h4 className="problem-title">Challenge:</h4>
                  <p className="problem-text">Conversion to paying Customers</p>
                  <p className="problem-more-text">Free-to-paid conversion was a critical focus to ensure the product&apos;s sustainability.</p>
                </div>
              </div>
              <div className="solution-box">
                <div className="solution-icon">
                  <img src="/icons/solution.png" alt="Solution" />
                </div>
                <div className="solution-content">
                  <h4 className="solution-title">Solution:</h4>
                  <p className="solution-text">Strategic conversion approach</p>
                  <ul className="solution-more-text">
                    <li>Defined <strong>clear value propositions</strong> for both free and paid tiers.</li>
                    <li>Designed the onboarding flow to let users experience key features of the paid version early on, so they could <strong>see its value</strong> before making a decision.</li>
                    <li>Used <strong>behavior analytics</strong> to identify pain points and refine messaging to encourage conversion.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third Challenge Image */}
            <div className="challenge-image-section">
              <img
                src="/projects/Lloyd-challenge-3a.png"
                alt="Lloyd Challenge 3a"
                className="challenge-image"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>

          {/* Third Challenge Second Image */}
          <div className="challenge-image-section">
            <img
              src="/projects/Lloyd-challenge-3b.png"
              alt="Lloyd Challenge 3b"
              className="challenge-image"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
            <p className="challenge-image-caption">
              Defining upgrade flow, making sure the user has opportunity to experience the full value of premium account. and identifying touchpoint to offer an upgrade
            </p>
          </div>
        </div>

        {/* Project Outcomes Section */}
        <div className="project-outcomes-section">
          <h3 className="section-title">Project outcomes - Lloyd transition</h3>
          <div className="project-outcomes-content">
            <div className="project-outcomes-text-section section-content">
              <p>
                The transition from Glide to Lloyd successfully retained much of the existing user base while introducing a new experience built around AI. Through a combination of clear communication, thoughtful onboarding, and targeted re-engagement, we saw steady migration from Glide users into the new product and encouraging early conversion to paid plans.
              </p>
              <p>
                The new onboarding experience reduced drop-off rates, increased user confidence in the product, and laid the foundation for sustainable, long-term engagement.
              </p>
            </div>
            <div className="project-outcomes-image-section">
              <img
                src="/projects/Lloyd-impact.png"
                alt="Lloyd Project Impact"
                className="project-outcomes-image"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Lloyd;
