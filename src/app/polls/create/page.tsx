// src/app/polls/create/page.tsx
import PollCreateForm from "@/domains/polls/pollCreateForm";

export default function CreatePollPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Create a New Poll</h1>
      <PollCreateForm />
    </section>
  );
}
