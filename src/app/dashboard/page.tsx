"use client";

import { useEffect, useState } from "react";
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
import { Poll } from "@/types/poll";
import Link from "next/link";

export default function DashboardPage() {
  const [polls, setPolls] = useState<Poll[]>([]);

  useEffect(() => {
    const supabase = createClient();
    const getUserPolls = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data: polls, error } = await supabase
          .from("polls")
          .select("*, poll_options(*)")
          .eq("user_id", user.id);

        if (error) {
          console.error("Error fetching polls:", error);
        } else {
          setPolls(polls as Poll[]);
        }
      }
    };

    getUserPolls();
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
        {/* Dashboard Content */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {polls.map((poll) => (
            <Card
              key={poll.id}
              className="hover:shadow-lg transition-shadow border-border"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                  {poll.question}
                </CardTitle>
                <CardDescription>
                  <Link href={`/polls/${poll.id}`}>
                    <Button variant="link">View Poll</Button>
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  {poll.poll_options.map((option) => (
                    <li
                      key={option.id}
                      className="flex justify-between items-center"
                    >
                      {option.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
