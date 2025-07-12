import React, { useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const overlayColors = [
  'rgba(0,0,0,0.5)',
  'rgba(255, 140, 0, 0.5)',
  'rgba(220, 20, 60, 0.5)',
  'rgba(30, 144, 255, 0.5)'
];

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

  return (
    <div className="w-full h-[60vh] md:h-screen overflow-hidden relative flex items-center justify-center">
      <div
        className="w-full h-full flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, idx) => (
          <div
            key={idx}
            className="w-full h-full flex-shrink-0 relative flex items-center justify-center"
            style={{ minWidth: '100%', height: '100%' }}
          >
            <img
              src={s}
              alt="slide"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
            />
            <div className="absolute w-full h-full flex items-center justify-center top-0 left-0 z-10">
              <div
                className="flex flex-col items-center justify-center px-8 py-6 rounded-2xl"
                style={{ background: overlayColors[idx % overlayColors.length], maxWidth: '90vw' }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 shadow-2xl mb-2 text-center" style={{ fontFamily: 'cursive' }}>
                  The Gilded <br /> Fork
                </h1>
                <p className="text-white text-lg md:text-2xl mb-4 shadow-xl text-center">
                  Where Culinary Art Meets Timeless Tradition
                </p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full shadow-xl transition">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-yellow-400 text-yellow-600 hover:text-white rounded-xl w-12 h-16 flex items-center justify-center transition focus:outline-none"
        aria-label="Previous Slide"
        tabIndex={0}
        style={{ boxShadow: 'none' }}
      >
        <FaArrowCircleLeft size={36} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-yellow-400 text-yellow-600 hover:text-white rounded-xl w-12 h-16 flex items-center justify-center transition focus:outline-none"
        aria-label="Next Slide"
        tabIndex={0}
        style={{ boxShadow: 'none' }}
      >
        <FaArrowCircleRight size={36} />
      </button>
    </div>
  );
}