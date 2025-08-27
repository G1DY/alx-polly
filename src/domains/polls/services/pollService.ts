import { supabase } from "@/domains/shared/lib/supabaseClient";
import { Poll } from "../poll.types";

export const pollService = {
  async createPoll(poll: Partial<Poll>) {
    const { data, error } = await supabase
      .from("polls")
      .insert(poll)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
  async getPoll(id: string) {
    const { data, error } = await supabase
      .from("polls")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },
  async listPolls() {
    const { data, error } = await supabase
      .from("polls")
      .select("*")
      .order("createdAt", { ascending: false });
    if (error) throw error;
    return data;
  },
};
