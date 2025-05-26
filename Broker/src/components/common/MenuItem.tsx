import React from "react";
import * as Icons from "lucide-react";
interface MenuItemProps {
    text: string;
    icon?: string;
    menuType?: string;
    isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, icon = '', menuType = 'SUBMENU', isActive = false }) => {
    return (
        <>{menuType === 'HEADER' ?
            <button className={`px-2 py-2 font-medium cursor-pointer ${isActive ? "text-teal-600 hover:text-teal-900" : "text-gray-600 hover:text-gray-900"}`}>{text}</button>
            :
            <button className="text-[12px] text-gray-600 text-sm hover:text-gray-900 cursor-pointer">
                <span className="flex items-center">
                    {icon && Icons[icon] && React.createElement(Icons[icon], { className: "mr-1", size: 16 })}
                    <span>{text}</span>
                </span>
            </button>
        }
        </>
    );
};

export default MenuItem;