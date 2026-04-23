# Hammer Consulting Group Website

A static HTML/CSS/JavaScript website for Hammer Consulting Group, a strategic cannabis consulting firm specializing in operations, regulatory compliance, and international market expansion.

## Project Structure

```
hammercg-site/
├── index.html              # Landing page with all main sections
├── blog.html               # Blog listing page
├── thank-you.html          # Form submission confirmation page
├── styles.css              # Global styles and responsive design
├── script.js               # JavaScript for interactivity
├── i18n.js                 # Internationalization (English/Portuguese-BR)
├── blog/                   # Blog post articles
│   ├── fresh-frozen-vs-biomass.html
│   ├── outdoor-vs-greenhouse-vs-indoor-cannabis.html
│   └── ... (17 total blog posts)
├── services/               # Service detail pages
│   ├── cultivation-field-ops.html
│   ├── extraction-manufacturing.html
│   ├── supply-chain-logistics.html
│   ├── deal-structure-commercial.html
│   └── technology-ai-automation.html
├── favicon.svg             # Site favicon (SVG)
├── favicon.png             # Site favicon (PNG)
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for 1024px, 768px, and 480px
- **Internationalization**: Full English and Portuguese-Brazilian support via i18n.js
- **Smooth Scrolling**: Anchor link navigation with fixed nav offset
- **Scroll Animations**: Intersection Observer API for fade-in effects
- **Stat Animations**: Number counter animations on scroll
- **Mobile Navigation**: Hamburger menu with dropdown support
- **Form Integration**: FormSubmit.co for contact form handling
- **Schema.org SEO**: JSON-LD structured data for rich snippets

## Core Pages

### index.html
Main landing page with sections:
- Navigation with language toggle
- Hero section with statistics
- ANVISA compliance banner
- Service offerings
- Track record / proof section
- Leadership team
- Global markets overview
- Contact form

### blog.html
Blog listing page showcasing 17 articles across categories:
- Cultivation strategies
- Extraction & manufacturing
- Regulatory compliance
- Commercial deals
- Historical perspectives
- How-to guides

### thank-you.html
Confirmation page displayed after contact form submission with phone contact info.

## Technical Details

### Styling
- CSS custom properties for theming (colors, fonts, transitions)
- Flexbox and CSS Grid for layouts
- Responsive design with mobile-first approach
- Animation classes for scroll-triggered effects

### JavaScript
- DOM manipulation for nav interactions
- IntersectionObserver for efficient scroll animations
- Event delegation for dropdown menus
- Smooth scroll utility with fixed nav offset handling

### Internationalization
- English as default language
- Portuguese-Brazilian translations in i18n.js
- Language toggle button in top-right corner
- Translations applied via data-i18n attributes
- Original content cached on page load for performance

## Development

### Local Setup
```bash
# Clone the repository
git clone <repository-url>
cd hammercg-site

# Serve locally (using any static server)
# Python 3:
python -m http.server 8000

# Or using Node.js http-server:
npx http-server
```

### Deployment
The site is deployed on Vercel. Push changes to the main branch to trigger automatic deployments.

### Adding Blog Posts
1. Create a new HTML file in the `blog/` directory following the naming convention
2. Use the existing blog post structure as a template
3. Add the article to the blog grid in `blog.html`
4. Update translations in `i18n.js` if needed

### Adding Service Pages
1. Create a new HTML file in the `services/` directory
2. Update navigation links in `index.html` and `blog.html` if adding a new service type
3. Link from the services section on the landing page

## Performance Notes

- Google Fonts loaded with `font-display=swap` for web font optimization
- External links with `target="_blank"` include `rel="noopener noreferrer"` for security
- IntersectionObserver used instead of scroll event listeners for better performance
- Responsive images and lazy loading ready for implementation

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- CSS Grid and Flexbox required
- ES6 JavaScript features used

## Contact

For consulting inquiries, use the contact form on the landing page or call +1 (415) 941-1283.

## License

All content and code copyright 2026 Hammer Consulting Group. All rights reserved.
