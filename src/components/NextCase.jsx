import { useAuth } from '../auth/AuthProvider'
import { useLang, useUI } from '../i18n/LangProvider'
import { localize } from '../i18n/L'
import { setIntent } from '../lib/intent'
import { gatedCases } from '../cases'
import { hasProgress } from '../lib/save'

export default function NextCase({ go, play }) {
  const { configured, user, loading } = useAuth()
  const { lang } = useLang()
  const ui = useUI()

  const intro = !configured
    ? ui.next.introPreview
    : user
    ? ui.next.introUser
    : ui.next.introGuest

  const cardButton = (c) => {
    if (!configured) return <p className="locked-hint">{ui.next.comingSoon}</p>
    if (loading) return <p className="mist">{ui.auth.busy}</p>
    if (!user)
      return (
        <button
          className="btn"
          onClick={() => {
            setIntent('next')
            go('auth')
          }}
        >
          {ui.next.signInToOpen}
        </button>
      )
    return (
      <button className="btn btn-blood" onClick={() => play(c.id)}>
        {hasProgress(c.id) ? ui.next.resume : ui.next.start}
      </button>
    )
  }

  return (
    <section className="screen" aria-label={ui.next.aria}>
      <div className="wrap pad">
        <button className="link-back" onClick={() => go('home')}>
          {ui.common.backHome}
        </button>
        <div className="section-head">
          <span className="eyebrow">{ui.next.eyebrow}</span>
          <h2>{ui.next.heading}</h2>
        </div>
        <p className="mist" style={{ marginBottom: '2em' }}>
          {intro}
        </p>

        {gatedCases.map((raw) => {
          const c = localize(raw, lang)
          return (
            <div className="card lock-card case-row" key={c.id}>
              <span className="label">
                {ui.next.level(ui.difficulty[c.difficulty] || c.difficulty)}
                {hasProgress(c.id) ? ` · ${ui.next.saved}` : ''}
              </span>
              <h3 style={{ fontSize: '1.25rem', margin: '.25em 0 .4em' }}>{c.title}</h3>
              <p style={{ color: 'var(--mist)', marginBottom: '1.1em' }}>{c.blurb}</p>
              {cardButton(c)}
            </div>
          )
        })}
      </div>
    </section>
  )
}
