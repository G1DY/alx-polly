import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { Poll } from "@/types/poll";

export default async function PollsPage() {
  const supabase = await createClient();
  const { data: pollsData, error } = await supabase
    .from("polls")
    .select("*, poll_options(*)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching polls:", error);
    // Handle the error appropriately
  }

  const polls: Poll[] = pollsData || [];

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Polls</h1>
        <Button asChild>
          <Link href="/polls/create">Create Poll</Link>
        </Button>
      </div>

      {polls.length > 0 ? (
        <div className="grid gap-4">
          {polls.map((poll) => (
            <Link href={`/polls/${poll.id}`} key={poll.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{poll.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    {poll.poll_options.map((option) => (
                      <li key={option.id}>{option.text}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>No polls yet</CardTitle>
            <CardDescription>
              Create your first poll to get started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/polls/create">Create a Poll</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
