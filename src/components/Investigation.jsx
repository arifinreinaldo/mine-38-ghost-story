import { useState } from 'react'
import { EvidenceIcon, Silhouette, SceneArt } from './Icons'
import { useUI } from '../i18n/LangProvider'

const TAB_IDS = ['korban', 'bukti', 'saksi', 'linimasa']

function EvidenceItem({ item, seen, onExamine }) {
  const ui = useUI()
  const [open, setOpen] = useState(false)
  const toggle = () => {
    const next = !open
    setOpen(next)
    if (next) onExamine(item.id)
  }
  return (
    <button
      className={'ev' + (seen ? ' seen' : '') + (item.twist ? ' ev-twist' : '')}
      aria-expanded={open}
      onClick={toggle}
    >
      <div className="ev-top">
        <span className="ev-tag">
          <EvidenceIcon type={item.icon} className="ev-ic" />
          {item.tag}
        </span>
        <span className="chev">{open ? '–' : '+'}</span>
      </div>
      <h3>
        {item.title}
        {item.twist && !seen && <span className="badge-new">{ui.investigation.newBadge}</span>}
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

function SuspectCard({ s, asked, askQuestion, suspected, toggleSuspicion, examined }) {
  const ui = useUI()
  const available = s.interrogation
    .map((qa, i) => ({ qa, i }))
    .filter(({ qa }) => !qa.requires || examined.includes(qa.requires))
  const hiddenCount = s.interrogation.length - available.length

  return (
    <div className="card suspect">
      <div className="head">
        <div className="avatar">
          <Silhouette />
          <span>{s.init}</span>
        </div>
        <div>
          <div className="name">
            {s.name}
            {suspected && <span className="flag">{ui.investigation.suspected}</span>}
          </div>
          <div className="role">{ui.investigation.meta(s.age, s.role)}</div>
        </div>
      </div>

      <p className="stmt">{s.statement}</p>

      <dl>
        <dt>{ui.investigation.motive}</dt>
        <dd>{s.motive}</dd>
        <dt>{ui.investigation.alibi}</dt>
        <dd>{s.alibi}</dd>
      </dl>

      <div className="interrogation">
        <span className="label">{ui.investigation.interrogation}</span>
        {available.map(({ qa, i }) => {
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
              {isAsked && (
                <p className="q-ans">
                  {qa.a}
                  {qa.unlocks && (
                    <span className="unlock-note">{ui.investigation.unlockNote}</span>
                  )}
                </p>
              )}
            </div>
          )
        })}
        {hiddenCount > 0 && <p className="locked-hint">{ui.investigation.hiddenHint}</p>}
      </div>

      <button
        className={'suspicion-toggle' + (suspected ? ' on' : '')}
        onClick={() => toggleSuspicion(s.id)}
      >
        {suspected ? ui.investigation.marked : ui.investigation.mark}
      </button>
    </div>
  )
}

export default function Investigation({
  caseData,
  visibleEvidence,
  examined,
  examineEvidence,
  interrogated,
  askQuestion,
  suspicions,
  toggleSuspicion,
  canAccuse,
  go,
}) {
  const ui = useUI()
  const [tab, setTab] = useState('korban')
  const { suspects, timeline, victim } = caseData

  const interrogatedCount = suspects.filter(
    (s) => (interrogated[s.id] || []).length > 0
  ).length
  const examinedCount = visibleEvidence.filter((e) => examined.includes(e.id)).length

  return (
    <section className="screen" aria-label={ui.investigation.aria}>
      <div className="wrap pad">
        <button className="link-back" onClick={() => go('home')}>
          {ui.common.backHome}
        </button>
        <div className="seg" role="tablist" aria-label={ui.investigation.segAria}>
          {TAB_IDS.map((id) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
            >
              {ui.investigation.tabs[id]}
            </button>
          ))}
        </div>

        {tab === 'korban' && (
          <div className="tabpanel">
            <SceneArt className="scene-band" variant={caseData.scene} />
            <span className="eyebrow">{ui.investigation.victim}</span>
            <div className="dossier-row">
              <div className="avatar">
                <Silhouette />
                <span>{victim.init}</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem' }}>{victim.name}</h3>
                <span className="mist mono" style={{ fontSize: '.82rem' }}>
                  {victim.meta}
                </span>
              </div>
            </div>
            {victim.paras.map((p, i) => (
              <p key={i} style={i ? { marginTop: '1em' } : undefined}>
                {p}
              </p>
            ))}
          </div>
        )}

        {tab === 'bukti' && (
          <div className="tabpanel">
            <span className="eyebrow">{ui.investigation.evidenceHint}</span>
            <div style={{ marginTop: '1.4em' }}>
              {visibleEvidence.map((e) => (
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
            <span className="eyebrow">{ui.investigation.witnesses}</span>
            <div style={{ marginTop: '1.4em' }}>
              {suspects.map((s) => (
                <SuspectCard
                  key={s.id}
                  s={s}
                  asked={interrogated[s.id] || []}
                  askQuestion={askQuestion}
                  suspected={!!suspicions[s.id]}
                  toggleSuspicion={toggleSuspicion}
                  examined={examined}
                />
              ))}
            </div>
          </div>
        )}

        {tab === 'linimasa' && (
          <div className="tabpanel">
            <span className="eyebrow">{ui.investigation.timeline}</span>
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
          {ui.investigation.progress(
            examinedCount,
            visibleEvidence.length,
            interrogatedCount,
            suspects.length
          )}
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
            {ui.investigation.accuse}
          </button>
        </div>
        {!canAccuse && <p className="gate-msg">{ui.investigation.gate}</p>}
      </div>
    </section>
  )
}
