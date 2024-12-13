'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Top Navbar */}
      <div className="bg-[#017970] text-white">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            WO
          </Link>

          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/about" className="hover:text-[#F08B1E]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/investors" className="hover:text-[#F08B1E]">
                Investors Relations
              </Link>
            </li>
            <li>
              <Link href="/newsroom" className="hover:text-[#F08B1E]">
                News Room
              </Link>
            </li>
            <li>
              <Link href="/portals" className="hover:text-[#F08B1E]">
                Portals
              </Link>
            </li>
          </ul>

          <Link href="/signin" className="hidden md:block bg-[#F08B1E] px-4 py-2 rounded text-white font-semibold hover:bg-[#e07b17]">
            Sign In
          </Link>

          <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-[#F08B1E]">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex flex-wrap justify-center items-center gap-8 text-white">
            <li className="relative group">
              <Link href="#" className="font-semibold hover:underline">Health</Link>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 p-2 rounded shadow-lg w-48 z-20">
                <li><Link href="/health/adult" className="block hover:text-[#017970]">Adult Health Plans</Link></li>
                <li><Link href="/health/senior" className="block hover:text-[#017970]">Senior Health Plans</Link></li>
                <li><Link href="/health/family" className="block hover:text-[#017970]">Family Health Plans</Link></li>
              </ul>
            </li>

            <li className="relative group">
              <Link href="#" className="font-semibold hover:underline">Motors</Link>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 p-2 rounded shadow-lg w-48 z-20">
                <li><Link href="/motors/comprehensive" className="block hover:text-[#017970]">Comprehensive</Link></li>
                <li><Link href="/motors/thirdparty" className="block hover:text-[#017970]">Third Party Only</Link></li>
                <li><Link href="/motors/motorcycle" className="block hover:text-[#017970]">Motorcycle Insurance</Link></li>
                <li><Link href="/motors/towing" className="block hover:text-[#017970]">Towing and Rescue</Link></li>
                <li><Link href="/motors/motorpsv" className="block hover:text-[#017970]">Motor PSV</Link></li>
                <li><Link href="/motors/psvbodaboda" className="block hover:text-[#017970]">PSV Bodaboda</Link></li>
              </ul>
            </li>

            <li className="relative group">
              <Link href="#" className="font-semibold hover:underline">Life</Link>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 p-2 rounded shadow-lg w-48 z-20">
                <li><Link href="/life/insurance" className="block hover:text-[#017970]">Life Insurance</Link></li>
              </ul>
            </li>

            <li className="relative group">
              <Link href="#" className="font-semibold hover:underline">Other Insurance</Link>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 p-2 rounded shadow-lg w-48 z-20">
                <li><Link href="/other/home" className="block hover:text-[#017970]">Home Insurance</Link></li>
                <li><Link href="/other/travel" className="block hover:text-[#017970]">Travel Insurance</Link></li>
                <li><Link href="/other/golfers" className="block hover:text-[#017970]">Golfers Insurance</Link></li>
                <li><Link href="/other/professional" className="block hover:text-[#017970]">Professional Indemnity</Link></li>
                <li><Link href="/other/personal" className="block hover:text-[#017970]">Personal Accident</Link></li>
                <li><Link href="/other/premium" className="block hover:text-[#017970]">Premium Financing</Link></li>
              </ul>
            </li>

            <li className="relative group">
              <Link href="#" className="font-semibold hover:underline">Corporate</Link>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 p-2 rounded shadow-lg w-48 z-20">
                <li><Link href="/corporate/medical" className="block hover:text-[#017970]">Medical Insurance</Link></li>
                <li><Link href="/corporate/life" className="block hover:text-[#017970]">Life Insurance</Link></li>
                <li><Link href="/corporate/motor" className="block hover:text-[#017970]">Motor Insurance</Link></li>
                <li><Link href="/corporate/asset" className="block hover:text-[#017970]">Asset Insurance</Link></li>
                <li><Link href="/corporate/smallbusiness" className="block hover:text-[#017970]">Small Business</Link></li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="#" className="font-semibold hover:underline">Save and Invest</Link>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 p-2 rounded shadow-lg w-48 z-20">
                <li><Link href="/other/home" className="block hover:text-[#017970]">Home Insurance</Link></li>
                <li><Link href="/other/travel" className="block hover:text-[#017970]">Travel Insurance</Link></li>
                <li><Link href="/other/golfers" className="block hover:text-[#017970]">Golfers Insurance</Link></li>
                <li><Link href="/other/professional" className="block hover:text-[#017970]">Professional Indemnity</Link></li>
                <li><Link href="/other/personal" className="block hover:text-[#017970]">Personal Accident</Link></li>
                <li><Link href="/other/premium" className="block hover:text-[#017970]">Premium Financing</Link></li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="#" className="font-semibold hover:underline">Pension</Link>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 p-2 rounded shadow-lg w-48 z-20">
                <li><Link href="/other/home" className="block hover:text-[#017970]">Home Insurance</Link></li>
                <li><Link href="/other/travel" className="block hover:text-[#017970]">Travel Insurance</Link></li>
                <li><Link href="/other/golfers" className="block hover:text-[#017970]">Golfers Insurance</Link></li>
                <li><Link href="/other/professional" className="block hover:text-[#017970]">Professional Indemnity</Link></li>
                <li><Link href="/other/personal" className="block hover:text-[#017970]">Personal Accident</Link></li>
                <li><Link href="/other/premium" className="block hover:text-[#017970]">Premium Financing</Link></li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="#" className="font-semibold hover:underline">Help</Link>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 p-2 rounded shadow-lg w-48 z-20">
                <li><Link href="/life/insurance" className="block hover:text-[#017970]">Life Insurance</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
