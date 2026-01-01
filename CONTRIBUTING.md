# CONTRIBUTING.md

## How to Contribute

Thank you for your interest in contributing to the Department of Sociology & Anthropology website! This guide will help you get started.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Report issues professionally

## Getting Started

### 1. Fork and Clone
```bash
git clone https://github.com/YOUR-USERNAME/SocHub.UCC.git
cd SocHub.UCC
```

### 2. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 3. Make Your Changes
- Follow the code style in `.eslintrc.json`
- Use meaningful commit messages
- Keep commits focused and atomic
- Test your changes locally

### 4. Push and Create PR
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear title describing the change
- Detailed description of what changed
- Why the change is needed
- Screenshots for UI changes
- Checklist of testing done

## Development Standards

### HTML
- Use semantic elements (nav, header, section, main, footer)
- Include alt text for all images
- Use proper heading hierarchy (h1, h2, h3...)
- Add aria-labels to interactive elements

### CSS
- Use CSS variables for colors
- Keep selectors simple and specific
- Include both light and dark mode styles
- Test responsive design

### JavaScript
- Use const/let, avoid var
- Keep functions small and focused
- Add comments for complex logic
- Test in all major browsers

### Accessibility
- Test keyboard navigation
- Verify with screen readers
- Ensure color contrast (WCAG AA minimum)
- Include focus states

## Commit Messages

Use clear, descriptive commit messages:

```
# Good
feat: Add carousel to postgraduate page
fix: Resolve carousel button z-index issue
docs: Update development guide

# Avoid
update stuff
fix bug
changes
```

Format: `type: short description`

Types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style (formatting)
- `refactor:` Code refactoring
- `perf:` Performance improvement
- `test:` Adding tests
- `ci:` CI/CD changes

## Testing Requirements

Before submitting a PR:

### Desktop Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Testing
- [ ] iPhone Safari
- [ ] Chrome Android
- [ ] Samsung Internet

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast OK
- [ ] Focus indicators visible

### Performance Testing
- [ ] No console errors
- [ ] No memory leaks
- [ ] Load time reasonable
- [ ] Responsive images

## Pull Request Process

1. **Update Documentation** - If adding features, update docs
2. **Add Tests** - Test your code changes
3. **Self Review** - Review your own changes first
4. **Submit PR** - Include description and screenshots
5. **Address Feedback** - Respond to review comments
6. **Await Approval** - Wait for maintainer approval
7. **Merge** - Merge after approval

## Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Related Issues
Fixes #(issue number)

## Testing Done
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Accessibility checked
- [ ] No console errors

## Screenshots
(if applicable)

## Checklist
- [ ] Code follows style guide
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No console warnings/errors
```

## Style Guide

### Naming Conventions
- **Classes**: kebab-case (`.main-content`)
- **IDs**: camelCase (`#mainNav`)
- **Variables**: camelCase (`const userData`)
- **Functions**: camelCase (`function getUserData()`)
- **CSS Variables**: kebab-case (`--primary-green`)

### Code Formatting
- 4-space indentation
- Single quotes in JS, double quotes in HTML
- Semicolons required
- No trailing whitespace
- Max line length: 100 characters

### Comments
```javascript
// Single line comments like this

/*
  Multi-line comments
  for complex logic
*/
```

## File Organization

```
project-root/
├── index.html           # Main page
├── page-name.html       # Other pages
├── styles.css           # Global styles
├── script.js            # Main JavaScript
├── images/              # Image assets
│   ├── icon.svg
│   └── photo.jpg
└── docs/                # Documentation
```

## Common Tasks

### Adding a New Page
1. Create `page-name.html` with proper structure
2. Import styles from `styles.css`
3. Include `script.js`
4. Update navigation in all pages
5. Test responsive design
6. Submit PR

### Fixing a Bug
1. Create issue describing the bug
2. Create branch from main
3. Fix the issue with small commits
4. Test thoroughly
5. Submit PR with fix description
6. Reference issue number in PR

### Adding a Feature
1. Discuss in issues first
2. Create feature branch
3. Implement following standards
4. Test all scenarios
5. Submit PR with documentation
6. Wait for approval

## Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
- [Git Guide](https://git-scm.com/docs)
- [Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

## Questions?

- Check existing issues and PRs
- Read DEVELOPMENT_GUIDE.md
- Review .copilot-instructions
- Ask in PR comments

## Recognition

Contributors will be recognized in:
- README.md contributors list
- GitHub contributors page
- Release notes

Thank you for contributing! 🎉
