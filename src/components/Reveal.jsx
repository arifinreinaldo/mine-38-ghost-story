import { useState } from 'react'
import { RANKS } from '../lib/ranks'
import { SceneArt } from './Icons'
import Disclaimer from './Disclaimer'

const DEFAULT_LABELS = { motive: 'Motif', means: 'Cara', opportunity: 'Kesempatan' }
const sameSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x))

export default function Reveal({ caseData, accused = [], accident = false, proof = {}, examined = [], restart, onHome }) {
  const [copied, setCopied] = useState(false)
  const { solution, suspects, evidence, reveal } = caseData

  const accidentCase = !!solution.accident
  const killers = solution.killers || (solution.killer ? [solution.killer] : [])
  const acc = Array.isArray(accused) ? accused : accused ? [accused] : []
  const nameOf = (id) => suspects.find((s) => s.id === id)?.name ?? '—'
  const labelOf = (k) => solution.proofLabels?.[k]?.label || DEFAULT_LABELS[k]

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
  const rank = RANKS[rankKey]

  const chosenLabel = accident
    ? 'sebuah kecelakaan — bukan pembunuhan'
    : acc.length
    ? acc.map(nameOf).join(', ')
    : '— (tak ada)'
  const wronglyAccused = acc.filter((id) => !killers.includes(id))

  const share = async () => {
    const url = (typeof window !== 'undefined' && window.location.origin) || ''
    const text = `Aku menuntaskan "${caseData.title}" — peringkat: ${rank.label}. Berani memecahkan kasusnya?`
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
    <section className="screen" aria-label="Pengungkapan">
      <div className="wrap pad">
        <span className="eyebrow">
          {correct ? 'Pengungkapan · Kasus terpecahkan' : 'Pengungkapan · Tuduhan salah'}
        </span>
        <div className={'verdict ' + (correct ? 'right' : 'wrong')}>
          {correct ? 'Tepat.' : 'Belum tepat.'}
        </div>

        <div className={'rank-chip ' + (correct ? 'right' : 'wrong')}>
          <span className="rank-label">{rank.label}</span>
          <span className="rank-note">{rank.note}</span>
        </div>

        <div className="solution">
          {correct ? (
            <p>
              Kesimpulan Anda: <strong>{chosenLabel}</strong> — dan Anda benar.
            </p>
          ) : (
            <>
              <p>
                Kesimpulan Anda: <strong>{chosenLabel}</strong>. Tapi kebenarannya
                berbeda.
              </p>
              {wronglyAccused.map((id) =>
                reveal.rebuttals[id] ? (
                  <p className="rebuttal" key={id}>
                    {reveal.rebuttals[id]}
                  </p>
                ) : null
              )}
              <p>Inilah yang sebenarnya terjadi.</p>
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
          <span className="label">Pembuktianmu</span>
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

        <div className="actions">
          <button className="btn" onClick={share}>
            {copied ? '✓ Tautan disalin' : 'Bagikan hasil'}
          </button>
          <button className="btn btn-ghost" onClick={restart}>
            ↺ Ulangi dari awal
          </button>
          {onHome && (
            <button className="btn btn-ghost" onClick={onHome}>
              Beranda
            </button>
          )}
        </div>

        <Disclaimer disclaimer={caseData.disclaimer} />
      </div>
    </section>
  )
}
