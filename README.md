# GitFlow Documentation - GitHub Desktop Workflow Guide

A comprehensive, interactive documentation site for learning the GitHub Desktop workflow. Built with React 18, Framer Motion, and featuring a clean documentation-first design with GitHub's visual language.

## Documentation-First Theme

This application features a **"Knowledge Base"** design system:
- Clean white documentation site aesthetic
- GitHub's signature green (#238636) for primary actions
- Sidebar navigation for easy content browsing
- Syntax-highlighted code blocks
- Markdown-focused content presentation

## Features

| Feature | Description |
|---------|-------------|
| **Interactive Workflow** | Visual schematic nodes explaining Git workflow |
| **Sidebar Navigation** | Grouped documentation links with active states |
| **Code Blocks** | Dark-themed syntax-highlighted code examples |
| **Breadcrumb Trail** | Clear navigation path indication |
| **Technical Briefings** | In-depth explanations of Git concepts |
| **Status Indicators** | Visual badges and progress indicators |
| **Responsive Layout** | Mobile and desktop optimized |

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Animations:** Framer Motion
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 with custom design system
- **Icons:** Lucide React

## Design System

See `design-system/MASTER.md` for complete design token documentation.

### Color Palette
```css
--doc-green: #238636;       /* GitHub green */
--doc-blue: #0969da;        /* Link blue */
--doc-bg: #ffffff;          /* White background */
--doc-bg-alt: #f6f8fa;     /* Light gray sections */
--doc-border: #d0d7de;      /* Border color */
```

### Key Components
- `.doc-sidebar` - Fixed sidebar with navigation
- `.doc-nav-link` - Sidebar link with hover/active states
- `.code-block` - Dark syntax-highlighted code
- `.info-box` - Note/warning/tip callout boxes
- `.breadcrumb` - Navigation path indicator

### Documentation Layout
```css
.doc-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}
```

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── App.tsx           # Main application
├── main.tsx          # Entry point
├── index.css         # Design system styles
└── vite-env.d.ts     // Vite types
```

## Workflow Steps Covered

1. **Initialize** - Create a new local repository
2. **Feature Branch** - Create isolated work branches
3. **Commit** - Package changes with messages
4. **Pull Request** - Submit for review

## Deployment

This project is configured for deployment on three platforms:

### GitHub Pages
- **Workflow**: `.github/workflows/deploy.yml`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Trigger**: Push to `main` branch
- **Action**: `actions/deploy-page@v4` with Vite static site generator

### Vercel
- **Config**: `vercel.json`
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Rewrites**: SPA fallback to `/index.html`

### Netlify
- **Config**: `netlify.toml`
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Redirects**: All paths to `/index.html` (SPA support)

---

## Live Links

| Platform | URL |
|----------|-----|
| **GitHub Pages** | https://mk-knight23.github.io/44-tool-github-desktop-guide/ |
| **Vercel** | https://44-tool-github-desktop-guide.vercel.app/ |
| **Netlify** | https://44-tool-github-desktop-guide.netlify.app/ |

---

**Theme:** Documentation-First/Knowledge
**License:** MIT
**Author:** mk-knight23

## AI-Assisted Development

This project is configured with [Kilo Code Reviewer](https://kilo.code/) for AI-powered code reviews on all pull requests.
