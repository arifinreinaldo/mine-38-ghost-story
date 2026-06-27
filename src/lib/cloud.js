import { getSupabase } from './supabase'

// Database-backed per-case progress (Supabase table `public.progress`).
// Every function degrades to a no-op when Supabase isn't configured or there is
// no signed-in user, so the offline / free experience is unchanged.

export async function loadCloudProgress(user) {
  if (!user) return []
  const sb = await getSupabase()
  if (!sb) return []
  const { data, error } = await sb
    .from('progress')
    .select('story_id, state, updated_at')
    .eq('user_id', user.id)
  if (error || !data) return []
  return data
}

export async function upsertCloudProgress(user, storyId, state) {
  if (!user) return
  const sb = await getSupabase()
  if (!sb) return
  // Mirror the local timestamp so cloud/local merges compare on the same clock.
  const updated_at = new Date(state?._ts || Date.now()).toISOString()
  try {
    await sb
      .from('progress')
      .upsert(
        { user_id: user.id, story_id: storyId, state, updated_at },
        { onConflict: 'user_id,story_id' }
      )
  } catch {
    /* ignore — localStorage already holds the authoritative copy */
  }
}

export async function deleteCloudProgress(user, storyId) {
  if (!user) return
  const sb = await getSupabase()
  if (!sb) return
  try {
    await sb.from('progress').delete().eq('user_id', user.id).eq('story_id', storyId)
  } catch {
    /* ignore */
  }
}
