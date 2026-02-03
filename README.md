# GitFlow — GitHub Desktop Workflow Guide

A comprehensive, interactive documentation site for learning the GitHub Desktop workflow. Built with React 19, TypeScript, and featuring a clean dark-themed documentation design with GitHub's visual language.

## What's New (v2.2.0)

### New Features
- **Search Modal** — Press `/` to quickly find documentation sections
- **Keyboard Shortcuts** — Press `?` for help, `ESC` to close modals
- **Copy to Clipboard** — One-click copying for all code blocks
- **Scroll Progress** — Visual progress bar at the top of the page
- **Mobile Menu** — Slide-out navigation drawer for mobile devices
- **Section Highlighting** — Active section automatically highlighted in sidebar

### Improvements
- Component-based architecture with proper separation of concerns
- Responsive design optimized for all screen sizes
- Accessibility improvements with aria-labels
- Keyboard navigation in search (arrow keys, enter, escape)

---

## Features

| Feature | Description |
|---------|-------------|
| **Interactive Workflow** | Visual schematic nodes explaining Git workflow |
| **Sidebar Navigation** | Grouped documentation links with active states |
| **Search** | Quick search with `/` keyboard shortcut |
| **Code Blocks** | Dark-themed syntax-highlighted code with copy button |
| **Copy to Clipboard** | One-click copying for all code snippets |
| **Scroll Progress** | Visual progress indicator as you read |
| **Keyboard Shortcuts** | `?` for help, `ESC` to close modals |
| **Mobile Responsive** | Optimized for all screen sizes |
| **Breadcrumb Trail** | Clear navigation path indication |

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Animations:** Framer Motion
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 with custom design system
- **Icons:** Lucide React

## Project Structure

```
src/
├── components/
│   ├── CopyButton.tsx      # Clipboard copy functionality
│   ├── CodeBlock.tsx       # Code display with copy button
│   ├── SearchModal.tsx     # Documentation search
│   ├── ShortcutsModal.tsx  # Keyboard shortcuts help
│   ├── ProgressBar.tsx     # Scroll progress indicator
│   └── index.ts            # Component exports
├── App.tsx                 # Main application
├── main.tsx                # Entry point
├── index.css               # Design system styles
└── vite-env.d.ts          # Vite types
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

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `/` | Open search modal |
| `?` | Show keyboard shortcuts |
| `ESC` | Close modals |
| `↑` `↓` | Navigate search results |
| `Enter` | Select highlighted result |

## Documentation Sections

1. **Introduction** — Overview of GitFlow
2. **Installation** — Download links for macOS, Windows, Linux
3. **Quick Start** — 3-step guide to get started
4. **Branching** — Creating and switching branches
5. **Committing** — Staging and committing changes
6. **Pull Requests** — Submitting changes for review

## Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### GitHub Pages
Builds automatically on push to main branch via GitHub Actions.

### Netlify
Build command: `npm run build`
Publish directory: `dist`

## Live Links

| Platform | URL |
|----------|-----|
| **Vercel** | https://44-tool-github-desktop-guide.vercel.app/ |
| **GitHub Pages** | https://mk-knight23.github.io/44-tool-github-desktop-guide/ |

---

**Theme:** Documentation-First Dark
**License:** MIT
**Author:** Made by MK — Musharraf Kazi
