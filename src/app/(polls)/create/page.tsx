"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePollPage() {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
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
      return;
    }

    console.log("Created poll:", poll);

    // 2. Create the poll options
    const pollOptions = options
      .filter((option) => option.trim() !== "")
      .map((option) => ({
        text: option,
        poll_id: poll.id,
      }));

    const { error: optionsError } = await supabase
      .from("poll_options")
      .insert(pollOptions);

    if (optionsError) {
      console.error("Error creating poll options:", optionsError);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <section className="max-w-lg mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Create a Poll</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="question">Question</Label>
                <Input
                  id="question"
                  placeholder="What's your favorite color?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                />
              </div>
              {options.map((option, index) => (
                <div key={index} className="flex flex-col space-y-1.5">
                  <Label htmlFor={`option-${index}`}>Option {index + 1}</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id={`option-${index}`}
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      required
                    />
                    {options.length > 2 && (
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => removeOption(index)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <Button type="button" variant="secondary" onClick={addOption}>
                Add Option
              </Button>
              <Button type="submit">Create Poll</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
