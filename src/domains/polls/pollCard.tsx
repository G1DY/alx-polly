import Link from "next/link";
import { Poll } from "./poll.types";

export function PollCard({ poll }: { poll: Poll }) {
  return (
    <Link
      href={`/polls/${poll.id}`}
      className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
    >
      <h3 className="font-semibold text-lg mb-2">{poll.question}</h3>
      <p className="text-sm text-gray-500">
        Created {new Date(poll.createdAt).toLocaleString()}
      </p>
    </Link>
  );
}
