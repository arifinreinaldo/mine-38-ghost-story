import { useAuth } from '../auth/AuthProvider'
import { usePwa } from '../pwa/usePwa'
import { useLang, useUI } from '../i18n/LangProvider'
import { localize } from '../i18n/L'
import { freeCase, gatedCases } from '../cases'
import { hasProgress, clearSave } from '../lib/save'

function Account({ go }) {
  const { configured, user, signOut } = useAuth()
  const ui = useUI()
  if (!configured) return null
  return (
    <div className="account">
      {user ? (
        <>
          <span className="account-email">{user.email}</span>
          <button onClick={() => signOut()}>{ui.cover.signOut}</button>
        </>
      ) : (
        <button onClick={() => go('auth')}>{ui.cover.signIn}</button>
      )}
    </div>
  )
}

export default function Cover({ go, play }) {
  const { canInstall, standalone, promptInstall } = usePwa()
  const { lang } = useLang()
  const ui = useUI()
  const fc = localize(freeCase, lang)
  const resumable = hasProgress(freeCase.id)

  const restart = () => {
    clearSave(freeCase.id)
    play(freeCase.id)
  }

  return (
    <section className="cover" aria-label={ui.cover.aria}>
      <div className="cover-sky" />
      <div className="cover-stars" />
      <div className="plume" />
      <Account go={go} />
      <div className="cover-inner">
        <span className="eyebrow">
          {ui.cover.caseFile} · {fc.code} · {fc.location}
        </span>
        <h1>{fc.title}</h1>
        <p className="cover-lead">{fc.cover.lead}</p>

        {resumable ? (
          <div className="actions" style={{ marginTop: 0 }}>
            <button className="btn" onClick={() => play(freeCase.id)}>
              {ui.cover.resume}
            </button>
            <button className="btn btn-ghost" onClick={restart}>
              {ui.cover.replay}
            </button>
          </div>
        ) : (
          <button className="btn" onClick={() => play(freeCase.id)}>
            {ui.cover.open}
          </button>
        )}

        <button className="next-teaser" onClick={() => go('next')}>
          <span className="lock-ic" aria-hidden="true">🔒</span>
          <span>
            <span className="next-label">{ui.next.heading}</span>
            <span className="next-title">{ui.next.locked(gatedCases.length)}</span>
          </span>
          <span className="next-arrow">→</span>
        </button>

        {canInstall && !standalone && (
          <button className="install-btn" onClick={promptInstall}>
            <span aria-hidden="true">⤓</span> {ui.cover.install}
          </button>
        )}
      </div>
    </section>
  )
}
