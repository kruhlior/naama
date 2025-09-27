# AI Coding Guidelines for React Portfolio

## 🤖 AI Assistant Rules

This document outlines the specific rules and guidelines for AI assistants working on this React portfolio project. These rules ensure consistency, quality, and maintainability across all code contributions.

**🚨 CRITICAL REQUIREMENT: This portfolio MUST be fully responsive and work seamlessly on all devices including mobile phones, tablets, and desktops. Mobile responsiveness is not optional - it is a core requirement.**

## 📋 Core AI Rules

### 1. Code Structure & Organization
- **Always maintain the established folder structure**
- **Each component must have its own CSS file in `components/styles/`**
- **Use functional components with hooks only**
- **Follow the import order: React → Third-party → Local → CSS**
- **Keep components under 200 lines, split if larger**

### 2. CSS & Styling Rules
- **Never use inline styles**
- **Always create separate CSS files for components**
- **Use kebab-case for CSS class names**
- **MANDATORY: Implement mobile-first responsive design - this is non-negotiable**
- **Use CSS Grid and Flexbox for layouts**
- **Define colors and spacing as CSS variables**
- **Ensure all interactive elements are at least 44px for touch targets**
- **Use fluid typography that scales with screen size**
- **Implement responsive images with srcset and sizes**

### 3. React Best Practices
- **Use React 18 features and hooks**
- **Implement proper error boundaries**
- **Use React.Fragment or <> for multiple elements**
- **Always provide unique keys for list items**
- **Use arrow functions for event handlers**
- **Implement proper prop validation**

### 4. Performance & Optimization
- **Use React.lazy() for code splitting**
- **Implement proper image optimization**
- **Avoid unnecessary re-renders**
- **Use useMemo and useCallback when appropriate**
- **Keep bundle size optimized**

### 5. Accessibility & SEO
- **Use semantic HTML elements**
- **Provide proper ARIA labels**
- **Ensure keyboard navigation works**
- **Use proper heading hierarchy (h1, h2, h3)**
- **Include alt text for all images**
- **Implement proper meta tags**

## 🚫 What AI Should NEVER Do

### Code Anti-Patterns
- ❌ Create class components
- ❌ Use inline styles or style props
- ❌ Put component styles in global.css
- ❌ Leave console.log statements
- ❌ Create deeply nested JSX structures
- ❌ Use magic numbers in code
- ❌ Create components that do too many things

### File Organization Violations
- ❌ Mix component logic with styling
- ❌ Create files outside the established structure
- ❌ Use inconsistent naming conventions
- ❌ Create circular dependencies
- ❌ Leave unused imports or variables

## ✅ What AI Should ALWAYS Do

### Code Quality
- ✅ Run ESLint and fix all issues
- ✅ Format code with Prettier
- ✅ Write clean, readable code
- ✅ Add proper comments for complex logic
- ✅ Use consistent indentation (2 spaces)
- ✅ Follow the established coding patterns

### Testing & Validation
- ✅ Ensure components render without errors
- ✅ Test responsive design on different screen sizes
- ✅ Validate form inputs and error handling
- ✅ Check accessibility compliance
- ✅ Verify performance metrics

### Documentation
- ✅ Update README.md when adding new features
- ✅ Add JSDoc comments for complex functions
- ✅ Document any breaking changes
- ✅ Keep the .ai-rules file updated
- ✅ Maintain consistent commit messages

## 🎯 AI Workflow Rules

### Before Making Changes
1. **Read the existing code structure**
2. **Understand the component's purpose**
3. **Check for similar patterns in the codebase**
4. **Plan the changes to maintain consistency**

### During Development
1. **Follow the established patterns**
2. **Create separate CSS files for new components**
3. **Use the existing color scheme and typography**
4. **Implement responsive design from the start**
5. **Test on multiple screen sizes**

### After Making Changes
1. **Run linting and formatting**
2. **Test the component functionality**
3. **MANDATORY: Test responsive design on multiple devices**
4. **MANDATORY: Test touch interactions on mobile**
5. **Check accessibility compliance**
6. **Update documentation if needed**
7. **Verify mobile performance and loading times**

## 📱 Responsive Design Rules

### Breakpoint Strategy
```css
/* Mobile First Approach */
/* Base styles for mobile (320px+) */
.component { }

/* Tablet styles (768px+) */
@media (min-width: 768px) { }

/* Desktop styles (1024px+) */
@media (min-width: 1024px) { }
```

### Layout Guidelines
- **Use CSS Grid for complex layouts**
- **Use Flexbox for component alignment**
- **Ensure touch targets are at least 44px**
- **Maintain readable font sizes on all devices**
- **Test on actual devices when possible**

## 🎨 Design System Rules

### Color Palette
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #0056b3;
  --text-color: #333;
  --background-color: #fff;
  --light-background: #f8f9fa;
  --border-color: #e9ecef;
  --shadow-color: rgba(0, 0, 0, 0.1);
}
```

### Typography
```css
:root {
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.6;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Spacing System
```css
:root {
  --spacing-xs: 0.25rem;  /* 4px */
  --spacing-sm: 0.5rem;   /* 8px */
  --spacing-md: 1rem;     /* 16px */
  --spacing-lg: 1.5rem;   /* 24px */
  --spacing-xl: 2rem;     /* 32px */
  --spacing-xxl: 3rem;    /* 48px */
}
```

## 🔧 Development Tools Rules

### ESLint Configuration
- **Use the provided .eslintrc.js configuration**
- **Fix all ESLint errors and warnings**
- **Don't disable rules without good reason**
- **Use ESLint plugins for React and accessibility**

### Prettier Configuration
- **Use the provided .prettierrc configuration**
- **Format all code before committing**
- **Don't override Prettier settings**
- **Use consistent formatting across the project**

### Git Hooks
- **Use Husky for pre-commit hooks**
- **Run lint-staged before commits**
- **Ensure all code passes quality checks**
- **Use conventional commit messages**

## 📊 Quality Metrics

### Code Quality Targets
- **ESLint Score**: 0 errors, 0 warnings
- **Bundle Size**: Under 500KB gzipped
- **Lighthouse Score**: Above 90 for all categories
- **Build Time**: Under 30 seconds
- **Test Coverage**: Above 80% (when tests are added)

### Performance Targets
- **First Contentful Paint**: Under 1.5s
- **Largest Contentful Paint**: Under 2.5s
- **Cumulative Layout Shift**: Under 0.1
- **First Input Delay**: Under 100ms

## 🚀 Deployment Rules

### Production Checklist
- [ ] All ESLint errors fixed
- [ ] Code formatted with Prettier
- [ ] Responsive design tested
- [ ] Accessibility compliance verified
- [ ] Performance metrics met
- [ ] SEO meta tags included
- [ ] Error boundaries implemented
- [ ] Production build successful

### Environment Configuration
- [ ] Environment variables properly configured
- [ ] API endpoints updated for production
- [ ] Error handling for production
- [ ] Analytics and tracking implemented
- [ ] Security headers configured

## 🔍 Code Review Guidelines

### Review Checklist for AI
- [ ] Code follows established patterns
- [ ] Component structure is clean and focused
- [ ] CSS is properly organized and responsive
- [ ] No console.log statements or debug code
- [ ] Proper error handling implemented
- [ ] Performance considerations addressed
- [ ] Accessibility requirements met
- [ ] Documentation updated if needed

### Common Issues to Avoid
- **Inconsistent naming conventions**
- **Missing responsive design**
- **Poor error handling**
- **Accessibility violations**
- **Performance bottlenecks**
- **Code duplication**
- **Missing documentation**

## 📚 Learning Resources

### React Best Practices
- [React Official Documentation](https://reactjs.org/docs)
- [React Hooks Guide](https://reactjs.org/docs/hooks-intro.html)
- [React Performance Tips](https://reactjs.org/docs/optimizing-performance.html)

### CSS & Design
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Responsive Design Principles](https://web.dev/responsive-web-design-basics/)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [ARIA Best Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)

## 📱 MANDATORY Mobile Testing Requirements

### Mobile Testing Checklist (Must Complete)
- [ ] **Test on actual mobile devices** (iPhone, Android phones)
- [ ] **Test on different screen sizes** (320px to 1920px+)
- [ ] **Test touch interactions** (tap, swipe, pinch, zoom)
- [ ] **Test on slow 3G connections** (simulate poor network)
- [ ] **Test orientation changes** (portrait ↔ landscape)
- [ ] **Test with screen readers** (accessibility)
- [ ] **Test keyboard navigation** (Tab, Enter, Escape)
- [ ] **Verify all forms work on mobile** (input types, validation)
- [ ] **Check loading performance on mobile** (Lighthouse mobile audit)
- [ ] **Validate responsive images load correctly** (srcset, sizes)
- [ ] **Test hamburger menu functionality** (open/close, navigation)
- [ ] **Verify touch targets are 44px minimum** (iOS/Android standard)

### Mobile Performance Requirements
- **Mobile Lighthouse Score**: Above 90 for all categories
- **Mobile First Contentful Paint**: Under 2.5s
- **Mobile Largest Contentful Paint**: Under 4s
- **Mobile Cumulative Layout Shift**: Under 0.1
- **Mobile First Input Delay**: Under 100ms
- **Mobile Bundle Size**: Under 300KB gzipped

### Responsive Design Validation
- [ ] **Mobile-first approach implemented** (base styles for mobile)
- [ ] **Progressive enhancement** (enhance for larger screens)
- [ ] **Flexible layouts** (CSS Grid, Flexbox)
- [ ] **Responsive typography** (fluid scaling)
- [ ] **Responsive images** (srcset, sizes, lazy loading)
- [ ] **Touch-friendly navigation** (hamburger menu, large touch targets)
- [ ] **Proper viewport meta tag** (width=device-width, initial-scale=1)

## 🎯 Success Criteria

### Code Quality Success
- ✅ All components follow established patterns
- ✅ CSS is properly organized and responsive
- ✅ **MANDATORY: Mobile responsiveness tested and working**
- ✅ **MANDATORY: Touch interactions work properly**
- ✅ No ESLint errors or warnings
- ✅ Code is properly formatted
- ✅ Performance metrics are met
- ✅ Accessibility compliance achieved

### Project Success
- ✅ Portfolio showcases projects effectively
- ✅ Contact form works properly on all devices
- ✅ Site loads quickly on all devices (especially mobile)
- ✅ Navigation is intuitive and accessible on mobile
- ✅ Design is professional and modern across all screen sizes
- ✅ Code is maintainable and scalable
- ✅ **MANDATORY: Perfect mobile experience achieved**

---

**Remember**: These guidelines ensure that AI contributions maintain the highest quality standards and consistency with the existing codebase. Follow them diligently for a professional, maintainable portfolio project.
