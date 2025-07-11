import { useState } from 'react';
import Header from './Components/Header.jsx';
import Feedback from './Components/Feedback.jsx';
import SigDishes from './Components/Signature-Dishes.jsx';
import Order from './Components/Order.jsx';

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
    
    return (
      <div>
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

