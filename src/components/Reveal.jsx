import { useState } from 'react'
import { RANKS } from '../lib/ranks'
import { SceneArt } from './Icons'

const SLOTS = [
  { key: 'motive', label: 'Motif' },
  { key: 'means', label: 'Cara' },
  { key: 'opportunity', label: 'Kesempatan' },
]

export default function Reveal({ caseData, accused, proof = {}, examined = [], restart, onHome }) {
  const [copied, setCopied] = useState(false)
  const { solution, suspects, evidence, reveal } = caseData

  const correct = accused === solution.killer
  const slotOK = (k) => solution[k]?.includes(proof[k])
  const proofScore = SLOTS.filter((s) => slotOK(s.key)).length
  const twistId = evidence.find((e) => e.twist)?.id
  const foundTwist = twistId ? examined.includes(twistId) : true

  let rankKey = 'magang'
  if (correct) {
    rankKey = proofScore === 3 && foundTwist ? 'utama' : proofScore >= 2 ? 'inspektur' : 'muda'
  }
  const rank = RANKS[rankKey]
  const chosen = suspects.find((s) => s.id === accused)?.name ?? '—'

  const share = async () => {
    const url = (typeof window !== 'undefined' && window.location.origin) || ''
    const text = `Aku menuntaskan "${caseData.title}" — peringkat: ${rank.label}. Berani memecahkan kasusnya?`
    try {
      if (navigator.share) {
        await navigator.share({ title: caseData.title, text, url })
      } else {
        await navigator.clipboard.writeText(`${text} ${url}`)
        setCopied(true)
        setTimeout(() => setCopied(false), 2200)
      }
    } catch {
      /* user dismissed share sheet — no-op */
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
              Anda menuduh <strong>{chosen}</strong> — dan Anda benar.
            </p>
          ) : (
            <>
              <p>
                Anda menuduh <strong>{chosen}</strong>. Tapi bukti mengarah ke orang
                lain.
              </p>
              {reveal.rebuttals[accused] && (
                <p className="rebuttal">{reveal.rebuttals[accused]}</p>
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
            {SLOTS.map((s) => {
              const ev = evidence.find((e) => e.id === proof[s.key])
              const ok = slotOK(s.key)
              return (
                <li key={s.key} className={ok ? 'ok' : 'no'}>
                  <span className="mono">{s.label}</span>
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
      </div>
    </section>
  )
}
