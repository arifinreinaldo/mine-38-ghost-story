import { useState } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { useUI } from '../i18n/LangProvider'

export default function Auth({ go }) {
  const { configured, signIn, signUp, signInWithMagicLink } = useAuth()
  const ui = useUI()
  const [mode, setMode] = useState('signin') // 'signin' | 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState(null) // { type: 'error' | 'info', text }

  const submit = async (e) => {
    e.preventDefault()
    setMsg(null)
    setBusy(true)
    try {
      if (mode === 'signin') {
        const { error } = await signIn(email, password)
        if (error) setMsg({ type: 'error', text: error.message })
        // success → App resumes the intended screen when the session updates
      } else {
        const { data, error } = await signUp(email, password)
        if (error) setMsg({ type: 'error', text: error.message })
        else if (!data.session) setMsg({ type: 'info', text: ui.auth.confirmEmail })
        // session created → App resumes the intended screen
      }
    } finally {
      setBusy(false)
    }
  }

  const magic = async () => {
    if (!email) {
      setMsg({ type: 'error', text: ui.auth.fillEmail })
      return
    }
    setMsg(null)
    setBusy(true)
    try {
      const { error } = await signInWithMagicLink(email)
      setMsg(
        error
          ? { type: 'error', text: error.message }
          : { type: 'info', text: ui.auth.magicSent }
      )
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="screen" aria-label={ui.auth.aria}>
      <div className="wrap pad auth-wrap">
        <button className="link-back" onClick={() => go('cover')}>
          {ui.common.back}
        </button>
        <div className="section-head">
          <span className="eyebrow">{ui.auth.eyebrow}</span>
          <h2>{mode === 'signin' ? ui.auth.signin : ui.auth.signup}</h2>
        </div>
        <p className="mist" style={{ marginBottom: '1.8em' }}>
          {ui.auth.lead}
        </p>

        {!configured && <p className="auth-msg info">{ui.auth.preview}</p>}

        <form onSubmit={submit} className="auth-form">
          <label className="field">
            <span>{ui.auth.email}</span>
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="field">
            <span>{ui.auth.password}</span>
            <input
              type="password"
              autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {msg && <p className={'auth-msg ' + msg.type}>{msg.text}</p>}
          <button className="btn" type="submit" disabled={busy || !configured}>
            {busy ? ui.auth.busy : mode === 'signin' ? ui.auth.signin : ui.auth.signup}
          </button>
        </form>

        <button
          className="btn btn-ghost auth-magic"
          onClick={magic}
          disabled={busy || !configured}
        >
          {ui.auth.magic}
        </button>

        <p className="auth-toggle">
          {mode === 'signin' ? ui.auth.noAccount : ui.auth.haveAccount}{' '}
          <button
            type="button"
            onClick={() => {
              setMode(mode === 'signin' ? 'signup' : 'signin')
              setMsg(null)
            }}
          >
            {mode === 'signin' ? ui.auth.signup : ui.auth.signin}
          </button>
        </p>
      </div>
    </section>
  )
}
