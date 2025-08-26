import { PollCard } from "@/components/pollCard";

export default function PollsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">All Polls</h1>
      <div className="grid gap-4">
        {/* Example placeholder polls */}
        <PollCard
          title="Best JS framework?"
          options={["React", "Vue", "Svelte"]}
        />
        <PollCard
          title="Morning beverage?"
          options={["Coffee", "Tea", "Juice"]}
        />
      </div>
    </section>
  );
}
