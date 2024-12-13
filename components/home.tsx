'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Customehome() {
  // Array of slides containing images and corresponding text
  const slides = [
    { text: 'Get the peace of mind.', image: '/images/disability insurance.jpg' },
    { text: 'Protect what matters most.', image: '/images/insurence4.jpg' },
    { text: 'Your safety is our priority.', image: '/images/insurence3.jpg' },
    { text: 'Insurance made simple.', image: '/images/insurance8.jpg' },
  ];

  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through the slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <div className="w-full h-full relative">
          <Image
            src={slides[currentIndex].image}
            alt="Background"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            quality={90}
          />
        </div>
      </div>

      {/* Moving Overlay */}
      <div className="absolute inset-0 animate-slide bg-gradient-to-r from-black/40 to-transparent"></div>

      {/* Content on the Left */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-lg px-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{slides[currentIndex].text}</h1>
        <button className="bg-[#F08B1E] hover:bg-[#F08B1E] text-white font-semibold py-2 px-6 rounded max-w-fit">
          Get a Cover
        </button>
      </div>

      {/* Keyframe Animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-slide {
          animation: slide 10s linear infinite;
        }
      `}</style>

      {/* Media Queries */}
      <style jsx>{`
        @media (max-width: 768px) {
          .relative {
            padding-left: 16px;
            padding-right: 16px;
          }

          h1 {
            font-size: 2rem;
            margin-bottom: 12px;
          }

          button {
            padding: 10px 20px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem;
            margin-bottom: 8px;
          }

          button {
            padding: 8px 16px;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
}
