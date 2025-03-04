'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const cards = [
    {
      id: 1,
      title: "Harvard University (USA)",
      text: "A prestigious Ivy League institution offering diverse programs and research opportunities.",
      imageSrc: "/universities/Harvard-University.png"
    },
    {
      id: 2,
      title: "University of Oxford (UK)",
      text: "known for its rich history and academic excellence, offering a wide range of courses.",
      imageSrc: "/universities/courtyard-oxford.png"
    },
    {
      id: 3,
      title: "Stanford University (USA)",
      text: "Famous for its innovation, cutting-edge research, and strong focus on technology and entrepreneurship.",
      imageSrc: "/universities/stanford.png"
    },
    {
      id: 4,
      title: "University of cambridge (UK)",
      text: "Offers a world-class education and a vibrant student experience in a historic city.",
      imageSrc: "/universities/cambridge.png"
    },
    {
      id: 5,
      title: "ETH Zurich (Switzerland)",
      text: "A top-ranked university known for its excellence in science, technology, engineering, and mathematics.",
      imageSrc: "/universities/zurich.png"
    }
  ];

  // Update cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = cards.length - cardsToShow;
  const slideInterval = 3000;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, slideInterval);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  // Calculate card width based on cards to show
  const getCardWidth = () => {
    switch (cardsToShow) {
      case 1:
        return 'w-full';
      case 2:
        return 'w-1/2';
      default:
        return 'w-1/3';
    }
  };

  return (
    <div className='container max-w-9xl mx-auto px-6 lg:px-12'>

      <div className="overflow-hidden relative rounded-lg">
        <div 
          className="flex space-x-2 sm:space-x-4 lg:space-x-6"
          style={{ 
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {cards.map((card) => (
            <div 
              key={card.id}
              className={`flex-none ${getCardWidth()} transform transition-all duration-500 hover:scale-105`}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col transition-shadow duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-2 sm:p-3 lg:p-4 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 line-clamp-2">{card.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm flex-1 line-clamp-3 sm:line-clamp-4">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-300 hover:scale-110"
        disabled={currentIndex === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-300 hover:scale-110"
        disabled={currentIndex >= maxIndex}
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>

      <div className="flex justify-center m-2 sm:mt-3 lg:mt-4 gap-1 sm:gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 transform hover:scale-150 ${
              currentIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default CardSlider;