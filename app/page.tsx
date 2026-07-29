import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 px-6">

      <h1 className="text-6xl font-extrabold text-gray-900 mb-6">
        DevPulse
      </h1>

      <p className="text-xl text-gray-700 max-w-3xl text-center mb-8">
        Discover the latest technology conferences, developer meetups,
        AI events, frontend workshops, and DevOps communities.
      </p>

      <Link
        href="/events"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition"
      >
        Explore Events
      </Link>

    </main>
  );
}