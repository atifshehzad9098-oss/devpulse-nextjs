import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-2xl font-bold">
          DevPulse
        </h1>

        <div className="flex items-center gap-8">
            <SearchBar />
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <Link href="/" className="hover:text-blue-400">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" className="hover:text-blue-400">
                        Events
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

      </div>
    </header>
  );
}