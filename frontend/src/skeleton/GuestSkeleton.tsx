export default function GuestSkeleton() {
  return (
    <div className="animate-pulse max-w-full mx-3 sm:mx-0 relative border rounded-xl p-3 mt-1 bg-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <span className="h-9 w-9 rounded-full bg-gray-300"></span>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
}
