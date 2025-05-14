import React from 'react';
import { useRouter } from 'next/router';

const Navigation = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between py-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <div className="mr-2">
                        <img
                            src="/api/placeholder/80/30"
                            alt="Pure Insurance Logo"
                            className="h-8"
                        />
                    </div>
                    <span className="text-gray-500 font-light text-lg">Broker Portal</span>
                </div>

                {/* Navigation Section */}
                <div className="flex space-x-6">
                    <button className="px-4 py-4 text-gray-600 hover:text-gray-900">HOME</button>
                    <button className="px-4 py-4 text-teal-600 font-medium">MY MEMBERS</button>
                    <button className="px-4 py-4 text-gray-600 hover:text-gray-900">CLAIMS</button>
                    <button className="px-4 py-4 text-gray-600 hover:text-gray-900">RESOURCES</button>
                    <button className="px-4 py-4 text-gray-600 hover:text-gray-900">GROWTH TOOLS</button>
                    <button className="px-4 py-4 text-gray-600 hover:text-gray-900">PURE ONLINE</button>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;