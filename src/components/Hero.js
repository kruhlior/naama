import { useState, useEffect } from 'react';
import './styles/Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'I combine Cognitive Science and Creativity to build AI first experiences';
  const highlightWords = ['Cognitive Science', 'Creativity'];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const renderTextWithHighlights = (text) => {
    let result = text;

    // Find positions of highlight words in the original text
    const wordPositions = [];
    highlightWords.forEach(word => {
      let index = fullText.indexOf(word);
      while (index !== -1) {
        wordPositions.push({ word, start: index, end: index + word.length });
        index = fullText.indexOf(word, index + 1);
      }
    });

    // Sort by start position
    wordPositions.sort((a, b) => a.start - b.start);

    // Apply highlights based on current text length
    wordPositions.forEach(({ start, end }) => {
      if (start < text.length) {
        const highlightEnd = Math.min(end, text.length);
        const wordToHighlight = text.slice(start, highlightEnd);
        if (wordToHighlight.length > 0) {
          result = result.replace(wordToHighlight, `<span class="highlight">${wordToHighlight}</span>`);
        }
      }
    });

    return result;
  };
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, <br /> I&apos;m Naama
            </h1>
            <p
              className="hero-description"
              dangerouslySetInnerHTML={{
                __html: renderTextWithHighlights(displayedText) + '<span class="cursor">|</span>',
              }}
            />
          </div>
          <div className="hero-animation">
            <img
              src="/naama.gif"
              alt="Naama"
              className="hero-image"
            />
          </div>
        </div>

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
      </div>
      {/* Gradient Separator */}
      {/* <div className="gradient-separator" /> */}
    </section>
  );
};

export default Hero;
