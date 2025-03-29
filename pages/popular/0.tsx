import Image from "next/image";
import Link from "next/link";
import React from "react";

const KH1EVCommunity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 flex flex-col items-center justify-center text-white p-6 relative">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full bg-[url('/images/bg-anime.png')] bg-cover bg-center opacity-20 blur-sm"></div>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold neon-text mb-6 text-center animate-pulse">
        ✨ KH1EV COMMUNITY ✨
      </h1>

      {/* Image Section with Glow */}
      <div className="relative w-80 h-80 md:w-96 md:h-96 shadow-xl rounded-lg overflow-hidden border-4 border-pink-400 animate-fadeIn">
        <Image src="/images/img1.png" alt="KH1EV Community" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Description Section */}
      <p className="mt-6 text-lg md:text-xl text-center max-w-2xl bg-black bg-opacity-40 p-4 rounded-lg shadow-lg border border-pink-300">
        Welcome to <strong className="text-pink-300">KH1EV Community</strong>! The official home of **Yuki Suou Discord Bot**.  
        Join us and explore an amazing world of bot development, anime culture, and technology.
      </p>

      {/* Buttons Section */}
      <div className="mt-8 flex flex-col md:flex-row gap-6">
        {/* Discord Button */}
        <Link href="https://discord.gg/kh1ev">
          <a className="px-8 py-4 bg-pink-500 text-white text-xl font-semibold rounded-xl shadow-md border-2 border-white hover:scale-110 transform transition duration-300 hover:bg-pink-700 hover:border-pink-300">
            🔗 Join KH1EV Discord
          </a>
        </Link>

        {/* Back Button */}
        <Link href="/">
          <a className="px-8 py-4 bg-gray-700 text-white text-xl font-semibold rounded-xl shadow-md border-2 border-gray-400 hover:scale-110 transform transition duration-300 hover:bg-gray-600 hover:border-gray-200">
            🔙 Back to Home
          </a>
        </Link>
      </div>

      {/* Floating Anime Effect */}
      <div className="absolute bottom-10 left-5 w-24 h-24 animate-bounce">
        <Image src="/images/anime-icon.png" alt="Anime Icon" layout="fill" objectFit="contain" />
      </div>
      <div className="absolute top-10 right-5 w-24 h-24 animate-pulse">
        <Image src="/images/anime-sparkle.png" alt="Anime Sparkle" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default KH1EVCommunity;
