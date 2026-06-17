import { useState } from 'react'
import { useAuth } from '../auth/AuthProvider'

export default function Auth({ go }) {
  const { configured, signIn, signUp, signInWithMagicLink } = useAuth()
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
        else go('next')
      } else {
        const { data, error } = await signUp(email, password)
        if (error) setMsg({ type: 'error', text: error.message })
        else if (data.session) go('next')
        else setMsg({ type: 'info', text: 'Cek email untuk konfirmasi akun, lalu masuk.' })
      }
    } finally {
      setBusy(false)
    }
  }

  const magic = async () => {
    if (!email) {
      setMsg({ type: 'error', text: 'Isi email dulu.' })
      return
    }
    setMsg(null)
    setBusy(true)
    try {
      const { error } = await signInWithMagicLink(email)
      setMsg(
        error
          ? { type: 'error', text: error.message }
          : { type: 'info', text: 'Tautan masuk dikirim ke emailmu.' }
      )
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="screen" aria-label="Masuk">
      <div className="wrap pad auth-wrap">
        <button className="link-back" onClick={() => go('cover')}>
          ← Kembali
        </button>
        <div className="section-head">
          <span className="eyebrow">Akun</span>
          <h2>{mode === 'signin' ? 'Masuk' : 'Daftar'}</h2>
        </div>
        <p className="mist" style={{ marginBottom: '1.8em' }}>
          Daftar gratis untuk membuka kasus berikutnya begitu rilis.
        </p>

        {!configured && (
          <p className="auth-msg info">
            Mode pratinjau: autentikasi belum dikonfigurasi (atur
            VITE_SUPABASE_URL &amp; VITE_SUPABASE_ANON_KEY).
          </p>
        )}

        <form onSubmit={submit} className="auth-form">
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="field">
            <span>Kata sandi</span>
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
            {busy ? '…' : mode === 'signin' ? 'Masuk' : 'Daftar'}
          </button>
        </form>

        <button
          className="btn btn-ghost auth-magic"
          onClick={magic}
          disabled={busy || !configured}
        >
          Kirim tautan masuk (tanpa sandi)
        </button>

        <p className="auth-toggle">
          {mode === 'signin' ? 'Belum punya akun?' : 'Sudah punya akun?'}{' '}
          <button
            type="button"
            onClick={() => {
              setMode(mode === 'signin' ? 'signup' : 'signin')
              setMsg(null)
            }}
          >
            {mode === 'signin' ? 'Daftar' : 'Masuk'}
          </button>
        </p>
      </div>
    </section>
  )
}
