import { motion, AnimatePresence } from 'framer-motion';
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
  Shield
} from 'lucide-react';
import { useState } from 'react';

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

  return (
    <div className="min-h-screen blueprint-bg">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-git/20 rounded-lg border border-git/30">
              <Github className="w-6 h-6 text-git" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white uppercase tracking-tighter">
                Git<span className="text-git">Flow</span>
              </h1>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
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

          <button className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-black text-xs uppercase tracking-widest rounded-lg border border-slate-600 transition-all flex items-center gap-2">
            <Book className="w-4 h-4" />
            View Docs
          </button>
        </div>
      </header>

      <div className="doc-layout">
        {/* Sidebar */}
        <aside className="doc-sidebar">
          <nav className="space-y-6">
            {DOCS_NAV.map((section) => (
              <div key={section.group} className="doc-nav-group">
                <h3 className="doc-nav-group-title">{section.group}</h3>
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setActiveSection(link.href)}
                      className={`doc-nav-link ${activeSection === link.href ? 'active' : ''}`}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="pt-20 pb-20 max-w-5xl">
          <div className="doc-content">
            {/* Breadcrumb */}
            <div className="breadcrumb">
              <a href="#" className="breadcrumb-link">Docs</a>
              <ChevronRight className="w-4 h-4" />
              <a href="#" className="breadcrumb-link">Workflow</a>
              <ChevronRight className="w-4 h-4" />
              <span>Getting Started</span>
            </div>

            {/* Hero */}
            <section id="intro" className="mb-12 scroll-mt-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-git/10 border border-git/20 rounded-full text-[10px] uppercase font-bold text-git mb-6">
                <Zap className="w-3 h-3" />
                Version 2.2.0
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-[0.9] mb-8">
                Mastering the <br />
                <span className="text-git">Distributed</span> Pipeline
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl font-medium leading-relaxed">
                A comprehensive deep-dive into the GitHub Desktop workflow. Follow the nodes
                to understand how modern teams ship code with confidence.
              </p>
            </section>

            {/* Installation Section */}
            <section id="install" className="mb-16 scroll-mt-24">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                Installation
              </h3>
              <div className="doc-card bg-slate-900 border-slate-700">
                <p className="text-slate-400 mb-4">
                  Download and install GitHub Desktop for your operating system. The application provides a visual interface for Git operations.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <a href="https://desktop.github.com/download/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                    <span className="text-git font-bold">macOS</span>
                    <p className="text-sm text-slate-500 mt-1">Download .dmg</p>
                  </a>
                  <a href="https://desktop.github.com/download/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                    <span className="text-git font-bold">Windows</span>
                    <p className="text-sm text-slate-500 mt-1">Download .exe</p>
                  </a>
                  <a href="https://desktop.github.com/download/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                    <span className="text-git font-bold">Linux</span>
                    <p className="text-sm text-slate-500 mt-1">AppImage available</p>
                  </a>
                </div>
              </div>
            </section>

            {/* Quick Start Section */}
            <section id="quickstart" className="mb-16 scroll-mt-24">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                Quick Start
              </h3>
              <div className="space-y-4">
                <div className="doc-card bg-slate-900 border-slate-700">
                  <h4 className="text-lg font-bold text-white mb-2">1. Sign in to GitHub</h4>
                  <p className="text-slate-400 text-sm">Open Preferences → Accounts and sign in with your GitHub account.</p>
                </div>
                <div className="doc-card bg-slate-900 border-slate-700">
                  <h4 className="text-lg font-bold text-white mb-2">2. Clone or Create Repository</h4>
                  <p className="text-slate-400 text-sm">Use File → Clone Repository or File → New Repository to get started.</p>
                </div>
                <div className="doc-card bg-slate-900 border-slate-700">
                  <h4 className="text-lg font-bold text-white mb-2">3. Make Your First Commit</h4>
                  <p className="text-slate-400 text-sm">Make changes, write a summary, and click "Commit to main".</p>
                </div>
              </div>
            </section>

            {/* Branching Section */}
            <section id="branching" className="mb-16 scroll-mt-24">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                Branching
              </h3>
              <div className="doc-card bg-slate-900 border-slate-700">
                <p className="text-slate-400 mb-4">
                  Branches allow you to work on features or fixes without affecting the main codebase.
                </p>
                <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm">
                  <div className="text-git"># Create a new branch</div>
                  <div className="text-slate-300">git checkout -b feature/my-feature</div>
                  <div className="text-git mt-2"># Switch between branches</div>
                  <div className="text-slate-300">git checkout main</div>
                </div>
              </div>
            </section>

            {/* Committing Section */}
            <section id="committing" className="mb-16 scroll-mt-24">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                Committing
              </h3>
              <div className="doc-card bg-slate-900 border-slate-700">
                <p className="text-slate-400 mb-4">
                  Commits are snapshots of your changes. Write clear, descriptive commit messages.
                </p>
                <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm">
                  <div className="text-git"># Stage changes</div>
                  <div className="text-slate-300">git add filename.txt</div>
                  <div className="text-git mt-2"># Commit with message</div>
                  <div className="text-slate-300">git commit -m "Add new feature"</div>
                </div>
              </div>
            </section>

            {/* Pull Requests Section */}
            <section id="pullrequests" className="mb-16 scroll-mt-24">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                Pull Requests
              </h3>
              <div className="doc-card bg-slate-900 border-slate-700">
                <p className="text-slate-400 mb-4">
                  Pull requests let you tell others about changes you've pushed to a branch.
                </p>
                <ul className="text-slate-400 list-disc list-inside space-y-2">
                  <li>Click "Create Pull Request" in GitHub Desktop</li>
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
              <div className="schematic-grid">
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
                        NODE_0{WORKFLOW_STEPS.indexOf(step) + 1}
                      </span>
                    </div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-git transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 transition-colors">
                      {step.desc}
                    </p>

                    {/* Arrow connector */}
                    {i < WORKFLOW_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight
                          className={`w-4 h-4 ${
                            activeStep === step.id ? 'text-git animate-pulse' : 'text-slate-700'
                          }`}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Technical Briefing */}
            <section className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2 node-card bg-slate-900/40 p-12 border-slate-800/50">
                <div className="flex items-center gap-3 mb-10">
                  <Terminal className="w-5 h-5 text-git" />
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                    Technical Briefing
                  </h3>
                </div>

                <div className="space-y-10">
                  <div className="flex gap-8 items-start">
                    <div className="w-1 bg-git h-24 flex-shrink-0" />
                    <div>
                      <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-tight italic">
                        Logical Separation
                      </h4>
                      <p className="text-slate-400 leading-relaxed font-medium">
                        The "Feature Branch" node (NODE_02) is critical for parallel development.
                        It allows engineers to isolate experimental changes without polluting the
                        production line (main).
                      </p>
                    </div>
                  </div>

                  {/* Code Block */}
                  <div className="bg-slate-950/50 rounded-xl p-8 font-mono text-sm border border-slate-800">
                    <div className="flex justify-between items-center mb-6 text-slate-600">
                      <span>bash --git-core</span>
                      <GitBranch className="w-4 h-4 group-hover:text-git transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-git">$ git checkout -b feature/github-guide</div>
                      <div className="text-slate-400">
                        Switched to a new branch 'feature/github-guide'
                      </div>
                      <div className="text-git mt-4">$ git add .</div>
                      <div className="text-git">$ git commit -m "feat: add workflow guide"</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="node-card border-slate-700 flex flex-col justify-center text-center py-12 group hover:bg-slate-800">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-git/20 transition-all">
                    <GitPullRequest className="w-6 h-6 text-slate-700 group-hover:text-git transition-all" />
                  </div>
                  <h4 className="text-lg font-black text-white uppercase mb-2">
                    Safe Merge
                  </h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Automation Ready
                  </p>
                  <div className="mt-8">
                    <span className="doc-badge green">Verified</span>
                  </div>
                </div>

                <div className="node-card border-slate-700 p-8 flex flex-col justify-center text-center">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase mb-2">
                    Protocol Secured
                  </h4>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2 }}
                      className="bg-emerald-500 h-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <section className="grid md:grid-cols-3 gap-12 border-t border-slate-700 pt-16">
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
      <footer className="border-t border-slate-700 py-12 px-8 mt-20 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
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
