// Filename: src/app/pages/popular/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';

const PopularDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the ID from the URL

  // Sample data for demonstration
  const communityData: { [key: number]: { title: string; description: string; image: string } } = {
    0: {
      title: "KH1EV Community",
      description: "Official Yuki Suou Discord Bot.",
      image: "/images/img1.png",
    },
    1: {
      title: "Partnership",
      description: "Server Partnership Affiliate with Kh1ev Community.",
      image: "/images/img2.png",
    },
    // Add more community data as needed
  };

  // Convert id to a number if it's defined
  const communityId = Array.isArray(id) ? parseInt(id[0]) : id ? parseInt(id) : undefined;

  // Ensure communityId is a valid number before accessing communityData
  const community = communityId !== undefined && communityId in communityData ? communityData[communityId] : null;

  if (!community) {
    return <div>Loading...</div>; // Handle loading state or not found
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{community.title}</h1>
      <img src={community.image} alt={community.title} className="my-4" />
      <p>{community.description}</p>
      {/* Add more details or components as needed */}
    </div>
  );
};

export default PopularDetail;