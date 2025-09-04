"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export function DeletePollButton({ pollId }: { pollId: string }) {
  const supabase = createClient();
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      const { error } = await supabase.from("polls").delete().eq("id", pollId);

      if (error) {
        console.error("Error deleting poll:", error);
      } else {
        // Refresh page so poll disappears
        window.location.reload();
      }
    });
  };

  return (
    <Button variant="destructive" onClick={handleDelete} disabled={isPending}>
      {isPending ? "Deleting..." : "Delete"}
    </Button>
  );
}
