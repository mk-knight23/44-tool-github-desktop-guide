import { useState, useEffect } from 'react';
import { Search, ChevronRight, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SECTIONS = [
  { title: 'Introduction', id: 'intro' },
  { title: 'Installation', id: 'install' },
  { title: 'Quick Start', id: 'quickstart' },
  { title: 'Branching', id: 'branching' },
  { title: 'Committing', id: 'committing' },
  { title: 'Pull Requests', id: 'pullrequests' },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = SECTIONS.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
    setQuery('');
    setSelectedIndex(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filtered.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          handleSelect(filtered[selectedIndex].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg mx-4 bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 p-4 border-b border-slate-800">
          <Search className="w-5 h-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none text-sm"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {filtered.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleSelect(section.id)}
              className={`w-full px-4 py-3 text-left transition-colors flex items-center justify-between ${
                index === selectedIndex
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              <span>{section.title}</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="px-4 py-8 text-center text-slate-500">
              No results found for "{query}"
            </div>
          )}
        </div>
        <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-between">
          <span>Press Enter to select</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
