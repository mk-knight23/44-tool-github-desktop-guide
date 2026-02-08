import { CopyButton } from './CopyButton';

interface CodeBlockProps {
  lines: string[];
  language?: string;
}

export function CodeBlock({ lines, language = 'bash' }: CodeBlockProps) {
  const codeText = lines.join('\n');

  return (
    <div className="bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
      <div className="flex justify-between items-center px-4 py-2 border-b border-slate-800 bg-slate-900/50">
        <span className="text-xs text-slate-500 font-mono">{language}</span>
        <CopyButton text={codeText} />
      </div>
      <div className="p-4 font-mono text-sm space-y-1 overflow-x-auto">
        {lines.map((line, i) => (
          <div
            key={i}
            className={line.startsWith('#') ? 'text-git' : 'text-slate-300'}
          >
            {line || ' '}
          </div>
        ))}
      </div>
    </div>
  );
}
