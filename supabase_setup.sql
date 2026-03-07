-- ============================================
-- NurseMind Informatics - Database Schema
-- Run this in Supabase SQL Editor (one time)
-- ============================================

-- 1. PROFILES TABLE
-- Stores student display names, linked to Supabase auth
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text not null default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. EXAM RESULTS TABLE
-- Stores every exam attempt with per-question detail
create table if not exists public.exam_results (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  exam_id text not null,
  exam_name text not null,
  score integer not null,
  total integer not null,
  percentage numeric(5,2) not null,
  answers jsonb not null default '[]'::jsonb,
  completed_at timestamptz default now()
);

-- 3. MISSION RESULTS TABLE
-- Stores every mission attempt with per-step detail
create table if not exists public.mission_results (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  mission_id text not null,
  mission_title text not null,
  category text not null default '',
  score integer not null,
  total integer not null,
  percentage numeric(5,2) not null,
  steps jsonb not null default '[]'::jsonb,
  completed_at timestamptz default now()
);

-- 4. INDEXES for fast queries
create index if not exists idx_exam_results_user on public.exam_results(user_id);
create index if not exists idx_exam_results_completed on public.exam_results(completed_at);
create index if not exists idx_mission_results_user on public.mission_results(user_id);
create index if not exists idx_mission_results_completed on public.mission_results(completed_at);

-- 5. ROW LEVEL SECURITY
-- Profiles: users can read/update only their own profile
alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Exam results: users can read/insert only their own results
alter table public.exam_results enable row level security;

create policy "Users can view own exam results"
  on public.exam_results for select
  using (auth.uid() = user_id);

create policy "Users can insert own exam results"
  on public.exam_results for insert
  with check (auth.uid() = user_id);

-- Mission results: users can read/insert only their own results
alter table public.mission_results enable row level security;

create policy "Users can view own mission results"
  on public.mission_results for select
  using (auth.uid() = user_id);

create policy "Users can insert own mission results"
  on public.mission_results for insert
  with check (auth.uid() = user_id);

-- 6. AUTO-CREATE PROFILE ON SIGNUP
-- Trigger that creates a profile row when a new user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', ''));
  return new;
end;
$$ language plpgsql security definer;

-- Drop trigger if exists, then create
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();