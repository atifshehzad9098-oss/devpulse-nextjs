import Link from "next/link";

export default function Sidebar() {
  const categories = ["Frontend", "AI", "DevOps"];

  return (
    <aside className="w-64 bg-white shadow-md p-5 sticky top-0 h-screen">
      <h2 className="text-xl font-bold mb-6">Categories</h2>

      <ul className="space-y-3">
        <li>
          <Link
            href="/events"
            className="block rounded-lg p-3 hover:bg-blue-600 hover:text-white transition"
          >
            All Events
          </Link>
        </li>

        {categories.map((category) => (
          <li key={category}>
            <Link
              href={`/events?category=${category}`}
              className="block rounded-lg p-3 hover:bg-blue-600 hover:text-white transition"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}