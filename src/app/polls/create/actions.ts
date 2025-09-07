"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPoll(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be logged in to create a poll." };
  }

  const question = formData.get("question") as string;
  const options = formData.getAll("options") as string[];

  if (!question.trim()) {
    return { error: "Question cannot be empty." };
  }

  const validOptions = options.filter((opt) => opt.trim() !== "");
  if (validOptions.length < 2) {
    return { error: "You must provide at least two options." };
  }

  // 1. Create the poll
  const { data: poll, error: pollError } = await supabase
    .from("polls")
    .insert({ question, created_by: user.id })
    .select()
    .single();

  if (pollError) {
    console.error("Error creating poll:", pollError);
    return { error: "Failed to create the poll. Please try again." };
  }

  // 2. Create the poll options
  const { error: optionsError } = await supabase.from("poll_options").insert(
    validOptions.map((opt) => ({
      text: opt,
      poll_id: poll.id,
    })),
  );

  if (optionsError) {
    console.error("Error creating poll options:", optionsError);
    // If creating options fails, delete the poll to avoid orphaned data
    await supabase.from("polls").delete().eq("id", poll.id);
    return {
      error: "Failed to create poll options. Please try again.",
    };
  }

  revalidatePath("/polls");
  redirect(`/polls/${poll.id}`);
}
