export default function Loading() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Loading Events...
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg shadow-md p-6 animate-pulse"
          >
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>

            <div className="h-4 bg-gray-300 rounded w-1/3 mb-3"></div>

            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>

            <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>

            <div className="h-4 bg-gray-300 rounded w-2/3 mb-6"></div>

            <div className="h-10 bg-gray-300 rounded w-32"></div>
          </div>
        ))}
      </div>
    </div>
  );
}