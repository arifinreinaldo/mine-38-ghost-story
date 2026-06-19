import { Silhouette } from './Icons'

const SLOTS = [
  { key: 'motive', label: 'Motif', hint: 'Apa yang mendorong mereka?' },
  { key: 'means', label: 'Cara', hint: 'Bagaimana ia dilakukan?' },
  { key: 'opportunity', label: 'Kesempatan', hint: 'Siapa yang bisa?' },
]

export default function Accuse({
  caseData,
  accused,
  setAccused,
  suspicions,
  examined,
  proof,
  setProof,
  go,
  confirm,
}) {
  const options = caseData.evidence.filter((e) => examined.includes(e.id))
  const proofComplete = SLOTS.every((s) => proof[s.key])
  const ready = accused.length > 0 && proofComplete
  const setSlot = (k, v) => setProof({ ...proof, [k]: v })
  const toggle = (id) =>
    setAccused(accused.includes(id) ? accused.filter((x) => x !== id) : [...accused, id])

  return (
    <section className="screen" aria-label="Tuduhan">
      <div className="wrap pad">
        <div className="section-head">
          <span className="eyebrow">Tuduhan</span>
          <h2>Siapa pembunuhnya?</h2>
        </div>
        <p className="mist" style={{ marginBottom: '2em' }}>
          Pilih tersangka — <strong>bisa lebih dari satu</strong> — lalu susun
          pembuktianmu. Anda hanya punya satu kesempatan.
        </p>

        <div>
          {caseData.suspects.map((s) => {
            const picked = accused.includes(s.id)
            return (
              <button
                key={s.id}
                className="suspect-pick"
                aria-pressed={picked}
                onClick={() => toggle(s.id)}
              >
                <div className="avatar">
                  <Silhouette />
                  <span>{s.init}</span>
                </div>
                <div>
                  <div className="name">
                    {s.name}
                    {suspicions[s.id] && <span className="flag">Dicurigai</span>}
                  </div>
                  <div className="role">{s.role}</div>
                </div>
                <span className="pick-mark" aria-hidden="true">
                  {picked ? '✓' : ''}
                </span>
              </button>
            )
          })}
        </div>

        {accused.length > 0 && (
          <div className="deduction">
            <span className="eyebrow">Susun pembuktian</span>
            <p className="mist" style={{ margin: '.6em 0 1.4em' }}>
              Tunjuk satu bukti untuk tiap unsur. Inilah yang membedakan tebakan
              dari deduksi.
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
                  <option value="">— pilih bukti —</option>
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

        <div className="actions">
          <button className="btn btn-ghost" onClick={() => go('investigation')}>
            ← Periksa lagi
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
            Kunci Tuduhan
          </button>
        </div>
        {accused.length > 0 && !proofComplete && (
          <p className="gate-msg">
            Lengkapi ketiga unsur pembuktian sebelum mengunci tuduhan.
          </p>
        )}
      </div>
    </section>
  )
}
