// Procedural eerie ambient music via the Web Audio API.
//
// No audio files: every sound is synthesized at runtime, so it is original
// work (no licensing/attribution — effectively public domain), tiny, and
// fully offline (nothing for the service worker to cache). Each story gets a
// distinct theme (see themes.js); the active story drives the theme and the
// engine crossfades when it changes.
//
// Two pieces of state — `enabled` (the user's play/pause choice) and `curKey`
// (the active theme) — are reconciled into at most one playing voice-set.
// Browser autoplay policy means setEnabled(true) must come from a user
// gesture (a click/tap, or the session's first interaction).

import { THEMES, DEFAULT_KEY } from './themes'

let ctx = null
let enabled = false
let curKey = DEFAULT_KEY
let active = null // { key, master, voices, timers }

export const supported = () =>
  typeof window !== 'undefined' && !!(window.AudioContext || window.webkitAudioContext)

export const isEnabled = () => enabled

// A faint, slowly-swelling high tone at random intervals — the unsettling part.
function schedulePing(handle, theme) {
  const wait = theme.pingMin + Math.random() * (theme.pingMax - theme.pingMin)
  const id = setTimeout(() => {
    if (active !== handle) return // theme switched / paused
    const f = theme.scale[(Math.random() * theme.scale.length) | 0]
    const osc = ctx.createOscillator()
    osc.type = theme.pingType
    osc.frequency.value = f
    const g = ctx.createGain()
    g.gain.value = 0
    osc.connect(g).connect(handle.master)
    const t = ctx.currentTime
    g.gain.linearRampToValueAtTime(0.05, t + 2.5)
    g.gain.linearRampToValueAtTime(0, t + 9)
    osc.start(t)
    osc.stop(t + 9.2)
    schedulePing(handle, theme)
  }, wait)
  handle.timers.push(id)
}

// Build and start a voice-set for a theme. Signal graph:
//   drones + pings ─▶ master(faded) ─▶ breath(LFO) ─▶ filter ─▶ out
//                                                         └▶ delay ↺ ─▶ out
function build(theme) {
  const t0 = ctx.currentTime
  const master = ctx.createGain()
  master.gain.value = 0.0001
  const breath = ctx.createGain()
  breath.gain.value = 1.0

  const filter = ctx.createBiquadFilter()
  filter.type = 'lowpass'
  filter.frequency.value = theme.cutoff
  filter.Q.value = 0.7

  const delay = ctx.createDelay(1.0)
  delay.delayTime.value = theme.delayTime
  const fb = ctx.createGain()
  fb.gain.value = theme.feedback
  const wet = ctx.createGain()
  wet.gain.value = theme.wet

  master.connect(breath)
  breath.connect(filter)
  filter.connect(ctx.destination)
  filter.connect(delay)
  delay.connect(fb)
  fb.connect(delay)
  delay.connect(wet)
  wet.connect(ctx.destination)

  const voices = []
  for (const [r, g, d, ty] of theme.stack) {
    const osc = ctx.createOscillator()
    osc.type = ty || 'sine'
    osc.frequency.value = theme.root * r
    osc.detune.value = d || 0
    const gg = ctx.createGain()
    gg.gain.value = g
    osc.connect(gg).connect(master)
    osc.start()
    voices.push(osc)
  }

  // "breathing" amplitude LFO (around the breath stage, so it won't fight the fade)
  const lfo = ctx.createOscillator()
  lfo.frequency.value = theme.breathRate
  const lg = ctx.createGain()
  lg.gain.value = theme.breathDepth
  lfo.connect(lg).connect(breath.gain)
  lfo.start()
  voices.push(lfo)

  // slow filter drift for movement
  const fl = ctx.createOscillator()
  fl.frequency.value = theme.cutoffRate
  const fg = ctx.createGain()
  fg.gain.value = theme.cutoffDepth
  fl.connect(fg).connect(filter.frequency)
  fl.start()
  voices.push(fl)

  // fade the base level in
  master.gain.setValueAtTime(0.0001, t0)
  master.gain.linearRampToValueAtTime(theme.level, t0 + 5)

  const handle = { master, voices, timers: [] }
  schedulePing(handle, theme)
  return handle
}

function teardown(h) {
  h.timers.forEach(clearTimeout)
  h.timers = []
  try {
    const t = ctx.currentTime
    h.master.gain.cancelScheduledValues(t)
    h.master.gain.setValueAtTime(h.master.gain.value, t)
    h.master.gain.linearRampToValueAtTime(0.0001, t + 1.0)
  } catch { /* ignore */ }
  setTimeout(() => {
    h.voices.forEach((n) => {
      try { n.stop() } catch { /* already stopped */ }
      try { n.disconnect() } catch { /* ignore */ }
    })
    try { h.master.disconnect() } catch { /* ignore */ }
  }, 1200)
}

// Bring the playing voice-set in line with `enabled` + `curKey`.
function reconcile() {
  if (!ctx) return
  if (enabled) {
    if (!active) {
      active = { key: curKey, ...build(THEMES[curKey]) }
    } else if (active.key !== curKey) {
      const old = active
      active = { key: curKey, ...build(THEMES[curKey]) } // crossfade: old fades as new fades in
      teardown(old)
    }
  } else if (active) {
    const old = active
    active = null
    teardown(old)
  }
}

// Play/pause. Must be called from a user gesture to actually produce sound.
export async function setEnabled(on) {
  enabled = on
  if (on) {
    if (!supported()) return
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
    try { await ctx.resume() } catch { /* resumes on a later gesture */ }
  }
  reconcile()
}

// Switch the active story's theme (no-op if unchanged). Safe to call anytime;
// only audible when enabled.
export function setTheme(key) {
  if (!THEMES[key]) key = DEFAULT_KEY
  if (key === curKey) return
  curKey = key
  reconcile()
}
