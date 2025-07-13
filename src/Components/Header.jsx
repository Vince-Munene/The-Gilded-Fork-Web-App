import { useState, useRef, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function MenuDropdown({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className="relative" 
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="font-bold flex items-center text-xl focus:outline-none"
      >
        Menu
        <svg className="ml-1 w-4 h-4 hover:cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute mt-4 w-40 bg-white dark:bg-[#333] border dark:border-gray-700 rounded-md shadow-md z-10"
        >
          <button onClick={() => { setPage('menu', 'starters'); setIsOpen(false); }} className="block text-xl px-4 py-2 bg-paleyellow hover:bg-yellow-100 w-full text-left">Starters</button>
          <button onClick={() => { setPage('menu', 'mains'); setIsOpen(false); }} className="block text-xl px-4 py-2 bg-paleyellow hover:bg-yellow-100 w-full text-left">Main Course</button>
          <button onClick={() => { setPage('menu', 'desserts'); setIsOpen(false); }} className="block text-xl px-4 py-2 bg-paleyellow hover:bg-yellow-100 w-full text-left">Desserts</button>
          <button onClick={() => { setPage('menu', 'drinks'); setIsOpen(false); }} className="block text-xl px-4 py-2 bg-paleyellow hover:bg-yellow-100 w-full text-left">Drinks</button>
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
            <a href="#home" onClick={e => handleNav(e, 'home')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer">Home</a>
            <MenuDropdown setPage={setPage} />
            <a href="#our-story" onClick={e => handleNav(e, 'our-story')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer">Our Story</a>
            <a href="#signature-dishes" onClick={e => handleNav(e, 'signature-dishes')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer">Signature Dishes</a>
            <a href="#feedback" onClick={e => handleNav(e, 'feedback')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer">Feedback</a>
            <button onClick={() => setPage('order')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer">Order</button>
          </div>
        </div>
  
        <div className="flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`inline-flex items-center justify-center px-3 py-2 rounded-full transition-all duration-300 cursor-pointer group ${
              darkMode 
                ? 'bg-transparent hover:bg-yellow-100 dark:hover:bg-yellow-900' 
                : 'bg-transparent hover:bg-gray-800 dark:hover:bg-gray-200'
            }`}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            <div className="flex items-center space-x-2">
              {darkMode ? (
                <FaSun className="text-2xl text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />
              ) : (
                <FaMoon className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-800 transition-colors duration-300" />
              )}
              <span className={`text-sm font-medium transition-colors duration-300 ${
                darkMode 
                  ? 'text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-900' 
                  : 'text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-800'
              }`}>
                {darkMode ? 'Light' : 'Dark'}
              </span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;