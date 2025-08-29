type Props = { params: { pollId: string } };

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PollDetailsPage({ params }: Props) {
  const { pollId } = params;
  return (
    <section className="py-10">
      <Card>
        <CardHeader>
          <CardTitle>Poll {pollId}</CardTitle>
          <CardDescription>
            Details and results will appear here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* TODO: chart or list of options/results */}
          <p className="text-sm text-muted-foreground">Coming soon.</p>
        </CardContent>
      </Card>
    </section>
  );
}
