import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link"; // Import Link from Next.js

function AnalyticFeatures() {
  return (
    <div className="pt-24 pb-16">
      {/* define grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Image
            src="/images/aboutBg.png"
            alt="image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        {/* text */}
        <div>
          <h1 className="text-base font-semibold text-[#FF5733]">
            Meta AI Contribution Indonesia
          </h1>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Let's Make Discord Server More Interesting and Attractive with
            YUKI<span className='text-[#F86401]'>SUOU</span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[1.6rem]">
            We prioritize understanding our users and constantly improving
            Yuki Suou through advanced features and user feedback. By staying
            attuned to your needs, we ensure a seamless and enjoyable
            bot experience. Here's how we deliver value:
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Indonesian Bot
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Community Management
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Roleplay Minigame
            </li>
          </ul>
          <Link href="https://discord.com/oauth2/authorize?client_id=1294484671643779073" target="_blank" rel="noopener noreferrer">
            <button className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-[#F86401] transition-all duration-200 hover:text-white">
              Invite
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnalyticFeatures;