import React from "react";

interface StatsCardProps {
    label: string; // Icon name as a string
    value: string; // Title text
}

const ItemInfo: React.FC<StatsCardProps> = ({ label, value }) => {
    return (
        <div>
            <p className="text-sm text-gray-600 mb-1">
                {label}
            </p>
            <p className="text-sm">{value}</p>
        </div>
    );
};

export default ItemInfo;