"use client";
import { supabase } from "@/domains/shared/lib/supabaseClient";

export function LogoutButton() {
  const logout = async () => await supabase.auth.signOut();
  return (
    <button onClick={logout} className="px-4 py-2 border rounded-lg">
      Logout
    </button>
  );
}
