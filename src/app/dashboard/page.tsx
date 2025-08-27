// src/app/dashboard/page.tsx
import { PollCard } from "@/domains/polls/pollCard";

export default function DashboardPage() {
  // Later: fetch polls for logged-in user
  const mockPolls = [
    {
      id: "1",
      question: "Best frontend framework?",
      options: [],
      createdAt: "now",
      createdBy: "user_123",
    },
    {
      id: "2",
      question: "Coffee or Tea?",
      options: [],
      createdAt: "now",
      createdBy: "user_123",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Polls</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {mockPolls.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  );
}
