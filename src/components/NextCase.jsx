import { useAuth } from '../auth/AuthProvider'
import { setIntent } from '../lib/intent'
import { gatedCases } from '../cases'
import { hasProgress } from '../lib/save'

export default function NextCase({ go, play }) {
  const { configured, user, loading } = useAuth()

  const intro = !configured
    ? 'Kasus-kasus ini terbuka setelah registrasi diaktifkan.'
    : user
    ? 'Akun terverifikasi. Pilih kasus untuk mulai.'
    : 'Masuk atau daftar gratis untuk membuka kasus-kasus ini — kamu akan langsung kembali ke sini.'

  const cardButton = (c) => {
    if (!configured) return <p className="locked-hint">Segera hadir</p>
    if (loading) return <p className="mist">Memuat…</p>
    if (!user)
      return (
        <button
          className="btn"
          onClick={() => {
            setIntent('next')
            go('auth')
          }}
        >
          Masuk untuk membuka →
        </button>
      )
    return (
      <button className="btn btn-blood" onClick={() => play(c.id)}>
        {hasProgress(c.id) ? 'Lanjutkan →' : 'Mulai Kasus →'}
      </button>
    )
  }

  return (
    <section className="screen" aria-label="Kasus terkunci">
      <div className="wrap pad">
        <button className="link-back" onClick={() => go('home')}>
          ← Beranda
        </button>
        <div className="section-head">
          <span className="eyebrow">Berkas Terkunci</span>
          <h2>Kasus lainnya</h2>
        </div>
        <p className="mist" style={{ marginBottom: '2em' }}>
          {intro}
        </p>

        {gatedCases.map((c) => (
          <div className="card lock-card case-row" key={c.id}>
            <span className="label">
              Tingkat {c.difficulty}
              {hasProgress(c.id) ? ' · tersimpan' : ''}
            </span>
            <h3 style={{ fontSize: '1.25rem', margin: '.25em 0 .4em' }}>{c.title}</h3>
            <p style={{ color: 'var(--mist)', marginBottom: '1.1em' }}>{c.blurb}</p>
            {cardButton(c)}
          </div>
        ))}
      </div>
    </section>
  )
}
