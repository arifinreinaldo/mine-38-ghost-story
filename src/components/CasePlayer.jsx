import { useState, useEffect } from 'react'
import { loadSave, writeSave, clearSave } from '../lib/save'
import Briefing from './Briefing'
import Investigation from './Investigation'
import Accuse from './Accuse'
import Reveal from './Reveal'

const EMPTY_PROOF = { motive: '', means: '', opportunity: '' }

// Runs one case end-to-end (briefing → investigation → accuse → reveal),
// holding its own state and a per-case save slot. Mount with key={caseId}.
export default function CasePlayer({ caseData, onHome }) {
  const [saved] = useState(() => loadSave(caseData.id))
  const [screen, setScreen] = useState(saved.screen || 'briefing')
  const [examined, setExamined] = useState(saved.examined || [])
  const [interrogated, setInterrogated] = useState(saved.interrogated || {})
  const [suspicions, setSuspicions] = useState(saved.suspicions || {})
  const [unlocked, setUnlocked] = useState(saved.unlocked || [])
  const [accused, setAccused] = useState(() => {
    const a = saved.accused
    return Array.isArray(a) ? a : a ? [a] : []
  })
  const [proof, setProof] = useState(saved.proof || EMPTY_PROOF)

  useEffect(() => {
    writeSave(caseData.id, {
      screen, examined, interrogated, suspicions, unlocked, accused, proof,
    })
  }, [caseData.id, screen, examined, interrogated, suspicions, unlocked, accused, proof])

  const go = (s) => {
    if (s === 'home') return onHome()
    setScreen(s)
    window.scrollTo(0, 0)
  }

  const visibleEvidence = caseData.evidence.filter(
    (e) => !e.locked || unlocked.includes(e.id)
  )
  const examineEvidence = (id) =>
    setExamined((prev) => (prev.includes(id) ? prev : [...prev, id]))

  const askQuestion = (sid, qi) => {
    setInterrogated((prev) => {
      const asked = prev[sid] || []
      return asked.includes(qi) ? prev : { ...prev, [sid]: [...asked, qi] }
    })
    const q = caseData.suspects.find((s) => s.id === sid)?.interrogation[qi]
    if (q?.unlocks) {
      setUnlocked((prev) => (prev.includes(q.unlocks) ? prev : [...prev, q.unlocks]))
    }
  }

  const toggleSuspicion = (sid) =>
    setSuspicions((prev) => ({ ...prev, [sid]: !prev[sid] }))

  const allExamined = visibleEvidence.every((e) => examined.includes(e.id))
  const allInterrogated = caseData.suspects.every(
    (s) => (interrogated[s.id] || []).length > 0
  )
  const canAccuse = allExamined && allInterrogated

  const restart = () => {
    clearSave(caseData.id)
    setExamined([])
    setInterrogated({})
    setSuspicions({})
    setUnlocked([])
    setAccused([])
    setProof(EMPTY_PROOF)
    go('briefing')
  }

  switch (screen) {
    case 'investigation':
      return (
        <Investigation
          caseData={caseData}
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
          caseData={caseData}
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
      return (
        <Reveal
          caseData={caseData}
          accused={accused}
          proof={proof}
          examined={examined}
          restart={restart}
          onHome={onHome}
        />
      )
    default:
      return <Briefing caseData={caseData} go={go} />
  }
}
