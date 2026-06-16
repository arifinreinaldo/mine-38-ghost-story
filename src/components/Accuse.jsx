import { suspects } from '../data'

export default function Accuse({ accused, setAccused, suspicions, go, confirm }) {
  return (
    <section className="screen" aria-label="Tuduhan">
      <div className="wrap pad">
        <div className="section-head">
          <span className="eyebrow">Tuduhan</span>
          <h2>Siapa pembunuhnya?</h2>
        </div>
        <p className="mist" style={{ marginBottom: '2em' }}>
          Pilih satu. Anda hanya punya satu kesempatan.
        </p>

        <div>
          {suspects.map((s) => (
            <button
              key={s.id}
              className="suspect-pick"
              aria-pressed={accused === s.id}
              onClick={() => setAccused(s.id)}
            >
              <div className="avatar">{s.init}</div>
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

        <div className="actions">
          <button className="btn btn-ghost" onClick={() => go('investigation')}>
            ← Periksa lagi
          </button>
          <button
            className="btn btn-blood"
            disabled={!accused}
            onClick={confirm}
            style={{
              opacity: accused ? 1 : 0.45,
              cursor: accused ? 'pointer' : 'not-allowed',
            }}
          >
            Kunci Tuduhan
          </button>
        </div>
      </div>
    </section>
  )
}
