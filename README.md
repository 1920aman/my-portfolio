# 🚀 Dev Portfolio — React + Tailwind CSS

A premium, dark-themed personal portfolio for software developers. Built with React 18, Tailwind CSS 3, and zero routing libraries — deploys flawlessly to GitHub Pages.

---

## ✨ Design Highlights

| Feature | Detail |
|---|---|
| **Theme** | Dark — deep slate (`#080c14`) with electric cyan accents |
| **Typography** | Syne (headings) · Outfit (body) · DM Mono (code/labels) |
| **Effects** | Glassmorphism cards, gradient borders, grid background, glow shadows |
| **Animations** | Typewriter hero, scroll-triggered reveals, skill bars, hover lifts |
| **Responsive** | Mobile-first, fully tested at 375px → 1440px |

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── index.html          ← Google Fonts loaded here
│   └── resume.pdf          ← ⬅ DROP YOUR RESUME HERE
│
├── src/
│   ├── assets/
│   │   └── README.md       ← Instructions for profile photo
│   │
│   ├── components/
│   │   ├── Navbar.jsx      ← Sticky nav, active highlight, mobile menu
│   │   ├── Hero.jsx        ← Typewriter, profile image, CTAs
│   │   ├── About.jsx       ← Bio, stats, contact info
│   │   ├── Education.jsx   ← Timeline cards
│   │   ├── Experience.jsx  ← Expandable accordion timeline
│   │   ├── Skills.jsx      ← Animated progress bars by category
│   │   ├── Projects.jsx    ← Image cards, GitHub/demo links
│   │   ├── Contact.jsx     ← Form + contact details
│   │   ├── Footer.jsx      ← Minimal footer
│   │   └── SectionWrapper.jsx  ← Reusable scroll-animated section
│   │
│   ├── data/
│   │   └── data.js         ← ⬅ EDIT ALL YOUR CONTENT HERE
│   │
│   ├── hooks/
│   │   └── useActiveSection.js  ← IntersectionObserver for nav
│   │
│   ├── App.jsx
│   ├── index.js
│   └── index.css           ← Tailwind directives + global styles
│
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🛠️ Local Setup

### Prerequisites
- **Node.js** ≥ 16  
- **npm** ≥ 8 (comes with Node)

### Step-by-step

```bash
# 1. Clone the repo (or download the zip)
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

Your portfolio opens at **http://localhost:3000** with hot-reload enabled.

---

## ✏️ Personalising the Content

**Open `src/data/data.js`** — this single file controls every word on the site:

| Export | What it controls |
|---|---|
| `personalInfo` | Name, title, bio, email, phone, social links, profile image |
| `education` | Degrees, institutions, GPA, highlights |
| `experience` | Job roles, companies, tech stack, achievements |
| `skills` | Categories (Frontend / Backend / DevOps / Tools) with percentage levels |
| `projects` | Title, description, image, tags, GitHub & demo URLs |
| `contactInfo` | Contact section heading & availability status |

### Adding your profile photo

1. Copy your photo to `src/assets/profile.jpg`
2. In `src/data/data.js`, replace the `profileImage` value:

```js
// At the top of data.js, add:
import profileImg from "../assets/profile.jpg";

// Then in personalInfo:
profileImage: profileImg,
```

### Adding your resume

Drop `resume.pdf` into the `public/` folder. The "Download CV" button links to `/resume.pdf` automatically.

### Enabling the contact form

The form currently simulates a send. To make it real, use one of these free services:

**Option A — Formspree (easiest)**
```js
// In Contact.jsx, replace the handleSubmit function:
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  setSent(true);
};
```

**Option B — EmailJS**  
See https://www.emailjs.com/docs/examples/reactjs/

---

## 🌐 Deploy to GitHub Pages

### One-time setup

```bash
# 1. Install the gh-pages helper (already in package.json devDeps)
npm install

# 2. In package.json, set your homepage:
#    "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
#    If deploying to root (username.github.io):
#    "homepage": "https://YOUR_USERNAME.github.io"
```

### Deploy

```bash
# Build + push to the gh-pages branch in one command:
npm run deploy
```

Then in your GitHub repo:  
**Settings → Pages → Source → Branch: `gh-pages` → / (root) → Save**

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME` within a minute.

> **Note:** Because this is a single-page app with no React Router, there are **zero 404 issues on refresh**. All navigation is handled with `scrollIntoView` — no client-side routing whatsoever.

---

## 🎨 Customising the Theme

All design tokens live in `tailwind.config.js`:

```js
colors: {
  bg: {
    primary:   "#080c14",   // page background
    secondary: "#0d1321",   // alternate sections
    card:      "#111827",   // card background
  },
  accent: {
    cyan:   "#22d3ee",  // primary accent
    blue:   "#3b82f6",  // secondary accent
    green:  "#10b981",  // success / available
    purple: "#a78bfa",  // internship badges
  },
}
```

Change `accent.cyan` to any colour (e.g. `#f59e0b` for amber) and the entire site updates.

---

## 📦 Tech Stack

| Package | Version | Purpose |
|---|---|---|
| react | 18.2 | UI library |
| react-dom | 18.2 | DOM renderer |
| react-scripts | 5.0.1 | CRA build tooling |
| tailwindcss | 3.3 | Utility CSS |
| lucide-react | 0.263 | Icon set |
| gh-pages | 6.0 | GitHub Pages deploy |

---

## 🔒 No Routing = No 404s

This portfolio uses **zero routing libraries**. Navigation is pure `scrollIntoView`. This means:
- No `BrowserRouter` / `HashRouter` configuration needed
- Refresh on any "page" works perfectly on GitHub Pages
- Simpler codebase, faster initial load

---

## 📄 License

MIT — use freely for your own portfolio.
