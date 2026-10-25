import React from 'react';

export function Table({ columns = [], rows = [], className = '' }) {
  return (
    <div style={{ border: '1px solid var(--rule-soft)', borderRadius: 12, overflow: 'hidden' }}>
      <table className={`bry-table ${className}`}>
        <thead><tr>{columns.map(c => <th key={c.key || c}>{c.label || c}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{columns.map(c => <td key={(c.key || c) + i}>{r[c.key || c]}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
