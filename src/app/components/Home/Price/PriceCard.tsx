import React from "react";
import { FaCheck } from "react-icons/fa6";

type priceProps = {
  price: number;
  plan: string;
};

function PriceCard({ price, plan }: priceProps) {
  const goldFeatures = [
    { feature: "Partnership" },
    { feature: "Management Improvement" },
    { feature: "Anime Roleplay" },
    { feature: "Booster Custom Role" },
    { feature: "Multi-Language AI" },
    { feature: "Fast AI Interface" },
  ];

  const diamondFeatures = [
    { feature: "Priority Support" },
    { feature: "Exclusive Partnership" },
    { feature: "Anime Roleplay" },
    { feature: "Custom VIP Role" },
    { feature: "Multi-Language AI" },
    { feature: "Ultra-Fast AI Interface" },
    { feature: "Early Access to New Features" },
  ];

  const priceFeatures = plan === "Gold" ? goldFeatures : diamondFeatures;

  return (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <p className="mt-3 text-xl font-semibold text-[#E93306] text-center">
        {plan} Plan
      </p>
      <div className="font-medium text-3xl mt-4 text-center">
        $ <span className="text-5xl font-bold">{price}</span>/Year
      </div>
      <p className="mt-2 text-gray-600 text-center">Per server</p>
      <div className="mt-10">
        {priceFeatures.map((item, index) => (
          <div
            key={index}
            className="text-center mb-4 flex items-center space-x-3"
          >
            <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
              <FaCheck className="text-green-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              {item.feature}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a 
          href="https://sociabuzz.com/yukisuou/tribe" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="block w-full p-3 text-base md:text-lg text-white font-bold bg-gradient-to-r from-[#F86401] via-[#E93306] via-[#F86401] to-[#FFA500] hover:from-[#FF5733] hover:via-[#FFA500] hover:to-[#FFD700] transition-all duration-300">
            BUY
          </button>
        </a>
      </div>
    </div>
  );
}

export default PriceCard;
