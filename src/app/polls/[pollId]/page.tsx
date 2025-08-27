// src/app/polls/[pollId]/page.tsx
import PollResults from "@/domains/polls/pollResults";
import { VoteButton } from "@/domains/votes/voteButton";

export default function PollDetails({
  params,
}: {
  params: { pollId: string };
}) {
  return (
    <div className="space-y-6">
      <PollResults pollId={params.pollId} />
      <VoteButton pollId={params.pollId} />
    </div>
  );
}
