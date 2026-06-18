import { SceneArt } from './Icons'

export default function Briefing({ caseData, go }) {
  const { briefing } = caseData
  return (
    <section className="screen" aria-label="Pengarahan">
      <div className="wrap pad">
        <button className="link-back" onClick={() => go('home')}>
          ← Beranda
        </button>
        <SceneArt className="scene-band" variant={caseData.scene} />
        <div className="section-head">
          <span className="eyebrow">Pengarahan · {caseData.code}</span>
          <h2>Apa yang kita tahu</h2>
        </div>

        {briefing.paras.map((p, i) => (
          <p key={i} style={i ? { marginTop: '1em' } : undefined}>
            {p}
          </p>
        ))}

        <div className="card" style={{ marginTop: '2.4em' }}>
          <span className="label">{briefing.taskTitle}</span>
          <p style={{ marginTop: '.6em', color: '#D8DCE1' }}>{briefing.task}</p>
        </div>

        <div className="actions">
          <button className="btn" onClick={() => go('investigation')}>
            Mulai Investigasi →
          </button>
        </div>

        <p className="fiction-note">
          Cerita fiksi. Tokoh, nama, dan kejadian sepenuhnya rekaan.
        </p>
      </div>
    </section>
  )
}
