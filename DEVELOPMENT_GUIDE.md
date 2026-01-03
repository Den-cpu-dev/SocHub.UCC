# DEVELOPMENT_GUIDE.md

## Quick Start

### Local Development
```bash
# Python 3.x
python -m http.server 8000

# Then open: http://localhost:8000
```

### Project Structure
```
.
├── index.html              # Main landing page
├── postgraduate.html       # Postgraduate programs
├── sandwich.html           # Sandwich program
├── styles.css              # Global styles
├── script.js               # Interactive features
├── images/                 # Image assets
├── .github/workflows/      # CI/CD pipelines
├── .copilot-instructions   # AI guidance
├── package.json            # Project metadata
└── .gitignore              # Git ignore rules
```

## Key Technologies

### HTML5
- Semantic markup (nav, header, section, main, footer, aside)
- Accessibility features (aria-labels, skip links, alt text)
- Meta tags for SEO and CSP

### CSS3
- CSS Variables for theming (--primary-green, --accent-green, etc.)
- Flexbox for layouts
- Grid for content organization
- Responsive design (mobile-first approach)
- Dark mode support (future)

### JavaScript (ES6+)
- IIFE pattern to avoid global scope pollution
- Event delegation for dynamic content
- Smooth carousel animations
- Form validation and submission
- Responsive navigation menu

## Color Palette
```css
--primary-green: #1f3a0f    /* Main brand color */
--light-green: #4a8c0a     /* Secondary green */
--accent-green: #7cb342    /* Highlights and CTAs */
--black: #1a1a1a          /* Dark text */
--white: #ffffff          /* Light backgrounds */
```

## Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large**: > 1024px

## Accessibility Checklist

- [ ] All images have descriptive alt text
- [ ] All buttons and links have labels
- [ ] Keyboard navigation works (Tab, Enter, Escape, Arrow keys)
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Focus indicators are visible
- [ ] Form inputs are properly labeled
- [ ] Skip navigation link works
- [ ] Screen reader friendly (test with NVDA/JAWS)

## Performance Tips

### Images
- Use WebP format with PNG fallback
- Lazy load images (`loading="lazy"`)
- Optimize file sizes (use Squoosh or TinyPNG)
- Use responsive images with srcset

### CSS/JS
- Minimize CSS selectors depth
- Use event debouncing for scroll listeners
- Avoid forced synchronous layouts
- Code split if needed

### Caching
- GitHub Pages handles caching automatically
- Use service workers for offline support (future)

## Common Workflows

### Adding a New Section
1. Create semantic HTML structure
2. Style using CSS variables
3. Add JavaScript interactivity (if needed)
4. Test responsiveness
5. Ensure accessibility
6. Commit and push to main

### Updating Navigation
- Modify `.nav-menu` in index.html
- Update all pages (postgraduate.html, sandwich.html)
- Test dropdown menus on mobile
- Check keyboard navigation

### Creating a Carousel
```javascript
// Use existing pattern from hero carousel
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

prevBtn?.addEventListener('click', nextSlide);
nextBtn?.addEventListener('click', nextSlide);
```

## Testing

### Manual Testing Checklist
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile (iOS Safari, Chrome Android)
- [ ] Test with screen reader (NVDA on Windows, VoiceOver on Mac)
- [ ] Test keyboard navigation (Tab through all interactive elements)
- [ ] Test form submission
- [ ] Test carousel functionality
- [ ] Test dropdown menus
- [ ] Check for console errors

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Chrome/Safari (last 2 versions)

## Debugging

### Check Console
```javascript
// In browser DevTools (F12)
console.log('Debug message');
console.error('Error message');
console.warn('Warning message');
```

### Common Issues
| Issue | Solution |
|-------|----------|
| Images not loading | Check image paths, ensure images/ folder exists |
| Styles not applying | Check CSS specificity, clear browser cache |
| JavaScript errors | Check console (F12), verify syntax |
| Carousel not working | Check z-index values, ensure buttons have z-index: 5 |
| Form not submitting | Check network tab, verify endpoint |

## Git Workflow

### Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
git add .
git commit -m "Add meaningful commit message"
git push origin feature/your-feature-name
```

### Create Pull Request
1. Go to GitHub repository
2. Click "New Pull Request"
3. Select your branch
4. Add description of changes
5. Request review
6. Wait for approval and merge

## Deployment

### Automatic Deployment
- Push to `main` branch
- GitHub Actions automatically deploys to GitHub Pages
- Check "Actions" tab to verify deployment
- Live site: https://den-cpu-dev.github.io/SocHub.UCC/

### Manual Deployment (if needed)
```bash
# Ensure all changes are committed
git push origin main

# Check GitHub Actions for deployment status
```

## Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [CSS-Tricks](https://css-tricks.com/)

## Need Help?
- Check existing issues and PRs
- Review code comments
- Test in multiple browsers
- Check browser console for errors
