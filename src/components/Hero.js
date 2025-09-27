import './styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I&apos;m <span className="highlight">Your Name</span>
            </h1>
            <h2 className="hero-subtitle">UX Developer</h2>
            <p className="hero-description">
              I create beautiful, responsive, and user-friendly web experiences
              using modern technologies. Passionate about clean code and
              innovative solutions.
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
      <div className="gradient-separator" />
    </section>
  );
};

export default Hero;
