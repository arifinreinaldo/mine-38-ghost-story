import { Silhouette } from './Icons'
import { useUI } from '../i18n/LangProvider'

export default function Accuse({
  caseData,
  accused,
  setAccused,
  accident,
  setAccident,
  suspicions,
  examined,
  proof,
  setProof,
  treasureGuess,
  setTreasureGuess,
  go,
  confirm,
}) {
  const ui = useUI()
  const labels = caseData.solution.proofLabels || {}
  const SLOTS = ['motive', 'means', 'opportunity'].map((k) => ({
    key: k,
    label: labels[k]?.label || ui.accuse.proof[k].label,
    hint: labels[k]?.hint || ui.accuse.proof[k].hint,
  }))

  const options = caseData.evidence.filter((e) => examined.includes(e.id))
  const proofComplete = SLOTS.every((s) => proof[s.key])
  const hasVerdict = accused.length > 0 || accident
  const ready = hasVerdict && proofComplete
  const setSlot = (k, v) => setProof({ ...proof, [k]: v })

  const toggleSuspect = (id) => {
    if (accident) setAccident(false)
    setAccused(accused.includes(id) ? accused.filter((x) => x !== id) : [...accused, id])
  }
  const toggleAccident = () => {
    const next = !accident
    setAccident(next)
    if (next) setAccused([])
  }

  return (
    <section className="screen" aria-label={ui.accuse.aria}>
      <div className="wrap pad">
        <div className="section-head">
          <span className="eyebrow">{ui.accuse.eyebrow}</span>
          <h2>{ui.accuse.heading}</h2>
        </div>
        <p className="mist" style={{ marginBottom: '2em' }}>
          {ui.accuse.lead1}
          <strong>{ui.accuse.leadStrong}</strong>
          {ui.accuse.lead2}
        </p>

        <div>
          {caseData.suspects.map((s) => {
            const picked = accused.includes(s.id)
            return (
              <button
                key={s.id}
                className="suspect-pick"
                aria-pressed={picked}
                onClick={() => toggleSuspect(s.id)}
              >
                <div className="avatar">
                  <Silhouette />
                  <span>{s.init}</span>
                </div>
                <div>
                  <div className="name">
                    {s.name}
                    {suspicions[s.id] && <span className="flag">{ui.investigation.suspected}</span>}
                  </div>
                  <div className="role">{s.role}</div>
                </div>
                <span className="pick-mark" aria-hidden="true">
                  {picked ? '✓' : ''}
                </span>
              </button>
            )
          })}

          <button
            className={'verdict-accident' + (accident ? ' on' : '')}
            aria-pressed={accident}
            onClick={toggleAccident}
          >
            <span className="va-ic" aria-hidden="true">⚖</span>
            <span className="va-text">{caseData.solution.verdictLabel || ui.accuse.accident}</span>
            <span className="pick-mark" aria-hidden="true">{accident ? '✓' : ''}</span>
          </button>
        </div>

        {hasVerdict && (
          <div className="deduction">
            <span className="eyebrow">{ui.accuse.buildEyebrow}</span>
            <p className="mist" style={{ margin: '.6em 0 1.4em' }}>
              {ui.accuse.buildLead}
            </p>
            {SLOTS.map((slot) => (
              <label key={slot.key} className="proof-slot">
                <span className="proof-label">
                  {slot.label}
                  <em>{slot.hint}</em>
                </span>
                <select
                  value={proof[slot.key]}
                  onChange={(e) => setSlot(slot.key, e.target.value)}
                >
                  <option value="">{ui.accuse.pickEvidence}</option>
                  {options.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.title}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        )}

        {caseData.treasure && (
          <div className="treasure-guess">
            <span className="eyebrow">{ui.accuse.treasureEyebrow}</span>
            <p className="mist" style={{ margin: '.5em 0 1.2em' }}>
              {ui.accuse.treasureLead1(caseData.treasure.robber.name)}
              <strong>{ui.accuse.treasureHunt}</strong>
              {ui.accuse.treasureLead2}
            </p>
            {caseData.treasure.mountains.map((m) => {
              const picked = treasureGuess === m.id
              return (
                <button
                  key={m.id}
                  className={'peak-pick' + (picked ? ' on' : '')}
                  aria-pressed={picked}
                  onClick={() => setTreasureGuess(picked ? '' : m.id)}
                >
                  <span className="pk-name">{m.name}</span>
                  <span className="pk-tag">{m.tag}</span>
                  <span className="pick-mark" aria-hidden="true">{picked ? '✓' : ''}</span>
                </button>
              )
            })}
          </div>
        )}

        <div className="actions">
          <button className="btn btn-ghost" onClick={() => go('investigation')}>
            {ui.accuse.reexamine}
          </button>
          <button
            className="btn btn-blood"
            disabled={!ready}
            onClick={confirm}
            style={{
              opacity: ready ? 1 : 0.45,
              cursor: ready ? 'pointer' : 'not-allowed',
            }}
          >
            {ui.accuse.lock}
          </button>
        </div>
        {hasVerdict && !proofComplete && <p className="gate-msg">{ui.accuse.gate}</p>}
      </div>
    </section>
  )
}
