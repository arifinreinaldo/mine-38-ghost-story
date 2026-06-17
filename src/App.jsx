import { useState, useEffect } from 'react'
import { useAuth } from './auth/AuthProvider'
import { getIntent, clearIntent } from './lib/intent'
import { freeCase, getCase } from './cases'
import Cover from './components/Cover'
import CasePlayer from './components/CasePlayer'
import Auth from './components/Auth'
import NextCase from './components/NextCase'
import PwaBar from './components/PwaBar'

export default function App() {
  const { user } = useAuth()
  const [view, setView] = useState('home') // 'home' | 'auth' | 'next' | 'play'
  const [activeCaseId, setActiveCaseId] = useState(freeCase.id)

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
        <CasePlayer key={activeCaseId} caseData={getCase(activeCaseId)} onHome={() => go('home')} />
      )
      break
    default:
      screenEl = <Cover go={go} play={play} />
  }

  return (
    <>
      {screenEl}
      <PwaBar />
    </>
  )
}
