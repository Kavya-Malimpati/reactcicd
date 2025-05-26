import React from "react";
import { Shield, Home, Car, Calendar, ChevronRight } from "lucide-react";

const CurrentPoliciesCard = () => {
  // Sample policy data
  const policies = [
    {
      id: "HOO456789123",
      state: "TX",
      effectiveUntil: "January 16, 2020",
    },
    {
      id: "HOO112789123",
      state: "CT",
      effectiveUntil: "January 16, 2020",
    },
    {
      id: "HOO456789123",
      state: "TX",
      effectiveUntil: "January 16, 2020",
    },
  ];

  // Active policy type (Homeowners is active in the example)
  const activePolicy: "Homeowners" | "Personal Auto" = "Homeowners";

  return (
    <div className="w-full  rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row mb-6">
        <div className="flex md:w-1/3 pl-6 pt-6">
        <Shield className="w-5 h-5 mr-2 text-gray-800" />
        <h2 className="font-bold text-gray-800">CURRENT POLICES</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left sidebar - Policy types */}
        <div className="md:w-1/3 pl-6 border-b md:border-b-0 border-gray-200">
          <div  
            className={`flex items-center p-3 mb-2 rounded-md mr-4 cursor-pointer ${
              activePolicy === "Homeowners" ? "bg-blue-50" : ""
            }`}
          >
            <Home
              className={`w-5 h-5 mr-2 ${
                activePolicy === "Homeowners" ? "text-teal-600" : "text-gray-500"
              }`}
            />
            <span
              className={`${
                activePolicy === "Homeowners" ? "text-teal-600" : "text-gray-700"
              }`}
            >
              Homeowners
            </span>
          </div>

          <div
            className={`flex items-center p-3 rounded-md cursor-pointer mr-4 ${
              activePolicy === ("Personal Auto" as typeof activePolicy) ? "bg-blue-50" : ""
            }`}
          >
            <Car
              className={`w-5 h-5 mr-2 ${
                activePolicy === ("Personal Auto" as typeof activePolicy) ? "text-teal-600" : "text-gray-500"
              }`}
            />
            <span
              className={`${
                activePolicy === ("Personal Auto" as typeof activePolicy) ? "text-teal-600" : "text-gray-700"
              }`}
            >
              Personal Auto
            </span>
          </div>
        </div>

        {/* Right content - Policy details */}
        <div className="md:w-2/3 pb-6 pr-10">
          <div className="space-y-4">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-gray-800 font-light">
                    #{policy.id} - {policy.state}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Effective until {policy.effectiveUntil}</span>
                  </div>
                </div>
                <div className="mt-3 md:mt-0">
                  <a
                    href="#"
                    className="flex items-center text-teal-600 hover:text-teal-700"
                  >
                    View policy <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPoliciesCard;