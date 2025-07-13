import { useState, useRef, useEffect } from "react";

function MenuDropdown({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openedByClick, setOpenedByClick] = useState(false);
  const ref = useRef();

  const handleMouseEnter = () => {
    if (!openedByClick) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!openedByClick) {
      setIsOpen(false);
    }
  };

  const handleMenuClick = () => {
    if (isOpen) {
      setIsOpen(false);
      setOpenedByClick(false);
    } else {
      setIsOpen(true);
      setOpenedByClick(true);
    }
  };

  const handleItemClick = (category) => {
    setPage('menu', category);
    setIsOpen(false);
    setOpenedByClick(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
        setOpenedByClick(false);
      }
    }
    
    if (openedByClick) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openedByClick]);

  const menuItems = [
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Main Course' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Drinks' }
  ];

  return (
    <div 
      className="relative" 
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={handleMenuClick}
        className="font-bold flex items-center text-xl focus:outline-none hover:text-gray-700 transition-colors duration-200"
      >
        Menu
        <svg 
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div
          id="dropdown"
          className="absolute mt-2 w-48 bg-white dark:bg-[#333] border dark:border-gray-700 rounded-lg shadow-xl z-10 overflow-hidden"
        >
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="block w-full text-left px-4 py-3 bg-paleyellow hover:bg-yellow-100 dark:hover:bg-gray-600 transition-all duration-200 font-medium text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-lg"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header({ setPage, currentPage, darkMode, setDarkMode }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleNav(e, section) {
    e.preventDefault();
    if (currentPage === 'order') {
      setPage('home');
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className={`bg-paleyellow py-4 px-8 rounded-t-xl transition-all duration-300 ${
      isSticky 
        ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' 
        : 'relative'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center">
          <img src="/assets/gilded-fork-logo.jpg" alt="Logo" className="w-10 h-10 rounded-lg bg-[#353744] p-1" />
        </div>

        <div className="flex-1 flex justify-center">
          <div className="flex space-x-8 font-jaro text-[15px] text-black items-center">
            <a href="#home" onClick={e => handleNav(e, 'home')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer hover:text-gray-700 transition-colors duration-200">Home</a>
            <MenuDropdown setPage={setPage} />
            <a href="#our-story" onClick={e => handleNav(e, 'our-story')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer hover:text-gray-700 transition-colors duration-200">Our Story</a>
            <a href="#signature-dishes" onClick={e => handleNav(e, 'signature-dishes')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer hover:text-gray-700 transition-colors duration-200">Signature Dishes</a>
            <a href="#feedback" onClick={e => handleNav(e, 'feedback')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer hover:text-gray-700 transition-colors duration-200">Feedback</a>
            <button onClick={() => setPage('order')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer hover:text-gray-700 transition-colors duration-200">Order</button>
          </div>
        </div>
  
        <div className="flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
            aria-label="Toggle dark mode"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.3915 17.5875L51.7707 11.9292L42.4665 11.6667L39.3748 2.91667L36.2832 11.6667L26.979 11.9292L34.3582 17.5875L31.704 26.5125L39.3748 21.2333L47.0457 26.5125L44.3915 17.5875Z"
                fill="black"
              />
              <path
                d="M57.1958 35.7292L61.9792 32.0833L55.9708 31.9375L53.9583 26.25L51.9458 31.9375L45.9375 32.0833L50.7208 35.7292L49 41.5042L53.9583 38.0917L58.9167 41.5042L57.1958 35.7292Z"
                fill="black"
              />
              <path
                d="M20.4167 17.5C20.4167 35.2333 34.7667 49.5833 52.5 49.5833C54.0458 49.5833 55.5625 49.4667 57.05 49.2625C52.3542 56.4667 44.2458 61.25 35 61.25C20.5042 61.25 8.75 49.4958 8.75 35C8.75 25.7542 13.5333 17.6458 20.7375 12.95C20.5333 14.4375 20.4167 15.9542 20.4167 17.5Z"
                fill="black"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;