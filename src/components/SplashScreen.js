import { useEffect, useState } from 'react';
import './styles/SplashScreen.css';
import PropTypes from 'prop-types';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade out animation to complete before calling onComplete
      setTimeout(() => {
        onComplete();
      }, 500); // Match the CSS transition duration
    }, 2500); // 2.5 seconds display time

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="splash-content">
        <img
          src="/splash-animation.gif"
          alt="Loading animation"
          className="splash-animation"
        />
      </div>
    </div>
  );
};

SplashScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default SplashScreen;
