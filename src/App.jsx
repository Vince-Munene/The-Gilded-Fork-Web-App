import { useState, useEffect } from 'react';
import Header from './Components/Header.jsx';
import Feedback from './Components/Feedback.jsx';
import SigDishes from './Components/Signature-Dishes.jsx';
import Order from './Components/Order.jsx';
import Carousel from "./Components/HeroCarousel.jsx";
import OurStory from "./Components/OurStory.jsx";
import Footer from "./Components/Footer.jsx";
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollTarget, setScrollTarget] = useState(null);

  const handleNavigation = (page) => {
    if (page === 'order') {
      setCurrentPage('order');
      setScrollTarget(null);
    } else {
      setCurrentPage('home');
      setScrollTarget(page);
    }
  };

  useEffect(() => {
    if (currentPage === 'home' && scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setScrollTarget(null);
    }
  }, [currentPage, scrollTarget]);

  let slides = [img1, img2, img3, img4];

  if (currentPage === 'order') {
    return (
      <>
        <Header setPage={handleNavigation} currentPage={currentPage} />
        <Order setPage={handleNavigation} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header setPage={handleNavigation} currentPage={currentPage} />
      <div className='w-screen h-full m-auto' id="home">
        <Carousel slides={slides}/>
      </div>
      <div id="our-story">
        <OurStory />
      </div>
      <div id="signature-dishes">
        <SigDishes />
      </div>
      <div id="feedback">
        <Feedback />
      </div>
      <Footer />
    </>
  );
}

