import { getSupabase } from './supabase'

// Fetch a gated case's content from Supabase. RLS decides who may read it:
// Phase 1 (now) — any signed-in user. Phase 2 (paywall) — only entitled users.
// Returns the case JSON, or null if unavailable / not yet published.
export async function fetchStoryContent(storyId) {
  const sb = await getSupabase()
  if (!sb) return null
  const { data, error } = await sb
    .from('story_content')
    .select('content')
    .eq('story_id', storyId)
    .maybeSingle()
  if (error) return null
  return data?.content ?? null
}
