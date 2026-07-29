import { events } from "@/lib/events";
import Link from "next/link";
import RSVPButton from "@/components/RSVPButton";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EventDetails({ params }: PageProps) {
  const { id } = await params;

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <h1 className="text-3xl font-bold text-red-600">
        Event Not Found
      </h1>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">

      <h1 className="text-4xl font-bold mb-6">
        {event.title}
      </h1>

      <div className="space-y-3 text-lg">

        <p>
          <strong>Category:</strong> {event.category}
        </p>

        <p>
          <strong>Date:</strong> {event.date}
        </p>

        <p>
          <strong>Speaker:</strong> {event.speaker}
        </p>

        <p>
          <strong>Venue:</strong> {event.venue}
        </p>
        <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(event.venue)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
            >
            View on Google Maps
        </a>

        <p>
          <strong>RSVP Count:</strong> {event.rsvp}
        </p>

        <p>
          <strong>Description:</strong>
        </p>

        <p className="text-gray-700">
          {event.description}
        </p>

      </div>

    <div className="mt-8 space-y-4">

        <RSVPButton />

        <div>
            <Link
            href="/events"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
            ← Back to Events
            </Link>
        </div>

    </div>

    </div>
  );
}