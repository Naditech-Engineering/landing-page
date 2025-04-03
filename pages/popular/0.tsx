import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PopularDetails = () => {
  const router = useRouter();
  const { id } = router.query;  // Accessing the dynamic 'id' parameter from the URL

  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    if (id === "0") {
      // Static content for KH1EV Discord Server
      setDetails({
        title: "KH1EV Community - Discord Server",
        description: "Welcome to the official KH1EV Community Discord Server! Join us to connect with like-minded individuals, discuss various topics, participate in events, and be part of an engaging community.",
        image: "/images/discord-server.png", // Add your image here
        additionalInfo: "We offer exclusive access to bot features, active discussions, and much more. Don't miss out!",
      });
    }
  }, [id]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center">{details.title}</h1>
      <p className="text-lg text-center mt-4">{details.description}</p>

      <div className="mt-6 text-center">
        <img src={details.image} alt={details.title} className="w-full max-w-lg mx-auto rounded-xl" />
      </div>

      <p className="mt-6 text-center">{details.additionalInfo}</p>

      <div className="mt-8 text-center">
        <a
          href="https://discord.gg/MwNE7Vfb6t"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-xl hover:bg-blue-800 transition"
        >
          Join the KH1EV Discord Server
        </a>
      </div>
    </div>
  );
};

export default PopularDetails;
