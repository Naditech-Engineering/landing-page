'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const MemberListPage = () => {
  const [members, setMembers] = useState<
    { username: string; avatarUrl: string }[]
  >([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    // Dummy fetch - replace with real API call
    const fetchMembers = async () => {
      const res = await fetch("/api/discord-members");
      const data = await res.json();
      setMembers(data.members || []);
    };

    fetchMembers();
  }, []);

  return (
    <div className="pt-24 pb-16 px-4 bg-[#f9f9fb] min-h-screen">
      <h1
        className="text-3xl font-bold text-center text-gray-800 mb-10"
        data-aos="fade-up"
      >
        KH1EV Community Members
      </h1>

      {members.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center transition duration-300 hover:scale-105"
              data-aos="zoom-in"
            >
              <Image
                src={member.avatarUrl}
                alt={member.username}
                width={70}
                height={70}
                className="rounded-full mb-3"
              />
              <span className="text-gray-700 font-medium text-sm text-center">
                {member.username}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500" data-aos="fade-up">
          No members found.
        </p>
      )}
    </div>
  );
};

export default MemberListPage;
