"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/domains/shared/lib/supabaseClient";

// Define a type for a vote row
type Vote = {
  user_id: string;
  pollId: string;
};

export function VoterList({ pollId }: { pollId: string }) {
  const [voters, setVoters] = useState<Vote[]>([]);

  useEffect(() => {
    const fetchVoters = async () => {
      const { data, error } = await supabase
        .from("votes")
        .select("user_id, pollId") // select only the needed columns
        .eq("pollId", pollId);

      if (error) {
        console.error("Error fetching voters:", error);
        return;
      }

      setVoters(data ?? []);
    };

    fetchVoters();
  }, [pollId]);

  return (
    <ul className="text-sm text-gray-600">
      {voters.map((v) => (
        <li key={v.user_id}>User {v.user_id}</li>
      ))}
    </ul>
  );
}
