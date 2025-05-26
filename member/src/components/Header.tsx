import React from "react";
import { User } from "lucide-react";

const Header = () => {
    return (
        <header className="bg-gray-100 shadow-sm py-2 px-4">
            <div className="container mx-auto flex justify-between items-center">
                
                {/* Buttons aligned to the right */}
                <div className="flex items-center space-x-4 ml-auto">
                <a href="#" className="p-1 border rounded-full">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </a>
                    <button className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">
                        <span className="flex items-center">
                            <span>CONTACT US</span>
                        </span>
                    </button>
                    <button className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer">
                        <span className="flex items-center">
                            <span>MY ACCOUNT</span>
                        </span>
                    </button>
                    <User className="w-5 h-5 cursor-pointer" />
                </div>
            </div>
        </header>
    );
};

export default Header;
