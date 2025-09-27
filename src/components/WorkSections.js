import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from './NavigationButtons';
import './styles/WorkSections.css';

const WorkSections = () => {
  const [activeCategory, setActiveCategory] = useState('recent');
  const navigate = useNavigate();


  const projects = {
    recent: [
      { id: 1, title: 'E-Commerce Platform', image: '/project1.jpg', category: 'recent' },
      { id: 2, title: 'Task Management App', image: '/project2.jpg', category: 'recent' },
      { id: 3, title: 'Weather Dashboard', image: '/project3.jpg', category: 'recent' },
    ],
    ai: [
      { id: 4, title: 'AI Chatbot', image: '/project4.jpg', category: 'ai' },
      { id: 5, title: 'Machine Learning Model', image: '/project5.jpg', category: 'ai' },
      { id: 6, title: 'AI Analytics Dashboard', image: '/project6.jpg', category: 'ai' },
    ],
    b2b: [
      { id: 7, title: 'CRM System', image: '/project7.jpg', category: 'b2b' },
      { id: 8, title: 'Inventory Management', image: '/project8.jpg', category: 'b2b' },
      { id: 9, title: 'Business Analytics', image: '/project9.jpg', category: 'b2b' },
    ],
    web: [
      { id: 10, title: 'Portfolio Website', image: '/project10.jpg', category: 'web' },
      { id: 11, title: 'Blog Platform', image: '/project11.jpg', category: 'web' },
      { id: 12, title: 'Social Media App', image: '/project12.jpg', category: 'web' },
    ],
    mobile: [
      { id: 13, title: 'Fitness Tracker', image: '/project13.jpg', category: 'mobile' },
      { id: 14, title: 'Food Delivery App', image: '/project14.jpg', category: 'mobile' },
      { id: 15, title: 'Travel Guide', image: '/project15.jpg', category: 'mobile' },
    ],
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const currentProjects = projects[activeCategory] || [];

  return (
    <section className="work-sections">
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
              className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}
              onClick={() => handleProjectClick(project.id)}
              onKeyDown={(e) => e.key === 'Enter' && handleProjectClick(project.id)}
              role="button"
              tabIndex={0}
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSections;
