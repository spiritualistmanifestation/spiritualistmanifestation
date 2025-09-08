'use client';

const WhatsappIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4,16.1c-0.4-0.2-2.3-1.1-2.6-1.2c-0.4-0.2-0.6-0.2-0.9,0.2c-0.2,0.4-1,1.2-1.2,1.5c-0.2,0.2-0.4,0.3-0.8,0.1c-0.4-0.2-1.5-0.5-2.9-1.8c-1.1-1-1.8-2.2-2-2.6c-0.2-0.4,0-0.6,0.2-0.8c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.2,0.2-0.4,0.4-0.6c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.9-2.1-1.2-2.8C6.1,5.2,5.8,5.3,5.6,5.3c-0.2,0-0.4,0-0.6,0C4.8,5.3,4.5,5.4,4.2,5.7c-0.3,0.3-1.2,1.1-1.2,2.8c0,1.6,1.2,3.2,1.4,3.4c0.2,0.2,2.3,3.7,5.6,5c0.8,0.3,1.4,0.5,1.9,0.6c0.7,0.2,1.4,0.1,1.9-0.1c0.6-0.2,1.8-0.8,2.1-1.5c0.3-0.7,0.3-1.3,0.2-1.5C19.1,16.4,18.8,16.3,18.4,16.1z M12,2.1c-5.5,0-9.9,4.4-9.9,9.9c0,1.8,0.5,3.5,1.3,4.9l-1.4,5.2l5.3-1.4c1.4,0.8,3,1.2,4.7,1.2h0c5.5,0,9.9-4.4,9.9-9.9C21.9,6.5,17.5,2.1,12,2.1z M12,20.1L12,20.1c-1.6,0-3.2-0.4-4.5-1.2l-0.3-0.2l-3.3,0.9l0.9-3.2l-0.2-0.3c-0.9-1.4-1.4-3-1.4-4.8c0-4.5,3.6-8.1,8.1-8.1c2.2,0,4.3,0.9,5.7,2.4c1.5,1.5,2.4,3.5,2.4,5.7C20.1,16.4,16.4,20.1,12,20.1z"
      />
    </svg>
  );

export function WhatsappButton() {
  // Replace with a real WhatsApp number link
  const whatsappLink = "https://wa.me/1234567890?text=Hello!%20I'm%20interested%20in%20your%20spells.";
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      <WhatsappIcon />
    </a>
  );
}
