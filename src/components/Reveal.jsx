import { useState } from 'react'
import { RANKS, TREASURE_BADGE } from '../lib/ranks'
import { useLang, useUI } from '../i18n/LangProvider'
import { localize } from '../i18n/L'
import { SceneArt } from './Icons'
import Disclaimer from './Disclaimer'

const sameSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x))

export default function Reveal({ caseData, accused = [], accident = false, proof = {}, examined = [], treasureGuess = '', solvedLocks = [], restart, go, onHome }) {
  const ui = useUI()
  const { lang } = useLang()
  const [copied, setCopied] = useState(false)
  const { solution, suspects, evidence, reveal } = caseData

  const accidentCase = !!solution.accident
  const killers = solution.killers || (solution.killer ? [solution.killer] : [])
  const acc = Array.isArray(accused) ? accused : accused ? [accused] : []
  const nameOf = (id) => suspects.find((s) => s.id === id)?.name ?? '—'
  const labelOf = (k) => solution.proofLabels?.[k]?.label || ui.proofDefault[k]

  const correct = accidentCase ? accident && acc.length === 0 : !accident && sameSet(acc, killers)
  const slots = ['motive', 'means', 'opportunity']
  const slotOK = (k) => solution[k]?.includes(proof[k])
  const proofScore = slots.filter(slotOK).length
  const twistId = evidence.find((e) => e.twist)?.id
  const foundTwist = twistId ? examined.includes(twistId) : true

  let rankKey = 'magang'
  if (correct) {
    rankKey = proofScore === 3 && foundTwist ? 'utama' : proofScore >= 2 ? 'inspektur' : 'muda'
  }
  const rank = localize(RANKS[rankKey], lang)
  const badge = localize(TREASURE_BADGE, lang)

  const chosenLabel = accident
    ? ui.reveal.chosenAccident
    : acc.length
    ? acc.map(nameOf).join(', ')
    : ui.reveal.chosenNone
  const wronglyAccused = acc.filter((id) => !killers.includes(id))

  const treasure = caseData.treasure
  const correctPeak = treasure?.mountains.find((m) => m.correct)
  const peakCorrect = !!treasure && treasureGuess === correctPeak?.id
  const huntDone = !!treasure && solvedLocks.length >= treasure.hunt.locks.length

  const share = async () => {
    const url = (typeof window !== 'undefined' && window.location.origin) || ''
    const text = ui.reveal.shareText(caseData.title, rank.label)
    try {
      if (navigator.share) await navigator.share({ title: caseData.title, text, url })
      else {
        await navigator.clipboard.writeText(`${text} ${url}`)
        setCopied(true)
        setTimeout(() => setCopied(false), 2200)
      }
    } catch {
      /* dismissed */
    }
  }

  return (
    <section className="screen" aria-label={ui.reveal.aria}>
      <div className="wrap pad">
        <span className="eyebrow">
          {correct ? ui.reveal.eyebrowRight : ui.reveal.eyebrowWrong}
        </span>
        <div className={'verdict ' + (correct ? 'right' : 'wrong')}>
          {correct ? ui.reveal.verdictRight : ui.reveal.verdictWrong}
        </div>

        <div className={'rank-chip ' + (correct ? 'right' : 'wrong')}>
          <span className="rank-label">{rank.label}</span>
          <span className="rank-note">{rank.note}</span>
        </div>

        <div className="solution">
          {correct ? (
            <p>
              {ui.reveal.conclLead}<strong>{chosenLabel}</strong>{ui.reveal.conclRightTail}
            </p>
          ) : (
            <>
              <p>
                {ui.reveal.conclLead}<strong>{chosenLabel}</strong>{ui.reveal.conclWrongTail}
              </p>
              {wronglyAccused.map((id) =>
                reveal.rebuttals[id] ? (
                  <p className="rebuttal" key={id}>
                    {reveal.rebuttals[id]}
                  </p>
                ) : null
              )}
              <p>{ui.reveal.whatHappened}</p>
            </>
          )}

          {reveal.sections.map((sec, i) => (
            <div key={i}>
              {sec.h && <h3>{sec.h}</h3>}
              {sec.p.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="proof-recap">
          <span className="label">{ui.reveal.proofRecap}</span>
          <ul>
            {slots.map((k) => {
              const ev = evidence.find((e) => e.id === proof[k])
              const ok = slotOK(k)
              return (
                <li key={k} className={ok ? 'ok' : 'no'}>
                  <span className="mono">{labelOf(k)}</span>
                  <span>{ev ? ev.title : '—'}</span>
                  <span className="mark">{ok ? '✓' : '✗'}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <SceneArt className="scene-band closing" variant={caseData.scene} />

        {treasure && (
          <div className={'treasure-panel' + (peakCorrect ? ' unlocked' : ' sealed')}>
            <span className="eyebrow">{ui.reveal.treasureEyebrow(treasure.robber.name)}</span>
            {peakCorrect ? (
              <>
                <p>
                  {ui.reveal.peakRightLead}<strong>{correctPeak.name}</strong> — {correctPeak.tag}.
                </p>
                <p className="hindsight">{treasure.hindsight}</p>
                {huntDone ? (
                  <>
                    <div className="reward-badge inline">
                      <span className="rb-coin" aria-hidden="true">★</span>
                      <div>
                        <span className="rank-label">{badge.label}</span>
                        <span className="rank-note">{ui.reveal.badgeFoundNote}</span>
                      </div>
                    </div>
                    <button className="btn btn-ghost" onClick={() => go && go('treasure')}>
                      {ui.reveal.viewHuntAgain}
                    </button>
                  </>
                ) : (
                  <button className="btn btn-blood" onClick={() => go && go('treasure')}>
                    {ui.reveal.openHunt}
                  </button>
                )}
              </>
            ) : (
              <p className="mist">{ui.reveal.sealed}</p>
            )}
          </div>
        )}

        <div className="actions">
          <button className="btn" onClick={share}>
            {copied ? ui.reveal.shareCopied : ui.reveal.share}
          </button>
          <button className="btn btn-ghost" onClick={restart}>
            {ui.reveal.restart}
          </button>
          {onHome && (
            <button className="btn btn-ghost" onClick={onHome}>
              {ui.common.home}
            </button>
          )}
        </div>

        <Disclaimer disclaimer={caseData.disclaimer} />
      </div>
    </section>
  )
}
