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

      {/* Work Sections */}
      <WorkSections />
    </div>
  );
};

export default Home;
