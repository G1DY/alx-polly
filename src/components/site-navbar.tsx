"use client";

import Link from "next/link";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export default function SiteNavbar() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Polly
          </Link>
          <div className="flex items-center">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="mr-4 text-gray-600 hover:text-gray-800"
                >
                  Dashboard
                </Link>
                <Link
                  href="/polls/create"
                  className="mr-4 text-gray-600 hover:text-gray-800"
                >
                  Create Poll
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="mr-4 text-gray-600 hover:text-gray-800"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}