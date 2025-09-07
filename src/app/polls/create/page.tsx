"use client";
import { useState, useTransition } from "react";
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
import { createPoll } from "./actions";

export default function CreatePollPage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    startTransition(async () => {
      const result = await createPoll(formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  };

  return (
    <section className="max-w-xl mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Create a Poll</CardTitle>
          <CardDescription>Ask a question and add options.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="question">Question</Label>
              <Input
                id="question"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="What's your question?"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Options</Label>
              <div className="space-y-2">
                {options.map((opt, idx) => (
                  <Input
                    key={idx}
                    name="options"
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

            {error && (
              <p className="text-sm font-medium text-red-500">{error}</p>
            )}

            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating..." : "Create Poll"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
