"use client";
import { supabase } from "@/domains/shared/lib/supabaseClient";

export function VoteButton({ pollId }: { pollId: string }) {
  const vote = async (optionId: string) => {
    await supabase.from("votes").insert({ pollId, optionId });
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => vote("1")}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Vote Option 1
      </button>
      <button
        onClick={() => vote("2")}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Vote Option 2
      </button>
    </div>
  );
}
