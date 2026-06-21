import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { UI } from './strings'

// App-wide language state. Indonesian is the default; the choice is persisted
// so a returning visitor keeps their language. No browser auto-detect (by
// product decision) — visitors start in Indonesian and toggle to English.
const KEY = 'mdm.lang'
const LangContext = createContext({ lang: 'id', setLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(KEY)
      if (saved === 'id' || saved === 'en') return saved
    } catch { /* storage unavailable */ }
    return 'id'
  })

  const setLang = (l) => {
    setLangState(l)
    try { localStorage.setItem(KEY, l) } catch { /* ignore */ }
  }

  useEffect(() => {
    try { document.documentElement.lang = lang } catch { /* ignore */ }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
// UI chrome strings for the active language.
export const useUI = () => UI[useContext(LangContext).lang]
