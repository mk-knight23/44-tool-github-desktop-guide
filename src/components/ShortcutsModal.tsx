import { Keyboard, X } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KEYBOARD_SHORTCUTS = [
  { key: '/', description: 'Open search' },
  { key: '?', description: 'Show keyboard shortcuts' },
  { key: 'Esc', description: 'Close modal' },
  { key: '↑ ↓', description: 'Navigate results' },
  { key: 'Enter', description: 'Select item' },
];

export function ShortcutsModal({ isOpen, onClose }: ShortcutsModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-git" />
            Keyboard Shortcuts
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-2">
            {KEYBOARD_SHORTCUTS.map(({ key, description }) => (
              <div
                key={key}
                className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0"
              >
                <span className="text-slate-400 text-sm">{description}</span>
                <kbd className="px-3 py-1 text-sm bg-slate-800 text-white rounded border border-slate-700 font-mono">
                  {key}
                </kbd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
