import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from './NavigationButtons';
import { trackCategoryNavigation, trackProjectView } from '../utils/analytics';
import './styles/WorkSections.css';

const WorkSections = () => {
  const [activeCategory, setActiveCategory] = useState(() => {
    // Get the saved category from localStorage, or default to 'recent'
    return localStorage.getItem('activeCategory') || 'recent';
  });
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [scrollY, setScrollY] = useState(0);
  const workSectionRef = useRef(null);
  const navigate = useNavigate();

  const projects = {
    recent: [
      { id: 'qrkiez', title: 'Inclusive AI powered Marketplace & Social Platform', subtitle: 'Full-stack UX leadership: strategy, design system, and product experience for an inclusive platform.', image: '/Qrkiez.png', category: 'recent', template: 'template1', tags: ['recent', 'ai', 'mobile'] },
      { id: 'portal', title: 'Healthcare provider portal', subtitle: 'Transforming complex medical workflows into a simple, scalable solution.', image: '/Portal.png', category: 'recent', template: 'template1', tags: ['recent', 'web', 'b2b'] },
      { id: 'unicef', title: 'UNICEF internal AI bot', subtitle: 'Building a Trusted, Multi-Layered AI for Knowledge Management', image: '/UNicef.png', category: 'recent', template: 'template1', tags: ['recent', 'ai'] },
      { id: 'lloyd', title: 'Real world Video AI Assistant App', subtitle: 'From abstract AI to real adoption: guiding users into a new product experience', image: '/Lloyd.gif', category: 'recent', template: 'template1', tags: ['recent', 'mobile', 'ai'] },
      { id: 'amdocs', title: 'Telecom Enterprise Solution', subtitle: 'A Fierce Innovation Award-winning enterprise solution, shaping designs that streamlined complex workflows.', image: '/Amdocs.png', category: 'recent', template: 'template1', tags: [ 'b2b'] },
      { id: 'myriad', title: 'Company website full redesign', subtitle: 'A seamless journey for patients and healthcare providers', image: '/Myriad.gif', category: 'recent', template: 'template1', tags: ['b2b', 'web', 'recent'] },
      { id: 'cleaner', title: 'Bullshit Cleaner - Solo AI Project', subtitle: 'A self-initiated project turning messy, exaggerated text into clear communication through UX and AI innovation.', image: '/Cleaning.gif', category: 'recent', template: 'template2', tags: ['recent', 'web', 'ai'] },
    ],
    ai: [
    ],
    b2b: [
    ],
    web: [
    ],
    mobile: [
    ],
    art: [
      { id: 'photo-doodles', title: 'Photo-doodles', subtitle: 'What do I do in my free time?\ntake photos and doodle on them :)', image: '/projects/doodle-bulb.png', category: 'art', template: 'template1', tags: ['art'], route: '/project/photo-doodles' },
      { id: 'graphic-thoughts', title: 'Graphic thoughts', subtitle: 'A visual exploration of ideas.', image: '/projects/graphic-robot.png', category: 'art', template: 'template1', tags: ['art'], route: '/project/graphic-thoughts' },
      { id: 'drawings', title: 'Drawings', subtitle: 'Some people meditate. I draw.', image: '/projects/drawing-view.png', category: 'art', template: 'template1', tags: ['art'], route: '/project/drawings' },
    ],
  };

  // Get all projects and filter by tags
  const allProjects = Object.values(projects).flat();
  const currentProjects = allProjects.filter(project =>
    project.tags && project.tags.includes(activeCategory),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.dataset.cardId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    const cardElements = document.querySelectorAll('.project-card');
    cardElements.forEach((card) => observer.observe(card));

    return () => {
      cardElements.forEach((card) => observer.unobserve(card));
    };
  }, [currentProjects]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    // Save the active category to localStorage
    localStorage.setItem('activeCategory', categoryId);
    // Track category navigation
    trackCategoryNavigation(categoryId);

    // Dispatch custom event to notify header that navigation was used
    window.dispatchEvent(new CustomEvent('navigationCategoryChanged'));

    // Scroll to the top of the work section when category changes
    if (workSectionRef.current) {
      // Use a small delay to ensure the category change is processed first
      setTimeout(() => {
        workSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Dispatch the event again after scroll starts to ensure header stays hidden
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('navigationCategoryChanged'));
        }, 100);
      }, 50);
    }
  };

  const handleProjectClick = (project) => {
    const route = project.route || `/project/${project.id}`;
    // Track project view
    trackProjectView(project.title, project.category);
    navigate(route);
  };

  return (
    <section className={`work-sections category-${activeCategory}`} ref={workSectionRef}>
      {/* Coffee Decoration */}
      <div
        className="coffee-decoration"
        style={{
          transform: `rotate(30deg) translateY(${scrollY * 0.1}px)`,
        }}
      >
        <img src="/coffee.png" alt="Coffee decoration" />
      </div>

      {/* Pen Decoration */}
      <div
        className="pen-decoration"
        style={{
          transform: `rotate(-20deg) translateY(${scrollY * 0.1}px)`,
        }}
      >
        <img src="/pen.png" alt="Pen decoration" />
      </div>

      {/* Dragon Decoration */}
      <div
        className="dragon-decoration"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <img src="/dragon.png" alt="Dragon decoration" />
      </div>

      {/* Plant Decoration */}
      <div
        className="plant-decoration"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <img src="/plant.png" alt="Plant decoration" />
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="container">
        {/* Mobile Navigation Tabs */}
        <div className="mobile-nav-tabs">
          <div className="mobile-nav-item">
            {activeCategory === 'recent' && (
              <img src="/nav-recent-mobile.png" alt="Recent" className="mobile-nav-icon" />
            )}
            <button
              className={`mobile-nav-tab ${activeCategory === 'recent' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('recent')}
            >
              Recent
            </button>
          </div>
          <div className="mobile-nav-item">
            {activeCategory === 'ai' && (
              <img src="/nav-AI-mobile.png" alt="AI" className="mobile-nav-icon" />
            )}
            <button
              className={`mobile-nav-tab ${activeCategory === 'ai' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('ai')}
            >
              AI
            </button>
          </div>
          <div className="mobile-nav-item">
            {activeCategory === 'b2b' && (
              <img src="/nav-b2b-mobile.png" alt="B2B" className="mobile-nav-icon" />
            )}
            <button
              className={`mobile-nav-tab ${activeCategory === 'b2b' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('b2b')}
            >
              B2B
            </button>
          </div>
          <div className="mobile-nav-item">
            {activeCategory === 'mobile' && (
              <img src="/nav-mobile-mobile.png" alt="Mobile" className="mobile-nav-icon" />
            )}
            <button
              className={`mobile-nav-tab ${activeCategory === 'mobile' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('mobile')}
            >
              Mobile
            </button>
          </div>
          <div className="mobile-nav-item">
            {activeCategory === 'web' && (
              <img src="/nav-web-mobile.png" alt="Web" className="mobile-nav-icon" />
            )}
            <button
              className={`mobile-nav-tab ${activeCategory === 'web' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('web')}
            >
              Web
            </button>
          </div>
          <div className="mobile-nav-item">
            {activeCategory === 'art' && (
              <img src="/van-art-mobile.png" alt="Art" className="mobile-nav-icon" />
            )}
            <button
              className={`mobile-nav-tab ${activeCategory === 'art' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('art')}
            >
              Art
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.template || 'default'} ${index % 2 === 0 ? 'left' : 'right'} ${visibleCards.has(project.id) ? 'fade-in' : ''}`}
              onClick={() => handleProjectClick(project)}
              onKeyDown={(e) => e.key === 'Enter' && handleProjectClick(project)}
              role="button"
              tabIndex={0}
              data-card-id={project.id}
              style={{
                '--parallax-y': `${scrollY * 0.03}px`,
              }}
            >
              {project.template === 'template1' ? (
                <>
                  <div className="project-content-left">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                    </div>
                  </div>
                  <div className="project-image-right">
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        e.target.src = '/placeholder.jpg';
                      }}
                    />
                  </div>
                </>
              ) : project.template === 'template2' ? (
                <>
                  <div className="project-content-top">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                    </div>
                  </div>
                  <div className="project-image-bottom">
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        e.target.src = '/placeholder.jpg';
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        e.target.src = '/placeholder.jpg';
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSections;
