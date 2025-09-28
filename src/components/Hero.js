import './styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, <br /> I&apos;m <span className="highlight">Naama</span>
            </h1>
            <h2 className="hero-subtitle">UX Developer</h2>
            <p className="hero-description">
              I combine <span className="highlight">Cognitive Science </span> and  <span className="highlight"> Creativity </span>
              <br />
              to build AI first <br />experiences
            </p>
          </div>
          <div className="hero-animation">
            <img
              src="/naama.png"
              alt="Naama"
              className="hero-image"
            />
          </div>
        </div>
      </div>
      {/* Gradient Separator */}
      {/* <div className="gradient-separator" /> */}
    </section>
  );
};

export default Hero;
