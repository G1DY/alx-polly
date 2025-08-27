// src/domains/polls/components/PollCreateForm.tsx
"use client";

import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/domains/shared/lib/supabaseClient";

const pollSchema = z.object({
  question: z.string().min(5),
  options: z.array(z.string().min(1)).min(2).max(6),
});

export default function PollCreateForm() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const parsed = pollSchema.safeParse({ question, options });
    if (!parsed.success) return alert("Invalid poll data");

    setLoading(true);
    const { error } = await supabase.from("polls").insert({
      question,
      options: options.map((o) => ({ text: o, votes: 0 })),
    });
    setLoading(false);

    if (error) alert(error.message);
    else alert("Poll created 🎉");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Create a Poll</h2>
      <input
        type="text"
        placeholder="Poll question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      {options.map((opt, i) => (
        <input
          key={i}
          type="text"
          placeholder={`Option ${i + 1}`}
          value={opt}
          onChange={(e) =>
            setOptions(
              options.map((o, idx) => (idx === i ? e.target.value : o))
            )
          }
          className="w-full p-2 border rounded mb-2"
        />
      ))}
      <button
        onClick={() => setOptions([...options, ""])}
        className="text-blue-600 text-sm mb-3"
      >
        + Add Option
      </button>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-600 text-white p-2 rounded-lg"
      >
        {loading ? "Creating..." : "Create Poll"}
      </button>
    </div>
  );
}
