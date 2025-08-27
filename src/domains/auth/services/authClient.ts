// src/domains/auth/services/authClient.ts
import { supabase } from "@/domains/shared/lib/supabaseClient";

export const authClient = {
  loginWithGithub: () => supabase.auth.signInWithOAuth({ provider: "github" }),
  logout: () => supabase.auth.signOut(),
  getUser: () => supabase.auth.getUser(),
};
