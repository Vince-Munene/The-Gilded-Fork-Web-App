import React, { useState, useEffect, useRef } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const colors = [
  'rgba(0,0,0,0.5)',
  'rgba(255, 140, 0, 0.5)',
  'rgba(220, 20, 60, 0.5)',
  'rgba(30, 144, 255, 0.5)'
];

const name = 'The Gilded Fork';

export default function Carousel({ slides, setPage }) {
  const [current, setCurrent] = useState(0);
  const [texts, setTexts] = useState(['', '', '', '']);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);
  const carouselRef = useRef(null);

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isPaused && !isTransitioning) {
        nextSlide();
      }
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const resetTypewriter = (slideIndex) => {
    setTexts(prev => {
      const newTexts = [...prev];
      newTexts[slideIndex] = '';
      return newTexts;
    });
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const nextIndex = current === slides.length - 1 ? 0 : current + 1;
    setCurrent(nextIndex);
    resetTypewriter(nextIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const prevIndex = current === 0 ? slides.length - 1 : current - 1;
    setCurrent(prevIndex);
    resetTypewriter(prevIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [isPaused, isTransitioning]);

  useEffect(() => {
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    
    if (carouselRef.current) {
      carouselRef.current.addEventListener('mouseenter', handleMouseEnter);
      carouselRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('mouseenter', handleMouseEnter);
        carouselRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const currentText = texts[current];
    if (currentText.length < name.length) {
      const timer = setTimeout(() => {
        setTexts(prev => {
          const newTexts = [...prev];
          newTexts[current] = name.slice(0, currentText.length + 1);
          return newTexts;
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [texts, current]);

  return (
    <div 
      ref={carouselRef}
      className="w-full h-[60vh] md:h-screen overflow-hidden relative flex items-center justify-center"
    >
      <div
        className="w-full h-full flex transition-all ease-in-out duration-700"
        style={{ 
          transform: `translateX(-${current * 100}%)`,
          filter: isTransitioning ? 'brightness(0.9)' : 'brightness(1)'
        }}
      >
        {slides.slice(0, 4).map((s, idx) => (
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
                className="flex flex-col items-center justify-center px-4 py-4 rounded-2xl"
                style={{ background: colors[idx % colors.length], maxWidth: '28rem', width: '100%' }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2 text-center" style={{ fontFamily: 'cursive', minHeight: '3.5em', background: 'transparent' }}>
                  {texts[idx]}
                  <span className="animate-pulse">|</span>
                </h1>
                <p className="text-white text-lg md:text-2xl mb-4 text-center" style={{ background: 'transparent' }}>
                  Where Culinary Art Meets Timeless Tradition
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('signature-dishes');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-yellow-400 text-yellow-600 hover:text-white rounded-xl w-12 h-16 flex items-center justify-center transition-all duration-300 focus:outline-none transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous Slide"
        tabIndex={0}
        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
      >
        <FaArrowCircleLeft size={36} />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-yellow-400 text-yellow-600 hover:text-white rounded-xl w-12 h-16 flex items-center justify-center transition-all duration-300 focus:outline-none transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next Slide"
        tabIndex={0}
        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
      >
        <FaArrowCircleRight size={36} />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.slice(0, 4).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!isTransitioning && idx !== current) {
                setIsTransitioning(true);
                setCurrent(idx);
                resetTypewriter(idx);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current 
                ? 'bg-yellow-400 scale-125' 
                : 'bg-white bg-opacity-60 hover:bg-opacity-80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}