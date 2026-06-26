-- Run in Supabase SQL editor after creating project.
-- Storage: create public bucket named "homework" in Dashboard > Storage.
-- Then run (adjust if using authenticated uploads later):
-- insert policy for storage.objects bucket_id = 'homework' for select and insert to anon

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

-- Demo policy: allow anon read/write (tighten with auth in production).
create policy "homework anon read" on public.homework for select using (true);
create policy "homework anon insert" on public.homework for insert with check (true);
