import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-100 shadow-sm py-2 px-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Buttons aligned to the right */}
                <div className="flex items-center space-x-4 ml-auto">
                    <button className="text-gray-600 text-sm hover:text-gray-900">
                        <span className="flex items-center">
                            <span>CONTACT US</span>
                        </span>
                    </button>
                    <button className="text-gray-600 text-sm hover:text-gray-900">
                        <span className="flex items-center">
                            <span>NOTIFICATIONS</span>
                        </span>
                    </button>
                    <button className="text-gray-600 text-sm hover:text-gray-900">
                        <span className="flex items-center">
                            <span>MY ACCOUNT</span>
                        </span>
                    </button>
                    <button className="text-gray-600 text-sm hover:text-gray-900">
                        <span className="flex items-center">
                            <span>LOG OFF</span>
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
