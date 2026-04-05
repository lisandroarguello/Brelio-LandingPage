export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="5"
  >
    {/* Rounded square frame */}
    <rect x="15" y="15" width="70" height="70" rx="5" ry="5" />
    {/* Full circle inscribed, slightly offset right */}
    <circle cx="55" cy="50" r="30" />
    {/* Horizontal midline */}
    <line x1="15" y1="50" x2="85" y2="50" />
    {/* Vertical line in top-left quadrant */}
    <line x1="30" y1="15" x2="30" y2="85" />
  </svg>
);
