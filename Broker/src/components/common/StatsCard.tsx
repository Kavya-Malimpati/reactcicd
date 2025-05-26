import React from "react";
import * as Icons from "lucide-react";

interface StatsCardProps {
    icon: string; // Icon name as a string
    title: string; // Title text
    count: number | string; // Count value (can be a number or string)
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, count }) => {
    return (
        <div className="text-left">
            <div className="flex items-center mb-2 justify-center">
                {icon && Icons[icon] && React.createElement(Icons[icon], { className: "w-5 h-5 mr-2" })}
                <span className="uppercase text-md font-medium">{title}</span>
            </div>
            <span className="text-2xl font-light">{count}</span>
        </div>
    );
};

export default StatsCard;