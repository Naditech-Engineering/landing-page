import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const KH1EVCommunity = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>About Our Server</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex items-center justify-center min-h-screen relative">
        {/* Overlay agar teks lebih kontras */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="text-center p-6 bg-white bg-opacity-90 shadow-lg rounded-lg w-full max-w-2xl z-10" data-aos="fade-up">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">About Our Server</h1>
          <p className="text-gray-600">
            We are an active community where you can find fun, learning, and a great time. From gaming to tech
            discussions, we offer a diverse range of channels that cater to all interests.
          </p>
        </div>
      </div>
    </>
  );
};

export default KH1EVCommunity;
