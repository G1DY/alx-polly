import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, LayoutDashboard, PlusCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <section>
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 flex h-14 items-center justify-between rounded-xl border border-border bg-background/80 backdrop-blur px-4 md:px-6 shadow-md">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <BarChart3 className="h-5 w-5 text-primary" />
            <Link
              href="/"
              className="hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
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

        {/* Dashboard Content */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <LayoutDashboard className="h-5 w-5 text-primary" />
                Best Backend Frameworks
              </CardTitle>
              <CardDescription>Vote for your favorite</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between items-center">
                  Node.js (Express/NestJS)
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for Node.js"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Django
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for Django"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Laravel
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for Laravel"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Spring Boot
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for Spring Boot"
                  >
                    Vote
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <LayoutDashboard className="h-5 w-5 text-primary" />
                Best Frontend Frameworks
              </CardTitle>
              <CardDescription>Pick your top choice</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between items-center">
                  React
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for React"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Vue
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for Vue"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Angular
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for Angular"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Svelte
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for Svelte"
                  >
                    Vote
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <LayoutDashboard className="h-5 w-5 text-primary" />
                Best Databases
              </CardTitle>
              <CardDescription>Relational or NoSQL?</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between items-center">
                  PostgreSQL
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for PostgreSQL"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  MySQL
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for MySQL"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  MongoDB
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for MongoDB"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  SQLite
                  <Button
                    size="xs"
                    variant="secondary"
                    aria-label="Vote for SQLite"
                  >
                    Vote
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
