"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const KH1EVCommunity = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease",
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden min-h-screen bg-[url('/images/bg-anime.png')] bg-cover bg-center flex flex-col items-center text-white relative">
      {/* Header Section */}
      <header className="w-full py-6 bg-black bg-opacity-50 backdrop-blur-md fixed top-0 flex justify-between px-8 z-50 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-300 neon-text">
          KH1EV Community
        </h1>
        <nav>
          <Link href="/">
            <a className="px-6 py-2 bg-pink-600 hover:bg-pink-500 transition text-white rounded-lg shadow-md">
              🔙 Back to Home
            </a>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 flex flex-col items-center text-center">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold">
          ✨ Welcome to KH1EV ✨
        </h2>
        <p data-aos="fade-up" className="mt-4 max-w-2xl text-lg text-gray-300">
          The official **Yuki Suou Discord Bot** community! Join us and explore the world of AI-powered Discord bots.
        </p>

        {/* Image Section */}
        <div data-aos="zoom-in" className="relative w-72 h-72 md:w-96 md:h-96 mt-8 shadow-xl border-4 border-pink-500 rounded-xl overflow-hidden">
          <Image src="/images/img1.png" alt="KH1EV Community" layout="fill" objectFit="cover" />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Link href="https://discord.gg/kh1ev">
            <a className="px-6 py-3 bg-pink-500 hover:bg-pink-400 transition rounded-lg text-lg shadow-lg">
              🔗 Join Discord
            </a>
          </Link>
          <Link href="/">
            <a className="px-6 py-3 bg-gray-700 hover:bg-gray-600 transition rounded-lg text-lg shadow-lg">
              🔙 Home
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KH1EVCommunity;
