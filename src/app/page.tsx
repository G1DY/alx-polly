// src/app/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">
        Polls Made Simple. <span className="text-blue-600">Vote Anywhere.</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Create polls in seconds, share them instantly, and get live results. No
        hassle, just simple and powerful polling.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/polls/create"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Create a Poll
        </Link>
        <Link
          href="/dashboard"
          className="px-6 py-3 border rounded-lg shadow hover:bg-gray-100"
        >
          Dashboard
        </Link>
      </div>
    </section>
  );
}
