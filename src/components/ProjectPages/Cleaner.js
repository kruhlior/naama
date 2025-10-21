import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import './Cleaner.css';

const Cleaner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="project-page cleaner">
      <div className="container">
        {/* Back Button */}
        <div className="back-button">
          <button onClick={handleBackToHome} className="back-link">
            ← Back to Home
          </button>
        </div>

        {/* Project Template */}
        <ProjectTemplate
          customHeader={
            <div className="project-title-section">
              <div className="hero-entrance-1">
                <h1 className="project-title">Bullshit Cleaner - Solo AI Project</h1>
                <h2 className="project-subtitle">A playful side project born out of inbox fatigue and AI&apos;s potential curiosity</h2>
                <a
                  href="https://chromewebstore.google.com/detail/kfhnkdbplhmfkppmclnhfmgonmcnlpnm?utm_source=item-share-cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-button"
                >
                  Try the Bullshit Cleaner
                </a>
              </div>
              <div className="project-image-section hero-entrance-2">
                <img
                  src="/projects/Bullshit-hero-desktop.png"
                  alt="Bullshit Cleaner Hero"
                  className="project-image desktop-hero-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
                <img
                  src="/projects/Bullshit-hero-mobile.png"
                  alt="Bullshit Cleaner Hero"
                  className="project-image mobile-hero-image"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>

              {/* Floating Bubbles */}
              <div className="floating-bubbles">
                <div className="bubble bubble-1" />
                <div className="bubble bubble-2" />
                <div className="bubble bubble-3" />
                <div className="bubble bubble-4" />
                <div className="bubble bubble-5" />
                <div className="bubble bubble-6" />
                <div className="bubble bubble-7" />
                <div className="bubble bubble-8" />
                <div className="bubble bubble-9" />
                <div className="bubble bubble-10" />
                <div className="bubble bubble-11" />
                <div className="bubble bubble-12" />
                <div className="bubble bubble-13" />
                <div className="bubble bubble-14" />
                <div className="bubble bubble-15" />
                <div className="bubble bubble-16" />
              </div>
            </div>
          }
          customSectionBeforeSummary={
            <div>
              <div className="project-impact-section">
                <h3 className="section-title">The Idea</h3>
                <div className="project-impact-content">
                  <div className="project-impact-text-section section-content">
                    <p className="project-impact-text">
                      The idea was simple:
                      <br /><br />
                      Turn messy, exaggerated text into clear communication through UX and AI innovation.
                      <br /><br />
                      Create a tool that takes any text (a marketing blurb, policy email, or blog post) and translates it into a short, straightforward version - with a wink.
                    </p>
                  </div>
                  <div className="project-impact-image-section">
                    <img
                      src="/projects/Bullshit-before-after-desktop.png"
                      alt="Bullshit Cleaner Before/After"
                      className="project-impact-image desktop-before-after"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                    <img
                      src="/projects/Bullshit-before-after-mobile.png"
                      alt="Bullshit Cleaner Before/After"
                      className="project-impact-image mobile-before-after"
                      onError={(e) => {
                        e.target.src = '/placeholder-large.jpg';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Bullshit Movie GIF Section */}
              <div className="section">
                <div className="section-content">
                  <img
                    src="/projects/Bullshit-movie.gif"
                    alt="Bullshit Cleaner in Action"
                    className="bullshit-movie-gif"
                    onError={(e) => {
                      e.target.src = '/placeholder-large.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          }
          userRole="Solo UX Designer & AI Product Creator"
          tools="Figma, Cursor, Gitlab, Loveable, Ideogram, Chat GPT"
          collaboration="Team work with my husband :)"
          timeline="2 intensive weeks"
        />


        {/* How It Started Section */}
        <div className="project-impact-section">
          <h3 className="section-title">How It Started</h3>
          <div className="project-impact-content">
            <div className="project-impact-text-section section-content">
              <p className="project-impact-text">
                Like every good UX project, It began with pure frustration.
              </p>
              <p>
                Every day, I&apos;d open long school updates, commercial emails, or articles that said in 500 words what could&apos;ve been said in 50.
              </p>
              <p>
                One day I literally said out loud, <strong><em>&quot;Can someone please just cut the bullshit and tell me what this means?&quot;</em></strong>
              </p>
              <p>
                So I decided to make that someone… AI.
              </p>
              <p>
                That moment sparked the idea for The Bullshit Cleaner -a Chrome extension that &quot;cleans&quot; overly complicated writing and turns it into something clear, short, and human.
              </p>
            </div>
            <div className="project-impact-image-section">
              <img
                src="/projects/Bullshit-start.png"
                alt="How Bullshit Cleaner Started"
                className="project-impact-image"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Want to clean up THIS page? Section */}
        <div className="project-impact-section bullshit-this-page-section">
          <h3 className="section-title">Want to clean up THIS page? ;-)</h3>
          <div className="project-impact-content">
            <div className="project-impact-text-section section-content">
              <p className="project-impact-text">
                If you wondered, of course I applied the Bullshit Cleaner on that very page!
                <br /><br />
                Here is the bottom line:
              </p>
            </div>
            <div className="project-impact-image-section">
              <img
                src="/projects/bullshit-this-page.png"
                alt="Bullshit Cleaner Applied to This Page"
                className="project-impact-image"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Design Approach Section */}
        <div className="section">
          <h3 className="section-title">Design Approach</h3>
          <div className="section-content">
            <p>
              I wanted the experience to feel like chatting with a witty, no-nonsense friend - not a grammar cop.
            </p>
            <p>
              Every response balances playfulness and insight, offering a &quot;cleaned&quot; version plus a quick explanation of what made the original full of fluff.
            </p>
            <p>
              Visually, it&apos;s intentionally minimal: clean typography, a single bold &quot;Clean it&quot; button, and short, animated feedback messages that keep the tone light and conversational.
            </p>
          </div>
        </div>

        {/* AI Learning Playground Section */}
        <div className="section">
          <h3 className="section-title">AI Learning Playground</h3>
          <div className="section-content">
            <p>
              This project became my sandbox for exploring AI design.
            </p>
            <p>
              I experimented with multiple models, prompt structures, and tone variations to find the perfect balance between smart and funny -not too robotic, not too snarky.
            </p>
            <p>
              It taught me a lot about prompt engineering, context handling, and designing AI personality that users actually enjoy.
            </p>
          </div>
        </div>

        {/* Challenges and Small Victories Section */}
        <div className="section">
          <h3 className="section-title">Challenges and Small Victories</h3>
          <div className="section-content">
            <ul>
              <li><strong>Tone:</strong> Making the AI witty without being mean.</li>
              <li><strong>Clarity:</strong> Teaching it to rewrite instead of summarize.</li>
              <li><strong>Learning:</strong> Discovering how small changes in prompt structure shift tone dramatically.</li>
            </ul>
            <p>
              When the AI started replying with lines like &quot;Here&apos;s what they&apos;re actually trying to say…&quot;, I knew it had found its voice.
            </p>
          </div>
        </div>

        {/* My Lessons from the Cleanup Section */}
        <div className="section">
          <h3 className="section-title">My Lessons from the Cleanup</h3>
          <div className="section-content">
            <p>
              This project reminded me that not all design needs to be serious to make a real point. Sometimes the most impactful ideas come from everyday annoyances - and a sense of humor.
            </p>
            <p>
              It also showed me how powerful (and fun) it can be to experiment freely with new AI tools outside of structured client work.
            </p>
            <p>
              For me, this wasn&apos;t just a side project - it was an exercise in clarity and creativity.
            </p>
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="section">
          <h3 className="section-title">Next Steps (Maybe)</h3>
          <div className="section-content">
            <ul>
              <li>The Bullshit Cleaner is already live as a Chrome extension.</li>
              <li>Add &quot;summarize like…&quot; modes - Yoda, Trump, or a Gen Z TikToker.</li>
              <li>Time to move on to the next fun project…</li>
            </ul>
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className="bullshit-bottom-section">
          <img
            src="/projects/bullshit-bottom.png"
            alt="Bullshit Cleaner Bottom"
            className="bullshit-bottom-image"
            onError={(e) => {
              e.target.src = '/placeholder-large.jpg';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cleaner;
