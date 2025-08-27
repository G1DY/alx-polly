"use client";
import Link from "next/link";
import { LoginButton } from "@/domains/auth/loginButton";
import { LogoutButton } from "@/domains/auth/logoutButton";
import { useAuth } from "@/domains/auth/authProvider";

export function Navbar() {
  const { user } = useAuth();

  return (
    <header className="border-b bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg text-blue-600">
          Pollify
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/polls/create" className="hover:underline">
            Create
          </Link>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          {user ? <LogoutButton /> : <LoginButton />}
        </div>
      </nav>
    </header>
  );
}
