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

type PollOption = {
  id: string;
  text: string;
  poll_id: string;
};

type Poll = {
  id: string;
  question: string;
  created_by: string;
  poll_options: PollOption[];
};

export default function DashboardPage() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    const fetchPolls = async () => {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        console.warn("No user found, skipping fetch.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("polls")
        .select("*, poll_options(*)")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching polls:", error);
      } else {
        setPolls(data || []);
      }

      setLoading(false);
    };

    fetchPolls();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading polls...</p>;
  }

  if (polls.length === 0) {
    return <p className="text-center py-10">No polls yet. Create one!</p>;
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
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
                <CardDescription>Vote for your favorite option</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  {poll.poll_options.map((option) => (
                    <li
                      key={option.id}
                      className="flex justify-between items-center"
                    >
                      {option.text}
                      <Button
                        size="sm"
                        variant="secondary"
                        aria-label={`Vote for ${option.text}`}
                      >
                        Vote
                      </Button>
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
