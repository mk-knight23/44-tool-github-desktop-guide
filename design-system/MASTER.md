# Documentation-First Design System

**Theme Identity:** Clean documentation site with GitHub's visual language

## Color Palette

### GitHub Brand Colors
```css
--doc-green: #238636;         /* GitHub green */
--doc-green-hover: #2ea043;
--doc-blue: #0969da;          /* Link blue */
--doc-blue-hover: #218bff;
--doc-purple: #8957e5;        /* Purple accent */
```

### Background & Surface
```css
--doc-bg: #ffffff;            /* White background */
--doc-bg-alt: #f6f8fa;       /* Light gray background */
--doc-surface: #ffffff;       /* Card surface */
--doc-border: #d0d7de;        /* Border color */
```

### Code Syntax
```css
--code-bg: #24292f;          /* Dark code background */
--code-text: #e6edf3;        /* Code text */
```

### Text Colors
```css
--doc-text-primary: #24292f;  /* Near black */
--doc-text-secondary: #57606a; /* Gray text */
--doc-text-muted: #8b949e;    /* Light gray */
```

## Typography

### Font Families
```css
--font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
```

### Type Scale
```css
--text-xs: 0.75rem;     /* 12px - code, labels */
--text-sm: 0.875rem;    /* 14px - body */
--text-base: 1rem;      /* 16px - base */
--text-lg: 1.125rem;    /* 18px - emphasized */
--text-xl: 1.25rem;     /* 20px - small headings */
--text-2xl: 1.5rem;     /* 24px - headings */
```

## Component Patterns

### Documentation Layout
```css
.doc-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}
```

### Sidebar Navigation
```css
.doc-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  padding: 2rem 1rem;
  border-right: 1px solid var(--doc-border);
}
```

### Navigation Link
```css
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--doc-text-primary);
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.15s ease;
}

.nav-link:hover {
  background: var(--doc-bg-alt);
}

.nav-link.active {
  background: var(--doc-bg-alt);
  font-weight: 600;
}
```

### Code Block
```css
.code-block {
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1rem;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  overflow-x: auto;
}

.code-block-inline {
  background: rgba(175,184,193,0.2);
  padding: 0.2em 0.4em;
  border-radius: 6px;
  font-size: 85%;
  font-family: var(--font-mono);
}
```

### Primary Button
```css
.btn-doc {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--doc-green);
  color: white;
  border: 1px solid rgba(240,246,252,0.1);
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: background 0.2s ease;
}

.btn-doc:hover {
  background: var(--doc-green-hover);
}
```

### Info Box
```css
.info-box {
  padding: 1rem;
  border-left: 3px solid var(--doc-blue);
  background: var(--doc-bg-alt);
  border-radius: 6px;
  margin: 1rem 0;
}

.info-box.note {
  border-color: var(--doc-blue);
}

.info-box.warning {
  border-color: #d29922;
  background: #fff8c5;
}

.info-box.tip {
  border-color: var(--doc-green);
  background: #dafbe1;
}
```

### Table of Contents
```css
.toc {
  position: sticky;
  top: 4rem;
  padding: 1rem;
  border-left: 2px solid var(--doc-border);
}

.toc-link {
  display: block;
  padding: 0.25rem 0;
  color: var(--doc-text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
}

.toc-link:hover {
  color: var(--doc-blue);
}
```

## Header Styles

```css
.doc-header {
  border-bottom: 1px solid var(--doc-border);
  padding: 1rem 2rem;
  background: var(--doc-surface);
}

.doc-logo {
  font-weight: 600;
  color: var(--doc-text-primary);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--doc-text-secondary);
}
```

## Content Styling

```css
.doc-content {
  max-width: 800px;
  padding: 2rem 3rem;
}

.doc-content h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--doc-border);
  padding-bottom: 0.5rem;
}

.doc-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  border-bottom: 1px solid var(--doc-border);
  padding-bottom: 0.5rem;
}

.doc-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.doc-content p {
  margin: 1rem 0;
  line-height: 1.6;
}

.doc-content ul,
.doc-content ol {
  padding-left: 2rem;
  margin: 1rem 0;
}

.doc-content li {
  margin: 0.5rem 0;
}
```

## Design Tokens Summary

| Token | Value | Purpose |
|-------|-------|---------|
| Green | #238636 | Primary actions |
| Blue | #0969da | Links |
| Background | #ffffff | Page background |
| Alt Background | #f6f8fa | Section backgrounds |
| Border | #d0d7de | Dividers/borders |
| Code BG | #24292f | Code blocks |
