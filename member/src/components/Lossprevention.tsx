import React from "react";

type AdviceCard = {
  image: string;
  tag: string;
  title: string;
  text: string;
};

const LossPrevention: React.FC = () => {
  // Simulated API response
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

  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-6xl mx-auto font-sans">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl text-gray-600 font-light">Loss Prevention: Advice and Insights</h1>
          <a href="#" className="text-teal-500 flex items-center font-medium">
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
  );
};

export default LossPrevention;

type AdviceCardProps = {
  card: AdviceCard;
};

const AdviceCardComponent: React.FC<AdviceCardProps> = ({ card }) => (
  <div className="bg-white shadow-md rounded-md overflow-hidden">
    <img src={card.image} alt="" className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="uppercase text-xs font-semibold text-gray-600 tracking-wide mb-2">{card.tag}</div>
      <h2 className="text-xl text-gray-700 font-light mb-3">{card.title}</h2>
      <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
    </div>
  </div>
);