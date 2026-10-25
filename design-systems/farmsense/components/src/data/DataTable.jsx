import React from 'react';

export function DataTable({ columns = [], rows = [], tone = 'light', className = '', ...rest }) {
  const dark = tone === 'dark';
  const line = dark ? 'rgba(255,255,255,.14)' : 'rgba(0,65,65,.18)';
  const soft = dark ? 'rgba(255,255,255,.08)' : 'rgba(0,65,65,.08)';
  return (
    <table className={className} style={{ width: '100%', borderCollapse: 'collapse', fontVariantNumeric: 'tabular-nums', color: dark ? '#fff' : 'var(--verde-sombra)' }} {...rest}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key} style={{ textAlign: c.align || 'left', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 500, opacity: 0.55, padding: '6px 0', borderBottom: '1px solid ' + line }}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="fs-hv-tint fs-t-fast">
            {columns.map((c) => (
              <td key={c.key} style={{ textAlign: c.align || 'left', padding: '10px 0', borderBottom: i === rows.length - 1 ? 0 : '1px solid ' + soft, color: r[c.key + '_tone'] === 'positivo' ? 'var(--verde-anil)' : 'inherit', fontWeight: c.strong ? 700 : 400 }}>{r[c.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
