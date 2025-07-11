import { useState, useRef, useEffect } from "react";
import Logo from '/assets/gilded-fork-logo.jpg';

function MenuDropdown({ setPage }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="font-bold flex items-center text-xl focus:outline-none"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
        <svg className="ml-1 w-4 h-4 hover:cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          id="dropdown"
          className="absolute mt-4 w-40 bg-white dark:bg-[#333] border dark:border-gray-700 rounded-md shadow-md z-10"
        >
          <button onClick={() => { setPage('starters'); setOpen(false); }} className="block text-xl px-4 py-2 bg-paleyellow hover:bg-yellow-100 w-full text-left">Starters</button>
          <button onClick={() => { setPage('mains'); setOpen(false); }} className="block text-xl px-4 py-2 bg-paleyellow hover:bg-yellow-100 w-full text-left">Mains</button>
          <button onClick={() => { setPage('desserts'); setOpen(false); }} className="block text-xl px-4 py-2 bg-paleyellow hover:bg-yellow-100 w-full text-left">Desserts</button>
          <button onClick={() => { setPage('drinks'); setOpen(false); }} className="block text-xl px-4 py-2 bg-paleyellow hover:bg-yellow-100 w-full text-left">Drinks</button>
        </div>
      )}
    </div>
  );
}

function Header({ setPage }) {
  return (
    <nav className="bg-paleyellow py-4 px-8 rounded-t-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-lg bg-[#353744] p-1" />
        </div>
        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-8 font-jaro text-[15px] text-black items-center">
            <button onClick={() => setPage('home')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer">Home</button>
            <MenuDropdown setPage={setPage} />
            <button onClick={() => setPage('about')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer">Our Story</button>
            <button onClick={() => setPage('signature-dishes')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer">Signature Dishes</button>
            <button onClick={() => setPage('feedback')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer">Feedback</button>
            <button onClick={() => setPage('order')} className="font-bold text-xl bg-transparent border-none outline-none cursor-pointer">Order</button>
          </div>
        </div>
        {/* Sun Icon */}
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="28" height="28">
              <circle cx="12" cy="12" r="5" />
              <g stroke="black" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;