import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from './NavigationButtons';
import './styles/WorkSections.css';

const WorkSections = () => {
  const [activeCategory, setActiveCategory] = useState('recent');
  const navigate = useNavigate();


  const projects = {
    recent: [
      { id: 'qrkiez', title: 'Inclusive AI powered Marketplace & Social Platform', subtitle: 'Full-stack UX leadership: strategy, design system, and product experience for an inclusive platform.', image: '/Qrkiez.png', category: 'recent', template: 'template1', tags: ['recent', 'ai', 'mobile'] },
      { id: 'portal', title: 'Healthcare provider portal', subtitle: 'Transforming complex medical workflows into a simple, scalable solution.', image: '/Portal.png', category: 'recent', template: 'template1', tags: ['recent', 'web', 'b2b'] },
      { id: 'unicef', title: 'UNICEF internal AI bot', subtitle: 'Building a Trusted, Multi-Layered AI for Knowledge Management', image: '/UNicef.png', category: 'recent', template: 'template1', tags: ['recent', 'web'] },
      { id: 'lloyd', title: 'Real world Video AI Assistant App', subtitle: 'From abstract AI to real adoption: guiding users into a new product experience', image: '/Lloyd.gif', category: 'recent', template: 'template1', tags: ['recent', 'mobile', 'ai'] },
      { id: 'myriad', title: 'Company website full redesign', subtitle: 'A seamless journey for patients and healthcare providers', image: '/Myriad.gif', category: 'recent', template: 'template1', tags: ['b2b', 'web', 'recent'] },
      { id: 'amdocs', title: 'Telecom Enterprise Solution', subtitle: 'A Fierce Innovation Award–winning enterprise solution, shaping designs that streamlined complex workflows.', image: '/Amdocs.png', category: 'recent', template: 'template1', tags: ['recent', 'b2b'] },
      { id: 'cleaner', title: 'Bullshit Cleaner - Solo AI Project', subtitle: 'A self-initiated project turning messy, exaggerated text into clear communication through UX and AI innovation.', image: '/Cleaning.gif', category: 'recent', template: 'template2', tags: ['recent', 'web', 'ai'] },
    ],
    ai: [
      { id: 4, title: 'AI Chatbot', image: '/project4.jpg', category: 'ai' },
      { id: 5, title: 'Machine Learning Model', image: '/project5.jpg', category: 'ai' },
      { id: 6, title: 'AI Analytics Dashboard', image: '/project6.jpg', category: 'ai' },
      { id: 20, title: 'Computer Vision App', image: '/project20.jpg', category: 'ai' },
      { id: 21, title: 'Natural Language Processor', image: '/project21.jpg', category: 'ai' },
      { id: 22, title: 'Predictive Analytics Tool', image: '/project22.jpg', category: 'ai' },
      { id: 23, title: 'AI Recommendation Engine', image: '/project23.jpg', category: 'ai' },
    ],
    b2b: [
      { id: 7, title: 'CRM System', image: '/project7.jpg', category: 'b2b' },
      { id: 8, title: 'Inventory Management', image: '/project8.jpg', category: 'b2b' },
      { id: 9, title: 'Business Analytics', image: '/project9.jpg', category: 'b2b' },
      { id: 24, title: 'Enterprise Resource Planning', image: '/project24.jpg', category: 'b2b' },
      { id: 25, title: 'Supply Chain Management', image: '/project25.jpg', category: 'b2b' },
      { id: 26, title: 'Financial Reporting System', image: '/project26.jpg', category: 'b2b' },
      { id: 27, title: 'Project Management Platform', image: '/project27.jpg', category: 'b2b' },
    ],
    web: [
      { id: 10, title: 'Portfolio Website', image: '/project10.jpg', category: 'web' },
      { id: 11, title: 'Blog Platform', image: '/project11.jpg', category: 'web' },
      { id: 12, title: 'Social Media App', image: '/project12.jpg', category: 'web' },
      { id: 28, title: 'E-Learning Platform', image: '/project28.jpg', category: 'web' },
      { id: 29, title: 'Online Marketplace', image: '/project29.jpg', category: 'web' },
      { id: 30, title: 'Real Estate Portal', image: '/project30.jpg', category: 'web' },
      { id: 31, title: 'Healthcare Management System', image: '/project31.jpg', category: 'web' },
    ],
    mobile: [
      { id: 13, title: 'Fitness Tracker', image: '/project13.jpg', category: 'mobile' },
      { id: 14, title: 'Food Delivery App', image: '/project14.jpg', category: 'mobile' },
      { id: 15, title: 'Travel Guide', image: '/project15.jpg', category: 'mobile' },
      { id: 32, title: 'Banking Mobile App', image: '/project32.jpg', category: 'mobile' },
      { id: 33, title: 'Gaming Platform', image: '/project33.jpg', category: 'mobile' },
      { id: 34, title: 'Event Management App', image: '/project34.jpg', category: 'mobile' },
      { id: 35, title: 'Language Learning App', image: '/project35.jpg', category: 'mobile' },
    ],
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  // Get all projects and filter by tags
  const allProjects = Object.values(projects).flat();
  const currentProjects = allProjects.filter(project =>
    project.tags && project.tags.includes(activeCategory),
  );

  return (
    <section className="work-sections">
      {/* Coffee Decoration */}
      <div className="coffee-decoration">
        <img src="/coffee.png" alt="Coffee decoration" />
      </div>

      {/* Pen Decoration */}
      <div className="pen-decoration">
        <img src="/pen.png" alt="Pen decoration" />
      </div>

      {/* Dragon Decoration */}
      <div className="dragon-decoration">
        <img src="/dragon.png" alt="Dragon decoration" />
      </div>

      {/* Plant Decoration */}
      <div className="plant-decoration">
        <img src="/plant.png" alt="Plant decoration" />
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="container">

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.template || 'default'} ${index % 2 === 0 ? 'left' : 'right'}`}
              onClick={() => handleProjectClick(project.id)}
              onKeyDown={(e) => e.key === 'Enter' && handleProjectClick(project.id)}
              role="button"
              tabIndex={0}
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
