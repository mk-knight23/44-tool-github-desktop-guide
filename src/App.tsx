import { motion } from 'framer-motion';
import {
  Github,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Book,
  Search,
  Terminal,
  ChevronRight,
  Zap,
  FileText,
  Package,
  Settings,
  ArrowRight,
  Shield,
  Command,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import {
  CodeBlock,
  SearchModal,
  ShortcutsModal,
  ProgressBar
} from './components';

const WORKFLOW_STEPS = [
  {
    id: 'init',
    title: 'Initialize',
    icon: <Terminal className="w-5 h-5" />,
    desc: 'Create a new local repository or clone from GitHub.',
    command: 'git init'
  },
  {
    id: 'branch',
    title: 'Feature Branch',
    icon: <GitBranch className="w-5 h-5" />,
    desc: 'Create a sandbox for your changes to keep main stable.',
    command: 'git checkout -b feature/name'
  },
  {
    id: 'commit',
    title: 'Commit',
    icon: <GitCommit className="w-5 h-5" />,
    desc: 'Package your changes with a descriptive message.',
    command: 'git commit -m "feat: add feature"'
  },
  {
    id: 'pr',
    title: 'Pull Request',
    icon: <GitPullRequest className="w-5 h-5" />,
    desc: 'Submit your changes for review and collaboration.',
    command: 'gh pr create'
  }
];

const DOCS_NAV = [
  {
    group: 'Getting Started',
    links: [
      { title: 'Introduction', href: '#intro' },
      { title: 'Installation', href: '#install' },
      { title: 'Quick Start', href: '#quickstart' }
    ]
  },
  {
    group: 'Workflow',
    links: [
      { title: 'Branching', href: '#branching' },
      { title: 'Committing', href: '#committing' },
      { title: 'Pull Requests', href: '#pullrequests' }
    ]
  },
  {
    group: 'Advanced',
    links: [
      { title: 'Merge Conflicts', href: '#conflicts' },
      { title: 'Rebasing', href: '#rebasing' },
      { title: 'GitHub Actions', href: '#actions' }
    ]
  }
];

function App() {
  const [activeStep, setActiveStep] = useState('init');
  const [activeSection, setActiveSection] = useState('intro');
  const [searchOpen, setSearchOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !searchOpen && !shortcutsOpen) {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === '?' && !searchOpen && !shortcutsOpen) {
        e.preventDefault();
        setShortcutsOpen(true);
      } else if (e.key === 'Escape') {
        setSearchOpen(false);
        setShortcutsOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, shortcutsOpen]);

  // Update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setActiveSection(href);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen blueprint-bg">
      <ProgressBar progress={scrollProgress} />

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ShortcutsModal isOpen={shortcutsOpen} onClose={() => setShortcutsOpen(false)} />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-git/20 rounded-lg border border-git/30">
              <Github className="w-6 h-6 text-git" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-white uppercase tracking-tighter">
                Git<span className="text-git">Flow</span>
              </h1>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hidden sm:block">
                Workflow Documentation
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Guides', 'Tutorials', 'CLI Reference'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors no-underline"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-slate-400 hover:text-white transition-colors"
              title="Search (/)"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShortcutsOpen(true)}
              className="hidden sm:block p-2 text-slate-400 hover:text-white transition-colors"
              title="Keyboard shortcuts (?)"
              aria-label="Keyboard shortcuts"
            >
              <Command className="w-5 h-5" />
            </button>
            <button
              className="hidden sm:flex px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-black text-xs uppercase tracking-widest rounded-lg border border-slate-600 transition-all items-center gap-2"
            >
              <Book className="w-4 h-4" />
              View Docs
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="doc-layout">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block doc-sidebar">
          <nav className="space-y-6">
            {DOCS_NAV.map((section) => (
              <div key={section.group} className="doc-nav-group">
                <h3 className="doc-nav-group-title">{section.group}</h3>
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left doc-nav-link ${activeSection === link.href ? 'active' : ''}`}
                    >
                      {link.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-500 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Search className="w-4 h-4" />
              Search...
              <kbd className="ml-auto px-1.5 py-0.5 text-xs bg-slate-700 rounded">/</kbd>
            </button>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 border-r border-slate-700 transform transition-transform duration-300 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4 border-b border-slate-700 flex items-center justify-between">
            <span className="text-sm font-bold text-white uppercase tracking-wider">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-4 space-y-6">
            {DOCS_NAV.map((section) => (
              <div key={section.group} className="doc-nav-group">
                <h3 className="doc-nav-group-title">{section.group}</h3>
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left doc-nav-link ${activeSection === link.href ? 'active' : ''}`}
                    >
                      {link.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="pt-20 lg:pt-24 pb-20 w-full max-w-5xl">
          <div className="doc-content px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="#" className="breadcrumb-link">Docs</a>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
              <a href="#" className="breadcrumb-link">Workflow</a>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Getting Started</span>
            </nav>

            {/* Hero */}
            <section id="intro" className="mb-12 scroll-mt-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-git/10 border border-git/20 rounded-full text-[10px] uppercase font-bold text-git mb-6">
                <Zap className="w-3 h-3" />
                Version 2.2.0
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-[0.9] mb-8">
                Mastering the <br />
                <span className="text-git">Distributed</span> Pipeline
              </h2>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-medium leading-relaxed">
                A comprehensive deep-dive into the GitHub Desktop workflow. Follow the nodes
                to understand how modern teams ship code with confidence.
              </p>
            </section>

            {/* Installation Section */}
            <section id="install" className="mb-16 scroll-mt-28">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-6">
                Installation
              </h3>
              <div className="doc-card bg-slate-900 border-slate-700">
                <p className="text-slate-400 mb-4 text-sm sm:text-base">
                  Download and install GitHub Desktop for your operating system. The application provides a visual interface for Git operations.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { os: 'macOS', ext: '.dmg' },
                    { os: 'Windows', ext: '.exe' },
                    { os: 'Linux', ext: 'AppImage' }
                  ].map(({ os, ext }) => (
                    <a
                      key={os}
                      href="https://desktop.github.com/download/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-center sm:text-left"
                    >
                      <span className="text-git font-bold">{os}</span>
                      <p className="text-sm text-slate-500 mt-1">Download {ext}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Quick Start Section */}
            <section id="quickstart" className="mb-16 scroll-mt-28">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-6">
                Quick Start
              </h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Sign in to GitHub', desc: 'Open Preferences → Accounts and sign in with your GitHub account.' },
                  { step: 2, title: 'Clone or Create Repository', desc: 'Use File → Clone Repository or File → New Repository to get started.' },
                  { step: 3, title: 'Make Your First Commit', desc: 'Make changes, write a summary, and click "Commit to main".' }
                ].map(({ step, title, desc }) => (
                  <div key={step} className="doc-card bg-slate-900 border-slate-700">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">{step}. {title}</h4>
                    <p className="text-slate-400 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Branching Section */}
            <section id="branching" className="mb-16 scroll-mt-28">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-6">
                Branching
              </h3>
              <div className="doc-card bg-slate-900 border-slate-700">
                <p className="text-slate-400 mb-4 text-sm sm:text-base">
                  Branches allow you to work on features or fixes without affecting the main codebase.
                </p>
                <CodeBlock lines={['# Create a new branch', 'git checkout -b feature/my-feature', '# Switch between branches', 'git checkout main']} />
              </div>
            </section>

            {/* Committing Section */}
            <section id="committing" className="mb-16 scroll-mt-28">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-6">
                Committing
              </h3>
              <div className="doc-card bg-slate-900 border-slate-700">
                <p className="text-slate-400 mb-4 text-sm sm:text-base">
                  Commits are snapshots of your changes. Write clear, descriptive commit messages.
                </p>
                <CodeBlock lines={['# Stage changes', 'git add filename.txt', '# Commit with message', 'git commit -m "Add new feature"']} />
              </div>
            </section>

            {/* Pull Requests Section */}
            <section id="pullrequests" className="mb-16 scroll-mt-28">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-6">
                Pull Requests
              </h3>
              <div className="doc-card bg-slate-900 border-slate-700">
                <p className="text-slate-400 mb-4 text-sm sm:text-base">
                  Pull requests let you tell others about changes you&apos;ve pushed to a branch.
                </p>
                <ul className="text-slate-400 list-disc list-inside space-y-2 text-sm sm:text-base">
                  <li>Click &quot;Create Pull Request&quot; in GitHub Desktop</li>
                  <li>Add a title and description</li>
                  <li>Request reviews from team members</li>
                  <li>Merge after approval</li>
                </ul>
              </div>
            </section>

            {/* Workflow Schematic */}
            <section className="mb-16">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
                Interactive Workflow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {WORKFLOW_STEPS.map((step, i) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setActiveStep(step.id)}
                    className={`node-card group ${activeStep === step.id ? 'active' : ''}`}
                  >
                    <div className="mb-6 flex justify-between items-center">
                      <div
                        className={`p-3 rounded-xl border ${
                          activeStep === step.id
                            ? 'bg-git text-white border-git'
                            : 'bg-slate-800 text-slate-400 border-slate-700 group-hover:bg-slate-700'
                        } transition-all`}
                      >
                        {step.icon}
                      </div>
                      <span className="text-xs font-black text-slate-600">
                        NODE_0{i + 1}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-git transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 transition-colors">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Features Grid */}
            <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 border-t border-slate-700 pt-16">
              {[
                { title: 'Team Collaboration', desc: 'Built-in review systems for multi-stage approvals.' },
                { title: 'Global Sync', desc: 'Instant synchronization with remote servers globally.' },
                { title: 'Smart Logic', desc: 'Automatic conflict resolution and tree visualization.' }
              ].map((feature, i) => (
                <div key={i} className="group">
                  <div className="w-10 h-1 bg-slate-700 mb-6 group-hover:bg-git transition-all group-hover:w-full" />
                  <h3 className="text-lg font-black text-white uppercase mb-3 tracking-tight italic">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-4 sm:px-8 mt-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-3 opacity-50">
            <Github className="w-5 h-5 text-git" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              GitFlow Documentation
            </span>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-git uppercase tracking-[0.4em]">
              Made by MK — Musharraf Kazi
            </p>
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em] mt-1">
              © 2026 GITFLOW SYSTEMS
            </p>
          </div>
          <div className="flex gap-6 opacity-30">
            <FileText className="w-4 h-4 hover:text-git transition-colors cursor-pointer" />
            <Package className="w-4 h-4 hover:text-git transition-colors cursor-pointer" />
            <Settings className="w-4 h-4 hover:text-git transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
