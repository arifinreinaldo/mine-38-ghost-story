import { Silhouette } from './Icons'

const SLOTS = [
  { key: 'motive', label: 'Motif', hint: 'Apa yang mendorongnya?' },
  { key: 'means', label: 'Cara', hint: 'Bagaimana ia melakukannya?' },
  { key: 'opportunity', label: 'Kesempatan', hint: 'Kenapa hanya ia yang bisa?' },
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
  const ready = accused && proofComplete
  const setSlot = (k, v) => setProof({ ...proof, [k]: v })

  return (
    <section className="screen" aria-label="Tuduhan">
      <div className="wrap pad">
        <div className="section-head">
          <span className="eyebrow">Tuduhan</span>
          <h2>Siapa pembunuhnya?</h2>
        </div>
        <p className="mist" style={{ marginBottom: '2em' }}>
          Pilih satu tersangka, lalu susun pembuktianmu. Anda hanya punya satu
          kesempatan.
        </p>

        <div>
          {caseData.suspects.map((s) => (
            <button
              key={s.id}
              className="suspect-pick"
              aria-pressed={accused === s.id}
              onClick={() => setAccused(s.id)}
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
            </button>
          ))}
        </div>

        {accused && (
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
        {accused && !proofComplete && (
          <p className="gate-msg">
            Lengkapi ketiga unsur pembuktian sebelum mengunci tuduhan.
          </p>
        )}
      </div>
    </section>
  )
}
