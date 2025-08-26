"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function PollForm() {
  const [options, setOptions] = useState<string[]>([""]);

  return (
    <form className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="title">Poll Question</Label>
        <Input id="title" placeholder="e.g. What's your favorite color?" />
      </div>

      <div className="space-y-2">
        <Label>Options</Label>
        {options.map((opt, i) => (
          <Input
            key={i}
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[i] = e.target.value;
              setOptions(newOptions);
            }}
          />
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() => setOptions([...options, ""])}
        >
          + Add Option
        </Button>
      </div>

      <Button type="submit" className="w-full">
        Create Poll
      </Button>
    </form>
  );
}
