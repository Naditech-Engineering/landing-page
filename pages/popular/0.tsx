import Image from "next/image";
import Link from "next/link";
import React from "react";

const KH1EVCommunity = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        KH1EV Community
      </h1>

      <div className="relative w-80 h-80 shadow-lg rounded-lg overflow-hidden">
        <Image src="/images/img1.png" alt="KH1EV Community" layout="fill" objectFit="cover" />
      </div>

      <p className="mt-6 text-lg text-gray-700 text-center max-w-2xl">
        Welcome to <strong>KH1EV Community</strong>, the official home of **Yuki Suou Discord Bot**. 
        A passionate community focused on bot development and collaboration.
      </p>

      <div className="mt-6">
        <Link href="https://discord.gg/kh1ev">
          <a className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
            🔗 Join KH1EV Discord
          </a>
        </Link>
      </div>

      <div className="mt-4">
        <Link href="/">
          <a className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition">
            🔙 Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default KH1EVCommunity;
