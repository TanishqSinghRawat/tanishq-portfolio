# 🚀 Personal Portfolio Website

A clean, modern, and responsive developer portfolio built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no bloat.

## 📋 Overview

This portfolio is designed with a recruiter-first approach. Within 10–15 seconds, any HR or hiring manager can understand:

- **Who you are** — Name, role, and introduction
- **What you study** — BTech Computer Science & Engineering
- **What technologies you know** — Categorized skill cards
- **What you've built** — Filterable project showcase
- **How to reach you** — Contact form and social links

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic, accessible page structure |
| CSS3 | Custom properties, Flexbox, Grid, responsive design |
| JavaScript | Navigation, scroll animations, form validation |
| Google Fonts | Inter (body) + Fira Code (code/monospace) |

**Zero frameworks. Zero dependencies. Zero build steps.**

## 📁 Folder Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles (CSS variables, responsive)
├── script.js           # Navigation, animations, validation
├── assets/
│   ├── profile.jpg     # Your profile photo (replace)
│   └── resume.pdf      # Your resume (replace)
└── README.md           # This file
```

## 🚀 How to Run

1. **Clone** the repository:
   ```bash
   git clone https://github.com/[YOUR-USERNAME]/portfolio.git
   cd portfolio
   ```

2. **Open** `index.html` in your browser:
   - Double-click the file, or
   - Use a local server like VS Code's **Live Server** extension

That's it — no install, no build, no dependencies.

## ✏️ How to Customize

### Personal Information

Search the codebase for these placeholders and replace them with your real info:

| Placeholder | Replace With |
|-------------|-------------|
| `Tanishq Singh Rawat` | Your full name |
| `[COLLEGE NAME]` | Your college name |
| `[EMAIL]` | Your email address |
| `[GITHUB URL]` | Your GitHub profile URL |
| `[LINKEDIN URL]` | Your LinkedIn profile URL |
| `[LEETCODE URL]` | Your LeetCode profile URL |
| `[CODECHEF URL]` | Your CodeChef profile URL |
| `[HACKERRANK URL]` | Your HackerRank profile URL |
| `[GFG URL]` | Your GeeksforGeeks profile URL |
| `[CITY, STATE, INDIA]` | Your location |
| `[YEAR / SEMESTER]` | Your current year/semester |
| `[SCHOOL NAME]` | Your school name(s) |
| `[YOUR SCORE]` | Your academic scores |
| `[Project Name X]` | Your actual project names |

### Profile Photo

Replace `assets/profile.jpg` with your own photo. Recommended:
- Square aspect ratio (e.g., 400×400 px)
- Under 200 KB for fast loading
- Professional headshot

### Resume

Replace `assets/resume.pdf` with your actual resume.

### Projects

Edit the project cards in `index.html` under the `PROJECTS SECTION` comment. Each card includes:
- Title, description, and features
- Technologies used
- GitHub and Live Demo links
- A `data-category` attribute for filtering (`web`, `app`, or `dsa`)

### Achievements

Replace the placeholder achievement cards with your real accomplishments. Remove any cards that don't apply.

### Colors & Theme

Edit the CSS custom properties at the top of `style.css`:

```css
:root {
  --accent:       #6366f1;   /* Change primary accent */
  --bg-primary:   #0a0a0f;   /* Change background */
  /* ... */
}
```

## 🌐 Deploy on GitHub Pages

1. Push your portfolio to a GitHub repository.

2. Go to **Settings → Pages** in your repository.

3. Under **Source**, select the branch (e.g., `main`) and folder (`/ (root)`).

4. Click **Save**. Your site will be live at:
   ```
   https://[YOUR-USERNAME].github.io/portfolio/
   ```

**Tip:** Name the repo `[YOUR-USERNAME].github.io` to get a cleaner URL.

## ✅ Features

- [x] Professional dark theme with subtle accents
- [x] Fully responsive (desktop, tablet, mobile)
- [x] Mobile hamburger navigation
- [x] Smooth scrolling with active nav highlighting
- [x] Scroll-reveal animations (IntersectionObserver)
- [x] Project filtering by category
- [x] Contact form with validation
- [x] Back-to-top button
- [x] Auto-updating copyright year
- [x] Accessibility-friendly (ARIA, focus-visible, reduced-motion)
- [x] SEO-friendly semantic HTML
- [x] No console errors
- [x] Lightweight — no external JS libraries

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with 💜 by **Tanishq Singh Rawat**

