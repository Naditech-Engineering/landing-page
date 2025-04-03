import React, { useEffect, useState } from 'react';
import { FaDiscord } from 'react-icons/fa';

const PopularDetails = () => {
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    setDetails({
      title: "KH1EV Community - Official Discord Server",
      description: "Join the official KH1EV Community Discord Server! Connect with like-minded individuals, participate in events, and enjoy exclusive access to our bot features and discussions.",
      additionalInfo: "Become a part of the vibrant and active KH1EV community! Enjoy regular updates and much more.",
    });
  }, []);

  if (!details) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <h1 className="text-2xl md:text-3xl capitalize font-bold text-center text-gray-800">
        {details.title}
      </h1>
      <div className="mt-6 flex justify-center items-center w-full">
        <div className="max-w-[340px] md:max-w-[500px] p-4 bg-gradient-to-r from-[#FD8E3F] via-[#F8D3A9] to-[#F8D3A9] rounded-xl shadow-xl overflow-hidden">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">{details.title}</h2>
            <p className="text-sm text-gray-700 mt-2">{details.description}</p>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://discord.gg/MwNE7Vfb6t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-6 rounded-full hover:scale-105 transition-all"
            >
              <FaDiscord className="mr-2" />
              Join the Discord Server
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <p>{details.additionalInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDetails;
