# Jateen Mohanty — Product Designer & AI Builder Portfolio

A sleek, premium, and highly performant personal portfolio built with Next.js, React, and Tailwind CSS. The design showcases professional work, product design philosophy, and core development capabilities, crafted with a high-fidelity editorial aesthetic.

---

## ✨ Features & Design Highlights

- **Modern Editorial Aesthetic**: Curated color palettes with a premium paper theme (`#f6f1e8` / `#eee7da`) in light mode and dark theme compatibility.
- **Next.js App Router**: Built on Next.js 16 (App Router) and React 19 for optimized server-side rendering (SSR), image optimization, and routing.
- **Lenis Smooth Scroll**: Elegant and fluid scrolling physics implemented project-wide.
- **Micro-Animations & Scroll Effects**:
  - Custom reveal-on-scroll component (`Reveal.tsx`) utilizing the native `IntersectionObserver` API.
  - Interactive elements like gooey hover buttons and smooth SVG morphs.
- **Responsive Mobile Dropdown**: Custom lightweight, interactive mobile header menu component (`MobileMenu.tsx`) featuring click-outside hooks and automatic viewport resize handling.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4 (`@theme` variables, CSS imports)
- **Scroller**: Lenis
- **Typography**: Typekit Integration (`loos-extended` for Display, `articulat-cf` / `Inter` for Sans-serif)

---

## 📁 Directory Structure

```
├── public/                 # Static assets (logos, illustrations, stars)
├── src/
│   ├── app/
│   │   ├── work/           # Works/Case Studies list page
│   │   ├── globals.css     # Global styles & custom Tailwind v4 theme settings
│   │   ├── layout.tsx      # Main layout wrapper, Navigation Header & Footer
│   │   └── page.tsx        # Homepage (Hero, SelectedWork, Experience, etc.)
│   ├── components/
│   │   ├── ui/             # Reusable UI components (Buttons, etc.)
│   │   ├── AboutMe.tsx     # Bio & introduction section
│   │   ├── Footer.tsx      # Multi-column footer & contact form section
│   │   ├── Hero.tsx        # Title section with bold header elements
│   │   ├── MobileMenu.tsx  # Mobile dropdown navigation card component
│   │   └── Reveal.tsx      # Scroll reveal wrapper component
│   └── constant/           # Mock data and configuration details
```

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have Node.js installed (version 18+ recommended).

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application in development mode.

### 4. Build for Production

To create an optimized production bundle:

```bash
npm run build
```

To run the built production version locally:

```bash
npm run start
```

---

## 📄 License

This project is private. All rights reserved.
