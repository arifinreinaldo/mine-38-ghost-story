// Supabase is OPTIONAL. The free sample runs fine without it.
// The SDK is dynamically imported so it never weighs down the free build,
// and only loads when auth/gated features are actually used.

const url = import.meta.env.VITE_SUPABASE_URL
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const isSupabaseConfigured = Boolean(url && publishableKey)

let clientPromise = null

export function getSupabase() {
  if (!isSupabaseConfigured) return Promise.resolve(null)
  if (!clientPromise) {
    clientPromise = import('@supabase/supabase-js').then(({ createClient }) =>
      createClient(url, publishableKey)
    )
  }
  return clientPromise
}
