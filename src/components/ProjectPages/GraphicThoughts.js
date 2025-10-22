import { useState, useEffect } from 'react';
import ImageLightbox from '../ImageLightbox';
import './styles/GraphicThoughts.css';

const GraphicThoughts = () => {
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Only apply scroll behavior on mobile
      if (window.innerWidth <= 768) {
        // Get hero section height to determine when header becomes visible
        const heroSection = document.querySelector('.graphic-thoughts-header');
        const heroHeight = heroSection ? heroSection.offsetHeight : 100;

        if (currentScrollY <= heroHeight) {
          // At or above hero section - hide back button (header is visible)
          setShowBackButton(false);
        } else if (currentScrollY > heroHeight) {
          // Below hero section - show back button (header is hidden)
          setShowBackButton(true);
        }
      } else {
        // Always hide back button on desktop
        setShowBackButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToHome = () => {
    // Use browser back navigation to preserve state
    window.history.back();
  };

  return (
    <div className="project-page graphic-thoughts">
      {/* Mobile Back Button */}
      <button
        className={`mobile-back-button ${showBackButton ? 'visible' : ''}`}
        onClick={handleBackToHome}
      >
        ←
      </button>

      <div className="container">
        {/* Back Button */}
        <div className="back-button">
          <button onClick={handleBackToHome} className="back-link">
            <span className="back-text">← Back to Home</span>
            <span className="back-chevron">←</span>
          </button>
        </div>

        {/* Project Hero */}
        <div className="graphic-thoughts-header">
          <div className="project-hero-content">
            <div className="hero-text">
              <h1 className="project-title">Graphic thoughts</h1>
              <p className="project-subtitle">A visual exploration of ideas.</p>
            </div>
            <div className="project-hero-image">
              <img src="/projects/graphic-hero.png" alt="Graphic thoughts" />
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="graphic-thoughts-gallery">
          <div className="gallery-grid">
            {(() => {
              const images = [
                { src: '/projects/graphic-robot.png', alt: 'Robot graphic design' },
                { src: '/projects/graphic-linkedin.png', alt: 'LinkedIn graphic design' },
                { src: '/projects/graphic-resume-converted.png', alt: 'Resume graphic design' },
                { src: '/projects/graphic-resume2-converted.png', alt: 'Resume graphic design 2' },
              ];

              return images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <ImageLightbox
                    src={image.src}
                    alt={image.alt}
                    images={images}
                    currentIndex={index}
                  />
                </div>
              ));
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicThoughts;
