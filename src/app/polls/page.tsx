// src/app/polls/page.tsx
// To ensure this page works, run the following commands in your terminal:
//
// Install Next.js (if not already installed):
//   npm install next react react-dom
//
// Install Tailwind CSS (if not already installed):
//   npm install -D tailwindcss postcss autoprefixer
//   npx tailwindcss init -p
//
// Install shadcn/ui components (if you are using them):
//   npx shadcn-ui@latest add card badge
//
// (Optional) If you see errors about @radix-ui/react-label or class-variance-authority, install them:
//   npm install @radix-ui/react-label class-variance-authority
//
// After installing, restart your dev server if needed.

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function PollsIndexPage() {
  // Placeholder list; later replace with server fetch
  const polls = [
    { id: "1", title: "Favorite frontend framework?", votes: 124 },
    { id: "2", title: "Best JS runtime for APIs?", votes: 87 },
  ];

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Polls</h1>
        <p className="text-muted-foreground">
          Browse and vote on active polls.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {polls.map((poll) => (
          <Link key={poll.id} href={`/polls/${poll.id}`}>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">
                  {poll.title}
                </CardTitle>
                <CardDescription>
                  <Badge variant="secondary">{poll.votes} votes</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Tap to view and vote
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
