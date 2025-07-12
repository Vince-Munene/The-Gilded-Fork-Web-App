import React from 'react';
import { FaRegCommentDots } from 'react-icons/fa';

const tabs = [
  { label: 'Heritage', color: '#b9976b' },
  { label: 'Ambiance', color: '#2d3a48' },
  { label: 'Simplicity', color: '#8d8d9b' }
];

const inderFont = { fontFamily: 'Inder, Arial, sans-serif' };

export default function OurStory() {
  return (
    <section className="w-full bg-[#f8f6ef] dark:bg-[#232b38] py-8 relative" style={inderFont}>
      <h2 className="text-center text-2xl font-bold text-black dark:text-white mb-2" style={{ ...inderFont, letterSpacing: '0.01em' }}>
        Our Story
      </h2>
      <div className="flex justify-center">
        <div className="h-1 w-16 bg-black dark:bg-white rounded-full mb-4"></div>
      </div>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
        <div className="w-full md:w-1/2 flex-shrink-0 flex items-stretch">
          <img
            src="/assets/story-img.jpg"
            alt="Our Story Dish"
            className="w-full h-full object-cover rounded-xl md:rounded-xl"
            style={{ borderRadius: '16px', boxShadow: 'none', minHeight: 180 }}
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center md:items-center justify-center md:justify-start" style={{ minHeight: 180 }}>
          <p className="text-[1.18rem] text-black dark:text-white leading-relaxed text-left" style={{ ...inderFont, lineHeight: '1.7', maxWidth: '420px' }}>
            Born from a deep love for honest ingredients and the timeless culinary techniques that transform them, The Gilded Fork set out to create more than just a menu; to build a tribute to the classic European bistro, reimagined for the modern palate. Every dish that leaves our kitchen is a chapter in that story. We believe a truly great meal is a memorable experience, crafted with intention and served with a genuine sense of pride, from the first bite to the last.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-6 mb-2 w-full">
        <div className="flex w-full max-w-md rounded-full overflow-hidden" style={{ height: 40 }}>
          {tabs.map((tab, idx) => (
            <div
              key={tab.label}
              className={`flex-1 flex items-center justify-center font-bold text-white text-base select-none ${idx === 0 ? 'rounded-l-full' : ''} ${idx === tabs.length - 1 ? 'rounded-r-full' : ''} bg-[${tab.color}] dark:bg-[#2e3746]`}
              style={{
                ...inderFont,
                height: '100%',
                fontWeight: 700,
                fontSize: '1.08rem',
                letterSpacing: '0.01em',
                opacity: 1
              }}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      <button
        className="fixed bottom-8 right-8 bg-white dark:bg-[#6b8bbd] border border-gray-300 rounded-full w-14 h-14 flex items-center justify-center z-50 hover:bg-yellow-400 dark:hover:bg-[#4a6a96] transition"
        aria-label="Open chat"
        style={{ boxShadow: 'none' }}
      >
        <FaRegCommentDots className="text-2xl text-[#3a4250] dark:text-white" />
      </button>
    </section>
  );
} 