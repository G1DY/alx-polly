"use client";

import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, PlusCircle, User as UserIcon, Menu } from "lucide-react";
import { FaPoll } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function SiteNavbar() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    const getInitialUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getInitialUser();

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="ml-16 mr-6 flex items-center space-x-2">
          <FaPoll className="h-5 w-5 text-primary" />
          <span className="font-bold">AlxPolly</span>
        </Link>

        {/* Center: Nav links (hidden on mobile, flex on md+) */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            href="/polls/create"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Create Poll
          </Link>
        </div>

        {/* Right: Auth + Hamburger for mobile */}
        <div className="flex items-center space-x-2">
          {/* Auth buttons */}
          {user ? (
            <>
              <span className="hidden sm:inline text-sm text-muted-foreground">
                {user.email}
              </span>
              <Button variant="secondary" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  <UserIcon className="mr-2 h-4 w-4" /> Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">
                  <PlusCircle className="mr-2 h-4 w-4" /> Sign Up
                </Button>
              </Link>
            </>
          )}

          {/* Hamburger menu (mobile only) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col space-y-4 mt-8">
              <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Dashboard
              </Link>
              <Link
                href="/polls/create"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Create Poll
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
