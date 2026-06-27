import { useState, useEffect, useMemo } from 'react'
import { useAuth } from './auth/AuthProvider'
import { useLang } from './i18n/LangProvider'
import { localize } from './i18n/L'
import { setTheme } from './audio/ambient'
import { attachProgressSync, setProgressUser, syncProgress } from './lib/progressSync'
import { getIntent, clearIntent } from './lib/intent'
import { freeCase, getCase } from './cases'
import Cover from './components/Cover'
import CasePlayer from './components/CasePlayer'
import Auth from './components/Auth'
import NextCase from './components/NextCase'
import PwaBar from './components/PwaBar'
import LangToggle from './components/LangToggle'
import SoundToggle from './components/SoundToggle'

export default function App() {
  const { user } = useAuth()
  const { lang } = useLang()
  const [view, setView] = useState('home') // 'home' | 'auth' | 'next' | 'play'
  const [activeCaseId, setActiveCaseId] = useState(freeCase.id)

  // Resolve the active case into the chosen language once, here at the
  // boundary, so every screen keeps reading plain fields. Changing language
  // mid-case re-localizes without unmounting (key is the id), so progress
  // is preserved.
  const localizedCase = useMemo(
    () => localize(getCase(activeCaseId), lang),
    [activeCaseId, lang]
  )

  // Each story has its own ambient theme; the cover and menus use the default.
  useEffect(() => {
    setTheme(view === 'play' ? activeCaseId : 'default')
  }, [view, activeCaseId])

  // Mirror per-case progress to the database for the signed-in user, and merge
  // cloud progress back on login (local-first; no-op when Supabase/user absent).
  const [, setSyncTick] = useState(0)
  useEffect(() => {
    attachProgressSync()
  }, [])
  useEffect(() => {
    setProgressUser(user)
    if (!user) return undefined
    let active = true
    syncProgress(user).then((changed) => {
      if (active && changed) setSyncTick((n) => n + 1)
    })
    return () => {
      active = false
    }
  }, [user])

  const go = (v) => {
    setView(v)
    window.scrollTo(0, 0)
  }
  const play = (caseId) => {
    setActiveCaseId(caseId)
    go('play')
  }

  // Resume the intended destination after sign-in — covers the in-page
  // password flow and a full reload returning from a magic link.
  useEffect(() => {
    if (!user) return
    const dest = getIntent()
    if (dest) {
      clearIntent()
      go(dest)
    } else if (view === 'auth') {
      go('home')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  let screenEl
  switch (view) {
    case 'auth':
      screenEl = <Auth go={go} />
      break
    case 'next':
      screenEl = <NextCase go={go} play={play} />
      break
    case 'play':
      screenEl = (
        <CasePlayer key={activeCaseId} caseData={localizedCase} onHome={() => go('home')} />
      )
      break
    default:
      screenEl = <Cover go={go} play={play} />
  }

  return (
    <>
      {screenEl}
      <PwaBar />
      <LangToggle />
      <SoundToggle />
    </>
  )
}
