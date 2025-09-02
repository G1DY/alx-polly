"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import { Poll, PollOption } from "@/types/poll";
import { useCallback, useEffect, useState } from "react";

type Props = { params: { pollId: string } };

type PollResult = PollOption & { votes: number };

export default function PollDetailsPage({ params }: Props) {
  const { pollId } = params;
  const [poll, setPoll] = useState<Poll | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [results, setResults] = useState<PollResult[]>([]);

  const supabase = createClient();

  const fetchResults = useCallback(async () => {
    const { data: votes, error: votesError } = await supabase
      .from("votes")
      .select("option_id")
      .eq("poll_id", pollId);

    if (votesError) {
      console.error("Error fetching votes:", votesError);
    } else {
      const counts = votes.reduce((acc, vote) => {
        acc[vote.option_id] = (acc[vote.option_id] || 0) + 1;
        return acc;
      }, {} as { [key: string]: number });

      const results = poll?.poll_options.map((option) => ({
        ...option,
        votes: counts[option.id] || 0,
      }));
      setResults(results || []);
    }
  }, [pollId, poll?.poll_options, supabase]);

  useEffect(() => {
    const getPoll = async () => {
      const { data: poll, error } = await supabase
        .from("polls")
        .select("*, poll_options(*)")
        .eq("id", pollId)
        .single();

      if (error) {
        console.error("Error fetching poll:", error);
      } else {
        setPoll(poll as Poll);
      }
    };

    getPoll();
  }, [pollId, supabase]);

  const handleVote = async () => {
    if (!selectedOption) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("You must be logged in to vote.");
      return;
    }

    const { error } = await supabase.from("votes").insert({
      poll_id: pollId,
      option_id: selectedOption,
      user_id: user.id,
    });

    if (error) {
      console.error("Error voting:", error);
      alert("You have already voted on this poll.");
    } else {
      alert("Vote submitted!");
      fetchResults();
    }
  };

  useEffect(() => {
    if (poll) {
      fetchResults();
    }
  }, [poll, fetchResults]);

  if (!poll) {
    return <div>Loading...</div>;
  }

  return (
    <section className="max-w-lg mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>{poll.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            {poll.poll_options.map((option) => (
              <Button
                key={option.id}
                variant={selectedOption === option.id ? "default" : "secondary"}
                onClick={() => setSelectedOption(option.id)}
              >
                {option.text}
              </Button>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <Button onClick={handleVote}>Vote</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            {results.map((option) => (
              <div key={option.id} className="flex justify-between">
                <span>{option.text}</span>
                <span>{option.votes}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
