"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/domains/shared/lib/supabaseClient";

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface Poll {
  id: string;
  question: string;
  options: PollOption[];
}

export default function PollResults({ pollId }: { pollId: string }) {
  const [poll, setPoll] = useState<Poll | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPoll = async () => {
      const { data, error } = await supabase
        .from("polls")
        .select("*")
        .eq("id", pollId)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setPoll(data as Poll);
      }
    };

    fetchPoll();

    const channel = supabase
      .channel(`poll-${pollId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "polls",
          filter: `id=eq.${pollId}`,
        },
        (payload: Record<string, unknown>) => {
          setPoll(payload.new as Poll);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [pollId]);

  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!poll) return <p>Loading...</p>;

  const totalVotes = poll.options.reduce((sum, o) => sum + o.votes, 0) || 1;

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">{poll.question}</h2>

      {poll.options.map((opt) => {
        const percentage = ((opt.votes / totalVotes) * 100).toFixed(1);

        return (
          <div key={opt.id} className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>{opt.text}</span>
              <span>
                {opt.votes} votes ({percentage}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded h-3">
              <div
                className="bg-blue-600 h-3 rounded transition-all"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
