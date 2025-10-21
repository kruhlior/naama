import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import './Qrkiez.css';

const Qrkiez = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page qrkiez">
      <div className="container">
        {/* Back Button */}
        <div className="back-button">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>

        {/* Project Hero */}
        <div className="project-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="project-title">Inclusive AI powered Marketplace & Social Platform</h1>
              <p className="project-subtitle">End to end creation of a platform for the neurodiverse community</p>
            </div>
            <div className="hero-image">
              <img
                src="/projects/qrkiez.gif"
                alt="Qrkiez Platform"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
            <div className="hero-tldr-image">
              <img
                src="/projects/qrkiez-tldr.png"
                alt="Qrkiez TLDR"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Project Template */}
        <ProjectTemplate
          customSectionBeforeSummary={
            <div className="goal-section">
              <h3 className="section-title">Goal</h3>
              <div className="goal-content">
                <div className="goal-text">
                  Design an inclusive, AI-first product that replaces traditional form-based workflows with adaptive, conversational experiences - while delivering meaningful value for both service providers and families.
                </div>
                <div className="tldr-image-container">
                  <img
                    src="/projects/qrkiez-tldr.png"
                    alt="Qrkiez TLDR"
                    className="tldr-image"
                    onError={(e) => {
                      e.target.src = '/placeholder-large.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          }
          userRole="Full ownership from concept to final delivery:<br/>•⁠  ⁠Product strategy & UX design<br/>•⁠  ⁠Visual design & prototyping<br/>•⁠  ⁠Design system creation<br/>•⁠  ⁠AI flow logic"
          tools="Figma • Ideogram • UX-pilot • Slack • ChatGPT • Midjourney"
          collaboration="Worked closely with the Qrkiez founders, AI engineers and marketing team"
          timeline="9 months (Research: 1 month, Design: 6 months, Testing: 2 months)"
          challenges="Balancing AI personalization with user privacy, ensuring accessibility across diverse user groups, and creating intuitive interfaces for complex AI features while maintaining trust and transparency in algorithmic decision-making."
          specialProjectSection={
            <div className="special-project-section">
              <h3 className="section-title">What make this project special?</h3>
              <div className="special-project-content section-content">
                <div className="special-project-text">
                  <p>
                    Qrkiez project was about more than UX - it was about care.
                  </p>
                  <p>
                    For many families, finding the right support for a neurodivergent child is overwhelming and often isolating. Qrkiez was built to ease that journey, with empathy in every interaction and AI that feels human.
                  </p>
                  <p>
                    While working on that project I always remembered that behind every search is a parent who just wants to see their child thrive.
                  </p>
                </div>
                <div className="special-project-image">
                  <img
                    src="/projects/qrkiez-about.jpeg"
                    alt="Helping families find support, and hope, with ease."
                    onError={(e) => {
                      e.target.src = '/placeholder-large.jpg';
                    }}
                  />
                  <p className="image-description">Helping families find support, and hope, with ease.</p>
                </div>
              </div>
            </div>
          }
          firstChallengeSection={
            <div className="challenge-section">
              <h3 className="challenge-title">1st challenge</h3>
              <h4 className="challenge-subtitle"><strong>Designing real AI experiences</strong></h4>

              <div className="problem-solution-section">
                <div className="problem-solution-grid">
                  <div className="problem-box">
                    <div className="problem-icon">
                      <img src="/icons/question.png" alt="Challenge" />
                    </div>
                    <div className="problem-content">
                      <h4 className="problem-title">Challenge</h4>
                      <p className="problem-text">AI-first experience</p>
                      <p className="problem-more-text">
                        Creating true AI-based workflows meant <strong>rethinking every interaction</strong>. The goal was to replace static forms with dynamic, adaptive conversations that feel <strong>intuitive and emotionally intelligent</strong>, and at the same time, not overuse AI when unnecessary.
                      </p>
                    </div>
                  </div>

                  <div className="solution-box">
                    <div className="solution-icon">
                      <img src="/icons/solution.png" alt="Solution" />
                    </div>
                    <div className="solution-content">
                      <h4 className="solution-title">Solution</h4>
                      <p className="solution-text">Making AI feel human</p>
                      <p className="solution-more-text">
                        Designed an adaptive onboarding experience that personalizes tone, order, and questions based on user type, experience level, and verification stage, <strong>transforming a cold form into a guided, human-like dialogue</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge Images */}
              <div className="challenge-images-section">
                <div className="challenge-images-grid">
                  <div className="challenge-image-item">
                    <img
                      src="/projects/Qrkiez-challenge-1a.gif"
                      alt="Qrkiez Challenge 1a"
                      className="challenge-image"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                  <div className="challenge-image-item">
                    <img
                      src="/projects/Qrkiez-callenge-1b.png"
                      alt="Qrkiez Challenge 1b"
                      className="challenge-image"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Challenge Images Description */}
              <div className="challenge-image-caption">
                <p>Conversational AI turns complex onboarding into a simple dialogue.</p>
              </div>
            </div>
          }
          secondChallengeSection={
            <div className="challenge-section">
              <h3 className="challenge-title">2nd challenge</h3>
              <h4 className="challenge-subtitle"><strong>Designing for Real Value</strong></h4>

              <div className="challenge-intro">
                <div className="challenge-intro-content">
                  <div className="challenge-intro-text">
                    <p>Qrkiez isn&apos;t just about connecting people - it is about creating meaningful value for both sides of the platform, providers and families.</p>
                    <p>To succeed, the product had to serve both audiences in a way that felt purposeful, not transactional.</p>
                  </div>
                  <div className="challenge-intro-image">
                    <img
                      src="/projects/Qrkiez-challenge-2.jpeg"
                      alt="Qrkiez Challenge 2"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="problem-solution-section">
                <div className="problem-solution-grid">
                  <div className="problem-box">
                    <div className="problem-icon">
                      <img src="/icons/question.png" alt="Challenge" />
                    </div>
                    <div className="problem-content">
                      <h4 className="problem-title">Challenge</h4>
                      <p className="problem-text">Defining What Matters Most</p>
                      <p className="problem-more-text">
                        How do you design a product that works for two completely different audiences, without diluting its impact for either?
                        <br /><br />
                        <strong>Providers</strong> needed tools to grow their business and credibility.
                        <br /><br />
                        <strong>Families</strong> needed reassurance, transparency, and guidance they could trust.
                        <br /><br />
                        The challenge was to identify what would <strong>make each group truly feel the value</strong> - and build around that.
                      </p>
                    </div>
                  </div>

                  <div className="solution-box">
                    <div className="solution-icon">
                      <img src="/icons/solution.png" alt="Solution" />
                    </div>
                    <div className="solution-content">
                      <h4 className="solution-title">Solution</h4>
                      <p className="solution-text">Value-Centered Product Strategy</p>
                      <p className="solution-more-text">
                        I focused on designing capabilities that deliver clear, tangible benefits for both sides.
                        <br /><br />
                        <strong>For Providers:</strong>
                        <br />•⁠  ⁠Smart onboarding that auto-generates polished profiles
                        <br />•⁠  ⁠Verification and trust badges to reinforce professionalism.
                        <br />•⁠  ⁠Insight tools that help track engagement and visibility.
                        <br /><br />
                        <strong>For Families:</strong>
                        <br />•⁠  ⁠Personalized recommendations powered by AI understanding of needs, not just filters.
                        <br />•⁠  ⁠Transparent verification and credentials for confidence in every match.
                        <br />•⁠  ⁠Guided discovery flows that reduce stress and decision fatigue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value Section */}
              <div className="value-section">
                <h3 className="value-title">Value for Neurodivegents and their families</h3>
                <div className="value-images-grid">
                  <div className="value-image-item">
                    <img
                      src="/projects/Qrkiez-challenge-2a.png"
                      alt="Qrkiez Challenge 2a"
                      className="value-image"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                  <div className="value-image-item">
                    <img
                      src="/projects/Qrkiez-challenge-2b.png"
                      alt="Qrkiez Challenge 2b"
                      className="value-image"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                  <div className="value-image-item">
                    <img
                      src="/projects/Qrkiez-challenge-2c.png"
                      alt="Qrkiez Challenge 2c"
                      className="value-image"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Service Providers Value Section */}
              <div className="value-section">
                <h3 className="value-title">Value for Service Providers</h3>
                <div className="value-images-grid">
                  <div className="value-image-item">
                    <img
                      src="/projects/Qrkiez-challenge-2d.png"
                      alt="Qrkiez Challenge 2d"
                      className="value-image"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                  <div className="value-image-item">
                    <img
                      src="/projects/Qrkiez-challenge-2e.png"
                      alt="Qrkiez Challenge 2e"
                      className="value-image"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                  <div className="value-image-item">
                    <img
                      src="/projects/Qrkiez-challenge-2f.png"
                      alt="Qrkiez Challenge 2f"
                      className="value-image"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          projectImpactSection={
            <div className="project-impact-section">
              <h3 className="section-title">Project Impact (So Far)</h3>
              <div className="project-impact-content">
                <div className="project-impact-text-section section-content">
                  <div className="project-impact-text">
                    <p>
                      Even before launch, Qrkiez has already proven the strength of its foundations.
                    </p>
                    <p>
                      The AI conversational framework, design system, and value-centered product strategy have been validated through user testing and internal pilots.
                    </p>
                    <p>
                      The next phase will focus on scaling the platform and bringing this inclusive, human-centered vision to life.
                    </p>
                  </div>
                  <div className="project-impact-outcomes">
                    <h3 className="outcomes-title">Early outcomes:</h3>
                    <ul className="outcomes-list">
                      <li>Strong validation of the conversational onboarding concept.</li>
                      <li>Positive feedback on clarity, tone, and emotional engagement.</li>
                      <li>Scalable design system ready to support future growth.</li>
                    </ul>
                  </div>
                </div>
                <div className="project-impact-image-section">
                  <img
                    src="/projects/Qrkiez-imapct.png"
                    alt="Qrkiez Project Impact"
                    className="project-impact-image"
                    onError={(e) => {
                      e.target.src = '/placeholder-large.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Qrkiez;
