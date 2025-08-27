import { supabase } from "@/domains/shared/lib/supabaseClient";

export const voteService = {
  async castVote({ pollId, optionId }: { pollId: string; optionId: string }) {
    const { data, error } = await supabase
      .from("votes")
      .insert({ pollId, optionId })
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};
