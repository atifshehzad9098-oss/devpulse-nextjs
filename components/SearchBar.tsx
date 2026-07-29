"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch() {
    const query = search.trim();
        if (query === "") {
            router.push("/events");
        } else {
            router.push(`/events?search=${encodeURIComponent(query)}`);
        }
    }

  return (
    <div className="flex gap-2">

      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-3 py-2 text-black w-64"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>

    </div>
  );
}