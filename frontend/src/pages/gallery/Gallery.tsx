import { useState } from "react";
import { Helmet } from "react-helmet-async";
import imageGallery from "./imageGallery";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ScrollToTop from "../../scrollToTop/ScrollToTop";
const images_per_page = 20;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(imageGallery.length / images_per_page);
  const start = (currentPage - 1) * images_per_page;
  const end = start + images_per_page;
  const currentImages = imageGallery.slice(start, end);

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleImageClick = (index: number) => {
    setActiveIndex(start + index); // actual index from full gallery
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveIndex(null);
  };

  const showPrev = () => {
    if (activeIndex !== null) {
      setActiveIndex((prev) =>
        prev! > 0 ? prev! - 1 : imageGallery.length - 1
      ); // loop to end
    }
  };

  const showNext = () => {
    if (activeIndex !== null) {
      setActiveIndex((prev) =>
        prev! < imageGallery.length - 1 ? prev! + 1 : 0
      ); // loop to start
    }
  };

  return (
    <>
      <ScrollToTop>
        <>
          <Helmet>
            <title>Gallery | Hotel Mahendra Jalgaon</title>
            <meta
              name="description"
              content="Explore beautiful rooms, lobby, and dining areas of our hotel"
            />
          </Helmet>

          <div className="p-4 w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-2 md:mb-6 md:text-4xl lg:text-5xl">
              Hotel Gallery
            </h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 rounded-lg">
              {currentImages.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Image ${start + index + 1}`}
                  loading="lazy"
                  className="w-full h-50 lg:h-55  shadow cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg"
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>

            <div className="flex flex-row items-center gap-6 mt-4">
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300  active:bg-gray-400 active:scale-95 transition-all ease-in-out cursor-pointer border border-gray-500"
              >
                Previous
              </button>

              <span>
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded border border-gray-500 disabled:opacity-50 hover:bg-gray-300 active:bg-gray-400 active:scale-95 transition-all duration-150 ease-in-out cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>

          {/* Lightbox Modal */}
          {lightboxOpen && activeIndex !== null && (
            <>
              <style>{`body { overflow: hidden; }`}</style>

              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white text-2xl md:text-3xl hover:text-4xl cursor-pointer transition-all z-50"
                  onClick={closeLightbox}
                >
                  ❌
                </button>

                {/* Left Arrow */}
                <button
                  onClick={showPrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl bg-black/40 p-2 rounded-full hover:bg-black/70 transition-all active:bg-black/70 z-50 cursor-pointer"
                >
                  <IoIosArrowBack />
                </button>

                {/* Main Image */}
                <img
                  src={imageGallery[activeIndex]}
                  alt="Large View"
                  className="max-w-[90vw] max-h-[80vh] w-auto h-auto rounded shadow-lg transition duration-500 ease-in-out z-40"
                />

                {/* Right Arrow */}
                <button
                  onClick={showNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl bg-black/40 p-2 rounded-full hover:bg-black/70  transition-all active:bg-black/70 z-50 cursor-pointer"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </>
          )}
        </>
      </ScrollToTop>
    </>
  );
}
