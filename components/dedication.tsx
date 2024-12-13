'use client';

export default function Dedication() {
    return (
        <div className="container mx-auto py-16 px-8 bg-gray-50 font-inika">
            {/* Wrapper Div with Border */}
            <div className="border-4 border-[#017970] p-8">
                {/* Main Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#017970] mb-6 text-center">
                    Working to enhance your life and ensure your safety.
                </h2>

                {/* Subheader and Right Text Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    {/* Left Side: Subheader */}
                    <div className="w-full md:w-1/2 pr-8">
                        <h3 className="text-2xl md:text-3xl text-[#F08B1E] mb-6 mt-10 uppercase tracking-wide">
                            DEDICATED TO DELIVERING EXCEPTIONAL SUPPORT AND CARE
                        </h3>
                    </div>

                    {/* Separator Line */}
                    <div className="h-16 md:h-28 border-l-2 border-[#017970] mb-6 md:mb-0"></div>

                    {/* Right Side: Additional Text */}
                    <div className="w-full md:w-1/2 pl-8">
                        <p className="text-lg text-black-700">
                            We are dedicated to providing outstanding service that goes beyond our customers&apos; expectations.
                        </p>
                    </div>
                </div>

                {/* Not Sure What You Need? Section */}
                <div>
                    <h4 className="text-xl md:text-2xl font-bold text-[#017970] mb-6 mt-10 text-center">
                        Not Sure What You Need?
                    </h4>

                    <p className="text-base md:text-lg text-black-700 mb-6">
                        Our experienced agents are here to help guide you. Connect with an expert today to explore your options and find the perfect solution tailored to your needs.
                    </p>

                    {/* Call Now and Email Us Section */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        {/* Call Now Section */}
                        <div className="w-full md:w-1/2 bg-[#017970] text-white rounded-lg p-4">
                            <div className="text-center font-semibold text-lg">CALL NOW</div>
                            <p className="text-lg text-center mt-3">+123 456 7890</p>
                        </div>

                        {/* Email Us Section */}
                        <div className="w-full md:w-1/2 bg-[#017970] text-white rounded-lg p-4">
                            <div className="text-center font-semibold text-lg">EMAIL US</div>
                            <p className="text-lg text-center mt-3">contact@yourdomain.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
