import { useState } from 'react'
import { evidence, suspects } from './data'
import Cover from './components/Cover'
import Briefing from './components/Briefing'
import Investigation from './components/Investigation'
import Accuse from './components/Accuse'
import Reveal from './components/Reveal'

export default function App() {
  const [screen, setScreen] = useState('cover')
  const [examined, setExamined] = useState([])        // evidence ids
  const [interrogated, setInterrogated] = useState({}) // { suspectId: [questionIndex] }
  const [suspicions, setSuspicions] = useState({})     // { suspectId: boolean }
  const [accused, setAccused] = useState(null)

  const go = (s) => {
    setScreen(s)
    window.scrollTo(0, 0)
  }

  const examineEvidence = (id) =>
    setExamined((prev) => (prev.includes(id) ? prev : [...prev, id]))

  const askQuestion = (sid, qi) =>
    setInterrogated((prev) => {
      const asked = prev[sid] || []
      return asked.includes(qi) ? prev : { ...prev, [sid]: [...asked, qi] }
    })

  const toggleSuspicion = (sid) =>
    setSuspicions((prev) => ({ ...prev, [sid]: !prev[sid] }))

  const allExamined = examined.length === evidence.length
  const allInterrogated = suspects.every((s) => (interrogated[s.id] || []).length > 0)
  const canAccuse = allExamined && allInterrogated

  const restart = () => {
    setExamined([])
    setInterrogated({})
    setSuspicions({})
    setAccused(null)
    go('cover')
  }

  switch (screen) {
    case 'briefing':
      return <Briefing go={go} />
    case 'investigation':
      return (
        <Investigation
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
          go={go}
          confirm={() => go('reveal')}
        />
      )
    case 'reveal':
      return <Reveal accused={accused} restart={restart} />
    default:
      return <Cover go={go} />
  }
}
