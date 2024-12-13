'use client';
import Image from 'next/image';

export default function Saguard() {
  return (
    <div className="container mx-auto py-12 px-6 flex flex-col lg:flex-row items-center justify-between">
      {/* Left side with images */}
      <div className="flex flex-col lg:flex-row items-center w-full">
        {/* Main Image with Fixed Height */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:w-96 lg:h-[500px] mb-6 lg:mb-0 lg:mr-4 overflow-hidden">
          <Image
            src="/images/INSURANCE6.jpg"
            alt="Identity Insurance"
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 1024px) 100vw, 400px"
          />
        </div>

        {/* Two Smaller Images on the Right */}
        <div className="flex flex-col lg:justify-center lg:ml-4 space-y-4 w-full lg:w-auto">
          <div className="relative w-full h-[180px] sm:h-[200px] lg:w-[200px] overflow-hidden">
            <Image
              src="/images/INSURANCE5.jpg"
              alt="Home Insurance"
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 1024px) 100vw, 200px"
            />
          </div>
          <div className="relative w-full h-[180px] sm:h-[200px] lg:w-[200px] overflow-hidden">
            <Image
              src="/images/INSURANCE7.jpg"
              alt="Workers Insurance"
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 1024px) 100vw, 200px"
            />
          </div>
        </div>
      </div>

      {/* Right side with header, text, and button */}
      <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#017970] mb-4 text-center lg:text-left" style={{ fontFamily: 'Inika' }}>
          Safeguard What Matters to You
        </h2>
        <p className="text-lg lg:text-xl text-black mb-6 text-center lg:text-left" style={{ fontFamily: 'Inika' }}>
          Protecting what you cherish means preserving its value and ensuring its future. Take proactive steps to keep what matters most safe, strong, and thriving. Your care today builds security for tomorrow.
        </p>
        <div className="text-center lg:text-left">
          <button className="bg-[#F08B1E] text-[#017970] px-6 py-2 rounded-[10px] font-semibold" style={{ fontFamily: 'Inika, sans-serif' }}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
