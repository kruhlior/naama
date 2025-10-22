import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { trackImageLightbox } from '../utils/analytics';
import './styles/ImageLightbox.css';

const ImageLightbox = ({ src, alt, className, onError, images = [], currentIndex = 0, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Image clicked, opening lightbox');
    // Track image lightbox usage
    const projectName = window.location.pathname.split('/').pop() || 'unknown';
    trackImageLightbox(alt, projectName);
    setIsOpen(true);
  };

  const handleClose = () => {
    console.log('Closing lightbox');
    setIsOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handlePrevious = () => {
    if (images.length > 0) {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    }
  };

  const handleNext = () => {
    if (images.length > 0) {
      setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          handleClose();
        } else if (e.key === 'ArrowLeft') {
          handlePrevious();
        } else if (e.key === 'ArrowRight') {
          handleNext();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const currentImage = images.length > 0 ? images[activeIndex] : { src, alt };
  const showNavigation = images.length > 1;

  const lightboxModal = isOpen && createPortal(
    <button
      className="image-lightbox"
      onClick={handleBackdropClick}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      }}
      aria-label="Close lightbox by clicking backdrop"
    >
      <div className="lightbox-content">
        <button
          className="lightbox-close"
          onClick={handleClose}
          aria-label="Close lightbox"
        >
          ×
        </button>

        {showNavigation && (
          <>
            <button
              className="lightbox-nav lightbox-nav-left"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="lightbox-nav lightbox-nav-right"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="lightbox-image"
          onError={onError}
        />

        {showNavigation && (
          <div className="lightbox-counter">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </button>,
    document.body,
  );

  return (
    <>
      <div
        className={`clickable-image-wrapper ${className || ''}`}
        onClick={handleImageClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleImageClick();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`View ${alt} in full size`}
      >
        <img
          src={src}
          alt={alt}
          className="clickable-image"
          onError={onError}
          {...props}
        />
      </div>
      {lightboxModal}
    </>
  );
};

export default ImageLightbox;
