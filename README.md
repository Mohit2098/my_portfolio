# Mohit Semwal | Portfolio

Personal portfolio of **Mohit Semwal**, a full stack developer specializing in WordPress, WooCommerce and headless builds with Next.js and Payload CMS.

**Live site:** `https://mohit2098.github.io/my_portfolio/` <!-- replace with your URL -->

---

## Overview

A fast, single-page portfolio built with plain HTML, CSS and JavaScript. No frameworks or build step, so it loads quickly and can be hosted anywhere.

### Sections

- **Home**: animated headline, typing role text, resume download
- **About**: short intro and tech stack
- **Work**: 9 live client projects (Rise & Learn, Gear Edge, Aczess Events, CXG, Belmont Trailers, My Consumer Brand, Manjula's Kitchen, Blister Packaging, Flattrak)
- **Process**: Discover, Design, Build, Launch
- **Journey**: experience and education timeline
- **Services**: web design, web development, deployment
- **Contact**: LinkedIn, GitHub, X, Instagram, Pinterest, Facebook

## Features

- Dark and light themes, with the choice saved in `localStorage` and a fallback to the system preference
- Theme is applied before first paint, so there is no flash on load
- Scroll progress bar and custom cursor
- Typing effect for the role text
- Scroll reveal animations and a skills marquee
- Responsive layout with a mobile burger menu
- Lazy loaded project images
- Downloadable PDF resume

## Tech stack

| Area | Tools |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (custom properties for theming) |
| Behavior | Vanilla JavaScript |
| Fonts | [Syne](https://fonts.google.com/specimen/Syne) and [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts |

## Project structure

```
my_portfolio/
├── index.html
├── favicon.svg
├── favicon.ico
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    ├── images/
    │   ├── mohit.jpg             # profile photo (hero section)
    │   ├── risenlearn.png        # Rise & Learn screenshot
    │   ├── gearedge.png          # Gear Edge screenshot
    │   ├── aczessevents.png      # Aczess Events screenshot
    │   ├── cxg.png               # CXG screenshot
    │   ├── belmont.png           # Belmont Trailers screenshot
    │   ├── mycmb.png             # My Consumer Brand screenshot
    │   ├── mj.png                # Manjula's Kitchen screenshot
    │   ├── blisterpackaging.png  # Blister Packaging screenshot
    │   └── flattrak.png          # Flattrak screenshot
    └── cv/
        └── Mohit_Semwal_Resume.pdf   # two-page resume
```

## Getting started

No installation needed.

```bash
# clone the repo
git clone https://github.com/mohit2098/my_portfolio.git
cd my_portfolio

# open index.html in your browser, or serve it locally
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:3000` (serve) or `http://localhost:8000` (Python).

## Customizing

| What to change | Where |
| --- | --- |
| Name, headline, bio | `index.html` (hero and about sections) |
| Add a project | Save the screenshot in `assets/images/`, then copy an `<a class="card rv">` block inside `#projects` in `index.html` and update the link, image path, alt text and title |
| Experience and education | `.job` blocks inside `#experience` |
| Colors and fonts | CSS variables in `assets/css/style.css` |
| Typing role words | `assets/js/script.js` |
| Profile photo | Replace `assets/images/mohit.jpg` (keep the same file name) |
| Resume | Replace `assets/cv/Mohit_Semwal_Resume.pdf` (keep the same file name) |
| Years of experience badge | `data-to` attribute on `#yrs` |
| Social links | `.links` block in `#contact` |

## Deployment

Because the site is fully static, you can deploy it on:

- **GitHub Pages**: Settings, Pages, deploy from the `main` branch
- **Netlify** or **Vercel**: drag and drop the folder or connect the repo
- **Any shared hosting**: upload the files over FTP or SSH

## Performance and accessibility notes

- Images use `loading="lazy"` and descriptive `alt` text
- Fonts are preconnected to reduce load time
- The headline uses `aria-label` so screen readers read it as one sentence
- Decorative elements (cursor, marquee) are hidden with `aria-hidden`
- Theme toggle and menu button have proper labels and `aria-expanded` state

## Contact

- LinkedIn: [mohit-semwal](https://www.linkedin.com/in/mohit-semwal/)
- GitHub: [mohit2098](https://github.com/mohit2098)
- X: [@Mohit0498](https://x.com/Mohit0498)
- Instagram: [mohit0498](https://www.instagram.com/mohit0498)

## License

© 2026 Mohit Semwal. All rights reserved. Please don't copy the content, images or resume. If you'd like to use the layout as inspiration, feel free, but credit is appreciated.