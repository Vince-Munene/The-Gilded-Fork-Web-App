import React, { useState } from 'react';

const initialMessages = [
  { from: 'bot', text: 'My Name is Bruno. Welcome to the Gilded Fork! How may I help you today?' },
  { from: 'user', text:  'What\'s the most popular dish?' },
  { from: 'bot', text: 'Bruno is thinking...' },
];

const suggestions = [
  'Do you have any vegan foods?',
  'Are there Gluten Free options?',
  'What cocktails are available?'
];

export default function ChatbotModal({ open, onClose }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="relative bg-[#fdfadd] rounded-2xl shadow-lg w-[95vw] max-w-lg p-0 border-2 border-blue-300">
        {/* Close button */}
        <button
          className="absolute top-2 right-3 text-2xl font-bold text-gray-700 hover:text-black focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Title */}
        <div className="pt-6 pb-2 text-center">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Inder, Arial, sans-serif', letterSpacing: '0.04em' }}>The Chef, Bruno</h2>
        </div>
        {/* Chat area */}
        <div className="px-4 pb-2 flex flex-col gap-2 min-h-[180px]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-xl px-3 py-2 text-base ${msg.from === 'user' ? 'bg-[#e5e5e5] text-right ml-8' : 'bg-[#e5e5e5] text-left mr-8'}`}>{msg.text}</div>
            </div>
          ))}
        </div>
        {/* Suggestions */}
        <div className="px-4 pb-2 flex flex-col gap-2">
          {suggestions.map((s, i) => (
            <button key={i} className="bg-[#e5e5e5] rounded-full px-4 py-1 text-base text-left font-medium mb-1 hover:bg-[#e0e0e0] transition-all" style={{ fontFamily: 'Inder, Arial, sans-serif' }}>{s}</button>
          ))}
        </div>
        {/* Input */}
        <form className="flex items-center px-4 pb-4 pt-2" onSubmit={e => e.preventDefault()}>
          <input
            className="flex-1 rounded-full bg-[#e5e5e5] px-4 py-2 text-base font-medium focus:outline-none"
            style={{ fontFamily: 'Inder, Arial, sans-serif' }}
            placeholder="Talk to Bruno..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit" className="ml-2 bg-transparent p-2 rounded-full hover:bg-[#e0e0e0] transition-all">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 22L22 14L6 6V12L18 14L6 16V22Z" fill="#222"/></svg>
          </button>
        </form>
      </div>
    </div>
  );
} 