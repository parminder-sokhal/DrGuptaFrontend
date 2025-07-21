import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSwipeCarousel } from "../hook/useSwipeCarousel.js";


const SpecialitiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerScreen, setSlidesPerScreen] = useState(3); // Initially set to 3 for desktop

  const slides = [
    {
      id: 1,
      description: "Lung Cancer",
      image: "/img/LungCancer.jpeg",
      href: "/LungCancer",
    },
    {
      id: 2,
      description: "Pneumonia Treatment",
      image: "/img/Pneumonia.jpeg",
      href: "/PneumoniaTreatment",
    },
    {
      id: 3,
      description: "Bronchial Asthma Treatment",
      image: "/img/BronchialAsthma.jpeg",
      href: "/BronchialAsthma",
    },
    {
      id: 4,
      description: "Tuberculosis (TB) Treatment",
      image: "/img/Tuberculosis.jpeg",
      href: "/Tuberculosis",
    },
    {
      id: 5,
      description: "Interstitial Lung Disease Treatment",
      image: "/img/InterstitialLung.jpeg",
      href: "/InterstitialLung",
    },
    {
      id: 6,
      description: "Diabetes Treatment",
      image: "/img/Diabetes.jpeg",
      href: "/DiabetesTreatment",
    },
    {
      id: 7,
      description: "Hypertension Treatment",
      image: "/img/Hypertension.jpeg",
      href: "/Hypertension",
    },
    {
      id: 8,
      description: "Preventive Cardiology Treatment",
      image: "/img/Cardiology.jpeg",
      href: "/PreventiveCardiology",
    },
    {
      id: 9,
      description: "Sleep Disordered Breathing",
      image: "/img/Sleep.jpeg",
      href: "/SleepDisordered",
    },
    {
      id: 10,
      description: "Pleural Effusion",
      image: "/img/PleuralEffusion.jpeg",
      href: "/PleuralEffusion",
    },
    {
      id: 11,
      description: "Fever Treatment",
      image: "/img/Fever.jpeg",
      href: "/Fever",
    },
    {
      id: 12,
      description: "COPD",
      image: "/img/COPD.jpeg",
      href: "/COPD",
    },
    {
      id: 13,
      description: "Sarcoidosis",
      image: "/img/Sarcoidosis.jpeg",
      href: "/Sarcoidosis",
    },
    {
      id: 14,
      description: "General Physician",
      image: "/img/GeneralPhysician.jpeg",
      href: "/GeneralPhysician",
    },
  ];

  const totalSlides = slides.length;

  // Update slidesPerScreen based on the window size
  useEffect(() => {
    const updateSlidesPerScreen = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerScreen(3); // Desktop (3 items per screen)
      } else if (window.innerWidth >= 768) {
        setSlidesPerScreen(2); // Tablet (2 items per screen)
      } else {
        setSlidesPerScreen(1); // Mobile (1 item per screen)
      }
    };

    updateSlidesPerScreen(); // Set initial value
    window.addEventListener("resize", updateSlidesPerScreen); // Update on resize

    return () => window.removeEventListener("resize", updateSlidesPerScreen); // Cleanup listener
  }, []);

  const updateSlidePosition = (newIndex) => {
    if (newIndex < 0) {
      setCurrentIndex(totalSlides - slidesPerScreen); // Jump to the last slides
    } else if (newIndex >= totalSlides) {
      setCurrentIndex(0); // Jump to the first slide
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const handleNext = () => {
    updateSlidePosition(currentIndex + slidesPerScreen);
  };

  const handlePrev = () => {
    updateSlidePosition(currentIndex - slidesPerScreen);
  };
  const swipeHandlers = useSwipeCarousel({
    onNext: handleNext,
    onPrev: handlePrev,
  });

  return (
    <div className="container mx-auto  lg:px-30 sm:px-14 md:px-18 my-15">
      <div className="flex justify-between items-center mb-4 px-5">
        <h2 className="text-4xl text-black">Treatments</h2>
      </div>

      {/* Carousel Component */}
      <div
        id="centered"
        {...swipeHandlers}
        className="relative w-full transition-transform duration-500 ease-in-out"
      >
        {/* Carousel container */}
        <div className="carousel h-80 overflow-hidden ">
          <div
            className="carousel-body h-full w-full flex "
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerScreen}%)`, // Adjusted to slide based on index
            }}
          >
            {slides.map((slide) => (
              <Link
                key={slide.id}
                to={slide.href}
                className="carousel-slide h-72 flex-shrink-0 w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 p-4" // Responsive layout: 3 items per screen on large screens
              >
                <div className="flex flex-col justify-between items-center  rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-50 object-cover rounded-t-lg mb-4 transition-transform duration-100 ease-in-out hover:scale-105"
                    loading="lazy"
                  />
                  <button
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-800 text-white text-lg font-semibold rounded-xl transition-all duration-300 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      window.location.href = slide.href; // Redirect on button click
                    }}
                  >
                    {slide.description}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          className="carousel-prev absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-white text-blue-700 hover:bg-blue-100 p-3 rounded-full shadow-lg"
        >
          <FaChevronLeft size={24} />
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="carousel-next absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-blue-100 text-blue-700 p-3 rounded-full shadow-lg"
        >
          <FaChevronRight size={24} />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SpecialitiesSlider;
