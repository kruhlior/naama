import Hero from './Hero';
import WorkSections from './WorkSections';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* Work Sections */}
      <WorkSections />
    </div>
  );
};

export default Home;
