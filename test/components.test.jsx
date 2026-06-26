import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LangProvider } from '../src/i18n/LangProvider'
import { localize } from '../src/i18n/L'
import { UI } from '../src/i18n/strings'
import { getCase } from '../src/cases'
import LangToggle from '../src/components/LangToggle'
import Briefing from '../src/components/Briefing'
import Investigation from '../src/components/Investigation'
import Reveal from '../src/components/Reveal'

const noop = () => {}

// Render inside the language provider, pinning the language so useUI() (provider)
// and the passed-in localized caseData agree.
function renderWithLang(lang, ui) {
  localStorage.setItem('mdm.lang', lang)
  return render(<LangProvider>{ui}</LangProvider>)
}

describe('LangToggle', () => {
  it('defaults to Indonesian and switches to English on click', () => {
    render(
      <LangProvider>
        <LangToggle />
      </LangProvider>
    )
    expect(screen.getByRole('button', { name: 'ID' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(screen.getByRole('button', { name: 'EN' }))

    expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'true')
    expect(localStorage.getItem('mdm.lang')).toBe('en')
  })
})

describe('Briefing localization', () => {
  it('renders English chrome + content when language is en', () => {
    const c = localize(getCase('mahameru'), 'en')
    const { container } = renderWithLang('en', <Briefing caseData={c} go={noop} />)
    expect(container.textContent).toContain(UI.en.briefing.heading) // "What we know"
    expect(container.textContent).toContain(c.briefing.task)
  })
  it('renders Indonesian chrome when language is id', () => {
    const c = localize(getCase('mahameru'), 'id')
    const { container } = renderWithLang('id', <Briefing caseData={c} go={noop} />)
    expect(container.textContent).toContain(UI.id.briefing.heading) // "Apa yang kita tahu"
  })
})

describe('Investigation accuse gating', () => {
  const c = localize(getCase('mahameru'), 'en')
  const visible = c.evidence.filter((e) => !e.locked)
  const baseProps = {
    caseData: c,
    visibleEvidence: visible,
    examined: [],
    examineEvidence: noop,
    interrogated: {},
    askQuestion: noop,
    suspicions: {},
    toggleSuspicion: noop,
    go: noop,
  }
  it('disables the accuse button until everything is examined/interrogated', () => {
    renderWithLang('en', <Investigation {...baseProps} canAccuse={false} />)
    expect(screen.getByRole('button', { name: /Make an Accusation/ })).toBeDisabled()
    expect(screen.getByText(UI.en.investigation.gate)).toBeInTheDocument()
  })
  it('enables the accuse button when canAccuse is true', () => {
    renderWithLang('en', <Investigation {...baseProps} canAccuse={true} />)
    expect(screen.getByRole('button', { name: /Make an Accusation/ })).not.toBeDisabled()
  })
})

describe('Reveal — single-culprit verdict (mahameru)', () => {
  const c = localize(getCase('mahameru'), 'en')
  const render_ = (props) =>
    renderWithLang('en', <Reveal caseData={c} treasureGuess="" solvedLocks={[]} restart={noop} go={noop} onHome={noop} {...props} />)

  it('confirms a correct accusation', () => {
    const { container } = render_({
      accused: ['dimas'],
      accident: false,
      proof: { motive: 'wa', means: 'termos', opportunity: 'posisi' },
      examined: ['foto'],
    })
    expect(container.textContent).toContain(UI.en.reveal.verdictRight) // "Correct."
  })

  it('rejects a wrong accusation and shows that suspect’s rebuttal', () => {
    const { container } = render_({ accused: ['sari'], accident: false, proof: {}, examined: [] })
    expect(container.textContent).toContain(UI.en.reveal.verdictWrong) // "Not quite."
    expect(container.textContent).toContain('The buff is indeed hers') // Sari's rebuttal
  })
})

describe('Reveal — grey verdict (mei98, no single killer)', () => {
  const c = localize(getCase('mei98'), 'en')
  const render_ = (props) =>
    renderWithLang('en', <Reveal caseData={c} treasureGuess="" solvedLocks={[]} restart={noop} go={noop} onHome={noop} {...props} />)

  it('treats "no single killer" (accused no one) as the correct, honest verdict', () => {
    const { container } = render_({
      accused: [],
      accident: true,
      proof: { motive: 'saksitruk', means: 'jasad', opportunity: 'laporan' },
      examined: ['rekaman'],
    })
    expect(container.textContent).toContain(UI.en.reveal.verdictRight)
    expect(container.textContent).toContain('no single culprit') // the reframed verdict label
  })

  it('treats accusing a single person (even Heru) as "not quite", with a rebuttal', () => {
    const { container } = render_({ accused: ['heru'], accident: false, proof: {}, examined: [] })
    expect(container.textContent).toContain(UI.en.reveal.verdictWrong)
    expect(container.textContent).toContain('baited the riot') // Heru's rebuttal
  })
})
