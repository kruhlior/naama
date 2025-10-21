import { useEffect, useState } from 'react';
import './styles/About.css';

const About = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showSuperpowers, setShowSuperpowers] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show superpowers when user starts scrolling down (after 100px)
      if (scrollY > 100 && !showSuperpowers) {
        setShowSuperpowers(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showSuperpowers]);


  const openPopup = (card) => {
    setSelectedCard(card);
    setShowNavigation(false);

    // Show navigation after 1 second
    setTimeout(() => {
      setShowNavigation(true);
    }, 1000);
  };

  const closePopup = () => {
    setSelectedCard(null);
    setShowNavigation(false);
  };

  const navigateToPrevious = () => {
    const currentIndex = superpowers.findIndex(s => s.id === selectedCard.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : superpowers.length - 1;
    setSelectedCard(superpowers[previousIndex]);

    // Scroll to active nav item in mobile
    setTimeout(() => {
      const activeNavItem = document.querySelector('.superpowers-nav-item.active');
      if (activeNavItem) {
        activeNavItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }, 100);
  };

  const navigateToNext = () => {
    const currentIndex = superpowers.findIndex(s => s.id === selectedCard.id);
    const nextIndex = currentIndex < superpowers.length - 1 ? currentIndex + 1 : 0;
    setSelectedCard(superpowers[nextIndex]);

    // Scroll to active nav item in mobile
    setTimeout(() => {
      const activeNavItem = document.querySelector('.superpowers-nav-item.active');
      if (activeNavItem) {
        activeNavItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }, 100);
  };

  const handleFindSuperpowers = () => {
    if (!showSuperpowers) {
      setShowSuperpowers(true);
      setTimeout(() => {
        const superpowersSection = document.querySelector('.superpowers-section');
        if (superpowersSection) {
          superpowersSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    } else {
      // Just scroll if superpowers are already revealed
      const superpowersSection = document.querySelector('.superpowers-section');
      if (superpowersSection) {
        superpowersSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const superpowers = [
    {
      id: 'strategy-creativity',
      title: 'Strategy-Creativity Mix',
      image: '/projects/About-strategy-creativity.png',
      description: 'I move seamlessly between big-picture strategy and hands-on design. I love connecting research-driven logic with creative intuition to turn ideas into impact.',
    },
    {
      id: 'ai-black-belt',
      title: 'AI Black Belt',
      image: '/projects/About-AI.png',
      description: 'I design with AI and design for AI - using it as a creative partner while building intelligent, human-centered experiences powered by it.',
    },
    {
      id: 'cognitive-science',
      title: 'Cognitive Science',
      image: '/projects/About-edu.png',
      description: 'My background in cognitive psychology (MA) and brain science (PHD) shapes everything I do. It helps me understand how people think, decide, and behave - and design experiences that align naturally with the way their minds work.',
    },
    {
      id: 'design-heart',
      title: 'Design with Heart',
      image: '/projects/About-empathy.png',
      description: 'Behind every interface is a person. I design with empathy and intention - creating experiences that not only function beautifully, but also feel meaningful, supportive, and human.',
    },
    {
      id: 'design-domains',
      title: 'Cross-Industry Lens',
      image: '/projects/About-industries.png',
      description: 'From healthcare and education to telecom, AI, and aviation - I\'ve designed for worlds that couldn\'t be more different. That diversity keeps my work sharp, adaptable, and grounded in real human needs.',
    },
    {
      id: 'gamification-ninja',
      title: 'Gamification Ninja',
      image: '/projects/About-gamification.png',
      description: 'Game design was my first UX playground. I still use those principles - motivation, feedback, and flow - to make digital experiences engaging, intuitive, and just a little bit addictive (in a good way).',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1 className="about-hero-title">
                About me
              </h1>
              <p className="about-hero-subtitle">
                I&apos;m a UX strategist and design leader who turns complexity into clarity through
                research-driven, human-centered design
                <br />
                <span className="gradient-text">MINDESIGN</span> is my UX consulting studio, where
                strategy meets creativity to craft
                scalable, meaningful digital experiences.
              </p>
              <button className="about-hero-button" onClick={handleFindSuperpowers}>
                See my superpowers
              </button>
            </div>
            <div className="about-hero-image">
              <img
                src="/projects/Abou-hero-image.png"
                alt="About Hero"
                className="about-hero-main-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Superpowers Section */}
      <section className="superpowers-section">
        <div className="container">
          <div className="superpowers-intro">
            <button
              className="superpowers-intro-button"
              onClick={handleFindSuperpowers}
              aria-label="See my superpowers"
            >
              <img
                src="/projects/About-ux-box.png"
                alt="UX Box"
                className="superpowers-intro-image"
              />
            </button>
          </div>
          <button
            className="superpowers-title"
            onClick={handleFindSuperpowers}
            aria-label="See my superpowers"
          >
            My superpowers
          </button>
          <div className={`superpowers-grid ${showSuperpowers ? 'superpowers-grid-visible' : 'superpowers-grid-hidden'}`}>
            {superpowers.map((superpower) => (
              <div
                key={superpower.id}
                className="superpower-card"
                onClick={() => openPopup(superpower)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openPopup(superpower);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${superpower.title} popup`}
              >
                <div className="superpower-image">
                  <img
                    src={superpower.image}
                    alt={superpower.title}
                    className="superpower-img"
                  />
                </div>
                <h3 className="superpower-card-title">{superpower.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {selectedCard && (
        <div
          className="superpowers-popup-overlay"
          onClick={closePopup}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              closePopup();
            }
          }}
          aria-label="Close popup"
        >
          <div className="superpowers-popup-content" data-superpower={selectedCard.id}>
            <button
              className="superpowers-popup-close"
              onClick={closePopup}
              aria-label="Close popup"
            >
              ×
            </button>

            <h2 className="superpowers-popup-header">My superpowers</h2>

            {/* Left Chevron */}
            <button
              className="superpowers-popup-chevron superpowers-popup-chevron-left"
              onClick={(e) => {
                e.stopPropagation();
                navigateToPrevious();
              }}
              aria-label="Previous superpower"
            >
              ‹
            </button>

            {/* Right Chevron */}
            <button
              className="superpowers-popup-chevron superpowers-popup-chevron-right"
              onClick={(e) => {
                e.stopPropagation();
                navigateToNext();
              }}
              aria-label="Next superpower"
            >
              ›
            </button>

            <div
              className="superpowers-popup-main"
              onClick={(e) => e.stopPropagation()}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              aria-label="Popup content area"
            >
              <div className="superpowers-popup-left">
                <div className="superpowers-popup-image">
                  <img
                    src={selectedCard.image}
                    alt={selectedCard.title}
                    className="superpowers-popup-img"
                  />
                </div>
              </div>

              <div className="superpowers-popup-right">
                <h3 className="superpowers-popup-title">{selectedCard.title}</h3>
                <p className="superpowers-popup-description">{selectedCard.description}</p>
              </div>
            </div>

            <div className={`superpowers-popup-navigation ${showNavigation ? 'navigation-visible' : ''}`}>
              {superpowers.map((superpower) => (
                <div
                  key={superpower.id}
                  className={`superpowers-nav-item ${selectedCard.id === superpower.id ? 'active' : ''}`}
                  data-superpower={superpower.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCard(superpower);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedCard(superpower);
                    }
                  }}
                  aria-label={`Select ${superpower.title}`}
                >
                  <div className="superpowers-nav-image">
                    <img
                      src={superpower.image}
                      alt={superpower.title}
                      className="superpowers-nav-img"
                    />
                  </div>
                  <span className="superpowers-nav-title">{superpower.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
