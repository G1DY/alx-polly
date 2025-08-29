export const dynamic = "force-static";

export default function PollsListPage() {
  return (
    <section className="py-10">
      <h1 className="text-2xl font-bold mb-4">Polls</h1>
      {/* TODO: Render list of polls from Supabase */}
      <p className="text-sm text-muted-foreground">No polls yet.</p>
    </section>
  );
}
