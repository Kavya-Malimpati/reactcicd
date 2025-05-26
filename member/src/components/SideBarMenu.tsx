import React from "react";
import { ChevronRight, Link, Lightbulb, Gift } from "lucide-react";
import MenuItem from "./MenuItem";

const SidebarMenu = () => {
  return (
    <div className="w-64 overflow-hidden shadow-lg bg-white rounded-md">
      <div className="p-4">
        {/* Quick Links Section */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Link className="w-5 h-5 mr-2 text-gray-800" />
            <span className="text-gray-800 font-medium text-sm">QUICK LINKS</span>
          </div>
          
          <div className="space-y-3">
            <MenuItem label="Pay my bill" />
            <MenuItem label="Submit a claim" />
            <MenuItem label="Download Auto ID" />
          </div>
        </div>
        
        {/* Privileges Section */}
        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="flex items-center mb-3">
            <Lightbulb className="w-5 h-5 mr-2 text-gray-800" />
            <span className="text-gray-800 font-mediumtext-sm">PRIVILEGES</span>
          </div>
          
          <div className="space-y-3">
            <div className="text-teal-600 text-sm font-medium cursor-pointer">Subscriber</div>
            <MenuItem label="Savings Account" />
            <MenuItem label="PURE 360" />
            <MenuItem label="Advice Dashboard" />
            <MenuItem label="Home Spotlight" />
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="space-y-3">
            <MenuItem label="Member resources" />
            <div className="flex items-center cursor-pointer">
              <Gift className="w-5 h-5 mr-2 text-teal-600" />
              <span className="text-teal-600 text-sm font-medium">Refer a friend</span>
              <ChevronRight className="w-4 h-4 ml-1 text-teal-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SidebarMenu;