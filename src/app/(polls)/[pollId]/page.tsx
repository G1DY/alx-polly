type Props = { params: { pollId: string } };

export default function PollDetailsPage({ params }: Props) {
  const { pollId } = params;
  return (
    <section className="py-10">
      <h1 className="text-2xl font-bold mb-4">Poll {pollId}</h1>
      {/* TODO: Show poll details and results */}
      <p className="text-sm text-muted-foreground">Details coming soon.</p>
    </section>
  );
}
