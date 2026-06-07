-- Vistoo Blog — correr no Supabase SQL Editor
-- Tabela de artigos + RLS (leitura pública, escrita só via service role)

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  content text,
  excerpt text,
  published_at timestamptz not null default now(),
  status text not null default 'published'
);

create index if not exists articles_slug_idx on public.articles (slug);
create index if not exists articles_published_at_idx on public.articles (published_at desc);
create index if not exists articles_status_idx on public.articles (status);

alter table public.articles enable row level security;

-- Leitura pública apenas para artigos publicados
create policy "Public read published articles"
  on public.articles
  for select
  to anon, authenticated
  using (status = 'published');

-- Sem políticas de INSERT/UPDATE/DELETE para anon/authenticated.
-- A service role key ignora RLS e é usada na API route /api/publish.
