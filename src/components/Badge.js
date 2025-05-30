// Badge.js
import React from 'react';

const Badge = ({ children, pill, bg }) => {
  return (
    <span className={`badge bg-${bg} ${pill ? 'rounded-pill' : ''}`}>
      {children}
    </span>
  );
};

export default Badge;
