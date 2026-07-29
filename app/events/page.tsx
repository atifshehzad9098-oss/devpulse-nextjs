import EventCard from "@/components/EventCard";
import { events } from "@/lib/events";

interface EventsPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
  }>;
}

export default async function EventsPage({
  searchParams,
}: EventsPageProps) {

  const { category, search } = await searchParams;

  let filteredEvents = events;

  // Category filter
  if (category) {
    filteredEvents = filteredEvents.filter(
      (event) => event.category === category
    );
  }

  // Search filter
  if (search) {
    filteredEvents = filteredEvents.filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">
        Upcoming Tech Events
      </h1>

      {category && (
        <p className="text-gray-600">
          Category: <strong>{category}</strong>
        </p>
      )}

      {search && (
        <p className="text-gray-600 mb-6">
          Search: <strong>{search}</strong>
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <p className="text-red-600 text-xl mt-8">
          No events found.
        </p>
      )}
    </div>
  );
}