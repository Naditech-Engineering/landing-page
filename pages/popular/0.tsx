import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const PopularDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    if (id === "0") {
      setDetails({
        title: "KH1EV Community - Discord Server",
        description: "Join the official KH1EV Community Discord Server! Connect with like-minded individuals, participate in events, and enjoy exclusive access to our bot features and discussions.",
        image: "/images/discord-server.png", // Add your image here
        additionalInfo: "Become a part of the vibrant and active KH1EV community! Enjoy regular updates and much more.",
      });
    }
  }, [id]);

  if (!details) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section: Title and Description */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">{details.title}</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{details.description}</p>
      </div>

      {/* Section: Image */}
      <div className="mt-12 text-center">
        <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <Image src={details.image} alt={details.title} layout="responsive" width={1000} height={500} className="object-cover rounded-lg transition-transform transform hover:scale-105" />
        </div>
      </div>

      {/* Section: Additional Information */}
      <div className="mt-10 text-center">
        <p className="text-xl text-gray-700">{details.additionalInfo}</p>
      </div>

      {/* Section: Join Button */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://discord.gg/MwNE7Vfb6t"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full text-2xl font-semibold hover:bg-gradient-to-l transform hover:scale-105 transition-all"
        >
          Join the KH1EV Discord Server
        </a>
      </div>

      {/* Footer section */}
      <div className="mt-20 border-t pt-8 text-center text-gray-600 text-sm">
        <p>Copyright © 2025 Kh1ev Community</p>
      </div>
    </div>
  );
};

export default PopularDetails;
