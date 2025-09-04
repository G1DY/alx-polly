import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { Poll } from "@/types/poll";
import { notFound } from "next/navigation";
import { VoteForm } from "./vote-form";

type Props = { params: { pollId: string } };

export default async function PollDetailsPage({ params }: Props) {
  const { pollId } = params;
  const supabase = await createClient();

  const { data: pollData, error } = await supabase
    .from("polls")
    .select("*, poll_options(*)")
    .eq("id", pollId)
    .single();

  if (error || !pollData) {
    notFound();
  }

  const poll: Poll = pollData;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: voteData } = await supabase
    .from("votes")
    .select("option_id")
    .eq("poll_id", pollId)
    .eq("user_id", user?.id)
    .single();

  const { data: voteCounts, error: voteCountsError } = await supabase.rpc(
    "get_vote_counts",
    {
      poll_id_param: pollId,
    },
  );

  if (voteCountsError) {
    console.error("Error fetching vote counts:", voteCountsError);
    // Handle error appropriately
  }
  return (
    <section className="py-10">
      <Card>
        <CardHeader>
          <CardTitle>{poll.question}</CardTitle>
          <CardDescription>
            Cast your vote by selecting one of the options below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <VoteForm
            poll={poll}
            userVote={voteData?.option_id}
            userId={user?.id}
            voteCounts={voteCounts || []}
          />
        </CardContent>
      </Card>
    </section>
  );
}
