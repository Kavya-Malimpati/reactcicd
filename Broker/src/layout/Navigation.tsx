import React from 'react';
import MenuItem from "../components/common/MenuItem";

const Navigation = () => {
    return (
        <nav className="bg-white shadow-sm px-2">
            <div className="container mx-auto flex items-center justify-between py-2">
                {/* Logo Section */}
                <div className="flex items-center">
                    <div className="mr-2">
                        <img
                            src="/pureLogo.png"
                            alt="Pure Insurance Logo"
                            className="h-12"
                        />
                    </div>
                    {/* <span className="text-gray-500 font-light text-lg">Broker Portal</span> */}
                </div>

                {/* Navigation Section */}
                <div className="flex space-x-6">
                <MenuItem text="HOME" menuType="HEADER" />
                <MenuItem text="MY MEMBERS" menuType="HEADER" isActive={true} />
                <MenuItem text="CLAIMS" menuType="HEADER" />
                <MenuItem text="RESOURCES" menuType="HEADER" />
                <MenuItem text="GROWTH TOOLS" menuType="HEADER" />
                <MenuItem text="PURE ONLINE" menuType="HEADER" />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;