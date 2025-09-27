import './styles/About.css';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'HTML5', 'CSS3', 'Node.js',
    'Git', 'Responsive Design', 'UI/UX', 'TypeScript', 'SASS',
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I&apos;m a passionate Frontend Developer</h3>
            <p>
              With over 3 years of experience in web development, I specialize in
              creating modern, responsive, and user-friendly web applications.
              I love turning complex problems into simple, beautiful designs.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
