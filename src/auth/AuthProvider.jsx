import { createContext, useContext, useEffect, useState } from 'react'
import { getSupabase, isSupabaseConfigured } from '../lib/supabase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(isSupabaseConfigured)

  useEffect(() => {
    if (!isSupabaseConfigured) return
    let active = true
    let unsub = () => {}
    ;(async () => {
      const sb = await getSupabase()
      if (!active || !sb) return
      const { data } = await sb.auth.getSession()
      setSession(data.session)
      setLoading(false)
      const { data: listener } = sb.auth.onAuthStateChange((_event, s) => setSession(s))
      unsub = () => listener.subscription.unsubscribe()
    })()
    return () => {
      active = false
      unsub()
    }
  }, [])

  const value = {
    configured: isSupabaseConfigured,
    session,
    user: session?.user ?? null,
    loading,
    async signUp(email, password) {
      const sb = await getSupabase()
      return sb.auth.signUp({ email, password })
    },
    async signIn(email, password) {
      const sb = await getSupabase()
      return sb.auth.signInWithPassword({ email, password })
    },
    async signInWithMagicLink(email) {
      const sb = await getSupabase()
      return sb.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: window.location.origin },
      })
    },
    async signOut() {
      const sb = await getSupabase()
      return sb.auth.signOut()
    },
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
