import { useEffect, useState } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { fetchStoryContent } from '../lib/content'
import { setIntent } from '../lib/intent'
import { nextStory } from '../stories'
import { SceneArt } from './Icons'

export default function NextCase({ go }) {
  const { configured, user, loading } = useAuth()
  const [content, setContent] = useState(null)

  useEffect(() => {
    let active = true
    if (user) {
      fetchStoryContent(nextStory.id).then((c) => active && setContent(c))
    }
    return () => {
      active = false
    }
  }, [user])

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
  } else if (content) {
    body = (
      <div className="card lock-card">
        <p>Kasus siap dimainkan. (Pemutar kasus berikutnya menyusul.)</p>
      </div>
    )
  } else {
    body = (
      <div className="card lock-card">
        <span className="label">Kamu sudah terdaftar ✓</span>
        <p style={{ marginTop: '.6em' }}>
          Kasus berikutnya belum dipublikasikan. Akunmu akan langsung bisa
          membukanya begitu rilis.
        </p>
      </div>
    )
  }

  return (
    <section className="screen" aria-label="Kasus berikutnya">
      <div className="wrap pad">
        <SceneArt className="scene-band" />
        <button className="link-back" onClick={() => go('cover')}>
          ← Kembali
        </button>
        <div className="section-head">
          <span className="eyebrow">Berkas Terkunci</span>
          <h2>{nextStory.title}</h2>
        </div>
        <p className="mist" style={{ marginBottom: '2em' }}>
          {nextStory.blurb}
        </p>
        {body}
      </div>
    </section>
  )
}
