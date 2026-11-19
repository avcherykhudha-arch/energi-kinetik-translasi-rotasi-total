import React from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

function renderInlineSegment(segment: string, keyPrefix: string): React.ReactNode[] {
  // Split on inline math $...$ (non-greedy)
  const parts = segment.split(/(\$[^$\n]+?\$)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
      const latex = part.slice(1, -1);
      try {
        const html = katex.renderToString(latex, {
          displayMode: false,
          throwOnError: false,
          strict: false,
        });
        return (
          <span
            key={`${keyPrefix}-m-${idx}`}
            className="inline-block align-baseline"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        return <span key={`${keyPrefix}-m-${idx}`}>{latex}</span>;
      }
    }

    // Parse **bold** within plain text segments
    const boldParts = part.split(/(\*\*[^*]+?\*\*)/g);
    return (
      <React.Fragment key={`${keyPrefix}-t-${idx}`}>
        {boldParts.map((bp, bIdx) => {
          if (bp.startsWith('**') && bp.endsWith('**') && bp.length >= 4) {
            return (
              <strong key={`${keyPrefix}-b-${idx}-${bIdx}`} className="font-semibold text-slate-900">
                {bp.slice(2, -2)}
              </strong>
            );
          }
          return <React.Fragment key={`${keyPrefix}-p-${idx}-${bIdx}`}>{bp}</React.Fragment>;
        })}
      </React.Fragment>
    );
  });
}

export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  // Split display math $$...$$ first
  const blocks = text.split(/(\$\$[\s\S]+?\$\$)/g);

  return (
    <div className={`leading-relaxed ${className}`}>
      {blocks.map((block, bIdx) => {
        if (block.startsWith('$$') && block.endsWith('$$') && block.length >= 4) {
          const latex = block.slice(2, -2).trim();
          try {
            const html = katex.renderToString(latex, {
              displayMode: true,
              throwOnError: false,
              strict: false,
            });
            return (
              <div
                key={`disp-${bIdx}`}
                className="my-2.5 overflow-x-auto rounded-lg bg-teal-50/50 px-3 py-2 text-center"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return (
              <pre key={`disp-${bIdx}`} className="my-2 overflow-x-auto text-sm">
                {latex}
              </pre>
            );
          }
        }

        // Split lines on \n to preserve textbook step breaks cleanly
        const lines = block.split('\n');
        return (
          <React.Fragment key={`blk-${bIdx}`}>
            {lines.map((line, lIdx) => {
              const trimmed = line.trim();
              if (!trimmed) {
                return lIdx > 0 && lIdx < lines.length - 1 ? (
                  <div key={`br-${bIdx}-${lIdx}`} className="h-2" />
                ) : null;
              }
              return (
                <span key={`ln-${bIdx}-${lIdx}`} className={lines.length > 1 ? 'block mb-1 last:mb-0' : 'inline'}>
                  {renderInlineSegment(line, `${bIdx}-${lIdx}`)}
                </span>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};
