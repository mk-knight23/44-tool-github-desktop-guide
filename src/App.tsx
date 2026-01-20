import { motion } from 'framer-motion';
import { GitBranch, GitCommit, GitPullRequest, GitMerge, Github, ArrowRight, Zap, Shield, Globe, Terminal, Layers, Plus, Share2, Info } from 'lucide-react';
import { useState } from 'react';

const WORKFLOW_STEPS = [
    { id: 1, title: "Initialize", icon: <Plus className="w-5 h-5" />, desc: "Create a new local repository or clone from GitHub." },
    { id: 2, title: "Feature Branch", icon: <GitBranch className="w-5 h-5" />, desc: "Create a sandbox for your changes to keep main stable." },
    { id: 3, title: "Commit", icon: <GitCommit className="w-5 h-5" />, desc: "Package your changes with a descriptive message." },
    { id: 4, title: "Pull Request", icon: <GitPullRequest className="w-5 h-5" />, desc: "Submit your changes for review and collaboration." }
];

export default function App() {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <div className="min-h-screen blueprint-bg">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 h-20 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 z-50 px-8">
                <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-git/20 rounded-lg border border-git/30">
                            <Github className="w-6 h-6 text-git" />
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-white uppercase tracking-tighter">Git<span className="text-git">Flow</span></h1>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Workflow Schematic Explorer</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-10">
                        {['Guides', 'Tutorials', 'CLI Ref', 'Community'].map((item) => (
                            <a key={item} href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">{item}</a>
                        ))}
                    </div>

                    <button className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-black text-xs uppercase tracking-widest rounded-lg border border-slate-600 transition-all flex items-center gap-2">
                        <Share2 className="w-4 h-4" /> Share Guide
                    </button>
                </div>
            </nav>

            <main className="pt-32 pb-20 max-w-7xl mx-auto px-8">
                {/* Header Section */}
                <section className="mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-git/10 border border-git/20 rounded-full text-[10px] uppercase font-bold text-git mb-6">
                        <Zap className="w-3 h-3" /> Version 2.4.0 Interactive
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-[0.9] mb-8">
                        MASTERING THE <br /> <span className="text-git">DISTRIBUTED</span> PIPELINE.
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl font-medium leading-relaxed">
                        A schematic deep-dive into the GitHub Desktop workflow. Follow the nodes to understand how modern teams ship code with confidence.
                    </p>
                </section>

                {/* Schematic Grid */}
                <section className="grid lg:grid-cols-4 gap-8 mb-20 relative">
                    {WORKFLOW_STEPS.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setActiveStep(step.id)}
                            className={`node-card cursor-pointer group ${activeStep === step.id ? 'ring-2 ring-git border-git shadow-[0_0_30px_rgba(240,80,50,0.15)] bg-slate-800' : ''}`}
                        >
                            <div className="mb-6 flex justify-between items-center">
                                <div className={`p-3 rounded-xl border ${activeStep === step.id ? 'bg-git text-white border-git' : 'bg-slate-800 text-slate-400 border-slate-700 group-hover:bg-slate-700'} transition-all`}>
                                    {step.icon}
                                </div>
                                <span className="text-xs font-black text-slate-600">NODE_0{step.id}</span>
                            </div>
                            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-git transition-colors">{step.title}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 transition-colors">{step.desc}</p>

                            {i < WORKFLOW_STEPS.length - 1 && (
                                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                                    <ArrowRight className={`w-4 h-4 ${activeStep === step.id ? 'text-git animate-pulse' : 'text-slate-700'}`} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </section>

                {/* Detailed Explanation */}
                <section className="grid lg:grid-cols-3 gap-8 mb-20">
                    <div className="lg:col-span-2 node-card bg-slate-900/40 p-12 border-slate-800/50">
                        <div className="flex items-center gap-3 mb-10">
                            <Terminal className="w-5 h-5 text-git" />
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Technical Briefing</h3>
                        </div>

                        <div className="space-y-10">
                            <div className="flex gap-8 items-start">
                                <div className="w-1 bg-git h-24" />
                                <div>
                                    <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-tight italic">Logical Separation</h4>
                                    <p className="text-slate-400 leading-relaxed font-medium">
                                        The "Feature Branch" node (NODE_02) is critical for parallel development. It allows engineers to isolate experimental changes without polluting the production line (main). By decoupling features, teams reduce merge conflicts by 40%.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-950/50 rounded-xl p-8 font-mono text-sm border border-slate-800 group">
                                <div className="flex justify-between items-center mb-6 text-slate-600">
                                    <span>bash --git-core</span>
                                    <GitBranch className="w-4 h-4 group-hover:text-git transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <div className="text-git">$ git checkout -b feature/interactive-guide</div>
                                    <div className="text-slate-400">Switched to a new branch 'feature/interactive-guide'</div>
                                    <div className="text-git">$ git add .</div>
                                    <div className="text-git">$ git commit -m "feat: implement high-fidelity schematic"</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="node-card border-slate-700 flex flex-col justify-center text-center py-12 group hover:bg-slate-800">
                            <GitMerge className="w-12 h-12 text-slate-700 group-hover:text-git transition-all mx-auto mb-6" />
                            <h4 className="text-lg font-black text-white uppercase mb-2">Safe Merge</h4>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Automation Ready</p>
                            <div className="mt-8 px-6 py-2 bg-slate-800 border border-slate-700 inline-block mx-auto rounded-full text-[10px] font-black uppercase text-git tracking-widest">
                                Verified
                            </div>
                        </div>

                        <div className="node-card border-slate-700 p-8 flex flex-col justify-center text-center">
                            <Shield className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
                            <h4 className="text-sm font-black text-white uppercase mb-2">Protocol Secured</h4>
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

                {/* Feature Highlights */}
                <section className="grid md:grid-cols-3 gap-12 border-t border-slate-700 pt-20 overflow-hidden">
                    {[
                        { title: "Team Collaboration", desc: "Built-in review systems for multi-stage approvals." },
                        { title: "Global Sync", desc: "Instant synchronization with remote servers globally." },
                        { title: "Smart Logic", desc: "Automatic conflict resolution and tree visualization." }
                    ].map((f, i) => (
                        <div key={i} className="group">
                            <div className="w-10 h-1 bg-slate-700 mb-6 group-hover:bg-git transition-all group-hover:w-full" />
                            <h3 className="text-lg font-black text-white uppercase mb-3 tracking-tight italic">{f.title}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 transition-colors">{f.desc}</p>
                        </div>
                    ))}
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-700 py-12 px-8 mt-20 bg-slate-900/50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3 opacity-50">
                        <Github className="w-5 h-5 text-git" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white tracking-widest underline decoration-git underline-offset-4">GitFlow Repository</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em]">© 2024 MK_GITFLOW_SYSTEMS • 28/30 DISPATCHED</p>
                    <div className="flex gap-6 opacity-30 group">
                        <Layers className="w-4 h-4 hover:text-git transition-colors cursor-pointer" />
                        <Globe className="w-4 h-4 hover:text-git transition-colors cursor-pointer" />
                        <Info className="w-4 h-4 hover:text-git transition-colors cursor-pointer" />
                    </div>
                </div>
            </footer>
        </div>
    );
}
