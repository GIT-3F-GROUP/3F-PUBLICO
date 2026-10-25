import React from 'react';

export function Pagination({ page = 1, total = 1, onChange, className = '' }) {
  const pages = [];
  if (total <= 6) { for (let i = 1; i <= total; i++) pages.push(i); }
  else {
    pages.push(1, 2, 3);
    if (page > 3 && page < total) pages.push(page);
    pages.push('…', total);
  }
  return (
    <div className={`bry-pagination ${className}`}>
      <button type="button" className="bry-pagination__pg bry-pagination__pg--nav" aria-label="Anterior"
        onClick={() => onChange && onChange(Math.max(1, page - 1))}>‹</button>
      {pages.map((p, i) => (
        <button type="button" key={String(p) + i} disabled={p === '…'}
          className={`bry-pagination__pg${p === page ? ' is-active' : ''}`}
          onClick={() => typeof p === 'number' && onChange && onChange(p)}>{p}</button>
      ))}
      <button type="button" className="bry-pagination__pg bry-pagination__pg--nav" aria-label="Próxima"
        onClick={() => onChange && onChange(Math.min(total, page + 1))}>›</button>
    </div>
  );
}
