'use client';

export default function Footer() {
    return (
        <footer className="bg-[#017970] text-white py-12">
            <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Reach Us Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Reach Us</h3>
                    <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
                    <p className="mb-2"><strong>Email:</strong> contact@yourcompany.com</p>
                    <p className="mb-2"><strong>Address:</strong> 123 Main Street, Nairobi, Kenya</p>
                    <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
                </div>

                {/* Insurance Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Insurance</h3>
                    <ul className="space-y-2">
                        <li>Life Insurance</li>
                        <li>Rent Insurance</li>
                        <li>Identity Insurance</li>
                        <li>Home-owner Insurance</li>
                        <li>Vehicle Insurance</li>
                        <li>Health Insurance</li>
                        <li>Workers Insurance</li>
                        <li>Disability Insurance</li>
                    </ul>
                </div>

                {/* Quick Service Links Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Service Links</h3>
                    <ul className="space-y-2">
                        <li>Report a claim</li>
                        <li>Service Providers</li>
                        <li>Make a payment</li>
                        <li>Register for an account</li>
                        <li>Portal</li>
                        <li>Roadside Assistance</li>
                        <li>Complaints</li>
                    </ul>
                </div>

                {/* Get The App Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Get The App</h3>
                    <p className="mb-4">Stay connected and manage your insurance on the go.</p>
                    <button className="bg-white text-[#017970] px-4 py-2 rounded hover:bg-gray-200">
                        Download App
                    </button>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center mt-12 text-sm">
                <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
