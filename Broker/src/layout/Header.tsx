import React from "react";
import MenuItem from "../components/common/MenuItem";

const Header = () => {
    return (
        <header className="bg-gray-100 shadow-sm py-2 px-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Buttons aligned to the right */}
                <div className="flex items-center space-x-4 ml-auto">
                    <MenuItem text="CONTACT US" icon='PhoneIcon' />
                    <MenuItem text="NOTIFICATIONS" icon='BellIcon' />
                    <MenuItem text="MY ACCOUNT" icon='User' />
                    <MenuItem text="LOG OFF" icon='LogOutIcon' />
                </div>
            </div>
        </header>
    );
};

export default Header;
