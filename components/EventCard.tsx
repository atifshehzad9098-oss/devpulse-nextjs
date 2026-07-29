import Link from "next/link";
import { Event } from "@/lib/events";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition duration-300">

      <h2 className="text-2xl font-bold text-gray-800">
        {event.title}
      </h2>

      <p className="text-blue-600 mt-2">
        {event.category}
      </p>

      <div className="mt-4 space-y-1 text-gray-600">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Speaker:</strong> {event.speaker}</p>
        <p><strong>Venue:</strong> {event.venue}</p>
        <p><strong>RSVP:</strong> {event.rsvp}</p>
      </div>

      <Link
        href={`/events/${event.id}`}
        className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        View Details
      </Link>

    </div>
  );
}