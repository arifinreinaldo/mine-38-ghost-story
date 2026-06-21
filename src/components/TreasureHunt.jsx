import { useState } from 'react'
import { solveLock, mapsUrl } from '../lib/geo'
import { TREASURE_BADGE } from '../lib/ranks'
import { useLang, useUI } from '../i18n/LangProvider'
import { localize } from '../i18n/L'
import { SceneArt } from './Icons'

// Hidden bonus stage, reached only after the player guesses the treasure's
// mountain correctly on the Reveal screen. A chain of locks: decode a cipher,
// find a waypoint, then assemble real coordinates from "legend" numbers.
export default function TreasureHunt({ caseData, solvedLocks, setSolvedLocks, go, onHome }) {
  const ui = useUI()
  const { lang } = useLang()
  const badge = localize(TREASURE_BADGE, lang)
  const t = caseData.treasure
  const hunt = t.hunt
  const [inputs, setInputs] = useState({})
  const [err, setErr] = useState({})

  const activeIndex = hunt.locks.findIndex((l) => !solvedLocks.includes(l.id))
  const allSolved = activeIndex === -1

  const setVal = (id, v) => setInputs((p) => ({ ...p, [id]: v }))

  const attempt = (lock) => {
    const val = (inputs[lock.id] || '').trim()
    if (!val) return
    if (solveLock(val, lock)) {
      setErr((e) => ({ ...e, [lock.id]: '' }))
      setSolvedLocks([...solvedLocks, lock.id])
    } else {
      setErr((e) => ({ ...e, [lock.id]: ui.treasure.wrong }))
    }
  }

  const openMaps = (lock) => {
    const val = (inputs[lock.id] || '').trim()
    window.open(mapsUrl(val || (lock.target ? `${lock.target.lat},${lock.target.lng}` : '')), '_blank', 'noopener')
  }

  return (
    <section className="screen" aria-label={ui.treasure.aria}>
      <div className="wrap pad">
        <span className="eyebrow">{ui.treasure.eyebrow(t.robber.name)}</span>
        <h2 className="hunt-title">{hunt.intro ? ui.treasure.mapTitle : ui.treasure.huntTitle}</h2>
        <p className="mist" style={{ marginTop: '.4em' }}>{hunt.intro}</p>
        {hunt.mapsHint && <p className="hunt-tip">{hunt.mapsHint}</p>}

        <div className="legend-card">
          <span className="label">{t.legendTitle || ui.treasure.legendDefault}</span>
          {t.legendNote && <p className="mist legend-note">{t.legendNote}</p>}
          <ul className="legend-list">
            {(t.legend || []).map((l, i) => (
              <li key={i}>
                <span className="mono">{l.n}</span>
                <span>{l.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="locks">
          {hunt.locks.map((lock, i) => {
            const done = solvedLocks.includes(lock.id)
            const active = i === activeIndex
            const locked = i > activeIndex
            return (
              <div
                key={lock.id}
                className={'lock' + (done ? ' solved' : '') + (active ? ' active' : '') + (locked ? ' is-locked' : '')}
              >
                <div className="lock-head">
                  <span className="lock-kind">{lock.kind}</span>
                  <span className="lock-state" aria-hidden="true">{done ? '✓' : locked ? '🔒' : '•'}</span>
                </div>
                <h3>{lock.title}</h3>

                {locked && <p className="mist">{ui.treasure.lockedPrev}</p>}

                {(active || done) && <p className="lock-prompt">{lock.prompt}</p>}
                {(active || done) && lock.cipher && (
                  <p className="lock-cipher" aria-label="sandi">{lock.cipher}</p>
                )}

                {active && (
                  <div className="lock-input">
                    <input
                      type="text"
                      value={inputs[lock.id] || ''}
                      onChange={(e) => setVal(lock.id, e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && attempt(lock)}
                      placeholder={lock.target ? ui.treasure.placeholderCoord : ui.treasure.placeholderAnswer}
                      aria-label={lock.title}
                      autoCapitalize="none"
                      spellCheck="false"
                    />
                    <div className="lock-actions">
                      {lock.target && (
                        <button className="btn btn-ghost" type="button" onClick={() => openMaps(lock)}>
                          {ui.treasure.maps}
                        </button>
                      )}
                      <button className="btn btn-blood" type="button" onClick={() => attempt(lock)}>
                        {ui.treasure.unlock}
                      </button>
                    </div>
                    {err[lock.id] && <p className="gate-msg">{err[lock.id]}</p>}
                  </div>
                )}

                {done && <p className="lock-reveal">{lock.reveal}</p>}
              </div>
            )
          })}
        </div>

        {allSolved && (
          <div className="reward">
            <SceneArt className="scene-band closing" variant={caseData.scene} />
            <span className="eyebrow">{ui.treasure.found}</span>
            <div className="reward-badge">
              <span className="rb-coin" aria-hidden="true">★</span>
              <div>
                <span className="rank-label">{badge.label}</span>
                <span className="rank-note">{badge.note}</span>
              </div>
            </div>
            <h2>{hunt.reward.title}</h2>
            <p>{hunt.reward.text}</p>
          </div>
        )}

        <div className="actions">
          <button className="btn btn-ghost" onClick={() => go('reveal')}>
            {ui.treasure.backReveal}
          </button>
          {onHome && (
            <button className="btn btn-ghost" onClick={onHome}>
              {ui.common.home}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
