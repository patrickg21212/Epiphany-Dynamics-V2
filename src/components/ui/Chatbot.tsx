import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button (FAB) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-[200] p-4 bg-cyan-500 rounded-full shadow-lg hover:bg-cyan-600 transition-colors cursor-pointer group"
          aria-label="Open Chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white group-hover:scale-110 transition-transform"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed z-[200] flex flex-col bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden
                    inset-0 w-full h-full rounded-none
                    sm:inset-auto sm:bottom-4 sm:right-4 sm:w-96 sm:h-[600px] sm:rounded-2xl"
          style={{ paddingTop: 'env(safe-area-inset-top)' }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-white/50 border-b border-gray-200/50 backdrop-blur-sm">
            <h3 className="font-semibold text-gray-800">Epiphany AI</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 p-2 hover:bg-red-50 active:bg-red-100 rounded-lg transition-colors cursor-pointer group"
              aria-label="Close Chat"
            >
              <span className="text-sm font-medium text-gray-600 group-hover:text-red-600 sm:hidden">
                Close
              </span>
              <div className="p-1 rounded-full bg-gray-100 group-hover:bg-red-100 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600 group-hover:text-red-600"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 w-full h-full bg-white/40">
            <iframe
              src="https://epiphany-ai--patrick667.replit.app"
              className="w-full h-full border-none"
              title="Epiphany AI Chatbot"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
