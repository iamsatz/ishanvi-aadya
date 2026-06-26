-- Learning Adventures — Closed Beta schema
-- Run once in Supabase SQL editor (replaces legacy open homework table)

-- ── Extensions ────────────────────────────────────────────────
create extension if not exists "pgcrypto";

-- ── Enums ─────────────────────────────────────────────────────
do $$ begin
  create type public.board_type as enum (
    'state_lms', 'cbse', 'icse', 'cambridge', 'ib', 'ib_cambridge', 'other'
  );
exception when duplicate_object then null;
end $$;

-- ── Allowed emails (cap beta testers ~15-20) ─────────────────
create table if not exists public.allowed_emails (
  email text primary key,
  created_at timestamptz not null default now()
);

alter table public.allowed_emails enable row level security;

drop policy if exists "allowed_emails read own" on public.allowed_emails;
create policy "allowed_emails read own" on public.allowed_emails
  for select to authenticated
  using (lower(email) = lower(auth.jwt() ->> 'email'));

-- RPC for pre-login allowlist check (returns boolean only, no email leak)
create or replace function public.is_email_allowed(check_email text)
returns boolean
language sql
security definer set search_path = public
as $$
  select exists (
    select 1 from public.allowed_emails
    where lower(email) = lower(check_email)
  );
$$;

grant execute on function public.is_email_allowed(text) to anon, authenticated;

-- ── Profiles ──────────────────────────────────────────────────
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles read own" on public.profiles;
drop policy if exists "profiles insert own" on public.profiles;
drop policy if exists "profiles update own" on public.profiles;

create policy "profiles read own" on public.profiles
  for select to authenticated using (id = auth.uid());
create policy "profiles insert own" on public.profiles
  for insert to authenticated with check (id = auth.uid());
create policy "profiles update own" on public.profiles
  for update to authenticated using (id = auth.uid());

-- Auto-create profile on signup; reject if email not allowlisted
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  if not exists (
    select 1 from public.allowed_emails
    where lower(email) = lower(new.email)
  ) then
    raise exception 'Email not on beta allowlist';
  end if;

  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── Children ──────────────────────────────────────────────────
create table if not exists public.children (
  id uuid primary key default gen_random_uuid(),
  owner uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  grade text not null,
  board public.board_type not null default 'cbse',
  is_demo boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists children_owner_idx on public.children(owner);

alter table public.children enable row level security;

drop policy if exists "children owner all" on public.children;
create policy "children owner all" on public.children
  for all to authenticated
  using (owner = auth.uid())
  with check (owner = auth.uid());

-- ── Subjects ──────────────────────────────────────────────────
create table if not exists public.subjects (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children(id) on delete cascade,
  name text not null,
  icon text not null default '📖',
  created_at timestamptz not null default now()
);

create index if not exists subjects_child_idx on public.subjects(child_id);

alter table public.subjects enable row level security;

drop policy if exists "subjects owner all" on public.subjects;
create policy "subjects owner all" on public.subjects
  for all to authenticated
  using (
    exists (
      select 1 from public.children c
      where c.id = child_id and c.owner = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.children c
      where c.id = child_id and c.owner = auth.uid()
    )
  );

-- ── Syllabus items (subject index / TOC) ──────────────────────
create table if not exists public.syllabus_items (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references public.subjects(id) on delete cascade,
  title text not null,
  ord int not null default 0,
  raw_text text,
  source_image_url text,
  created_at timestamptz not null default now()
);

create index if not exists syllabus_items_subject_idx on public.syllabus_items(subject_id);

alter table public.syllabus_items enable row level security;

drop policy if exists "syllabus owner all" on public.syllabus_items;
create policy "syllabus owner all" on public.syllabus_items
  for all to authenticated
  using (
    exists (
      select 1 from public.subjects s
      join public.children c on c.id = s.child_id
      where s.id = subject_id and c.owner = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.subjects s
      join public.children c on c.id = s.child_id
      where s.id = subject_id and c.owner = auth.uid()
    )
  );

-- ── Lessons (AI-generated or demo) ────────────────────────────
create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children(id) on delete cascade,
  subject_id uuid references public.subjects(id) on delete set null,
  source text not null check (source in ('index', 'homework', 'demo')),
  title text not null,
  subtitle text,
  icon text,
  has_telugu boolean not null default false,
  cards jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists lessons_child_idx on public.lessons(child_id);

alter table public.lessons enable row level security;

drop policy if exists "lessons owner all" on public.lessons;
create policy "lessons owner all" on public.lessons
  for all to authenticated
  using (
    exists (
      select 1 from public.children c
      where c.id = child_id and c.owner = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.children c
      where c.id = child_id and c.owner = auth.uid()
    )
  );

-- ── Homework ──────────────────────────────────────────────────
create table if not exists public.homework (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children(id) on delete cascade,
  subject_id uuid references public.subjects(id) on delete set null,
  task_date date not null,
  title text not null,
  image_url text,
  raw_text text,
  tasks jsonb not null default '[]'::jsonb,
  lesson_id uuid references public.lessons(id) on delete set null,
  created_at timestamptz not null default now()
);

create index if not exists homework_child_idx on public.homework(child_id);

alter table public.homework enable row level security;

drop policy if exists "homework owner all" on public.homework;
create policy "homework owner all" on public.homework
  for all to authenticated
  using (
    exists (
      select 1 from public.children c
      where c.id = child_id and c.owner = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.children c
      where c.id = child_id and c.owner = auth.uid()
    )
  );

-- ── Feedback ──────────────────────────────────────────────────
create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  owner uuid not null references public.profiles(id) on delete cascade,
  message text not null,
  context jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.feedback enable row level security;

drop policy if exists "feedback owner all" on public.feedback;
create policy "feedback owner all" on public.feedback
  for all to authenticated
  using (owner = auth.uid())
  with check (owner = auth.uid());

-- ── Storage (per-user folders) ────────────────────────────────
insert into storage.buckets (id, name, public)
values ('homework', 'homework', true)
on conflict (id) do update set public = true;

drop policy if exists "homework photos public read" on storage.objects;
drop policy if exists "homework photos owner upload" on storage.objects;
drop policy if exists "homework photos owner update" on storage.objects;
drop policy if exists "homework photos owner delete" on storage.objects;
drop policy if exists "homework photos anon upload" on storage.objects;
drop policy if exists "homework photos anon read" on storage.objects;

create policy "homework photos public read" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'homework');

create policy "homework photos owner upload" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'homework'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "homework photos owner update" on storage.objects
  for update to authenticated
  using (
    bucket_id = 'homework'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "homework photos owner delete" on storage.objects
  for delete to authenticated
  using (
    bucket_id = 'homework'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- ── Seed allowlist (replace with your tester emails) ───────────
insert into public.allowed_emails (email) values
  ('test@example.com')
on conflict (email) do nothing;
