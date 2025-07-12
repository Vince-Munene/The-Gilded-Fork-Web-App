import { useState } from 'react';
import Header from './Components/Header.jsx';
import Feedback from './Components/Feedback.jsx';
import SigDishes from './Components/Signature-Dishes.jsx';
import Order from './Components/Order.jsx';
import Carousel from "./Components/HeroCarousel.jsx";
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (page) => {
    if (page === 'order') {
      setCurrentPage('order');
    } else if (currentPage === 'order' && page === 'home') {
      setCurrentPage('home');
    } else {
      scrollToSection(page);
    }
  };

  const renderPage = () => {
    if (currentPage === 'order') {
      return <Order setPage={handleNavigation} />;
    }

    let slides = [img1, img2, img3, img4];

    return (
      <div>
          <div className='w-screen h-full m-auto'>
            <Carousel slides={slides}/>
          </div>
        <SigDishes />
        <Feedback />
      </div>
    );
  };

  return (
    <>
      <Header setPage={handleNavigation} />
      {renderPage()}
    </>
  );
}

