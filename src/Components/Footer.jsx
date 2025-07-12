import React, { useState } from 'react';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import ChatbotModal from './ChatbotModal';

const inderFont = { fontFamily: 'Inder, Arial, sans-serif' };

function ChatSmileyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <g>
        <path d="M10 13C10 11.3431 11.3431 10 13 10H19C20.6569 10 22 11.3431 22 13V17C22 18.6569 20.6569 20 19 20H13C12.4477 20 12 20.4477 12 21V22.382C12 22.7652 12.4477 22.9804 12.7652 22.7652L15.382 21.118C15.7557 20.8722 16.2443 20.8722 16.618 21.118L19.2348 22.7652C19.5523 22.9804 20 22.7652 20 22.382V21C20 20.4477 19.5523 20 19 20H13C11.3431 20 10 18.6569 10 17V13Z" fill="#2D2217"/>
        <circle cx="13.5" cy="15" r="1" fill="white"/>
        <circle cx="18.5" cy="15" r="1" fill="white"/>
        <path d="M14.5 17C14.7761 17.5523 15.2239 18 16 18C16.7761 18 17.2239 17.5523 17.5 17" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

export default function Footer() {
  const [showChat, setShowChat] = useState(false);
  return (
    <footer className="w-full bg-[#faf8e6] dark:bg-[#232b38] pt-8 pb-4 px-2 md:px-0 relative" style={inderFont}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-8 items-start text-black dark:text-white">
        {/* Left Column: Logo/Info/Socials (top), Contact/Hours (bottom) */}
        <div className="flex flex-col items-center gap-3 row-start-1 col-start-1">
          <div className="rounded-2xl w-20 h-20 flex items-center justify-center mb-2">
            <img src="/assets/gilded-fork-logo.jpg" alt="Logo" className="w-16 h-16 object-contain rounded-xl" />
          </div>
          <div className="text-center">
            <div className="text-lg font-bold" style={inderFont}>The Gilded Fork</div>
            <div className="text-xs font-bold -mt-1" style={inderFont}>Where Culinary art meets Timeless Tradition</div>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Instagram"><FaInstagram className="text-2xl text-black" /></a>
            <a href="#" aria-label="X"><FaXTwitter className="text-2xl text-black" /></a>
            <a href="#" aria-label="Gmail"><SiGmail className="text-2xl" style={{ color: '#EA4335' }} /></a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 row-start-2 col-start-1">
          <div className="w-full text-center">
            <div className="text-base font-bold mb-1" style={inderFont}>Contact</div>
            <div className="text-sm mb-1">Reach us at:<br />+251234567890</div>
            <div className="text-sm mb-2">Or email us at:<br />gildedfork@gmail.com</div>
            <div className="text-base font-bold mb-1" style={inderFont}>Hours</div>
            <div className="text-sm">Monday - Friday<br />4pm - 11pm</div>
            <div className="text-sm mb-2">Weekends<br />12pm - 12 am</div>
          </div>
        </div>
        {/* Right Column: Quick Links (top), Map (bottom) */}
        <div className="flex flex-col items-center row-start-1 col-start-2">
          <div className="text-lg font-bold mb-2 text-center" style={inderFont}>Quick Links</div>
          <ul className="space-y-1 text-base text-black text-center" style={inderFont}>
            <li>Home</li>
            <li>Menu</li>
            <li>Our Story</li>
            <li>Signature Dishes</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2 row-start-2 col-start-2">
          <div className="rounded-xl overflow-hidden border border-[#f3ecd2] mt-2" style={{width: 180, height: 140}}>
            <iframe
                title="Gilded Fork Location"
                width="180"
                height="140"
                style={{border: 0, borderRadius: 12}}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48557.978868807346!2d36.970389996838264!3d-0.3845247308816211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18285e026105d201%3A0x70c0543a4d338f7e!2sTHE%20WHITE%20RHINO%20HOTEL!5e0!3m2!1sen!2ske!4v1752287346851!5m2!1sen!2ske">
            </iframe>
          </div>
        </div>
      </div>
      <button
        className="fixed bottom-8 right-8 bg-white dark:bg-[#6b8bbd] border border-gray-300 rounded-full w-14 h-14 flex items-center justify-center z-50 hover:bg-yellow-400 dark:hover:bg-[#4a6a96] transition"
        aria-label="Open chat"
        style={{boxShadow: 'none'}}
        onClick={() => setShowChat(true)}
      >
        <ChatSmileyIcon/>
      </button>
      <ChatbotModal open={showChat} onClose={() => setShowChat(false)} />
    </footer>
  );
} 