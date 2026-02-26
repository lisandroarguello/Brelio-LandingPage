import React from 'react';

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M20 20H50C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80H20V20Z" 
      className="fill-emerald-500" 
      fillOpacity="0.2"
    />
    <path 
      d="M20 20H50C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80H20V20Z" 
      stroke="currentColor" 
      strokeWidth="8"
    />
    <path 
      d="M20 50H50" 
      stroke="currentColor" 
      strokeWidth="8"
    />
    <circle cx="50" cy="35" r="5" fill="currentColor" />
  </svg>
);
