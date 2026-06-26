-- Run once in Supabase SQL editor to open signup (remove invite allowlist gate).
-- Project: shikwtguxfhefzvfkedo

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;
