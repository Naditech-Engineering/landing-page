'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const PopularDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 relative z-10 bg-[url('/images/Frame.png')] bg-contain bg-center bg-repeat">
      <div className="max-w-5xl mx-auto text-center">
        <h1
          className="text-3xl md:text-4xl font-extrabold text-[#F86401] mb-6"
          data-aos="fade-up"
        >
          KH1EV Community
        </h1>

        <div
          className="relative w-full h-64 md:h-96 mx-auto mb-10 rounded-xl overflow-hidden shadow-xl"
          data-aos="zoom-in"
        >
          <Image
            src="/images/img1.png"
            alt="KH1EV Community"
            fill
            className="object-contain"
          />
        </div>

        <p
          className="text-base md:text-lg text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          KH1EV Community adalah komunitas resmi yang membangun dan memelihara bot Discord Yuki Suou.
          Server ini menjadi pusat interaksi pengguna, tempat diskusi fitur, bug report, saran pengembangan,
          serta berbagai event menarik. Jika kamu ingin terhubung dengan komunitas, mendapatkan dukungan teknis,
          atau sekadar nongkrong bareng pengguna lain, gabung sekarang juga!
        </p>

        <a
          href="https://discord.gg/MwNE7Vfb6t"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-6 py-3 bg-[#F86401] text-white font-semibold rounded-xl shadow hover:bg-[#e15600] transition duration-300"
          data-aos="fade-up"
        >
          Join Discord
        </a>
      </div>
    </div>
  );
};

export default PopularDetails;
