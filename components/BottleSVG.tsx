type Props = { className?: string; label?: string };

export default function BottleSVG({ className = '', label = 'BIOTERP' }: Props) {
  return (
    <svg
      viewBox="0 0 220 460"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Product bottle"
    >
      <defs>
        <linearGradient id="bottleGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f4126" />
          <stop offset="55%" stopColor="#0c1d12" />
          <stop offset="100%" stopColor="#0a1810" />
        </linearGradient>
        <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbf8f1" />
          <stop offset="100%" stopColor="#ecdfba" />
        </linearGradient>
        <radialGradient id="glassShine" cx="0.3" cy="0.2" r="0.7">
          <stop offset="0%" stopColor="#629c69" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#629c69" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="78" y="10" width="64" height="60" rx="8" fill="url(#cap)" />
      <rect x="78" y="10" width="64" height="6" rx="3" fill="#3a3a3a" />
      <rect x="90" y="68" width="40" height="22" fill="#0a1810" />
      <path
        d="M58 110 Q110 80 162 110 L162 420 Q162 440 142 440 L78 440 Q58 440 58 420 Z"
        fill="url(#bottleGlass)"
      />
      <path
        d="M58 110 Q110 80 162 110 L162 420 Q162 440 142 440 L78 440 Q58 440 58 420 Z"
        fill="url(#glassShine)"
      />
      <path
        d="M72 130 Q70 250 80 410"
        stroke="#92be97"
        strokeOpacity="0.45"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      <rect x="68" y="170" width="84" height="200" rx="6" fill="url(#label)" />
      <rect x="68" y="170" width="84" height="200" rx="6" fill="none" stroke="#b88b1f" strokeOpacity="0.4" />
      <text
        x="110"
        y="220"
        textAnchor="middle"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="22"
        fontWeight="700"
        fill="#173220"
        letterSpacing="2"
      >
        {label}
      </text>
      <line x1="80" y1="232" x2="140" y2="232" stroke="#173220" strokeOpacity="0.3" />
      <text
        x="110"
        y="252"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="8"
        fill="#173220"
        letterSpacing="3"
      >
        FULL SPECTRUM
      </text>
      <text
        x="110"
        y="310"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="28"
        fontWeight="800"
        fill="#173220"
      >
        6000
      </text>
      <text
        x="110"
        y="328"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fontWeight="600"
        fill="#173220"
        letterSpacing="2"
      >
        MG CBD
      </text>
      <text
        x="110"
        y="358"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="9"
        fill="#173220"
        opacity="0.7"
      >
        30ml · 1 fl oz
      </text>
    </svg>
  );
}
