import { PollForm } from "@/components/pollForm";

export default function NewPollPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Create a New Poll</h1>
      <PollForm />
    </section>
  );
}
