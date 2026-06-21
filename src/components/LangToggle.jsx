import { useLang } from '../i18n/LangProvider'

// Small floating ID / EN switch, fixed bottom-left so it never collides with
// the account control (top-right), back links, or the sticky tab bar.
export default function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang-toggle" role="group" aria-label="Language / Bahasa">
      <button
        className={lang === 'id' ? 'on' : ''}
        aria-pressed={lang === 'id'}
        onClick={() => setLang('id')}
      >
        ID
      </button>
      <button
        className={lang === 'en' ? 'on' : ''}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  )
}
