"use client";

import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function DashboardPage() {
  useEffect(() => {
    const supabase = createClient();
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
    };

    getUser();
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
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
                    size="sm"
                    variant="secondary"
                    aria-label="Vote for Node.js"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Django
                  <Button
                    size="sm"
                    variant="secondary"
                    aria-label="Vote for Django"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Laravel
                  <Button
                    size="sm"
                    variant="secondary"
                    aria-label="Vote for Laravel"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Spring Boot
                  <Button
                    size="sm"
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
                    size="sm"
                    variant="secondary"
                    aria-label="Vote for React"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Vue
                  <Button
                    size="sm"
                    variant="secondary"
                    aria-label="Vote for Vue"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Angular
                  <Button
                    size="sm"
                    variant="secondary"
                    aria-label="Vote for Angular"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  Svelte
                  <Button
                    size="sm"
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
                    size="sm"
                    variant="secondary"
                    aria-label="Vote for PostgreSQL"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  MySQL
                  <Button
                    size="sm"
                    variant="secondary"
                    aria-label="Vote for MySQL"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  MongoDB
                  <Button
                    size="sm"
                    variant="secondary"
                    aria-label="Vote for MongoDB"
                  >
                    Vote
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  SQLite
                  <Button
                    size="sm"
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
