import { Link } from 'react-router-dom';
import './Project1.css';

const Project1 = () => {
  return (
    <div className="project-page project1">
      <div className="container">
        {/* Back Button */}
        <div className="back-button">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>

        {/* Project Header */}
        <div className="project-header">
          <h1 className="project-title">E-Commerce Platform</h1>
          <p className="project-subtitle">Full-stack e-commerce solution with modern UI/UX</p>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <div className="project-image">
            <img
              src="/project1-large.jpg"
              alt="E-Commerce Platform"
              onError={(e) => {
                e.target.src = '/placeholder-large.jpg';
              }}
            />
          </div>

          <div className="project-details">
            <div className="project-description">
              <h2>Project Overview</h2>
              <p>
                A comprehensive e-commerce platform built with React, Node.js, and MongoDB.
                Features include user authentication, payment integration, inventory management,
                and a responsive admin dashboard.
              </p>
            </div>

            <div className="project-features">
              <h2>Key Features</h2>
              <ul>
                <li>User authentication and authorization</li>
                <li>Product catalog with search and filtering</li>
                <li>Shopping cart and checkout process</li>
                <li>Payment integration with Stripe</li>
                <li>Admin dashboard for inventory management</li>
                <li>Responsive design for all devices</li>
              </ul>
            </div>

            <div className="project-technologies">
              <h2>Technologies Used</h2>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Stripe</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">CSS3</span>
              </div>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/yourusername/ecommerce-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
              <a
                href="https://your-ecommerce-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
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

export default Project1;
