// Procedural eerie ambient drone via the Web Audio API. No audio files: it
// works offline (good for the PWA), never loops audibly, and stays tiny.
// Browser autoplay policy means start() must be triggered by a user gesture
// (a click/tap, or the first interaction of the session).
//
// Signal graph:
//   drones + pings ─▶ master(gain, faded) ─▶ breath(gain, LFO) ─▶ filter ─▶ out
//                                                                     └▶ delay ↺ ─▶ out
// Fading `master` to ~0 on stop() silences everything regardless of the LFOs.

let ctx = null
let master = null // base level we fade in/out
let voices = []   // long-lived oscillators (drones + LFOs) to stop on teardown
let timers = []   // pending setTimeout ids for the sparse "pings"
let running = false

export const supported = () =>
  typeof window !== 'undefined' && !!(window.AudioContext || window.webkitAudioContext)

export const isRunning = () => running

function drone(freq, gain, detune = 0, type = 'sine') {
  const osc = ctx.createOscillator()
  osc.type = type
  osc.frequency.value = freq
  osc.detune.value = detune
  const g = ctx.createGain()
  g.gain.value = gain
  osc.connect(g).connect(master)
  osc.start()
  voices.push(osc)
}

// A faint, slowly-swelling high tone at random intervals — the unsettling part.
function schedulePing() {
  const wait = 9000 + Math.random() * 15000
  const id = setTimeout(() => {
    if (!running) return
    const scale = [392.0, 466.16, 523.25, 622.25, 698.46] // G4 A#4 C5 D#5 F5 — diminished, uneasy
    const f = scale[(Math.random() * scale.length) | 0]
    const osc = ctx.createOscillator()
    osc.type = 'triangle'
    osc.frequency.value = f
    const g = ctx.createGain()
    g.gain.value = 0
    osc.connect(g).connect(master)
    const t = ctx.currentTime
    g.gain.linearRampToValueAtTime(0.05, t + 2.5)
    g.gain.linearRampToValueAtTime(0, t + 9)
    osc.start(t)
    osc.stop(t + 9.2)
    schedulePing()
  }, wait)
  timers.push(id)
}

export async function start() {
  if (!supported() || running) return
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
  try { await ctx.resume() } catch { /* will resume on a later gesture */ }
  running = true

  master = ctx.createGain()
  master.gain.value = 0.0001

  const breath = ctx.createGain()
  breath.gain.value = 1.0

  // dark lowpass keeps everything muffled and tense
  const filter = ctx.createBiquadFilter()
  filter.type = 'lowpass'
  filter.frequency.value = 600
  filter.Q.value = 0.7

  // hollow feedback delay for a sense of empty space
  const delay = ctx.createDelay(1.0)
  delay.delayTime.value = 0.5
  const fb = ctx.createGain()
  fb.gain.value = 0.33
  const wet = ctx.createGain()
  wet.gain.value = 0.22

  master.connect(breath)
  breath.connect(filter)
  filter.connect(ctx.destination)
  filter.connect(delay)
  delay.connect(fb)
  fb.connect(delay)
  delay.connect(wet)
  wet.connect(ctx.destination)

  // low detuned drone — the dread
  drone(55, 0.5)                    // A1
  drone(55, 0.42, 7)               // beats against the first
  drone(82.41, 0.16)               // E2, faint fifth
  drone(110, 0.1, -5, 'triangle')  // A2 shimmer

  // "breathing" amplitude LFO around the breath stage (won't break the fade)
  const lfo = ctx.createOscillator()
  lfo.frequency.value = 0.07
  const lfoGain = ctx.createGain()
  lfoGain.gain.value = 0.22
  lfo.connect(lfoGain).connect(breath.gain)
  lfo.start()
  voices.push(lfo)

  // slow filter drift for movement
  const fLfo = ctx.createOscillator()
  fLfo.frequency.value = 0.045
  const fLfoGain = ctx.createGain()
  fLfoGain.gain.value = 220
  fLfo.connect(fLfoGain).connect(filter.frequency)
  fLfo.start()
  voices.push(fLfo)

  // fade the base level in
  const t = ctx.currentTime
  master.gain.cancelScheduledValues(t)
  master.gain.setValueAtTime(0.0001, t)
  master.gain.linearRampToValueAtTime(0.11, t + 5)

  schedulePing()
}

export function stop() {
  if (!running) return
  running = false
  timers.forEach(clearTimeout)
  timers = []
  const oldMaster = master
  const oldVoices = voices
  voices = []
  master = null
  try {
    const t = ctx.currentTime
    oldMaster.gain.cancelScheduledValues(t)
    oldMaster.gain.setValueAtTime(oldMaster.gain.value, t)
    oldMaster.gain.linearRampToValueAtTime(0.0001, t + 1.0)
  } catch { /* ignore */ }
  // let the fade finish, then stop oscillators so they can be GC'd
  setTimeout(() => {
    oldVoices.forEach((n) => {
      try { n.stop() } catch { /* already stopped */ }
      try { n.disconnect() } catch { /* ignore */ }
    })
    try { oldMaster.disconnect() } catch { /* ignore */ }
  }, 1200)
}
