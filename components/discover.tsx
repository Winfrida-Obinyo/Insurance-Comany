'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Discover() {
  const [selectedIndexDiscover, setSelectedIndexDiscover] = useState<number | null>(null);
  const [selectedIndexMeaningful, setSelectedIndexMeaningful] = useState<number | null>(null);

  const handleClickDiscover = (index: number) => {
    setSelectedIndexDiscover(index);
  };

  const handleClickMeaningful = (index: number) => {
    setSelectedIndexMeaningful(index);
  };

  return (
    <div className="container mx-auto py-12 px-4 text-center">
      {/* Top Row: Discover, your, own, personal, definition */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {['Discover', 'your', 'own', 'personal', 'definition'].map((word, index) => (
          <span
            key={index}
            onClick={() => handleClickDiscover(index)}
            className={`border-2 px-4 py-2 rounded-[40px] text-lg cursor-pointer
              ${selectedIndexDiscover === index
                ? 'bg-[#F08B1E] border-[#017970] text-black'
                : 'border-[#017970] text-black'}`}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Second Row: Of, meaningful, work */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {['Of', 'meaningful', 'work'].map((word, index) => (
          <span
            key={index}
            onClick={() => handleClickMeaningful(index)}
            className={`border-2 px-4 py-2 rounded-[40px] text-lg cursor-pointer
              ${selectedIndexMeaningful === index
                ? 'bg-[#F08B1E] border-[#017970] text-black'
                : 'border-[#017970] text-black'}`}
          >
            {word}
          </span>
        ))}
      </div>

      {/* The text comes below the bordered words */}
      <p className="max-w-4xl mx-auto text-black text-lg sm:text-xl mt-6 mb-8">
        Discover insurance options designed to meet your <br />
        unique needs and give you peace of mind...
      </p>

      {/* Insurance Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Life Insurance', image: '/images/life insurance.jpg', link: '/life-insurance' },
          { name: 'Rent Insurance', image: '/images/rent insurance.jpg', link: '/rent-insurance' },
          { name: 'Identity Insurance', image: '/images/identity insurance.jpg', link: '/identity-insurance' },
          { name: 'Home Owners Insurance', image: '/images/home insurence.jpg', link: '/home-insurance' },
          { name: 'Vehicle Insurance', image: '/images/insurence4.jpg', link: '/vehicleinsurance' },
          { name: 'Health Insurance', image: '/images/insurence3.jpg', link: '/health-insurance' },
          { name: 'Workers Insurance', image: '/images/workers insurance.jpg', link: '/workers-insurance' },
          { name: 'Disability Insurance', image: '/images/disability insurance.jpg', link: '/disability-insurance' },
        ].map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <div className="relative h-48 sm:h-56 md:h-64 cursor-pointer">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-[40px] text-sm sm:text-base">
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
