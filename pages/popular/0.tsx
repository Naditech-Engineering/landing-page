import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { FaGamepad, FaLaptopCode, FaUsers } from "react-icons/fa"; // Menggunakan beberapa ikon dari react-icons
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import CSS untuk carousel

const KH1EVCommunity: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
    });
  }, []);

  // Konfigurasi untuk carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Our Server</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="text-center p-6 bg-white shadow-md rounded-lg" data-aos="fade-up">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">About Our Server</h1>
          <p className="text-gray-600 mb-6">
            We are an active community where you can find fun, learning, and a great time. From gaming to tech discussions, we offer a diverse range of channels that cater to all interests.
          </p>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">What We Offer:</h2>
          <Carousel responsive={responsive} className="mb-6">
            <div className="flex flex-col items-center">
              <FaGamepad className="text-4xl text-blue-500 mb-2" />
              <p className="text-gray-600">Gaming</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLaptopCode className="text-4xl text-green-500 mb-2" />
              <p className="text-gray-600">Tech Discussions</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-4xl text-purple-500 mb-2" />
              <p className="text-gray-600">Community Events</p>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default KH1EVCommunity;
