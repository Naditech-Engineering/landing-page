'use client';
import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import comingSoonAnimation from '@/assets/animations/coming-soon.json'; // Pastikan kamu punya file ini
import AOS from 'aos';
import 'aos/dist/aos.css';

const ComingSoonPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center px-6 text-center">
      <div data-aos="fade-up" className="w-full max-w-md">
        <Lottie animationData={comingSoonAnimation} loop={true} />
      </div>
      <h1
        className="text-3xl md:text-4xl font-bold text-gray-800 mt-6"
        data-aos="fade-up"
      >
        Coming Soon
      </h1>
      <p
        className="text-gray-500 mt-2 max-w-lg text-sm md:text-base"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        We’re cooking up something cool for you! Stay tuned for new features and exciting updates. ✨
      </p>
    </div>
  );
};

export default ComingSoonPage;
