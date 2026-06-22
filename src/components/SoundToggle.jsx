import { useEffect, useState } from 'react'
import { setEnabled, supported } from '../audio/ambient'
import { useUI } from '../i18n/LangProvider'

// Eerie background music control. Default ON, but the browser blocks audio
// until a user gesture — so when the saved preference is "on" we begin at the
// first interaction of the session. The toggle persists the choice.
const KEY = 'mdm.sound'
const prefOn = () => {
  try { return localStorage.getItem(KEY) !== 'off' } catch { return false }
}

export default function SoundToggle() {
  const ui = useUI()
  const [on, setOn] = useState(prefOn)

  // Auto-start at the first gesture if the preference is "on".
  useEffect(() => {
    if (!supported() || !prefOn()) return
    const kick = () => {
      cleanup()
      if (prefOn()) setEnabled(true) // re-check: user may have toggled off meanwhile
    }
    const cleanup = () => {
      window.removeEventListener('pointerdown', kick)
      window.removeEventListener('keydown', kick)
      window.removeEventListener('touchstart', kick)
    }
    window.addEventListener('pointerdown', kick, { once: true })
    window.addEventListener('keydown', kick, { once: true })
    window.addEventListener('touchstart', kick, { once: true })
    return cleanup
  }, [])

  if (!supported()) return null

  const toggle = () => {
    const next = !on
    setOn(next)
    try { localStorage.setItem(KEY, next ? 'on' : 'off') } catch { /* ignore */ }
    setEnabled(next) // this click is the user gesture
  }

  const label = on ? ui.sound.off : ui.sound.on
  return (
    <button
      className={'sound-toggle' + (on ? ' on' : '')}
      onClick={toggle}
      aria-pressed={on}
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true">{on ? '🔊' : '🔇'}</span>
    </button>
  )
}
