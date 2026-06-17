-- Maut di Mahameru — Supabase schema
-- Phase 1: registration gate (any signed-in user can read gated case content).
-- Phase 2 (paywall): swap the content policy for an entitlement check (bottom).
-- Run in the Supabase SQL editor.

-- ── Case catalog (public metadata) ──────────────────────────────────────────
create table if not exists public.stories (
  id          text primary key,
  title       text not null,
  blurb       text,
  is_free     boolean not null default false,
  published   boolean not null default false,
  created_at  timestamptz not null default now()
);

alter table public.stories enable row level security;

drop policy if exists "stories are public" on public.stories;
create policy "stories are public"
  on public.stories for select
  using (true);

-- ── Gated case content (the actual case JSON) ───────────────────────────────
create table if not exists public.story_content (
  story_id   text primary key references public.stories(id) on delete cascade,
  content    jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.story_content enable row level security;

-- PHASE 1 — registration gate: any authenticated user may read gated content.
drop policy if exists "content for signed-in users" on public.story_content;
create policy "content for signed-in users"
  on public.story_content for select
  to authenticated
  using (true);

-- ─────────────────────────────────────────────────────────────────────────────
-- PHASE 2 — PAYWALL (uncomment when wiring Stripe). Entitlements become the gate.
-- ─────────────────────────────────────────────────────────────────────────────
-- create table if not exists public.entitlements (
--   user_id    uuid not null references auth.users(id) on delete cascade,
--   story_id   text not null references public.stories(id) on delete cascade,
--   source     text,                       -- e.g. 'stripe', 'revenuecat'
--   created_at timestamptz not null default now(),
--   primary key (user_id, story_id)
-- );
-- alter table public.entitlements enable row level security;
--
-- create policy "users read their own entitlements"
--   on public.entitlements for select
--   to authenticated
--   using (user_id = auth.uid());
--
-- -- Entitlements are written ONLY by the server (Stripe/RevenueCat webhook using
-- -- the SECRET key sb_secret_...), so no insert/update policy is granted to clients.
--
-- -- Replace the Phase 1 content policy with an entitlement-gated one:
-- drop policy if exists "content for signed-in users" on public.story_content;
-- create policy "content for entitled users"
--   on public.story_content for select
--   to authenticated
--   using (
--     exists (
--       select 1 from public.entitlements e
--       where e.user_id = auth.uid()
--         and e.story_id = story_content.story_id
--     )
--   );

-- ── Seed example (fill in when the next case is ready) ───────────────────────
-- insert into public.stories (id, title, blurb, is_free, published)
-- values ('next', 'Kasus Berikutnya', 'Deskripsi singkat…', false, true)
-- on conflict (id) do update set published = excluded.published;
-- insert into public.story_content (story_id, content)
-- values ('next', '{ "evidence": [], "suspects": [] }'::jsonb)
-- on conflict (story_id) do update set content = excluded.content;
