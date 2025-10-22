// Google Analytics utility functions

// Track page views
export const trackPageView = (pageName, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-0TG2DKZS9J', {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });

    // Custom event for page view
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: window.location.pathname,
      custom_parameter: pageName,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track project page views
export const trackProjectView = (projectName, projectCategory) => {
  trackEvent('project_view', {
    project_name: projectName,
    project_category: projectCategory,
    page_type: 'project',
  });
};

// Track category navigation
export const trackCategoryNavigation = (categoryName) => {
  trackEvent('category_navigation', {
    category_name: categoryName,
    page_type: 'home',
  });
};

// Track image lightbox usage
export const trackImageLightbox = (imageName, projectName) => {
  trackEvent('image_lightbox_open', {
    image_name: imageName,
    project_name: projectName,
    interaction_type: 'image_view',
  });
};

// Track contact form interactions
export const trackContactInteraction = (interactionType) => {
  trackEvent('contact_interaction', {
    interaction_type: interactionType,
    page_type: 'contact',
  });
};

// Track navigation clicks
export const trackNavigationClick = (navigationType, destination) => {
  trackEvent('navigation_click', {
    navigation_type: navigationType,
    destination: destination,
  });
};
