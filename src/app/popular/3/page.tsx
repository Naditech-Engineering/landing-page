'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DocumentationPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-24 pb-16 px-6 md:px-16">
      <h1
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        data-aos="fade-up"
      >
        📚 Yuki Suou Bot Documentation
      </h1>

      <div className="max-w-4xl mx-auto space-y-10 text-gray-800">
        <section data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-2">📌 What is Yuki Suou?</h2>
          <p className="text-sm leading-7">
            Yuki Suou is a multipurpose Discord bot with a warm personality. She's designed to help manage your community, provide entertainment, and integrate AI features seamlessly.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-2">🛠️ Features</h2>
          <ul className="list-disc pl-5 text-sm leading-7">
            <li>AI Chat with character personality</li>
            <li>Auto Moderation & Anti-Spam</li>
            <li>Leveling System</li>
            <li>Image Generation & Face Swapper</li>
            <li>Custom Commands & Role Management</li>
          </ul>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-2">🤖 Commands</h2>
          <p className="text-sm leading-7 mb-2">Prefix: <code className="bg-gray-100 px-2 py-1 rounded">/</code></p>
          <ul className="list-disc pl-5 text-sm leading-7">
            <li><code>/help</code> – Show all commands</li>
            <li><code>/chat</code> – Talk to Yuki with her character personality</li>
            <li><code>/faceswapper</code> – Swap faces on photos</li>
            <li><code>/tempmail</code> – Generate temporary email</li>
            <li><code>/inrole</code> – See members by role</li>
          </ul>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-2">⚙️ How to Add Yuki</h2>
          <p className="text-sm leading-7">
            You can add Yuki Suou to your server by clicking the invite link below.
          </p>
          <div className="mt-4">
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#E93306] hover:bg-[#F86401] transition text-white px-6 py-2 rounded-lg font-medium text-sm">
                Invite Yuki Suou
              </button>
            </a>
          </div>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-2">📞 Support</h2>
          <p className="text-sm leading-7">
            Join our Discord community to ask questions, report bugs, or just hang out!
          </p>
          <div className="mt-4">
            <a
              href="https://discord.gg/MwNE7Vfb6t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#5865F2] hover:bg-[#4752c4] transition text-white px-6 py-2 rounded-lg font-medium text-sm">
                Join Discord
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DocumentationPage;
