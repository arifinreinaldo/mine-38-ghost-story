import { useState } from 'react'
import { evidence, suspects, timeline } from '../data'

const TABS = [
  { id: 'korban', label: 'Korban' },
  { id: 'bukti', label: 'Bukti' },
  { id: 'saksi', label: 'Saksi & Tersangka' },
  { id: 'linimasa', label: 'Linimasa' },
]

function EvidenceItem({ item, seen, onExamine }) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    const next = !open
    setOpen(next)
    if (next) onExamine(item.id)
  }
  return (
    <button
      className={'ev' + (seen ? ' seen' : '')}
      aria-expanded={open}
      onClick={toggle}
    >
      <div className="ev-top">
        <span className="ev-tag">{item.tag}</span>
        <span className="chev">{open ? '–' : '+'}</span>
      </div>
      <h3>
        {item.title}
        <span className="examined-dot" />
      </h3>
      <p className="ev-sum">{item.summary}</p>
      {open && (
        <div className="ev-detail">
          <p>{item.detail}</p>
        </div>
      )}
    </button>
  )
}

function SuspectCard({ s, asked, askQuestion, suspected, toggleSuspicion }) {
  return (
    <div className="card suspect">
      <div className="head">
        <div className="avatar">{s.init}</div>
        <div>
          <div className="name">
            {s.name}
            {suspected && <span className="flag">Dicurigai</span>}
          </div>
          <div className="role">
            {s.age} tahun · {s.role}
          </div>
        </div>
      </div>

      <p className="stmt">{s.statement}</p>

      <dl>
        <dt>Motif</dt>
        <dd>{s.motive}</dd>
        <dt>Alibi</dt>
        <dd>{s.alibi}</dd>
      </dl>

      <div className="interrogation">
        <span className="label">Interogasi</span>
        {s.interrogation.map((qa, i) => {
          const isAsked = asked.includes(i)
          return (
            <div key={i}>
              <button
                className="q-btn"
                aria-expanded={isAsked}
                onClick={() => askQuestion(s.id, i)}
              >
                <span>{qa.q}</span>
                <span className="chev">{isAsked ? '–' : '+'}</span>
              </button>
              {isAsked && <p className="q-ans">{qa.a}</p>}
            </div>
          )
        })}
      </div>

      <button
        className={'suspicion-toggle' + (suspected ? ' on' : '')}
        onClick={() => toggleSuspicion(s.id)}
      >
        {suspected ? '✓ Ditandai mencurigakan' : 'Tandai mencurigakan'}
      </button>
    </div>
  )
}

export default function Investigation({
  examined,
  examineEvidence,
  interrogated,
  askQuestion,
  suspicions,
  toggleSuspicion,
  canAccuse,
  go,
}) {
  const [tab, setTab] = useState('korban')

  const interrogatedCount = suspects.filter(
    (s) => (interrogated[s.id] || []).length > 0
  ).length

  return (
    <section className="screen" aria-label="Investigasi">
      <div className="wrap pad">
        <div className="seg" role="tablist" aria-label="Bagian berkas">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'korban' && (
          <div className="tabpanel">
            <span className="eyebrow">Korban</span>
            <div className="dossier-row">
              <div className="avatar">AW</div>
              <div>
                <h3 style={{ fontSize: '1.4rem' }}>Arya Wibowo</h3>
                <span className="mist mono" style={{ fontSize: '.82rem' }}>
                  34 tahun · pendaki & content creator
                </span>
              </div>
            </div>
            <p>
              Punya 490 ribu pengikut dan reputasi sebagai pendaki teknis yang
              teliti — orang yang memeriksa peralatannya dua kali sebelum
              berangkat. Bersama Dimas Pratama ia mendirikan merek perlengkapan
              gunung <em>Rimbawan Gear</em>.
            </p>
            <p style={{ marginTop: '1em' }}>
              Ditemukan pukul 04.40 di lereng pasir di atas Kelik, headlamp
              dalam keadaan mati. Tidak ada luka selain akibat jatuh. Tim SAR
              mencatat: "tergelincir di medan pasir gelap".
            </p>
          </div>
        )}

        {tab === 'bukti' && (
          <div className="tabpanel">
            <span className="eyebrow">Bukti — ketuk untuk memeriksa</span>
            <div style={{ marginTop: '1.4em' }}>
              {evidence.map((e) => (
                <EvidenceItem
                  key={e.id}
                  item={e}
                  seen={examined.includes(e.id)}
                  onExamine={examineEvidence}
                />
              ))}
            </div>
          </div>
        )}

        {tab === 'saksi' && (
          <div className="tabpanel">
            <span className="eyebrow">Saksi & Tersangka</span>
            <div style={{ marginTop: '1.4em' }}>
              {suspects.map((s) => (
                <SuspectCard
                  key={s.id}
                  s={s}
                  asked={interrogated[s.id] || []}
                  askQuestion={askQuestion}
                  suspected={!!suspicions[s.id]}
                  toggleSuspicion={toggleSuspicion}
                />
              ))}
            </div>
          </div>
        )}

        {tab === 'linimasa' && (
          <div className="tabpanel">
            <span className="eyebrow">Linimasa — malam summit attack</span>
            <ul className="tl" style={{ marginTop: '1.6em' }}>
              {timeline.map((e, i) => (
                <li key={i} className={e.key ? 'key' : ''}>
                  <time>{e.t}</time>
                  <p>{e.x}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <hr className="rule" />
        <p className="progress">
          Bukti diperiksa: {examined.length}/{evidence.length} · Saksi
          diinterogasi: {interrogatedCount}/{suspects.length}
        </p>
        <div className="actions">
          <button
            className="btn btn-blood"
            disabled={!canAccuse}
            onClick={() => go('accuse')}
            style={{
              opacity: canAccuse ? 1 : 0.45,
              cursor: canAccuse ? 'pointer' : 'not-allowed',
            }}
          >
            Ajukan Tuduhan →
          </button>
        </div>
        {!canAccuse && (
          <p className="gate-msg">
            Periksa semua bukti dan interogasi setiap saksi sebelum menuduh.
          </p>
        )}
      </div>
    </section>
  )
}
