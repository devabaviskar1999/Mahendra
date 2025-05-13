const GenreSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col gap-4 p-4 bg-white rounded-xl shadow-md font-sans">
      <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
      <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-300 rounded-xl"></div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default GenreSkeleton;
