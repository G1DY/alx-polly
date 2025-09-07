import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { Poll } from "@/types/poll";
import { notFound } from "next/navigation";
import { DeletePollButton } from "../../components/delete-poll-button";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    notFound();
  }

  const { data: pollsData, error } = await supabase
    .from("polls")
    .select("*, poll_options(*)")
    .eq("created_by", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching polls:", error);
    // Handle error appropriately
  }

  const polls: Poll[] = pollsData || [];

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Polls</h1>
        <Button asChild>
          <Link href="/polls/create">Create Poll</Link>
        </Button>
      </div>

      {polls.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {polls.map((poll) => (
            <Card key={poll.id}>
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
              <CardFooter className="flex justify-between">
                <Button asChild variant="secondary">
                  <Link href={`/polls/${poll.id}`}>View Results</Link>
                </Button>
                <DeletePollButton pollId={poll.id} />
              </CardFooter>
            </Card>
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
