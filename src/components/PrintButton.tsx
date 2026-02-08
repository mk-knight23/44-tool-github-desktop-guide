import { Printer } from 'lucide-react';

export function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="hidden sm:flex px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-black text-xs uppercase tracking-widest rounded-lg border border-slate-600 transition-all items-center gap-2"
      title="Print documentation or save as PDF"
      aria-label="Print documentation"
    >
      <Printer className="w-4 h-4" />
      Print / PDF
    </button>
  );
}
