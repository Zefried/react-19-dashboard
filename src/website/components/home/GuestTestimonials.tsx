import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Styles/GuestTestimonials.css';

export const GuestTestimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        '“A truly unique experience — not just a stay, but a journey into the heritage and culture of Assam. The traditional house, peaceful garden and warm hospitality made our visit unforgettable.”',
      author: '— Guest from Delhi',
    },
    {
      id: 2,
      quote:
        '“Walking through the medicinal herb garden and learning about the family’s legacy felt so grounding. Far East Heritage is truly a living cultural sanctuary in Upper Assam.”',
      author: '— Guest from Kolkata',
    },
    {
      id: 3,
      quote:
        '“The bamboo craftsmanship, authentic Assamese home-cooked cuisine, and historic atmosphere make this one of the most peaceful places we have ever stayed.”',
      author: '— Guest from Bangalore',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="gt1" id="guest-testimonials">
      <div className="gt2">
        <div className="gt3">
          {/* Left Title */}
          <div className="gt4">
            <span className="gt5">KIND WORDS</span>
            <h2 className="gt6">What Our Guests Say</h2>
          </div>

          {/* Right Carousel Block */}
          <div>
            <div className="gt7">
              <button
                type="button"
                onClick={handlePrev}
                className="gt11"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="gt8">
                <p className="gt9">{current.quote}</p>
                <span className="gt10">{current.author}</span>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="gt11"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="gt12">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`gt13 ${currentIndex === idx ? 'gt13-active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
