import React from 'react';

export const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello BrightLink, I would like to inquire about UAE Visa & Passport Services.'
    );
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+971 56 655 6645)"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/40 hover:shadow-2xl hover:shadow-[#25D366]/60 flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110 active:scale-95 group relative"
      >
        {/* Subtle Online Pulse Ring */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-xs">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
        </span>

        {/* WhatsApp Official Logo */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white transform group-hover:rotate-6 transition-transform duration-200"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0012.04 0C5.43 0 .07 5.37.07 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.22-1.63a11.95 11.95 0 005.82 1.5h.01c6.61 0 11.97-5.37 11.97-11.98 0-3.2-1.25-6.22-3.5-8.41zm-8.48 18.36h-.01a9.95 9.95 0 01-5.07-1.39l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.93 9.93 0 01-1.53-5.2c0-5.5 4.47-9.97 9.98-9.97 2.66 0 5.17 1.04 7.05 2.92a9.9 9.9 0 012.92 7.05c0 5.5-4.48 9.96-9.98 9.96zm5.47-7.46c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.92 1.23 3.12c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35z" />
        </svg>
      </button>
    </div>
  );
};
