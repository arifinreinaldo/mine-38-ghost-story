import { Silhouette } from './Icons'

const DEFAULT_LABELS = {
  motive: { label: 'Motif', hint: 'Apa yang mendorong mereka?' },
  means: { label: 'Cara', hint: 'Bagaimana ia dilakukan?' },
  opportunity: { label: 'Kesempatan', hint: 'Siapa yang bisa?' },
}

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
  const labels = caseData.solution.proofLabels || {}
  const SLOTS = ['motive', 'means', 'opportunity'].map((k) => ({
    key: k,
    label: labels[k]?.label || DEFAULT_LABELS[k].label,
    hint: labels[k]?.hint || DEFAULT_LABELS[k].hint,
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
    <section className="screen" aria-label="Tuduhan">
      <div className="wrap pad">
        <div className="section-head">
          <span className="eyebrow">Tuduhan</span>
          <h2>Siapa pembunuhnya?</h2>
        </div>
        <p className="mist" style={{ marginBottom: '2em' }}>
          Pilih tersangka — <strong>bisa lebih dari satu</strong> — atau simpulkan
          bahwa ini bukan pembunuhan. Lalu susun pembuktianmu.
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

          <button
            className={'verdict-accident' + (accident ? ' on' : '')}
            aria-pressed={accident}
            onClick={toggleAccident}
          >
            <span className="va-ic" aria-hidden="true">⚖</span>
            <span className="va-text">
              Bukan pembunuhan — kematian ini sebuah kecelakaan
            </span>
            <span className="pick-mark" aria-hidden="true">{accident ? '✓' : ''}</span>
          </button>
        </div>

        {hasVerdict && (
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

        {caseData.treasure && (
          <div className="treasure-guess">
            <span className="eyebrow">Bonus · Teka-teki Harta</span>
            <p className="mist" style={{ margin: '.5em 0 1.2em' }}>
              Konon {caseData.treasure.robber.name} menyembunyikan hartanya di salah
              satu puncak Putri Tidur. Tebak yang benar untuk membuka{' '}
              <strong>Perburuan Harta</strong>. (opsional — tak memengaruhi tuduhanmu)
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
        {hasVerdict && !proofComplete && (
          <p className="gate-msg">
            Lengkapi ketiga unsur pembuktian sebelum mengunci tuduhan.
          </p>
        )}
      </div>
    </section>
  )
}
