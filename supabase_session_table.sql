-- ============================================
-- NurseMind - In-Progress Sessions Table
-- Run this in Supabase SQL Editor
-- ============================================

-- Stores active (in-progress) exam and mission sessions
create table if not exists public.active_sessions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  session_type text not null check (session_type in ('exam', 'mission')),
  -- Exam fields
  exam_id text,
  exam_name text,
  -- Mission fields
  mission_id text,
  mission_title text,
  mission_category text,
  mission_numerical_id integer,
  -- Progress
  current_index integer not null default 0,
  total_items integer not null,
  answers jsonb not null default '[]'::jsonb,
  -- Timestamps
  started_at timestamptz default now(),
  updated_at timestamptz default now(),
  -- One active session per user per exam/mission
  unique(user_id, session_type, exam_id),
  unique(user_id, session_type, mission_id)
);

-- Index for fast lookups
create index if not exists idx_active_sessions_user on public.active_sessions(user_id);

-- Row Level Security
alter table public.active_sessions enable row level security;

create policy "Users can view own sessions"
  on public.active_sessions for select
  using (auth.uid() = user_id);

create policy "Users can insert own sessions"
  on public.active_sessions for insert
  with check (auth.uid() = user_id);

create policy "Users can update own sessions"
  on public.active_sessions for update
  using (auth.uid() = user_id);

create policy "Users can delete own sessions"
  on public.active_sessions for delete
  using (auth.uid() = user_id);