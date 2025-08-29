import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PollsPage() {
  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Polls</h1>
        <Button asChild>
          <Link href="/polls/create">Create Poll</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>No polls yet</CardTitle>
          <CardDescription>
            Create your first poll to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/polls/create">Create a Poll</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
