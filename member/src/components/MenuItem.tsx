import React from "react";
import { ChevronRight } from "lucide-react";

const MenuItem = ({ label }) => {
  return (
    <div className="flex items-center justify-between cursor-pointer">
      <span className="flex items-center text-teal-600 text-sm font-medium ">
        {label}
        <ChevronRight className="w-4 h-4 ml-1 text-teal-600" />
      </span>
    </div>
  );
};

export default MenuItem;