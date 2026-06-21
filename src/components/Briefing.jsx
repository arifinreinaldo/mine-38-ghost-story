import { SceneArt } from './Icons'
import { useUI } from '../i18n/LangProvider'

export default function Briefing({ caseData, go }) {
  const { briefing } = caseData
  const ui = useUI()
  return (
    <section className="screen" aria-label={ui.briefing.aria}>
      <div className="wrap pad">
        <button className="link-back" onClick={() => go('home')}>
          {ui.common.backHome}
        </button>
        <SceneArt className="scene-band" variant={caseData.scene} />
        <div className="section-head">
          <span className="eyebrow">{ui.briefing.eyebrow} · {caseData.code}</span>
          <h2>{ui.briefing.heading}</h2>
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
            {ui.briefing.start}
          </button>
        </div>

        <p className="fiction-note">{ui.briefing.fiction}</p>
      </div>
    </section>
  )
}
