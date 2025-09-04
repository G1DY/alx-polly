"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Poll } from "@/types/poll";
import { createClient } from "@/lib/supabase/client";

type VoteCount = {
  option_id: string;
  option_text: string;
  vote_count: number;
};

type Props = {
  poll: Poll;
  userVote?: string;
  userId?: string;
  voteCounts: VoteCount[];
};

export function VoteForm({ poll, userVote, userId, voteCounts }: Props) {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    userVote,
  );
  const [isVoting, setIsVoting] = useState(false);

  const totalVotes = voteCounts.reduce(
    (acc, curr) => acc + Number(curr.vote_count),
    0,
  );

  const handleVote = async () => {
    if (!selectedOption || !userId) return;

    setIsVoting(true);
    const supabase = createClient();

    // Upsert the vote: insert a new one, or update if the user changes their mind.
    // Supabase's ON CONFLICT is great for this, but we need a unique constraint on (poll_id, user_id).
    // Let's assume the table was created with `UNIQUE(user_id, poll_id)`.
    // The RLS policy should also allow updates.
    // For simplicity here, we'll just delete and insert.

    // First, delete any existing vote for this poll by the user
    if (userVote) {
      await supabase
        .from("votes")
        .delete()
        .eq("poll_id", poll.id)
        .eq("user_id", userId);
    }

    // Then, insert the new vote
    const { error } = await supabase.from("votes").insert({
      poll_id: poll.id,
      option_id: selectedOption,
      user_id: userId,
    });

    if (error) {
      console.error("Error voting:", error);
    } else {
      // Refresh the page to show new results
      router.refresh();
    }
    setIsVoting(false);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {voteCounts.map((option) => {
          const percentage =
            totalVotes > 0 ? (option.vote_count / totalVotes) * 100 : 0;
          return (
            <div key={option.option_id}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  {!userVote && (
                    <input
                      type="radio"
                      id={option.option_id}
                      name="vote"
                      value={option.option_id}
                      checked={selectedOption === option.option_id}
                      onChange={() => setSelectedOption(option.option_id)}
                      className="mr-3"
                    />
                  )}
                  <label
                    htmlFor={option.option_id}
                    className={`font-medium ${
                      userVote === option.option_id ? "text-primary" : ""
                    }`}
                  >
                    {option.option_text}
                  </label>
                </div>
                {userVote && (
                  <span className="text-sm font-bold">
                    {option.vote_count} vote(s) ({percentage.toFixed(1)}%)
                  </span>
                )}
              </div>
              {userVote && (
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {!userVote && (
        <Button onClick={handleVote} disabled={!selectedOption || isVoting}>
          {isVoting ? "Voting..." : "Vote"}
        </Button>
      )}
    </div>
  );
}
