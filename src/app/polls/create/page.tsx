"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";

export default function CreatePollPage() {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreatePoll = async () => {
    setIsCreating(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      // Handle the case where the user is not authenticated
      setIsCreating(false);
      return;
    }

    // 1. Create the poll
    const { data: poll, error: pollError } = await supabase
      .from("polls")
      .insert({ question, user_id: user.id })
      .select()
      .single();

    if (pollError) {
      console.error("Error creating poll:", pollError);
      setIsCreating(false);
      return;
    }

    // 2. Create the poll options
    const { error: optionsError } = await supabase.from("poll_options").insert(
      options
        .filter((opt) => opt.trim() !== "")
        .map((opt) => ({
          text: opt,
          poll_id: poll.id,
        })),
    );

    if (optionsError) {
      console.error("Error creating poll options:", optionsError);
      // Handle the error, e.g., by deleting the created poll
    } else {
      router.push(`/polls/${poll.id}`);
    }
    setIsCreating(false);
  };

  return (
    <section className="max-w-xl mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Create a Poll</CardTitle>
          <CardDescription>Ask a question and add options.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="question">Question</Label>
            <Input
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What's your question?"
            />
          </div>

          <div className="space-y-2">
            <Label>Options</Label>
            <div className="space-y-2">
              {options.map((opt, idx) => (
                <Input
                  key={idx}
                  value={opt}
                  placeholder={`Option ${idx + 1}`}
                  onChange={(e) =>
                    setOptions((prev) =>
                      prev.map((o, i) => (i === idx ? e.target.value : o)),
                    )
                  }
                />
              ))}
            </div>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setOptions((prev) => [...prev, ""])}
            >
              Add option
            </Button>
          </div>

          <Button
            type="button"
            onClick={handleCreatePoll}
            disabled={isCreating}
          >
            {isCreating ? "Creating..." : "Create"}
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
