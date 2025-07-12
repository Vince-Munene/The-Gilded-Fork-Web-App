import { useState } from 'react';
import Header from './Components/Header.jsx';
import Feedback from './Components/Feedback.jsx';
import SigDishes from './Components/Signature-Dishes.jsx';
import Order from './Components/Order.jsx';
import FullMenu from './Components/FullMenu.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuCategory, setMenuCategory] = useState('starters');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (page, category = null) => {
    if (page === 'order') {
      setCurrentPage('order');
    } else if (page === 'menu') {
      setCurrentPage('menu');
      if (category) {
        setMenuCategory(category);
      }
    } else if ((currentPage === 'order' || currentPage === 'menu') && page === 'home') {
      setCurrentPage('home');
    } else {
      scrollToSection(page);
    }
  };

  const renderPage = () => {
    if (currentPage === 'order') {
      return <Order setPage={handleNavigation} />;
    }
    
    if (currentPage === 'menu') {
      return <FullMenu setPage={handleNavigation} activeCategory={menuCategory} />;
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

