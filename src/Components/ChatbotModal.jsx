import React, { useState } from "react";
import axios from "axios";

const initialMessages = [
  {
    from: "bot",
    text: "My Name is Bruno. Welcome to the Gilded Fork! How may I help you today?",
  },
];

const suggestions = [
  "Do you have any vegan foods?",
  "Are there Gluten Free options?",
  "What cocktails are available?",
];

export default function ChatbotModal({ open, onClose }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const sendMessage = async (userInput) => {
    if (!userInput.trim()) return;

    const updatedMessages = [
      ...messages,
      { from: "user", text: userInput },
      { from: "bot", text: "Bruno is thinking..." },
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // Replace this with your actual API endpoint
      const res = await axios.post("https://8659d293b956.ngrok-free.app/chat", {
        user_query: userInput,
      });
      console.log(res.data.answer);

      const botReply = res.data.answer || "Sorry, I didn't catch that.";

      // Replace the "Bruno is thinking..." message with actual reply
      setMessages((prev) =>
        prev.slice(0, -1).concat({ from: "bot", text: botReply })
      );
    } catch (err) {
      console.error(err);
      setMessages((prev) =>
        prev
          .slice(0, -1)
          .concat({ from: "bot", text: "Oops! Something went wrong." })
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestionClick = (s) => {
    sendMessage(s);
  };

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
          <h2
            className="text-2xl font-bold"
            style={{
              fontFamily: "Inder, Arial, sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            The Chef, Bruno
          </h2>
        </div>

        {/* Chat area */}
        <div className="px-4 pb-2 flex flex-col gap-2 min-h-[180px] max-h-[300px] overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-xl px-3 py-2 text-base ${
                  msg.from === "user"
                    ? "bg-[#e5e5e5] text-right ml-8"
                    : "bg-[#e5e5e5] text-left mr-8"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="px-4 pb-2 flex flex-col gap-2">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSuggestionClick(s)}
              className="bg-[#e5e5e5] rounded-full px-4 py-1 text-base text-left font-medium mb-1 hover:bg-[#e0e0e0] transition-all"
              style={{ fontFamily: "Inder, Arial, sans-serif" }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <form
          className="flex items-center px-4 pb-4 pt-2"
          onSubmit={handleSubmit}
        >
          <input
            className="flex-1 rounded-full bg-[#e5e5e5] px-4 py-2 text-base font-medium focus:outline-none"
            style={{ fontFamily: "Inder, Arial, sans-serif" }}
            placeholder={loading ? "Bruno is replying..." : "Talk to Bruno..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="ml-2 bg-transparent p-2 rounded-full hover:bg-[#e0e0e0] transition-all"
            disabled={loading}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M6 22L22 14L6 6V12L18 14L6 16V22Z" fill="#222" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
