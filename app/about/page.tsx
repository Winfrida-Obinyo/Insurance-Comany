'use client';
import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className="container mx-auto py-12 px-6 overflow-x-hidden">
            {/* Background image section with goal text */}
            <div
                className="relative bg-cover bg-center h-96"
                style={{ backgroundImage: "url('images/insurance9.jpg')" }}
            >
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <div className="flex flex-col justify-center items-start pl-6 h-full">
                        <div className="border-4 border-[#F08B1E] p-6 bg-opacity-70 bg-black">
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                                Our Goal
                            </h2>
                            <p className="text-white text-lg sm:text-xl max-w-xl">
                                Helping you protect the life you've worked hard to build, ensuring your achievements and future are secure with the right coverage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Discover who we are section */}
            <div className="text-center mt-12">
                <h2 className="text-3xl font-bold text-[#017970] mb-8">
                    Discover Who We Are
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Our Values */}
                    <div className="relative flex flex-col items-center">
                        <div className="w-48 h-48 mb-4 relative">
                            <Image
                                src="/images/values.jpg"
                                alt="Our Values"
                                width={192}
                                height={192}
                                className="rounded-full object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
                                <h3 className="text-white text-xl font-semibold text-center">Our Values</h3>
                            </div>
                        </div>
                        <p className="text-center text-lg">
                            Transparency, Accountability, Customer Centric
                        </p>
                    </div>

                    {/* Our Mission */}
                    <div className="relative flex flex-col items-center">
                        <div className="w-48 h-48 mb-4 relative">
                            <Image
                                src="/images/mission.jpg"
                                alt="Our Mission"
                                width={192}
                                height={192}
                                className="rounded-full object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
                                <h3 className="text-white text-xl font-semibold text-center">Our Mission</h3>
                            </div>
                        </div>
                        <p className="text-center text-lg">
                            To deliver reliable insurance solutions that offer peace of mind and security.
                        </p>
                    </div>

                    {/* Our Vision */}
                    <div className="relative flex flex-col items-center">
                        <div className="w-48 h-48 mb-4 relative">
                            <Image
                                src="/images/vision.jpg"
                                alt="Our Vision"
                                width={192}
                                height={192}
                                className="rounded-full object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
                                <h3 className="text-white text-xl font-semibold text-center">Our Vision</h3>
                            </div>
                        </div>
                        <p className="text-center text-lg">
                            To be the trusted leader in insurance, securing a better future for all.
                        </p>
                    </div>
                </div>
            </div>

            {/* Leadership and Management Section */}
            <div className="flex flex-col md:flex-row items-center mt-12">
                {/* Image on the left */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Image
                        src="/images/leadership.jpg"
                        alt="Leadership and Management"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>

                {/* Text on the right */}
                <div className="w-full md:w-1/2 text-center md:text-left ml-8">
                    <h2 className="text-3xl font-bold text-[#017970] mb-4">Leadership and Management</h2>
                    <div className="flex flex-col ">
                        <p className="text-lg">
                            <span className="mb-4 text-center">Guided by integrity and transparency,</span>
                            <span className="mb-6 text-center">our leadership ensures effective governance</span>
                            <span className="text-center">and sustainable growth at every level.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
