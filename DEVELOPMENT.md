# Development Guide

## Project Overview

The Department of Sociology & Anthropology website (SocHub) is a modern, accessible educational platform built with vanilla HTML, CSS, and JavaScript. It provides information about programs, faculty, courses, and resources.

## File Structure

```
sociology-anthropology/
├── index.html              # Main home page
├── postgraduate.html       # Postgraduate programs page
├── sandwich.html          # Sandwich program page
├── script.js              # JavaScript functionality
├── styles.css             # All styling
├── FEATURES.md            # Features documentation
├── DEVELOPMENT.md         # This file
├── README.md              # Project overview
├── images/                # Image assets
└── soasa-emblem.svg       # Department emblem
```

## Key Features Implementation

### Dark Mode

**Files:** `styles.css`, `script.js`

-   CSS custom properties change on `.dark-mode` class on `<html>`
-   localStorage stores user preference
-   Theme toggle button in navbar

### Back-to-Top Button

**Files:** `styles.css`, `script.js`

-   Fixed position button, hidden by default
-   Shows when scroll > 300px
-   Smooth scroll to top on click
-   Keyboard accessible

### Footer

**Files:** `index.html`, `styles.css`

-   Multi-section responsive footer
-   Contact information with links
-   Quick navigation
-   Footer bottom with copyright

### Smooth Scrolling

**Files:** `script.js`, `styles.css`

-   All anchor links use CSS `scroll-behavior: smooth`
-   JavaScript fallback for older browsers
-   Proper focus management after scroll

## Development Workflow

### Making Changes

1. **HTML Changes**

    - Maintain semantic structure
    - Use proper heading hierarchy
    - Always include alt text for images
    - Ensure proper ARIA labels

2. **CSS Changes**

    - Use CSS custom properties for colors
    - Follow BEM naming for new classes
    - Maintain responsive design principles
    - Test dark mode compatibility

3. **JavaScript Changes**
    - Use IIFE for module isolation
    - Add event listeners properly
    - Include keyboard support
    - Test accessibility

### Testing

```bash
# Manual Testing
1. Test on different browsers (Chrome, Firefox, Safari, Edge)
2. Test on mobile devices (iOS, Android)
3. Test keyboard navigation (Tab, Enter, Space, Escape)
4. Test dark mode toggle and persistence
5. Test print preview
6. Test all interactive features
```

### Accessibility Testing

-   Use tab key to navigate entire site
-   Press Enter/Space on buttons and links
-   Use screen reader (NVDA, JAWS, VoiceOver)
-   Check color contrast with tools like WebAIM
-   Verify focus indicators are visible

## Styling Guide

### Color Variables

```css
--primary-green: #1f3a0f; /* Primary brand color */
--light-green: #4a8c0a; /* Secondary brand color */
--accent-green: #7cb342; /* Accent/highlight color */
--text-primary: #1a1a1a; /* Main text */
--text-secondary: #ffffff; /* Text on dark backgrounds */
```

### Spacing

-   Use `rem` units for scalability
-   Consistent spacing scale: 0.5rem, 1rem, 1.5rem, 2rem, 3rem
-   Mobile padding: 20px, Desktop padding: 40px+

### Typography

-   Font family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif
-   Base font size: 16px (1rem)
-   Line height: 1.6

## Responsive Breakpoints

```css
Mobile: < 480px
Tablet: 480px - 768px
Desktop: > 768px
```

## JavaScript Architecture

### Modules (IIFE Pattern)

```javascript
// Dark Mode Module
(function () {
    // Private variables
    const themeToggle = document.querySelector(".theme-toggle");

    // Initialization
    // Event listeners
})();

// Back to Top Module
(function () {
    // Implementation
})();
```

## Performance Optimization

### Current Optimizations

-   CSS custom properties for theme switching (no style recalculation)
-   Lazy loading for carousel images
-   Smooth transitions using GPU acceleration
-   Efficient event delegation where possible

### Future Optimizations

-   Minify CSS and JavaScript for production
-   Bundle assets
-   Compress images to WebP format
-   Implement service workers for offline support

## Deployment

### Hosting Options

1. GitHub Pages (free, static only)
2. Netlify (free tier available)
3. Vercel (free tier available)
4. Traditional hosting (cPanel, etc.)

### Pre-deployment Checklist

-   [ ] Test all features in production environment
-   [ ] Verify responsive design on mobile
-   [ ] Check page load performance
-   [ ] Test accessibility with screen reader
-   [ ] Update contact information
-   [ ] Verify all external links
-   [ ] Check SEO meta tags

## Troubleshooting

### Dark Mode Not Persisting

-   Check browser localStorage is enabled
-   Verify localStorage key is 'theme'
-   Check console for JavaScript errors

### Smooth Scroll Not Working

-   Verify browser supports CSS `scroll-behavior`
-   Check for JavaScript errors in console
-   Ensure anchor link href matches element id

### Accessibility Issues

-   Run through WAVE Web Accessibility Evaluation Tool
-   Use keyboard navigation to test all features
-   Check color contrast with WebAIM Contrast Checker
-   Test with screen reader (NVDA or JAWS)

## Contributing Guidelines

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Make changes following the development guide
3. Test thoroughly (manual + accessibility)
4. Commit with clear messages: `git commit -m "Add feature description"`
5. Push to branch: `git push origin feature/feature-name`
6. Create Pull Request with detailed description

## Resources

### Documentation

-   [MDN Web Docs](https://developer.mozilla.org/)
-   [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
-   [CSS Tricks](https://css-tricks.com/)

### Tools

-   [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
-   [WAVE Accessibility](https://wave.webaim.org/)
-   [Lighthouse (DevTools)](https://developers.google.com/web/tools/lighthouse)
-   [BrowserStack](https://www.browserstack.com/)

### Browser DevTools

-   Chrome DevTools
-   Firefox Developer Tools
-   Safari Web Inspector

## Maintenance

### Regular Tasks

-   Check for broken links
-   Update faculty information
-   Refresh course descriptions
-   Monitor analytics
-   Update contact information
-   Test forms submission

### Security

-   Regular backups
-   Monitor for security vulnerabilities
-   Keep dependencies updated
-   Use HTTPS for deployment
-   Implement proper CSP headers

## Version Control

Current branch: `copilot/suggest-domain-ideas`
Default branch: `main`

Pull Request: [Add GitHub Pages URL to README](https://github.com/Den-cpu-dev/SocHub.UCC/pull/2)

### Commit Convention

-   `feat:` New feature
-   `fix:` Bug fix
-   `docs:` Documentation changes
-   `style:` Styling changes
-   `refactor:` Code refactoring
-   `test:` Test changes
-   `chore:` Build/dependency changes
