"use client";
import { useState } from "react";
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

export default function CreatePollPage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", ""]);

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
                      prev.map((o, i) => (i === idx ? e.target.value : o))
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

          <Button type="button">Create</Button>
        </CardContent>
      </Card>
    </section>
  );
}
