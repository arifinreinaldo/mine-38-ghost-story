import { useState } from 'react'
import { suspects, SOLUTION, RANKS, rebuttals, evidence } from '../data'
import { SceneArt } from './Icons'

const SLOTS = [
  { key: 'motive', label: 'Motif' },
  { key: 'means', label: 'Cara' },
  { key: 'opportunity', label: 'Kesempatan' },
]

export default function Reveal({ accused, proof = {}, examined = [], restart }) {
  const [copied, setCopied] = useState(false)

  const correct = accused === SOLUTION.killer
  const slotOK = (k) => SOLUTION[k]?.includes(proof[k])
  const proofScore = SLOTS.filter((s) => slotOK(s.key)).length
  const foundTwist = examined.includes('foto')

  let rankKey = 'magang'
  if (correct) {
    rankKey = proofScore === 3 && foundTwist ? 'utama' : proofScore >= 2 ? 'inspektur' : 'muda'
  }
  const rank = RANKS[rankKey]
  const chosen = suspects.find((s) => s.id === accused)?.name ?? '—'

  const share = async () => {
    const url = (typeof window !== 'undefined' && window.location.origin) || ''
    const text = `Aku menuntaskan "Maut di Mahameru" — peringkat: ${rank.label}. Berani memecahkan kasusnya?`
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Maut di Mahameru', text, url })
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
              {rebuttals[accused] && <p className="rebuttal">{rebuttals[accused]}</p>}
              <p>Inilah yang sebenarnya terjadi.</p>
            </>
          )}

          <h3>Pelakunya: Dimas Pratama</h3>
          <p>Arya tidak tergelincir. Ia dibunuh oleh partner usahanya sendiri.</p>
          <p>
            Pesan terakhir Arya membongkar motifnya: Arya menemukan selisih dana
            sponsor, hendak membubarkan Rimbawan Gear, dan mengancam melapor ke
            polisi. Bagi Dimas, itu berarti kehilangan segalanya sekaligus
            terancam pidana.
          </p>
          <p>
            Malam itu Dimas yang menyeduh dan membagikan kopi summit di Kalimati
            — kesempatan menyelipkan diazepam ke termos Arya. Pak Bambang tak
            ikut minum, dan Dimas mengakui sendiri bahwa ia yang membuat kopi.
            Dimas juga satu-satunya yang punya akses ke stok baterai internal
            perusahaan, yang dipakainya menukar baterai headlamp Arya dengan
            yang sudah habis.
          </p>
          <p>
            Hasilnya: di lereng pasir curam, dalam gelap total, dengan tubuh
            yang mengantuk berat, Arya kehilangan keseimbangan — persis seperti
            "kecelakaan" yang diharapkan Dimas. Dan ketika itu terjadi, hanya
            Dimas yang berada di belakangnya.
          </p>

          <h3>Jebakan: buff Sari</h3>
          <p>
            Buff Sari yang ditemukan di lereng atas sempat membuatnya tampak
            paling bersalah — seolah alibinya bohong. Padahal foto pukul 02.50
            menunjukkan <em>Arya</em> yang meminjam dan memakainya. Petunjuk yang
            paling memberatkan justru jadi yang membebaskan. Pembunuh sungguhan
            tak pernah meninggalkan jejak semencolok itu.
          </p>

          <h3>Mengapa bukan yang lain</h3>
          <p>
            <strong>Sari</strong> sudah turun ke Kelik saat kejadian — IG
            Story-nya pukul 04.12 membuktikannya. <strong>Reza</strong> tidak
            pernah ikut summit; timelapse-nya terekam dari camp sepanjang malam.{' '}
            <strong>Pak Bambang</strong> berada di depan dan justru menjadi
            orang yang memberi alarm — dan ia tak punya akses ke stok baterai
            perusahaan maupun kendali atas kopi summit.
          </p>
          <p>
            Tiga unsur hanya bertemu pada satu orang: motif (pesan ancaman),
            cara (kopi dan baterai), dan kesempatan (posisi di belakang Arya).
            Itu Dimas.
          </p>
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

        <SceneArt className="scene-band closing" />

        <div className="actions">
          <button className="btn" onClick={share}>
            {copied ? '✓ Tautan disalin' : 'Bagikan hasil'}
          </button>
          <button className="btn btn-ghost" onClick={restart}>
            ↺ Ulangi dari awal
          </button>
        </div>
      </div>
    </section>
  )
}
