# Setup & Installation Guide

## Quick Start

No installation required! This is a static website built with vanilla HTML, CSS, and JavaScript.

### Using with Local Server

**Option 1: Python (SimpleHTTPServer)**

```bash
# Python 3
cd "path/to/sociology-anthropology"
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Option 2: Node.js (http-server)**

```bash
npm install -g http-server
cd "path/to/sociology-anthropology"
http-server

# Then visit: http://localhost:8080
```

**Option 3: VS Code Live Server**

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Automatically opens in your browser

**Option 4: GitHub Pages**

1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select branch and folder to publish
4. Site will be available at `https://username.github.io/repository-name`

## Project Structure

```
sociology-anthropology/
│
├── index.html                 # Main homepage
├── postgraduate.html         # Postgraduate programs
├── sandwich.html            # Sandwich program details
│
├── script.js                # JavaScript functionality
├── styles.css               # All styling (responsive, dark mode)
│
├── images/                  # Image assets
│   └── [university photos]
│
├── soasa-emblem.svg         # Department logo/emblem
│
├── README.md                # Project overview
├── FEATURES.md              # Features documentation
├── DEVELOPMENT.md           # Development guide
├── IMPLEMENTATION_SUMMARY.md # This file
│
└── .github/                 # GitHub specific files
    └── [GitHub config files]
```

## Features Included

### 🌙 Dark Mode

-   Toggle button in header
-   User preference saved
-   Smooth transitions

### ⬆️ Back-to-Top Button

-   Appears when scrolling
-   Smooth scroll animation
-   Keyboard accessible

### 📱 Responsive Design

-   Mobile-first approach
-   Works on all screen sizes
-   Touch-friendly

### ♿ Accessibility

-   WCAG AA compliant
-   Keyboard navigable
-   Screen reader friendly
-   Skip navigation link

### 🎨 Modern UI

-   Professional footer
-   Smooth animations
-   Clean typography
-   Color-coded elements

### 📄 SEO Optimized

-   Meta tags
-   Structured data
-   Social sharing ready
-   Semantic HTML

## Browser Requirements

### Minimum Versions

-   Chrome/Edge 90+
-   Firefox 88+
-   Safari 14+
-   Mobile Safari 14+
-   Chrome Android 90+

### Features Used

-   CSS Grid & Flexbox
-   CSS Custom Properties
-   Modern JavaScript (ES6+)
-   SVG Icons

## File Size & Performance

-   **HTML**: ~20KB (main index.html)
-   **CSS**: ~80KB (fully commented)
-   **JavaScript**: ~50KB (modular, clean code)
-   **Images**: Varies (lazy loaded)
-   **Total Initial Load**: ~150KB (before images)

## Customization Guide

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-green: #1f3a0f; /* Change primary color */
    --light-green: #4a8c0a; /* Change secondary color */
    --accent-green: #7cb342; /* Change accent color */
}
```

### Contact Information

Update in `index.html` footer:

```html
<p>Email: <a href="mailto:your-email@ucc.edu.gh">your-email@ucc.edu.gh</a></p>
<p>Phone: <a href="tel:+233333032835">+233 333 032835</a></p>
```

### Navigation Links

Update in `index.html` navbar and footer to match your page structure.

### Images

Replace in `images/` folder and update `src` attributes in HTML.

## Development Setup

### Using Git

```bash
# Clone repository
git clone https://github.com/Den-cpu-dev/SocHub.UCC.git
cd sociology-anthropology

# Create feature branch
git checkout -b feature/your-feature-name

# Make changes
# Test locally
# Commit changes
git add .
git commit -m "Add your feature description"

# Push to GitHub
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

### Code Editor Setup

**VS Code Recommended Extensions:**

-   Live Server (for local testing)
-   Prettier (for code formatting)
-   HTML CSS Support (for syntax highlighting)
-   Accessibility Insights (for a11y testing)

**Settings (`.vscode/settings.json`):**

```json
{
    "editor.formatOnSave": true,
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

## Testing Checklist

### Visual Testing

-   [ ] Page displays correctly on desktop
-   [ ] Page displays correctly on tablet
-   [ ] Page displays correctly on mobile
-   [ ] Dark mode looks good
-   [ ] Light mode looks good
-   [ ] All images load correctly

### Functional Testing

-   [ ] Dark mode toggle works
-   [ ] Dark mode persists after refresh
-   [ ] Back-to-top button appears when scrolling
-   [ ] All navigation links work
-   [ ] Carousel functions correctly
-   [ ] Dropdown menus open/close
-   [ ] Footer displays properly

### Accessibility Testing

-   [ ] Can navigate with keyboard only (Tab, Enter, Escape)
-   [ ] Focus indicators are visible
-   [ ] Skip link works
-   [ ] Screen reader reads content properly
-   [ ] Color contrast is sufficient
-   [ ] Images have alt text
-   [ ] Form labels are associated

### Cross-Browser Testing

-   [ ] Works in Chrome/Edge
-   [ ] Works in Firefox
-   [ ] Works in Safari
-   [ ] Works in Mobile Safari (iOS)
-   [ ] Works in Chrome Android

### Performance Testing

-   [ ] Page loads quickly
-   [ ] Animations are smooth
-   [ ] No console errors
-   [ ] No console warnings
-   [ ] Images optimize quickly

## Deployment Checklist

Before going live:

-   [ ] Update all contact information
-   [ ] Update course information if needed
-   [ ] Add recent faculty photos
-   [ ] Test all external links
-   [ ] Verify email links work
-   [ ] Check phone links format
-   [ ] Update copyright year in footer
-   [ ] Test dark mode thoroughly
-   [ ] Run Lighthouse audit
-   [ ] Test on real mobile devices
-   [ ] Enable HTTPS
-   [ ] Set up analytics if desired
-   [ ] Create sitemap.xml
-   [ ] Submit to search engines

## Common Issues & Solutions

### Dark Mode Not Working

**Problem**: Dark mode doesn't toggle or persist
**Solution**:

1. Check browser console for errors
2. Verify localStorage is enabled
3. Clear browser cache and localStorage
4. Check that `.dark-mode` class is being added to `<html>`

### Back-to-Top Not Appearing

**Problem**: Button doesn't show when scrolling
**Solution**:

1. Scroll down at least 300px
2. Check console for JavaScript errors
3. Verify button element exists in HTML
4. Check CSS for `.back-to-top.show` class

### Links Not Working

**Problem**: Navigation links don't navigate
**Solution**:

1. Check href attributes match element IDs
2. Verify page files exist (postgraduate.html, sandwich.html)
3. For external links, use full URLs with `target="_blank"`

### Mobile Menu Issues

**Problem**: Hamburger menu doesn't work on mobile
**Solution**:

1. Check screen width is less than 768px
2. Verify hamburger button is visible
3. Check JavaScript event listeners are attached
4. Inspect `.nav-menu.active` class toggle

### Styling Issues

**Problem**: Colors look wrong or layout broken
**Solution**:

1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Check CSS file is linked correctly in HTML
4. Verify no CSS conflicts in developer tools

## Support & Resources

### Documentation Files

-   **README.md** - Project overview
-   **FEATURES.md** - Feature details
-   **DEVELOPMENT.md** - Development guide
-   **IMPLEMENTATION_SUMMARY.md** - Changes made

### Online Resources

-   [MDN Web Docs](https://developer.mozilla.org/)
-   [CSS-Tricks](https://css-tricks.com/)
-   [Web.dev](https://web.dev/)
-   [W3C WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Tools for Testing

-   [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit
-   [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Accessibility
-   [WAVE Tool](https://wave.webaim.org/) - Web accessibility evaluation
-   [Responsive Design Tester](https://responsivedesignchecker.com/)

## Version Information

-   **Current Branch**: copilot/suggest-domain-ideas
-   **Main Branch**: main
-   **Active PR**: [Add GitHub Pages URL to README #2](https://github.com/Den-cpu-dev/SocHub.UCC/pull/2)

## License & Credits

Department of Sociology & Anthropology
University of Cape Coast
Ghana

© 2025 All Rights Reserved

---

**Last Updated**: January 1, 2025
**Project Status**: ✅ Production Ready
