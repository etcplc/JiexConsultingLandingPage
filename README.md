# Jiex Consulting Landing Page

An optimized, fully responsive React landing page for Jiex Consulting, built with:

* **React 18**
* **Tailwind CSS (JIT)**
* **Framer Motion**
* **React Context**
* **Axios**
* **React Intersection Observer**

---

## Features

* **Hero Section**
  Background image crossfade, dark overlay, animated text and CTAs.

* **About Section**
  Image + text with scroll-triggered animations.

* **Stats Section**
  Counters animate into view.

* **Career Section**
  Dynamic job listings with error handling and placeholder data.

* **Contact Section**
  Responsive form with accessible inputs.

* **Dark Mode**
  Toggleable via `ThemeContext` (persisted in `localStorage`).

* **Lazy Loading**
  Sections loaded via `React.lazy` + `Suspense` for faster initial load.

* **Image Optimization**
  WebP assets in `src/assets/`.

---

## Folder Structure

```
my-landing/
├── public/
│   └── index.html
├── src/
│   ├── assets/              # hero-bg1.webp, hero-bg2.webp, about-poster.webp
│   ├── components/
│   │   ├── shared/          # Button.jsx, Input.jsx, Textarea.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── StatsSection.jsx
│   │   ├── JobSection.jsx
│   │   └── ContactSection.jsx
│   ├── context/             # ThemeContext.jsx
│   ├── hooks/               # useInViewCounter.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repo-url> jiex-landing
   cd jiex-landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run in development**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**

   ```bash
   npm run build
   ```

---

## Configuration

* **Tailwind**: `tailwind.config.js` is set to JIT mode with dark mode enabled (`class`).
* **PostCSS**: `postcss.config.js` includes `tailwindcss` and `autoprefixer`.
* **Images**: Place WebP assets in `src/assets/`.

---

## Customization

* **Themes**: Toggle dark mode via the `useTheme` hook.
* **Animations**: Adjust variants in components under `src/components/`.
* **Job API**: Update endpoint in `JobSection.jsx` or modify the mock data fallback.

---

## License

This project is licensed under the [MIT License](LICENSE).
