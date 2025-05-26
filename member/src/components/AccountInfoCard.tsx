import React from "react";
import { User, Phone } from "lucide-react";

const AccountInfoCard = () => {
  return (
    <div className="w-full overflow-hidden shadow-lg bg-white rounded-md">
      <div className="flex flex-col md:flex-row mb-6">
        {/* MY ACCOUNT Section */}
        <div className="md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="flex items-center mb-4">
            <User className="w-5 h-5 mr-2" />
            <h2 className="font-bold text-gray-800">MY ACCOUNT</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 text-sm">Member ID</p>
              <p className="text-gray-800">123456789012</p>
            </div>
            
            <div>
              <p className="text-gray-600 text-sm">Member Since</p>
              <p className="text-gray-800">Nov 21, 2019</p>
            </div>
          </div>
        </div>
        
        {/* MY BROKER Section */}
        <div className="md:w-2/3 p-6">
          <div className="flex items-center mb-4">
            <Phone className="w-5 h-5 mr-2" />
            <h2 className="font-bold text-gray-800">MY BROKER</h2>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-800 text-lg">Greene Brothers of Dallas Fort Worth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-sm">Phone</p>
              <p className="text-teal-600">713.936.7873</p>
            </div>
            
            <div>
              <p className="text-gray-600 text-sm">Email</p>
              <p className="text-teal-600">lynn.starkey@greenebrothers.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoCard;