// Inline line-icons for evidence types + small scene art.
// All stroke icons inherit color via currentColor (usually --ember).

const P = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const PATHS = {
  // forensic flask
  forensics: (
    <>
      <path {...P} d="M9 3h6M10 3v6l-4.5 8a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3" />
      <path {...P} d="M7.2 15h9.6" />
      <circle cx="10.5" cy="17.5" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  // flashlight / headlamp
  evidence: (
    <>
      <rect {...P} x="3" y="9" width="7" height="6" rx="1.4" />
      <path {...P} d="M10 10.2 14 8v8l-4-1.8M14 9h3M15.5 6.5l2-1.2M15.5 17.5l2 1.2" />
    </>
  ),
  // phone with message
  phone: (
    <>
      <rect {...P} x="6" y="2.5" width="12" height="19" rx="2.4" />
      <path {...P} d="M10.5 18.5h3" />
      <path {...P} d="M9 7.5h6M9 10.5h4" />
    </>
  ),
  // folded cloth / buff
  apparel: (
    <>
      <path {...P} d="M4 8c3-2.5 5-2.5 8 0s5 2.5 8 0" />
      <path {...P} d="M4 13c3-2.5 5-2.5 8 0s5 2.5 8 0" />
      <path {...P} d="M5 8v6M19 8v6" />
    </>
  ),
  // map pin on contour (reconstruction)
  recon: (
    <>
      <path {...P} d="M12 21c4-4.5 6-7.4 6-10a6 6 0 1 0-12 0c0 2.6 2 5.5 6 10Z" />
      <circle {...P} cx="12" cy="11" r="2.2" />
    </>
  ),
  // camera (social / IG story)
  social: (
    <>
      <rect {...P} x="3" y="6" width="18" height="14" rx="3" />
      <circle {...P} cx="12" cy="13" r="3.4" />
      <circle cx="17.2" cy="9.4" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  // film frame (timelapse metadata)
  metadata: (
    <>
      <rect {...P} x="3.5" y="4" width="17" height="16" rx="2" />
      <path {...P} d="M8 4v16M16 4v16M3.5 9h4.5M3.5 15h4.5M16 9h4.5M16 15h4.5" />
    </>
  ),
  // photo
  photo: (
    <>
      <rect {...P} x="3" y="5" width="18" height="14" rx="2" />
      <circle {...P} cx="8" cy="10" r="1.6" />
      <path {...P} d="m4 18 5-5 3.5 3.5L16 13l4 4" />
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

// Wide pre-dawn crime-scene banner (Semeru ridge + marker where the body lay).
export function SceneArt({ className }) {
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
        <radialGradient id="sceneDawn" cx="70%" cy="92%" r="55%">
          <stop offset="0%" stopColor="#e08a4d" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#c8642a" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#c8642a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="260" fill="url(#sceneSky)" />
      <rect width="800" height="260" fill="url(#sceneDawn)" />
      <g fill="#e8e6df">
        <circle cx="90" cy="40" r="1.3" opacity="0.7" />
        <circle cx="220" cy="70" r="1" opacity="0.5" />
        <circle cx="360" cy="34" r="1.4" opacity="0.8" />
        <circle cx="520" cy="58" r="1" opacity="0.5" />
        <circle cx="660" cy="40" r="1.2" opacity="0.65" />
      </g>
      <path d="M-10 260 L150 150 L300 210 L470 130 L600 195 L740 120 L810 175 L810 260 Z" fill="#232c3b" opacity="0.9" />
      <path d="M-10 260 L120 200 L300 175 L500 150 L600 70 L660 130 L720 95 L810 200 L810 260 Z" fill="#10131a" />
      <path d="M600 70 L588 88 L612 88 Z" fill="#e8e6df" opacity="0.85" />
      <path d="M600 66 q14 -13 7 -28 q13 9 4 26" fill="none" stroke="#e08a4d" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      {/* evidence marker where the body was found */}
      <g transform="translate(330 196)">
        <path d="M0 0 v-26" stroke="#9a3030" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M0 -26 L16 -21 L0 -16 Z" fill="#9a3030" />
        <circle cx="0" cy="2" r="2.4" fill="#9a3030" />
      </g>
    </svg>
  )
}
