import React from "react";
import { ChevronRight, CreditCard, Heart } from "lucide-react";
import MenuItem from "./MenuItem";
export default function Sidebar() {
  return (
    <div className="w-60 p-4 bg-white rounded-lg shadow-md self-start">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-xs uppercase tracking-wide text-gray-500 font-bold mb-4 flex items-center">
          <span className="mr-2">Quick Links</span>
        </h2>
        <div className="space-y-3">
          {[
            "Pay My Bill",
            "Submit a Claim",
            "Auto ID Download",
            "Enroll in Autopay",
          ].map((text, i) => (
            <MenuItem label={text} />
          ))}
        </div>
      </div>

      <div className="pt-4">
        <h2 className="text-xs uppercase tracking-wide text-gray-700 font-bold mb-3 flex items-center">
          <CreditCard size={16} className="mr-2 text-gray-500" />
          <span>MY BROKER</span>
        </h2>
        <div className="mb-6">
          <div className="text-gray-700 font-bold">Valent Group, LLC</div>
          <div className="text-gray-700 text-sm">205-262-2627</div>
        </div>
        <a href="#" className="flex items-center text-teal-500 text-sm font-medium">
          <Heart size={16} className="mr-2" />
          <span>Refer A Friend</span>
          <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
}
