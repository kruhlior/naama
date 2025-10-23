import { useState, useEffect } from 'react';
import ImageLightbox from '../ImageLightbox';
import './styles/PhotoDoodles.css';

const PhotoDoodles = () => {
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
        const heroSection = document.querySelector('.photo-doodles-header');
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
    <div className="project-page photo-doodles">
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
        <div className="photo-doodles-header">
          <div className="project-hero-content">
            <div className="hero-text">
              <h1 className="project-title">Photo-doodles</h1>
              <p className="project-subtitle">What do I do in my free time?<br />take photos and doodle on them :)</p>
            </div>
            <div className="project-hero-image">
              <img src="/projects/doodle-hero.png" alt="Photo-doodles" />
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="photo-doodles-gallery">
          <div className="gallery-grid">
            {(() => {
              const images = [
                { src: '/projects/doodle-bulb.png', alt: 'Lightbulb doodle' },
                { src: '/projects/doodle-fragile.png', alt: 'Fragile mountain doodle' },
                { src: '/projects/doodle-zip.png', alt: 'Canyon zipper doodle' },
                { src: '/projects/doodle-road.png', alt: 'Road dancer doodle' },
                { src: '/projects/doodle-tree.png', alt: 'Tree eye doodle' },
                { src: '/projects/doodle-statue.png', alt: 'Statue doodle' },
                { src: '/projects/doodle-bowie.png', alt: 'Bowie portrait doodle' },
                { src: '/projects/doodle-rolling.png', alt: 'Rolling Stones tree doodle' },
                { src: '/projects/doodle-shoes.png', alt: 'Shoes doodle' },
                { src: '/projects/doodle-naked.png', alt: 'Canyon figure doodle' },
                { src: '/projects/doodle-sushi.png', alt: 'Sushi shoes doodle' },
                { src: '/projects/doodle-psst.png', alt: 'Psst doodle' },
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

export default PhotoDoodles;
