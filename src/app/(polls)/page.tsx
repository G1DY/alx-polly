import { createClient } from "@/lib/supabase/server";
import { Poll } from "@/types/poll";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function PollsListPage() {
  const supabase = await createClient();
  const { data: polls, error } = await supabase
    .from("polls")
    .select("*, poll_options(*)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching polls:", error);
  }

  return (
    <section className="py-10">
      <h1 className="text-2xl font-bold mb-4">Polls</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(polls as Poll[])?.map((poll) => (
          <Link
            href={`/polls/${poll.id}`}
            key={poll.id}
            className="border p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="font-bold">{poll.question}</h2>
            <ul className="text-sm space-y-2 mt-2">
              {poll.poll_options.map((option) => (
                <li key={option.id}>{option.text}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}
