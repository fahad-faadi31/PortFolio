Muhammad Fahad — Developer Portfolio

A modern, animated developer portfolio built from scratch with React, Vite, Tailwind CSS, and Framer Motion — showcasing my work in AI, machine learning, and web development.

🔗 Live Site: add your deployed link here after deploying
📄 Resume: /public/resume.pdf


✨ Features


Fully custom design — dark/light theme toggle, no UI templates or component kits
Animated Hero — typing effect cycling through roles, floating code-motif background, entrance animations
Interactive Skills section — filterable by category (Languages, Frontend, Backend, ML, Databases, Tools)
Live GitHub integration — pulls real repo stats, contribution graph, and pinned repos straight from the GitHub API
Working contact form — opens a pre-filled email to reach me directly, no third-party form service needed
Custom SVG project illustrations — no stock photos, each project card has a hand-built illustration matching the brand palette
Fully responsive — built mobile-first across every section
SEO-ready — Open Graph tags, custom favicon, custom social share image



🛠️ Tech Stack

CategoryToolsFrameworkReact + ViteStylingTailwind CSS v4AnimationFramer MotionIconsReact IconsFormsReact Hook FormScroll animationreact-intersection-observer


📂 Project Structure

src/
├─ assets/            # images, icons
├─ components/
│  ├─ ui/             # Button, Card, Badge, SectionHeading, ThemeToggle
│  ├─ layout/         # Navbar, Footer
│  └─ shared/         # AnimatedSection, CodeBackground, project illustrations
├─ sections/          # Hero, About, Skills, Experience, Services, Projects, GitHubStats, Contact
├─ data/              # site config, skills, projects, services, experience content
├─ hooks/             # useTypingEffect, useGithubData, useTheme
├─ utils/             # shared Framer Motion variants
├─ App.jsx
└─ main.jsx


🚀 Getting Started

bash# Clone the repo
git clone https://github.com/fahad-faadi31/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the dev server
npm run dev

Open http://localhost:5173 to view it locally.

Build for production

bashnpm run build

Output is generated in the dist/ folder.


⚙️ Editing Content

All real content lives in src/data/ — no need to touch component code to update text:

FileControlssiteConfig.jsName, email, resume path, social links, nav linksroles.jsRoles cycled in the Hero typing effectabout.jsAbout section highlight cardsskills.jsSkills grid, grouped by categoryexperience.jsExperience timeline entriesservices.jsServices offeredprojects.jsProject cards, GitHub/demo links


📬 Contact


Email: fahadfaadi829@gmail.com
GitHub: github.com/fahad-faadi31
LinkedIn: linkedin.com/in/muhammad-fahad-9b9639331
Fiverr: fiverr.com/users/its_fahad31



📄 License

This project is personal portfolio code. Feel free to reference the structure, but please don't copy the content or design 1:1 as your own portfolio.