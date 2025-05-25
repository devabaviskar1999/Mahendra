import { useState } from "react";
import { Helmet } from "react-helmet-async";

const images = ["image1", "image2"];
const images_per_page = 20;
export default function Gallery() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(images.length / images_per_page);
  const start = (currentPage - 1) * images_per_page;
  const end = start + images_per_page;
  const currentImages = images.slice(start, end);

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Hotel Mahendra Jalgaon</title>
        <meta
          name="description"
          content="Explore beautiful rooms, lobby, and dining areas of our hotel"
        />
      </Helmet>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Gallery</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {currentImages.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
              loading="lazy"
              className="w-full h-auto rounded shadow"
            />
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
