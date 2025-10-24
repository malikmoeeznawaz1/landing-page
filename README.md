# Landing Page — Practice Project

This is a small practice landing page built with React + Vite and Tailwind CSS. It was created as a learning exercise to practice component layout, responsive design, and integrating a few common libraries (carousel, icons, fonts).

Short summary
- Framework: React (Vite)
- Styling: Tailwind CSS
- Carousel: react-slick + slick-carousel
- Icons: react-icons
- Fonts: @fontsource/inter

Live development

This project is configured with Vite. To run it locally (Windows PowerShell):

```powershell
# install dependencies
npm install

# start dev server
npm run dev
```

Build / Preview

```powershell
# build for production
npm run build

# preview the production build locally
npm run preview
```

Available scripts
- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

Project structure (important files)
- `index.html` — app entry
- `src/main.jsx` — React entry, global imports
- `src/App.jsx` — main app component
- `src/Components/` — UI components (Navbar, Hero, OurClients, Footer, Cards, etc.)
- `src/assets/` — images and static assets
- `package.json` — dependencies and scripts
- `vite.config.js` — Vite configuration

Notable dependencies (from package.json)
- `react`, `react-dom`
- `vite` and `@vitejs/plugin-react`
- `tailwindcss` and `@tailwindcss/vite`
- `react-slick` and `slick-carousel` (carousel + styles)
- `react-icons` (SVG icons)
- `@fontsource/inter` (font)

Common gotchas & tips
- If you see an import error for `slick-carousel/slick/slick.css`, install the package:

```powershell
npm install slick-carousel --save
```

- Avoid using `w-screen` on containers with padding — `w-screen` equals `100vw` and combined with padding it can cause a horizontal scrollbar. Prefer `w-full` with a centered container pattern (`max-w-7xl mx-auto px-4`).

- For responsive card layouts, prefer CSS Grid (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3`) or `flex flex-wrap` with responsive widths (`w-full sm:w-1/2 md:w-1/3`) so cards automatically flow to the next line when there isn't room.

Styling notes
- Tailwind is used for layout and utility classes. If you need to customize Tailwind, check `tailwind.config.js` (if present) and extend the theme there.

How to contribute / experiment
- This is a practice project — feel free to edit components in `src/Components/` and experiment with responsive breakpoints.
- If you add new packages, run `npm install` and restart the dev server.

Troubleshooting
- If the dev server doesn't start, check the terminal output for missing packages or syntax errors. The Vite error overlay in the browser is also helpful.
- If styles look off, ensure Tailwind is properly configured and `index.css` imports Tailwind directives.

License
- This repository was created for practice and learning. No license is specified.

---

If you want, I can:
- add a short CONTRIBUTING.md with recommended workflow,
- add a minimal LICENSE (MIT), or
- wire up a prettier/eslint config and run lint fixes automatically.

Tell me which next step you'd like.
