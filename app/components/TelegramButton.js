import React from "react";

export default function TelegramButton() {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col items-center">
      <a
        href="https://t.me/Tnksgod12"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 hover:rotate-12 hover:bg-gradient-to-l hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
        aria-label="Chat with us on Telegram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 2L11 13 8 10l-4 4 1-7L22 2z" />
        </svg>
      </a>
      <span className="mt-2 text-pink-600 text-sm font-semibold text-center">
        Chat with Us
      </span>
    </div>
  );
}
