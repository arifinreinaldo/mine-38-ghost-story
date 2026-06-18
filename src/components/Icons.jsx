// Inline line-icons for evidence types + scene art.
// Stroke icons inherit color via currentColor (usually --ember).

const P = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const PATHS = {
  forensics: (
    <>
      <path {...P} d="M9 3h6M10 3v6l-4.5 8a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3" />
      <path {...P} d="M7.2 15h9.6" />
      <circle cx="10.5" cy="17.5" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  evidence: (
    <>
      <rect {...P} x="3" y="9" width="7" height="6" rx="1.4" />
      <path {...P} d="M10 10.2 14 8v8l-4-1.8M14 9h3M15.5 6.5l2-1.2M15.5 17.5l2 1.2" />
    </>
  ),
  phone: (
    <>
      <rect {...P} x="6" y="2.5" width="12" height="19" rx="2.4" />
      <path {...P} d="M10.5 18.5h3" />
      <path {...P} d="M9 7.5h6M9 10.5h4" />
    </>
  ),
  apparel: (
    <>
      <path {...P} d="M4 8c3-2.5 5-2.5 8 0s5 2.5 8 0" />
      <path {...P} d="M4 13c3-2.5 5-2.5 8 0s5 2.5 8 0" />
      <path {...P} d="M5 8v6M19 8v6" />
    </>
  ),
  recon: (
    <>
      <path {...P} d="M12 21c4-4.5 6-7.4 6-10a6 6 0 1 0-12 0c0 2.6 2 5.5 6 10Z" />
      <circle {...P} cx="12" cy="11" r="2.2" />
    </>
  ),
  social: (
    <>
      <rect {...P} x="3" y="6" width="18" height="14" rx="3" />
      <circle {...P} cx="12" cy="13" r="3.4" />
      <circle cx="17.2" cy="9.4" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  metadata: (
    <>
      <rect {...P} x="3.5" y="4" width="17" height="16" rx="2" />
      <path {...P} d="M8 4v16M16 4v16M3.5 9h4.5M3.5 15h4.5M16 9h4.5M16 15h4.5" />
    </>
  ),
  photo: (
    <>
      <rect {...P} x="3" y="5" width="18" height="14" rx="2" />
      <circle {...P} cx="8" cy="10" r="1.6" />
      <path {...P} d="m4 18 5-5 3.5 3.5L16 13l4 4" />
    </>
  ),
  // ── Case 2 additions ──
  doc: (
    <>
      <path {...P} d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path {...P} d="M14 3v4h4" />
      <path {...P} d="M8 12h8M8 15.5h8M8 18.5h5" />
    </>
  ),
  car: (
    <>
      <path {...P} d="M3 13l2.1-5.2A2 2 0 0 1 7 6.6h10a2 2 0 0 1 1.9 1.2L21 13" />
      <path {...P} d="M3 13h18v4a1 1 0 0 1-1 1h-2M3 13v4a1 1 0 0 0 1 1h2" />
      <circle {...P} cx="7" cy="18" r="1.7" />
      <circle {...P} cx="17" cy="18" r="1.7" />
    </>
  ),
  ledger: (
    <>
      <rect {...P} x="5" y="3.5" width="14" height="17" rx="1.6" />
      <path {...P} d="M9 3.5v17M12 8.5h4M12 12h4" />
    </>
  ),
  cup: (
    <>
      <path {...P} d="M7 4h10l-1.1 15.2A2 2 0 0 1 13.9 21h-3.8a2 2 0 0 1-2-1.8L7 4Z" />
      <path {...P} d="M7.4 9h9.2" />
      <path {...P} d="M14.5 5.6c1.2.5 1.2 1.7 0 2.2" />
    </>
  ),
  cctv: (
    <>
      <rect {...P} x="3" y="6" width="12" height="6" rx="2" />
      <circle {...P} cx="7" cy="9" r="1.3" />
      <path {...P} d="M15 8.4l4.2-1.4M11 12v3a2 2 0 0 1-2 2H6" />
    </>
  ),
  ticket: (
    <>
      <path {...P} d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-4Z" />
      <path {...P} strokeDasharray="2 2" d="M14 6v12" />
    </>
  ),
  key: (
    <>
      <circle {...P} cx="8" cy="8" r="4" />
      <path {...P} d="M10.8 10.8 20 20M16.5 16.5l2-2M18.5 18.5l1.6-1.6" />
    </>
  ),
}

export function EvidenceIcon({ type, className }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className={className} aria-hidden="true">
      {PATHS[type] || PATHS.evidence}
    </svg>
  )
}

// Faint head-and-shoulders silhouette behind suspect initials.
export function Silhouette() {
  return (
    <svg className="silhouette" viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="18" r="8" fill="currentColor" />
      <path d="M8 44c0-9 7.2-15 16-15s16 6 16 15Z" fill="currentColor" />
    </svg>
  )
}

// Wide crime-scene banner. variant 'mountain' (Semeru) or 'estate' (villa gala).
export function SceneArt({ className, variant = 'mountain' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 260"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sceneSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#222a3b" />
          <stop offset="60%" stopColor="#191e27" />
          <stop offset="100%" stopColor="#14171c" />
        </linearGradient>
        <radialGradient id="sceneDawn" cx="70%" cy="92%" r="58%">
          <stop offset="0%" stopColor="#e08a4d" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#c8642a" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#c8642a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sceneWarm" cx="50%" cy="100%" r="62%">
          <stop offset="0%" stopColor="#e08a4d" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#c8642a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#c8642a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="260" fill="url(#sceneSky)" />
      <rect width="800" height="260" fill={variant === 'estate' ? 'url(#sceneWarm)' : 'url(#sceneDawn)'} />
      <g fill="#e8e6df">
        <circle cx="90" cy="40" r="1.3" opacity="0.7" />
        <circle cx="240" cy="64" r="1" opacity="0.5" />
        <circle cx="380" cy="34" r="1.4" opacity="0.8" />
        <circle cx="560" cy="54" r="1" opacity="0.5" />
        <circle cx="690" cy="40" r="1.2" opacity="0.65" />
      </g>

      {variant === 'estate' ? (
        <g>
          {/* grand villa silhouette */}
          <rect x="250" y="120" width="300" height="110" fill="#10131a" />
          <path d="M236 120 L300 80 L500 80 L564 120 Z" fill="#161b23" />
          <path d="M362 80 L400 58 L438 80 Z" fill="#10131a" />
          <rect x="170" y="160" width="90" height="70" fill="#0e1116" />
          <rect x="540" y="160" width="90" height="70" fill="#0e1116" />
          {/* warm-lit windows */}
          <g fill="#e08a4d">
            <rect x="276" y="136" width="20" height="26" opacity="0.85" />
            <rect x="316" y="136" width="20" height="26" opacity="0.85" />
            <rect x="356" y="136" width="20" height="26" opacity="0.85" />
            <rect x="424" y="136" width="20" height="26" opacity="0.85" />
            <rect x="464" y="136" width="20" height="26" opacity="0.85" />
            <rect x="504" y="136" width="20" height="26" opacity="0.3" />
            <rect x="190" y="178" width="18" height="22" opacity="0.7" />
            <rect x="222" y="178" width="18" height="22" opacity="0.7" />
            <rect x="560" y="178" width="18" height="22" opacity="0.7" />
            <rect x="592" y="178" width="18" height="22" opacity="0.7" />
          </g>
          {/* lit grand entrance */}
          <path d="M384 230 L384 188 a16 16 0 0 1 32 0 L416 230 Z" fill="#e08a4d" opacity="0.92" />
          <line x1="400" y1="190" x2="400" y2="230" stroke="#c8642a" strokeWidth="1.5" />
        </g>
      ) : variant === 'coast' ? (
        <g>
          {/* stormy sea + lighthouse */}
          <rect x="0" y="186" width="800" height="74" fill="#10131a" />
          <path d="M0 196 q120 -9 240 0 t240 0 t240 0" fill="none" stroke="#2a3340" strokeWidth="2" opacity="0.7" />
          <path d="M0 214 q140 -8 280 0 t280 0 t280 0" fill="none" stroke="#222c3b" strokeWidth="2" opacity="0.7" />
          <path d="M520 204 Q576 158 632 204 Z" fill="#0e1116" />
          <path d="M577 84 L196 40 L214 140 Z" fill="#e08a4d" opacity="0.14" />
          <path d="M552 204 L560 92 L594 92 L600 204 Z" fill="#161b23" />
          <path d="M560 120 L594 120 M558 150 L596 150" stroke="#10131a" strokeWidth="3" />
          <path d="M554 92 L577 70 L600 92 Z" fill="#10131a" />
          <rect x="560" y="74" width="34" height="20" rx="2" fill="#0e1116" />
          <circle cx="577" cy="84" r="6" fill="#e08a4d" />
          <g transform="translate(577 198)">
            <path d="M0 0 v-20" stroke="#9a3030" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M0 -20 L13 -16 L0 -12 Z" fill="#9a3030" />
          </g>
        </g>
      ) : (
        <g>
          <path d="M-10 260 L150 150 L300 210 L470 130 L600 195 L740 120 L810 175 L810 260 Z" fill="#232c3b" opacity="0.9" />
          <path d="M-10 260 L120 200 L300 175 L500 150 L600 70 L660 130 L720 95 L810 200 L810 260 Z" fill="#10131a" />
          <path d="M600 70 L588 88 L612 88 Z" fill="#e8e6df" opacity="0.85" />
          <path d="M600 66 q14 -13 7 -28 q13 9 4 26" fill="none" stroke="#e08a4d" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <g transform="translate(330 196)">
            <path d="M0 0 v-26" stroke="#9a3030" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M0 -26 L16 -21 L0 -16 Z" fill="#9a3030" />
            <circle cx="0" cy="2" r="2.4" fill="#9a3030" />
          </g>
        </g>
      )}
    </svg>
  )
}
