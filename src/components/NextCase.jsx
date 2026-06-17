import { useAuth } from '../auth/AuthProvider'
import { setIntent } from '../lib/intent'
import { gatedCase } from '../cases'
import { SceneArt } from './Icons'

export default function NextCase({ go, play }) {
  const { configured, user, loading } = useAuth()

  let body
  if (loading) {
    body = <p className="mist">Memuat…</p>
  } else if (!configured) {
    body = (
      <div className="card lock-card">
        <p>Kasus berikutnya akan segera hadir. Registrasi dibuka saat rilis.</p>
      </div>
    )
  } else if (!user) {
    body = (
      <div className="card lock-card">
        <span className="label">Perlu akun</span>
        <p style={{ margin: '.6em 0 1.2em' }}>
          Masuk atau daftar gratis — kamu akan langsung kembali ke kasus ini.
        </p>
        <button
          className="btn"
          onClick={() => {
            setIntent('next')
            go('auth')
          }}
        >
          Masuk / Daftar untuk lanjut →
        </button>
      </div>
    )
  } else {
    body = (
      <div className="card lock-card">
        <span className="label">Akun terverifikasi ✓ · Tingkat {gatedCase.difficulty}</span>
        <p style={{ margin: '.6em 0 1.2em' }}>
          Kasus terbuka untukmu. Lebih banyak tersangka, lebih banyak bukti, dan
          jebakan yang lebih licik dari kasus pertama.
        </p>
        <button className="btn btn-blood" onClick={() => play(gatedCase.id)}>
          Mulai Kasus →
        </button>
      </div>
    )
  }

  return (
    <section className="screen" aria-label="Kasus berikutnya">
      <div className="wrap pad">
        <SceneArt className="scene-band" variant={gatedCase.scene} />
        <button className="link-back" onClick={() => go('home')}>
          ← Beranda
        </button>
        <div className="section-head">
          <span className="eyebrow">Berkas Terkunci · {gatedCase.code}</span>
          <h2>{gatedCase.title}</h2>
        </div>
        <p className="mist" style={{ marginBottom: '2em' }}>
          {gatedCase.blurb}
        </p>
        {body}
      </div>
    </section>
  )
}
