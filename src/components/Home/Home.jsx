import React, { useState, useEffect } from "react";
import Information from "./Information";
import Technologies from "./Technologies";

function Home() {
  const images = [
    "https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/10/19/10/43/social-media-3758364_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152_960_720.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="overflow-x-hidden">
      {/* Image Carousel */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh]"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 md:p-3 rounded-full focus:outline-none hover:bg-opacity-75"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 md:p-3 rounded-full focus:outline-none hover:bg-opacity-75"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </section>

      {/* Information Section */}
      <section className="p-4 sm:p-6 md:p-8 lg:px-16">
        <Information />
      </section>

      {/* Technologies Section */}
      <section className="p-4 sm:p-6 md:p-8 lg:px-16">
        <Technologies />
      </section>
    </div>
  );
}

export default Home;
