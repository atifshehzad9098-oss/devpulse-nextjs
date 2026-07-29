import Sidebar from "@/components/Sidebar";

interface EventsLayoutProps {
  children: React.ReactNode;
}

export default function EventsLayout({
  children,
}: EventsLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
}