'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// 👇 Define member type
type Member = {
  avatarUrl: string;
  username: string;
};

const MemberListPage = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchMembers = async () => {
      const response = await fetch('/api/discord-members');
      const data = await response.json();
      setMembers(data.members);
    };

    fetchMembers();
  }, []);

  return (
    <div className="pt-24 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center" data-aos="fade-up">
        KH1EV COMMUNITY MEMBERS
      </h1>
      <div className="mt-10 flex flex-col lg:flex-row gap-12 items-center justify-center w-[90%] mx-auto" data-aos="fade-up">
        <div className="relative w-full lg:w-1/2 h-96" data-aos="fade-right">
          <Image
            src="/images/img1.png"
            alt="KH1EV Community"
            layout="fill"
            objectFit="contain"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 text-gray-800" data-aos="fade-left">
          <h2 className="text-xl font-bold mb-4">MEMBER LIST</h2>
          <p className="text-sm leading-7 mb-4">
            Here is the list of all members in the KH1EV Community server!
          </p>

          <div className="space-y-4">
            {members.length > 0 ? (
              members.map((member: Member, index) => (
                <div key={index} className="flex items-center gap-4 border-b pb-4" data-aos="fade-up">
                  <Image
                    src={member.avatarUrl}
                    alt={member.username}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-medium">{member.username}</span>
                </div>
              ))
            ) : (
              <p>No members found</p>
            )}
          </div>

          <div className="mt-6" data-aos="zoom-in">
            <a href="https://discord.gg/MwNE7Vfb6t" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 text-white bg-[#E93306] hover:bg-[#F86401] rounded-lg text-lg font-semibold transition duration-300 flex items-center gap-2">
                <FaDiscord className="text-white text-xl" />
                Join the Community
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberListPage;
