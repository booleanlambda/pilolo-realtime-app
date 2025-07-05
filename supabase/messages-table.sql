-- Run this SQL in your Supabase project's SQL editor

create table if not exists messages (
  id bigserial primary key,
  content text not null,
  username text,
  created_at timestamptz not null default now()
);

-- Enable Realtime on the "messages" table in Supabase dashboard
