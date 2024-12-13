'use client';
import { useState, useEffect } from 'react';

const images = [
  '/images/car2.jpg',
  '/images/car3.jpg',
  '/images/car4.jpg',
  '/images/car1.jpg',
  '/images/car5.jpg',
];

export default function VehicleInsurance() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-12 px-6 overflow-x-hidden font-inika">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[450px] transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 text-center">
            Protect Your Vehicle Today
          </h1>
          <p className="text-lg text-white mb-6 text-center">
            Get comprehensive coverage and drive with confidence. Start your insurance journey now.
          </p>
          <button className="bg-[#F08B1E] text-white py-3 px-8 rounded-lg text-xl shadow-lg hover:bg-[#F09A2E] transition-all duration-300">
            Get Your Quote Now
          </button>
        </div>
      </div>

      {/* Vehicle Insurance Calculator Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-[#017970] mb-8">Calculate Your Premium</h2>
        <p className="text-lg mb-6">
          Enter your vehicle details to get an estimate on your insurance premium.
        </p>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-semibold">Vehicle Model</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your vehicle model"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold">Year of Manufacture</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter the vehicle year"
              />
            </div>
            <button
              type="submit"
              className="bg-[#F08B1E] text-white py-3 px-8 rounded-lg text-xl w-full hover:bg-[#F09A2E] transition-all duration-300"
            >
              Get My Quote
            </button>
          </form>
        </div>
      </div>

{/* Coverage Options Section */}
<div className="mt-16 text-center">
  <h2 className="text-4xl font-bold text-[#017970] mb-6">Our Coverage Options</h2>
  <p className="text-lg mb-10 text-gray-600">
    We offer a variety of coverage plans to suit your needs.
  </p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Comprehensive Coverage */}
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-center mb-4">
        <span className="text-4xl text-[#F08B1E]">🚗</span>
      </div>
      <h3 className="text-xl font-semibold text-[#017970] mb-2">Comprehensive Coverage</h3>
      <p className="text-gray-600">Full protection against accidents, theft, and natural disasters.</p>
    </div>

    {/* Third-Party Liability */}
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-center mb-4">
        <span className="text-4xl text-[#F08B1E]">🔒</span>
      </div>
      <h3 className="text-xl font-semibold text-[#017970] mb-2">Third-Party Liability</h3>
      <p className="text-gray-600">Covers damage to others&apos; property and vehicles.</p>
    </div>

    {/* Collision Coverage */}
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-center mb-4">
        <span className="text-4xl text-[#F08B1E]">💥</span>
      </div>
      <h3 className="text-xl font-semibold text-[#017970] mb-2">Collision Coverage</h3>
      <p className="text-gray-600">Covers repair costs for your vehicle in case of collisions.</p>
    </div>

    {/* Personal Injury Protection */}
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-center mb-4">
        <span className="text-4xl text-[#F08B1E]">🩹</span>
      </div>
      <h3 className="text-xl font-semibold text-[#017970] mb-2">Personal Injury Protection</h3>
      <p className="text-gray-600">Medical expenses for you and your passengers.</p>
    </div>
  </div>
</div>


      {/* Testimonials Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#017970] mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4">Fantastic service and great coverage! Highly recommend.</p>
            <span className="block font-semibold">- John Doe</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4">Affordable premiums and excellent customer support.</p>
            <span className="block font-semibold">- Jane Smith</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#017970] mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">What does comprehensive coverage include?</h3>
            <p className="text-lg mt-2">Comprehensive coverage includes damage from accidents, theft, and natural disasters.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">How can I file a claim?</h3>
            <p className="text-lg mt-2">You can file a claim through our online portal or by contacting our 24/7 support team.</p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#017970] mb-8">Contact Us</h2>
        <p className="text-lg mb-6">Have questions? Get in touch with us.</p>
        <a
          href="mailto:support@vehicleinsurance.com"
          className="bg-[#017970] text-white py-3 px-8 rounded-lg text-xl shadow-lg hover:bg-[#026f60] transition-all duration-300"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}