'use client';
import { useState } from "react";
import { FaPlay, FaPause, FaQuoteLeft, FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Image from 'next/image'; // Make sure to keep this import

const testimonials = [
  {
    id: 1,
    name: "Miss Somya",
    university: "Harvard University",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    testimonialText: "I got my education abroad. Thank you so much.",
    rating: 4.5
  },
  {
    id: 2,
    name: "Mr. Mahendra",
    university: "Harvard University",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/tOwjEOt1zYU?si=GBvjle_nva02ycq9",
    testimonialText: "It's a very good place. I got selected in the US with their support.",
    rating: 5
  },
  {
    id: 3,
    name: "Mrs. Teresa Marry",
    university: "ETH Zurich (Switzerland)",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    testimonialText: "I referred more than 10 people, now they are studying abroad.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setShowModal(true);
  };

  const RatingStars = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <FaStar key={i} className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <FaStarHalf key={i} className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
        );
      } else {
        stars.push(
          <FaRegStar key={i} className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
        );
      }
    }

    return (
      <div className="flex items-center gap-1">
        {stars}
        <span className="ml-2 text-sm sm:text-base text-gray-600">({rating})</span>
      </div>
    );
  };

  const MediaCard = ({ media }) => {
    if (media.mediaType === "video") {
      return (
        <div className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden">
          <iframe
            title={media.name}
            className="w-full h-full object-cover"
            src={media.mediaUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white p-1.5 sm:p-2 rounded-full shadow-lg"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <FaPause className="w-3 h-3 sm:w-4 sm:h-4" /> : <FaPlay className="w-3 h-3 sm:w-4 sm:h-4" />}
          </button>
        </div>
      );
    }

    return (
      <Image
        src={media.mediaUrl}
        alt={media.name}
        width={500}
        height={500}
        className="w-full h-48 sm:h-64 object-cover rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
        onClick={() => handleMediaClick(media)}
        onError={(e) => {
          e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330";
        }}
      />
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">What Our Students Say</h2>
        <p className="text-lg sm:text-xl text-gray-600">Real stories from our students</p>
      </div>

      <div className="relative">
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <button
            onClick={prevTestimonial}
            className="p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <MdNavigateBefore className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-4 sm:p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
              <div className="w-full md:w-1/2">
                <MediaCard media={testimonials[currentIndex]} />
              </div>

              <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <FaQuoteLeft className="text-3xl sm:text-4xl text-blue-500" />
                  <RatingStars rating={testimonials[currentIndex].rating} />
                </div>
                
                <p className="text-base sm:text-xl italic text-gray-700">{testimonials[currentIndex].testimonialText}</p>
                
                <div className="mt-4 sm:mt-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm sm:text-base text-blue-600">{testimonials[currentIndex].university}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next testimonial"
          >
            <MdNavigateNext className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="max-w-4xl w-full">
            <Image
              src={selectedMedia.mediaUrl}
              alt={selectedMedia.name}
              width={800}
              height={800}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsSection;
