import Hero from './Hero';
import WorkSections from './WorkSections';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* Gap Spacing */}
      <div className="gap-spacing" />

      {/* See My Work Section - Mobile Only */}
      <div className="see-my-work-section">
        <div className="see-my-work-content">
          <img
            src="/projects/hand-point.png"
            alt="Hand pointing"
            className="hand-point-image"
            onError={(e) => {
              e.target.src = '/placeholder.jpg';
            }}
          />
          <span className="see-my-work-text">See my work</span>
        </div>
      </div>

      {/* Work Sections */}
      <WorkSections />
    </div>
  );
};

export default Home;
