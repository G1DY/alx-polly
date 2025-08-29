import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart3, PlusCircle } from "lucide-react";

export function SiteNavbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-14 items-center justify-between rounded-xl border border-border bg-background/80 backdrop-blur px-4 md:px-6 shadow-md">
      <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
        <BarChart3 className="h-5 w-5 text-primary" />
        <Link
          href="/"
          className="hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
          aria-label="Go to home"
        >
          Polly
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/polls"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
        >
          My Polls
        </Link>
        <Button asChild size="sm" className="gap-1">
          <Link href="/polls/create" aria-label="Create a new poll">
            <PlusCircle className="h-4 w-4" />
            Create Poll
          </Link>
        </Button>
      </div>

      <button
        type="button"
        aria-label="Open account menu"
        className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white grid place-items-center text-sm font-semibold shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        U
      </button>
    </nav>
  );
}


