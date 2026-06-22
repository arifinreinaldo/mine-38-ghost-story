// Per-story ambient themes. Each case gets a distinct root pitch, drone
// "color" (interval stack), eerie note scale, brightness (lowpass), and
// sense of space (delay) so every story sounds different. Consumed by the
// engine in ambient.js.

// Eerie note sets for the sparse high "pings".
const SCALES = {
  dim:   [392.0, 466.16, 523.25, 622.25, 698.46],   // diminished — uneasy
  phryg: [277.18, 311.13, 349.23, 415.3, 466.16],   // phrygian — dark
  whole: [293.66, 329.63, 369.99, 415.3, 466.16],   // whole-tone — dreamlike
  minor: [329.63, 392.0, 440.0, 523.25, 587.33],    // natural minor
  clstr: [440.0, 466.16, 493.88, 523.25, 554.37],   // chromatic cluster — tense
}

// Drone partial stacks: [ratio, gain, detune cents, waveform].
const STACK = {
  fifth:   [[1, 0.5, 0, 'sine'], [1, 0.42, 7, 'sine'], [1.5, 0.16, 0, 'sine'], [2, 0.1, -5, 'triangle']],
  minor3:  [[1, 0.5, 0, 'sine'], [1, 0.42, 6, 'sine'], [1.2, 0.18, 0, 'sine'], [2, 0.09, -4, 'triangle']],
  tritone: [[1, 0.5, 0, 'sine'], [1, 0.4, 8, 'sine'], [1.4142, 0.14, 0, 'sine'], [2, 0.08, -6, 'triangle']],
  octave:  [[1, 0.55, 0, 'sine'], [1, 0.45, 9, 'sine'], [0.5, 0.2, 0, 'sine'], [2, 0.1, -5, 'triangle']],
}

const DEFAULTS = {
  root: 55,
  stack: STACK.fifth,
  cutoff: 620, cutoffRate: 0.045, cutoffDepth: 220,
  breathRate: 0.07, breathDepth: 0.22,
  delayTime: 0.5, feedback: 0.33, wet: 0.22,
  scale: SCALES.dim, pingType: 'triangle', pingMin: 9000, pingMax: 24000,
  level: 0.11,
}
const T = (o) => ({ ...DEFAULTS, ...o })

export const DEFAULT_KEY = 'default'

export const THEMES = {
  // lobby / cover / menus
  default:   T({ root: 55, stack: STACK.fifth, cutoff: 620, scale: SCALES.dim }),

  // one per case — audibly distinct
  mahameru:  T({ root: 55,    stack: STACK.fifth,   cutoff: 660, scale: SCALES.dim,   delayTime: 0.6,  breathRate: 0.07, pingType: 'sine' }),     // cold summit dawn
  kencana:   T({ root: 49,    stack: STACK.minor3,  cutoff: 720, scale: SCALES.minor, delayTime: 0.42, breathRate: 0.06 }),                       // opulent rot
  mutiara:   T({ root: 61.74, stack: STACK.octave,  cutoff: 780, scale: SCALES.whole, delayTime: 0.66, breathRate: 0.05, pingType: 'sine' }),     // tidal, dreamlike
  garut:     T({ root: 51.91, stack: STACK.tritone, cutoff: 600, scale: SCALES.clstr, delayTime: 0.38, breathRate: 0.08 }),                       // colonial dread
  anggrek:   T({ root: 58.27, stack: STACK.minor3,  cutoff: 700, scale: SCALES.phryg, delayTime: 0.55, breathRate: 0.065 }),                      // hothouse hush
  tjandi:    T({ root: 46.25, stack: STACK.fifth,   cutoff: 560, scale: SCALES.whole, delayTime: 0.78, breathRate: 0.05, pingType: 'sine' }),     // ancient temple
  upacara:   T({ root: 65.41, stack: STACK.tritone, cutoff: 820, scale: SCALES.clstr, delayTime: 0.3,  breathRate: 0.09, pingMin: 6000, pingMax: 16000 }), // frantic ritual
  sumur:     T({ root: 43.65, stack: STACK.octave,  cutoff: 520, scale: SCALES.phryg, delayTime: 0.62, breathRate: 0.045, pingType: 'sine', level: 0.1 }), // deep well
  toraja:    T({ root: 41.2,  stack: STACK.fifth,   cutoff: 480, scale: SCALES.minor, delayTime: 0.85, breathRate: 0.04, pingType: 'sine', level: 0.1 }),  // funeral depths
  banten:    T({ root: 73.42, stack: STACK.tritone, cutoff: 640, scale: SCALES.clstr, delayTime: 0.45, breathRate: 0.07 }),                       // colonial fort tension
  macankawi: T({ root: 56.25, stack: STACK.minor3,  cutoff: 700, scale: SCALES.dim,   delayTime: 0.58, breathRate: 0.06 }),                       // treasure mystery
  mei98:     T({ root: 38.89, stack: STACK.octave,  cutoff: 460, scale: SCALES.phryg, delayTime: 0.92, breathRate: 0.038, pingType: 'sine', level: 0.1 }), // mournful remembrance
}
