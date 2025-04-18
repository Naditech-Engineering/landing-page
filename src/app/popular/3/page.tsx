'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ComingSoonPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4 pt-24 pb-16">
      {/* Glowing Circle Animation */}
      <div
        className="w-48 h-48 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 animate-pulse shadow-2xl blur-sm"
        data-aos="zoom-in"
      ></div>

      {/* Coming Soon Text */}
      <h1
        className="text-4xl md:text-5xl font-extrabold mt-8 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        data-aos="fade-up"
      >
        Coming Soon
      </h1>

      <p
        className="mt-4 text-gray-600 max-w-md text-sm md:text-base"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        This feature is under development. We’re preparing something awesome for you!
      </p>

      {/* Bouncing Dot Animation */}
      <div
        className="flex gap-2 mt-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <span className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.1s]"></span>
        <span className="w-3 h-3 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span className="w-3 h-3 bg-pink-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
      </div>
    </div>
  );
};

export default ComingSoonPage;
