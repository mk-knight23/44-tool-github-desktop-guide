import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyButton } from './CopyButton';

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function SyntaxHighlighterBlock({
  code,
  language = 'bash',
  showLineNumbers = true,
}: SyntaxHighlighterProps) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('theme');
      setIsDark(saved ? saved === 'dark' : true);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="rounded-lg overflow-hidden border border-slate-800 dark:border-slate-800 border-slate-200 my-4">
      <div className="flex justify-between items-center px-4 py-2 border-b border-slate-800 dark:border-slate-800 border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 bg-slate-100">
        <span className="text-xs text-slate-500 dark:text-slate-500 text-slate-600 font-mono uppercase">
          {language}
        </span>
        <CopyButton text={code} />
      </div>
      <SyntaxHighlighter
        language={language}
        style={isDark ? vscDarkPlus : vs}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 0.5rem 0.5rem',
          fontSize: '0.875rem',
        }}
        lineNumberStyle={{
          color: isDark ? '#64748b' : '#94a3b8',
          fontSize: '0.75rem',
          paddingRight: '1rem',
          minWidth: '2.5rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

// Backward compatible CodeBlock wrapper
interface CodeBlockProps {
  lines: string[];
  language?: string;
}

export function EnhancedCodeBlock({ lines, language = 'bash' }: CodeBlockProps) {
  const code = lines.join('\n');

  // For simple cases, use basic highlighting
  return (
    <SyntaxHighlighterBlock
      code={code}
      language={language}
      showLineNumbers={true}
    />
  );
}
