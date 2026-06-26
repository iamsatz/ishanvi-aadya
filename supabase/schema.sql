-- Ishanvi/Aadya homework cloud — run once in Supabase SQL editor
-- Project: https://supabase.com/dashboard/project/shikwtguxfhefzvfkedo

-- ── Table ─────────────────────────────────────────────────────
create table if not exists public.homework (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  task_date date not null,
  kid text not null check (kid in ('ishanvi', 'aadya')),
  subject text not null,
  title text not null,
  image_url text,
  tasks jsonb not null default '[]'::jsonb
);

alter table public.homework enable row level security;

drop policy if exists "homework anon read" on public.homework;
drop policy if exists "homework anon insert" on public.homework;

create policy "homework anon read" on public.homework
  for select to anon, authenticated using (true);

create policy "homework anon insert" on public.homework
  for insert to anon, authenticated with check (true);

-- ── Storage bucket (homework photos) ───────────────────────────
insert into storage.buckets (id, name, public)
values ('homework', 'homework', true)
on conflict (id) do update set public = true;

drop policy if exists "homework photos public read" on storage.objects;
drop policy if exists "homework photos anon upload" on storage.objects;

create policy "homework photos public read" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'homework');

create policy "homework photos anon upload" on storage.objects
  for insert to anon, authenticated
  with check (bucket_id = 'homework');
