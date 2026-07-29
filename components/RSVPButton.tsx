"use client";

import { useState } from "react";

export default function RSVPButton() {
  const [isGoing, setIsGoing] = useState(false);

  function handleClick() {
    setIsGoing(!isGoing);
  }

  return (
    <button
      onClick={handleClick}
      className={`mt-6 px-5 py-2 rounded-lg text-white font-semibold transition ${
        isGoing
          ? "bg-green-600 hover:bg-green-700"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {isGoing ? "Going ✓" : "RSVP"}
    </button>
  );
}