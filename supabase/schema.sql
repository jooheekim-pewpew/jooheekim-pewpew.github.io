create extension if not exists "pgcrypto";

create table if not exists public.consultation_inquiries (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  phone text not null,
  business_type text not null,
  inquiry_category text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  constraint consultation_inquiries_status_check
    check (status in ('new', 'contacted', 'closed'))
);

alter table public.consultation_inquiries enable row level security;

grant usage on schema public to anon;
grant insert on public.consultation_inquiries to anon;

create policy "Anyone can submit consultation inquiries"
  on public.consultation_inquiries
  for insert
  to anon
  with check (true);

insert into storage.buckets (id, name, public)
values
  ('company-assets', 'company-assets', true),
  ('service-documents', 'service-documents', false)
on conflict (id) do nothing;
