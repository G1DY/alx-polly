import {
  createClient,
  type SupabaseClient,
  type User,
} from "@supabase/supabase-js";

export function getSupabaseServerClient(): SupabaseClient {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function getServerUser(): Promise<User | null> {
  // TODO: bind cookies with Supabase SSR helpers to read session server-side
  return null;
}
