'use client';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white text-black container mx-auto pt-24 p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Introduction</h2>
      <p className="mb-4">
        Welcome to Yuki Suou ("Service"), operated by the Yuki Suou Bot Team ("we", "us", "our"). This Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using the Service, you agree to the terms of this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Information We Collect</h2>
      <p className="mb-4">We may collect the following types of information:</p>
      <ul className="list-disc pl-6 mb-8">
        <li>Discord user ID, username, and messages you send to the bot</li>
        <li>Server and channel metadata (e.g., guild ID, channel ID)</li>
        <li>Usage statistics such as command interactions and feature usage</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. How We Use the Data</h2>
      <p className="mb-8">
        We use your data to provide core bot functionality, improve our Service, and maintain performance. We may also use your data to comply with legal obligations or enforce our Terms of Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Data Sharing</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. Your data may be shared with:
      </p>
      <ul className="list-disc pl-6 mb-8">
        <li>Service providers (e.g., hosting and infrastructure providers)</li>
        <li>Authorities when legally required to do so</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Retention</h2>
      <p className="mb-8">
        We retain your data for as long as necessary to provide the Service and meet legal requirements. Data may be retained longer if required by law or if you have given consent.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
      <ul className="list-disc pl-6 mb-8">
        <li>Access the personal data we hold about you</li>
        <li>Request correction or deletion of your data</li>
        <li>Object to or restrict our use of your data</li>
        <li>Withdraw consent where processing is based on it</li>
        <li>Lodge a complaint with a supervisory authority</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Children's Privacy</h2>
      <p className="mb-8">
        Our Service is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Data Security</h2>
      <p className="mb-8">
        We use reasonable security measures to protect your data from unauthorized access, alteration, or disclosure. However, no system is entirely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">9. Changes to This Policy</h2>
      <p className="mb-8">
        We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "last updated" date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact</h2>
      <p className="mb-8">
        If you have any questions about this Privacy Policy, you can contact us at <a href="mailto:contact@yukisuou.xyz" className="text-blue-600 underline">contact@yukisuou.xyz</a>.
      </p>

      <p className="text-sm text-gray-500">Last updated: April 20, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
