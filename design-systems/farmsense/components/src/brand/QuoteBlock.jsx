import React from 'react';

export function QuoteBlock({ children, author, role, tone = 'light', mark = true, className = '', ...rest }) {
  const dark = tone === 'dark';
  return (
    <blockquote
      className={className}
      style={{ position: 'relative', margin: 0, color: dark ? '#fff' : 'var(--verde-sombra)' }}
      {...rest}
    >
      {mark && (
        <span className="serif" style={{ position: 'absolute', top: -18, right: 8, fontSize: 120, lineHeight: 1, color: dark ? 'var(--ciano-neon)' : 'var(--verde-sombra)', opacity: 0.15 }}>“</span>
      )}
      <p className="serif t-100" style={{ fontStyle: 'italic', fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.18, margin: 0, maxWidth: '28ch', position: 'relative' }}>{children}</p>
      {(author || role) && (
        <footer className="row-tight" style={{ gap: 8, marginTop: 'var(--s-4)' }}>
          {author && <span className="h4 t-100">{author}</span>}
          {role && <span className="body-sm t-55">· {role}</span>}
        </footer>
      )}
    </blockquote>
  );
}
