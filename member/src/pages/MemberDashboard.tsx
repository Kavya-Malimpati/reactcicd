import React, { useEffect, useState } from "react";
import {
  Clock,
} from "lucide-react";
import SidebarMenu from "../components/SideBarMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AccountInfoCard from "../components/AccountInfoCard";
import CurrentPoliciesCard from "../components/CurrentPoliciesCard";
import AdviceCardComponent from "../components/AdviceCardComponent";
import Spotlight from "../components/Spotlight";
const MemberDashboard = () => {
  const [isImpersonation, setIsImpersonation] = useState(false);

  useEffect(() => {
    // Check if the user is in impersonation mode
    const queryParams = new URLSearchParams(window.location.search);
    const impersonationMode = queryParams.get("Impersonation");
    if (impersonationMode === "true") {
      setIsImpersonation(true);
    } else {
      setIsImpersonation(false);
    }
  }, []);
  // Member data
  const member = {
    name: "JOSEPHINE SILVERSTEIN",
    id: "12345678A012",
    memberSince: "Nov 21, 2019",
  };

  const adviceCards: AdviceCard[] = [
    {
      image:
        "https://st2.depositphotos.com/1591133/8812/i/450/depositphotos_88120646-stock-photo-idyllic-summer-landscape-with-clear.jpg",
      tag: "ADVICE",
      title: "Building Resilient Homes: Taking on Winter Weather",
      text: "In many parts of the U.S., there's no escaping winter weather. Follow these steps from our Risk Managers to reduce cold weather risks in your home.",
    },
    {
      image:
        "https://st2.depositphotos.com/1591133/8812/i/450/depositphotos_88120646-stock-photo-idyllic-summer-landscape-with-clear.jpg",
      tag: "ADVICE",
      title: "Traveling in the Digital Age: How to Stay Ahead of Hackers",
      text: "Cybercrime can occur anywhere and at any time, so it's important to be aware of the risks you may face.",
    },
    {
      image:
        "https://st2.depositphotos.com/1591133/8812/i/450/depositphotos_88120646-stock-photo-idyllic-summer-landscape-with-clear.jpg",
      tag: "ADVICE",
      title: "Advice for Parents of Teen Drivers",
      text: "Learning how to drive is an exciting milestone for many teenagers and often a source of worry for their parents...",
    },
    // Add more objects here in the same format to expand
  ];
  const spotlightData = {
    title: "Protect Your Home with Smart Technology",
    description: "Discover how the latest smart home devices can help you prevent losses and keep your property safe. From leak detectors to security cameras, learn what works best for you.",
    buttonText: "Learn More",
    imageUrl: "https://st2.depositphotos.com/1591133/8812/i/450/depositphotos_88120646-stock-photo-idyllic-summer-landscape-with-clear.jpg",
    imageAlt: "Modern smart home",
    tag: "FEATURED",
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top yellow banner */}
      {isImpersonation && (
        <div className="bg-yellow-300 py-2 px-4 flex items-center justify-center text-sm font-medium">
          <Clock size={16} className="mr-2" />
          <span>MEMBER VIEW: {member.name}</span>
          <span className="mx-2">•</span>
          <a href="#" className="hover:underline">
            Return to PURE broker portal
          </a>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-6xl mx-auto bg-white shadow">
        <Header />

        <Navigation />

        {/* Teal header section */}
        <div className="bg-teal-600 p-8 text-white relative h-50">
          <h1 className="text-3xl font-light pt-6">Good morning</h1>
        </div>

        {/* Dashboard sections */}
        <div className="grid grid-cols-12 gap-4 p-4 -mt-20 relative z-10">
          {/* Sidebar */}
          <div className="col-span-3">
            <SidebarMenu />
          </div>

          {/* Main Content */}
          <div className="col-span-9 grid grid-cols-1 gap-4">
            <AccountInfoCard />
            <CurrentPoliciesCard />
          </div>
        </div>
        <Spotlight {...spotlightData} />
        <section className="bg-[#f9f9f9] py-12 px-4">
          <div className="max-w-6xl mx-auto font-sans">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl text-gray-600 font-light">
                Loss Prevention: Advice and Insights
              </h1>
              <a
                href="#"
                className="text-teal-500 flex items-center font-medium"
              >
                View Blog
                <svg
                  className="ml-1 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Advice Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {adviceCards.map((card, idx) => (
                <AdviceCardComponent key={idx} card={card} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default MemberDashboard;
