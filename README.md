# CYCS & Co. - Website

Responsive, modern, multi-page HTML, CSS & JavaScript professional website for CYCS & Co. Engineering and Installations.

![Website banner](./assets/img/readme16.png)

**Live Site**: [GitHub Pages](https://cycscarlos.github.io/CYCS_Co)

---

## Features

- ✅ Responsive design using Media Queries and CSS Clamp
- ✅ Dark mode toggle with localStorage persistence
- ✅ Smooth scrolling and scroll-based animations
- ✅ Swiper sliders with coverflow effects
- ✅ Scroll Reveal animations
- ✅ Mobile-responsive navigation menu
- ✅ CSS Custom Properties (variables) for theming
- ✅ Modular CSS architecture
- ✅ Optimized JavaScript loading
- ✅ SEO optimized with meta tags and structured data
- ✅ Contact form integration (Formspree)
- ✅ Google Analytics integration

---

## Project Structure

```
CYCS_Co/
├── assets/
│   ├── css/
│   │   ├── base/              # Base styles (variables, reset, typography)
│   │   ├── components/         # Component styles (header, footer, cards, etc.)
│   │   ├── layout/             # Layout styles (grid, sections)
│   │   ├── style.css           # Main stylesheet (imports all modules)
│   │   └── [page-specific].css # Page-specific styles
│   ├── js/
│   │   ├── core/               # Core functionality (menuNav, darkTheme)
│   │   ├── scroll/              # Scroll-related functionality
│   │   ├── swiper/              # Swiper slider configurations
│   │   └── utils/               # Utility functions
│   ├── html/
│   │   ├── components/          # Reusable HTML components
│   │   └── [pages].html         # Secondary pages
│   ├── Swiper/                  # Swiper library files
│   ├── img/                     # Images and assets
│   └── fonts/                   # Custom fonts
├── docs/                        # Documentation
│   ├── STYLE_GUIDE.md          # Coding style guide
│   └── COMPONENTS.md            # Component documentation
├── index.html                   # Main homepage
└── README.md                    # This file
```

---

## Dependencies

### External Libraries

- **Swiper** (v8+) - Touch slider library
  - Files: `assets/Swiper/swiper-bundle.min.css`, `swiper-bundle.min.js`
- **ScrollReveal** - Scroll animations
  - File: `assets/js/scrollreveal.min.js`
- **Remix Icons** - Icon library
  - CDN: `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css`
- **Font Awesome** - Additional icons
  - Files: `assets/css/all.min.css`, `assets/webfonts/`

### Custom Fonts

- Bailey (OTF)
- Dancing Script (TTF)
- Roboto (TTF)
- Open Sans (TTF)
- Raleway (TTF)

---

## Development Guide

### Getting Started

1. Clone the repository
2. Open `index.html` in a browser or use a local server
3. For development, use a local server (e.g., `python -m http.server` or `npx serve`)

### File Organization

#### CSS Architecture

The CSS is modularized for better maintainability:

- **Base**: Foundation styles (variables, reset, typography)
- **Components**: Reusable component styles
- **Layout**: Grid system and section layouts
- **Page-specific**: Styles unique to individual pages

#### JavaScript Architecture

JavaScript is organized by functionality:

- **Core**: Essential site functionality (navigation, theme)
- **Scroll**: All scroll-related features (header change, scroll up, active sections)
- **Swiper**: Slider configurations
- **Utils**: Utility functions (hover effects, form handling)

### Adding a New Page

1. Create HTML file in `assets/html/`
2. Include required CSS:
   ```html
   <link rel="stylesheet" href="../css/all.min.css" />
   <link rel="stylesheet" href="../css/style.css" />
   <link rel="stylesheet" href="../css/smartphones.css" />
   <link rel="stylesheet" href="../css/[page-name].css" />
   ```
3. Include required JavaScript:
   ```html
   <script src="../js/core/menuNav.js" defer></script>
   <script src="../js/core/darkTheme.js" defer></script>
   <script src="../js/scrollreveal.min.js" defer></script>
   <script src="../js/scroll/scrollReveal.js" defer></script>
   <script src="../js/scroll/scroll.js" defer></script>
   ```

### Modifying Styles

1. **Global variables**: Edit `assets/css/base/variables.css`
2. **Component styles**: Edit corresponding file in `assets/css/components/`
3. **Page-specific**: Edit page CSS file or add to existing component

### Adding a New Component

1. Create HTML template in `assets/html/components/`
2. Create CSS file in `assets/css/components/`
3. Import CSS in `assets/css/style.css`
4. Document in `docs/COMPONENTS.md`

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Optimizations

- ✅ Minified external libraries
- ✅ Deferred JavaScript loading (`defer` attribute)
- ✅ Lazy loading for images (`loading="lazy"`)
- ✅ Preconnect for CDN resources
- ✅ Consolidated JavaScript files
- ✅ Modular CSS with selective loading

---

## Deployment

### Netlify

The site is configured for Netlify deployment. Simply connect your repository to Netlify.

### GitHub Pages

1. Push to `main` branch
2. Enable GitHub Pages in repository settings
3. Select `main` branch as source

---

## Contributing

1. Follow the style guide in `docs/STYLE_GUIDE.md`
2. Maintain code organization structure
3. Update documentation when adding features
4. Test across different browsers and devices

---

## License

Copyright © Carlos Colmenares A. | All Rights Reserved

---

## Documentation

- [Style Guide](./docs/STYLE_GUIDE.md) - Coding conventions and best practices
- [Components](./docs/COMPONENTS.md) - Component documentation and usage

---

## Contact

- **Email**: cycs.ingenieria@gmail.com
- **Phone**: (+58) 414 324 63 96
- **Location**: Av. Veracruz, calle Auyantepuy, Edificio PWC, Piso 7, Ofic. 7-A, Chuao, Urb. Las Mercedes, Caracas, Venezuela
