import { useState, useEffect } from 'react';
import Header from './Components/Header.jsx';
import Feedback from './Components/Feedback.jsx';
import SigDishes from './Components/Signature-Dishes.jsx';
import Order from './Components/Order.jsx';
import FullMenu from './Components/FullMenu.jsx'; 
import Carousel from "./Components/HeroCarousel.jsx";
import OurStory from "./Components/OurStory.jsx";
import Footer from "./Components/Footer.jsx";
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuCategory, setMenuCategory] = useState('starters');
  const [scrollTarget, setScrollTarget] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (page, category = null) => {
    if (page === 'order') {
      setCurrentPage('order');
      setScrollTarget(null);
    } else if (page === 'menu') {
      setCurrentPage('menu');
      if (category) {
        setMenuCategory(category);
      }
    } else if ((currentPage === 'order' || currentPage === 'menu') && page === 'home') {
      setCurrentPage('home');
    } else {
      setCurrentPage('home');
      setScrollTarget(page);
    }
  };
  
  let slides = [img1, img2, img3, img4];

  useEffect(() => {
    if (currentPage === 'home' && scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setScrollTarget(null);
    }
  }, [currentPage, scrollTarget]);

  // Render different pages based on currentPage
  if (currentPage === 'order') {
    return (
      <>
        <Header setPage={handleNavigation} currentPage={currentPage} darkMode={darkMode} setDarkMode={setDarkMode} />
        <Order setPage={handleNavigation} />
        <Footer />
      </>
    );
  }
  
  if (currentPage === 'menu') {
    return <FullMenu setPage={handleNavigation} activeCategory={menuCategory} />;
  }

  // Default home page
  return (
    <>
      <Header setPage={handleNavigation} currentPage={currentPage} darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='w-screen h-full m-auto' id="home">
        <Carousel slides={slides} setPage={handleNavigation}/>
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

