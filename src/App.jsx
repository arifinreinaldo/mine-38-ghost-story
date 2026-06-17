import { useState, useEffect } from 'react'
import { evidence, suspects } from './data'
import Cover from './components/Cover'
import Briefing from './components/Briefing'
import Investigation from './components/Investigation'
import Accuse from './components/Accuse'
import Reveal from './components/Reveal'

const SAVE_KEY = 'mdm-save-v1'
const EMPTY_PROOF = { motive: '', means: '', opportunity: '' }

const loadSave = () => {
  try {
    return JSON.parse(localStorage.getItem(SAVE_KEY)) || {}
  } catch {
    return {}
  }
}

export default function App() {
  const [saved] = useState(loadSave)
  const [screen, setScreen] = useState('cover')
  const [examined, setExamined] = useState(saved.examined || [])
  const [interrogated, setInterrogated] = useState(saved.interrogated || {})
  const [suspicions, setSuspicions] = useState(saved.suspicions || {})
  const [unlocked, setUnlocked] = useState(saved.unlocked || []) // revealed locked-evidence ids
  const [accused, setAccused] = useState(saved.accused ?? null)
  const [proof, setProof] = useState(saved.proof || EMPTY_PROOF)

  // Persist progress so players can leave and resume.
  useEffect(() => {
    const data = { examined, interrogated, suspicions, unlocked, accused, proof }
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(data))
    } catch {
      /* storage unavailable — play continues in-memory */
    }
  }, [examined, interrogated, suspicions, unlocked, accused, proof])

  const go = (s) => {
    setScreen(s)
    window.scrollTo(0, 0)
  }

  const visibleEvidence = evidence.filter((e) => !e.locked || unlocked.includes(e.id))

  const examineEvidence = (id) =>
    setExamined((prev) => (prev.includes(id) ? prev : [...prev, id]))

  const askQuestion = (sid, qi) => {
    setInterrogated((prev) => {
      const asked = prev[sid] || []
      return asked.includes(qi) ? prev : { ...prev, [sid]: [...asked, qi] }
    })
    const q = suspects.find((s) => s.id === sid)?.interrogation[qi]
    if (q?.unlocks) {
      setUnlocked((prev) => (prev.includes(q.unlocks) ? prev : [...prev, q.unlocks]))
    }
  }

  const toggleSuspicion = (sid) =>
    setSuspicions((prev) => ({ ...prev, [sid]: !prev[sid] }))

  const allExamined = visibleEvidence.every((e) => examined.includes(e.id))
  const allInterrogated = suspects.every((s) => (interrogated[s.id] || []).length > 0)
  const canAccuse = allExamined && allInterrogated
  const hasProgress =
    examined.length > 0 || Object.keys(interrogated).length > 0 || accused !== null

  const restart = () => {
    setExamined([])
    setInterrogated({})
    setSuspicions({})
    setUnlocked([])
    setAccused(null)
    setProof(EMPTY_PROOF)
    try {
      localStorage.removeItem(SAVE_KEY)
    } catch {
      /* ignore */
    }
    go('cover')
  }

  switch (screen) {
    case 'briefing':
      return <Briefing go={go} />
    case 'investigation':
      return (
        <Investigation
          visibleEvidence={visibleEvidence}
          examined={examined}
          examineEvidence={examineEvidence}
          interrogated={interrogated}
          askQuestion={askQuestion}
          suspicions={suspicions}
          toggleSuspicion={toggleSuspicion}
          canAccuse={canAccuse}
          go={go}
        />
      )
    case 'accuse':
      return (
        <Accuse
          accused={accused}
          setAccused={setAccused}
          suspicions={suspicions}
          examined={examined}
          proof={proof}
          setProof={setProof}
          go={go}
          confirm={() => go('reveal')}
        />
      )
    case 'reveal':
      return <Reveal accused={accused} proof={proof} examined={examined} restart={restart} />
    default:
      return <Cover go={go} hasProgress={hasProgress} restart={restart} />
  }
}
