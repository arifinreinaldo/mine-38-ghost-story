import { useAuth } from '../auth/AuthProvider'
import { usePwa } from '../pwa/usePwa'
import { freeCase, gatedCase } from '../cases'
import { hasProgress, clearSave } from '../lib/save'

function Account({ go }) {
  const { configured, user, signOut } = useAuth()
  if (!configured) return null
  return (
    <div className="account">
      {user ? (
        <>
          <span className="account-email">{user.email}</span>
          <button onClick={() => signOut()}>Keluar</button>
        </>
      ) : (
        <button onClick={() => go('auth')}>Masuk</button>
      )}
    </div>
  )
}

export default function Cover({ go, play }) {
  const { canInstall, standalone, promptInstall } = usePwa()
  const resumable = hasProgress(freeCase.id)

  const restart = () => {
    clearSave(freeCase.id)
    play(freeCase.id)
  }

  return (
    <section className="cover" aria-label="Sampul kasus">
      <div className="cover-sky" />
      <div className="cover-stars" />
      <div className="plume" />
      <Account go={go} />
      <div className="cover-inner">
        <span className="eyebrow">
          Berkas Kasus · {freeCase.code} · {freeCase.location}
        </span>
        <h1>{freeCase.title}</h1>
        <p className="cover-lead">{freeCase.cover.lead}</p>

        {resumable ? (
          <div className="actions" style={{ marginTop: 0 }}>
            <button className="btn" onClick={() => play(freeCase.id)}>
              Lanjutkan investigasi →
            </button>
            <button className="btn btn-ghost" onClick={restart}>
              Mulai dari awal
            </button>
          </div>
        ) : (
          <button className="btn" onClick={() => play(freeCase.id)}>
            Buka Berkas →
          </button>
        )}

        <button className="next-teaser" onClick={() => go('next')}>
          <span className="lock-ic" aria-hidden="true">🔒</span>
          <span>
            <span className="next-label">
              Kasus berikutnya · {gatedCase.difficulty}
            </span>
            <span className="next-title">{gatedCase.title}</span>
          </span>
          <span className="next-arrow">→</span>
        </button>

        {canInstall && !standalone && (
          <button className="install-btn" onClick={promptInstall}>
            <span aria-hidden="true">⤓</span> Pasang aplikasi
          </button>
        )}
      </div>
    </section>
  )
}
