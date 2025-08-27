"use client";
import { supabase } from "@/domains/shared/lib/supabaseClient";

export function LoginButton() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: "github" });
  };
  return (
    <button
      onClick={login}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      Login
    </button>
  );
}
