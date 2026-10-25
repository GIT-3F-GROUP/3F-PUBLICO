import React from 'react';
import { Kicker } from './Kicker.jsx';

export function SectionHeader({ num, children, tone = 'default', className = '', ...rest }) {
  return (
    <div className={['section-header', className].filter(Boolean).join(' ')} {...rest}>
      {num && <span className="eyebrow-num">§ {num}</span>}
      <Kicker tone={tone}>{children}</Kicker>
    </div>
  );
}
