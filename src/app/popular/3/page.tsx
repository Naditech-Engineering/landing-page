'use client';
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-white text-black px-4 py-16 print:px-8 print:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-6">Privacy Policy of YukiSou Bot</h1>

        <p className="text-sm mb-4">
          This Application collects some Personal Data from its Users.
        </p>
        <p className="text-sm mb-8 italic">
          This document can be printed for reference by using the print command in the settings of any browser.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Owner and Data Controller</h2>
        <p className="mb-1">YukiSou Bot Team</p>
        <p className="mb-4">
          Owner contact email:{' '}
          <a href="mailto:contact@yukisou-bot.xyz" className="underline text-blue-600">
            contact@yukisou-bot.xyz
          </a>
        </p>

        <h2 className="text-2xl font-semibold mb-2">Types of Data Collected</h2>
        <p className="mb-4">
          Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Usage Data; Data communicated while using the service.
        </p>
        <p className="mb-4">
          Complete details on each type of Personal Data collected are provided in the dedicated sections of this Privacy Policy or by specific explanation texts displayed prior to Data collection.
        </p>
        <p className="mb-4">
          Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application. Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or functioning of the Service.
        </p>
        <p className="mb-8">
          Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner. Any use of Cookies or other tracking tools by this Application or by the owners of third-party services used herein serves the purpose of providing the Service required by the User, in addition to any other purposes described in this document and in the Cookie Policy.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Mode and Place of Processing</h2>
        <h3 className="font-semibold mt-4 mb-2">Methods of Processing</h3>
        <p className="mb-4">
          The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or destruction of Data. Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated.
        </p>
        <h3 className="font-semibold mt-4 mb-2">Place of Processing</h3>
        <p className="mb-8">
          Data is processed at the Owner's operating offices and in any other places where parties involved in processing are located. Depending on User location, data transfers may involve transferring User Data to a country other than their own.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Retention Time</h2>
        <p className="mb-8">
          Unless specified otherwise, Personal Data shall be processed and stored for as long as required by the purpose they were collected for and may be retained longer due to legal obligations or User consent.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Purposes of Processing</h2>
        <p className="mb-4">
          Data is collected to allow the Owner to provide its Service, comply with legal obligations, respond to enforcement requests, protect rights and interests of Users or third parties, detect malicious or fraudulent activity, and for:
        </p>
        <ul className="list-disc pl-6 mb-8">
          <li>Access to third-party accounts (e.g., Discord authentication)</li>
          <li>Hosting and backend infrastructure</li>
          <li>Traffic optimization and distribution</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Detailed Processing Information</h2>
        <p className="mb-4">
          Personal Data is processed for the following services:
        </p>
        <ul className="list-disc pl-6 mb-8">
          <li>Access to third-party accounts</li>
          <li>Hosting and backend infrastructure</li>
          <li>Traffic optimization and distribution</li>
          <li>Cookie Policy: This Application uses trackers; see the Cookie Policy for details.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Legal Basis for Processing</h2>
        <p className="mb-4">
          The Owner may process Personal Data if one of the following applies:
        </p>
        <ul className="list-disc pl-6 mb-8">
          <li>User consent for specific purposes</li>
          <li>Data necessary for contract performance or pre-contractual obligations</li>
          <li>Compliance with legal obligations</li>
          <li>Processing in public interest or exercise of official authority</li>
          <li>Processing necessary for legitimate interests pursued by the Owner or third parties</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">User Rights (GDPR)</h2>
        <p className="mb-4">
          Users may exercise rights regarding their Data, including:
        </p>
        <ul className="list-disc pl-6 mb-8">
          <li>Withdraw consent at any time</li>
          <li>Object to processing</li>
          <li>Access and rectify Data</li>
          <li>Request Data deletion or restriction</li>
          <li>Data portability</li>
          <li>Lodge complaints with relevant authorities</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Additional Information</h2>
        <p className="mb-4">
          Data may be used for legal purposes, including compliance with requests from authorities. System logs and maintenance may involve collection of interaction records (System logs) or IP Address for security diagnostics.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
        <p className="mb-8">
          The Owner reserves the right to update this Privacy Policy at any time by notifying Users on this page. It is recommended to review this policy regularly.
        </p>

        <p className="text-xs text-gray-500">Last updated: April 20, 2025</p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
