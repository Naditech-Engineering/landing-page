'use client';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white text-black container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy of Yuki Suou</h1>
      <p className="text-lg mb-4">This Application collects some Personal Data from its Users.</p>

      <h2 className="text-2xl font-semibold mb-2">Owner and Data Controller</h2>
      <p className="mb-1">Yuki Suou Bot Team</p>
      <p className="mb-4">
        Owner contact email:{' '}
        <a href="mailto:contact@yukisuou-bot.xyz" className="underline text-blue-600">
          contact@yukisuou-bot.xyz
        </a>
      </p>

      <h2 className="text-2xl font-semibold mb-2">Types of Data collected</h2>
      <p className="mb-4">
        Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Usage Data; Data communicated while using the service.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Mode and place of processing the Data</h2>
      <h3 className="text-xl font-semibold mb-2">Methods of processing</h3>
      <p className="mb-4">
        The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.
      </p>
      <p className="mb-4">
        The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application or external parties (such as third-party technical service providers) appointed as Data Processors by the Owner.
      </p>

      <h3 className="text-xl font-semibold mb-2">Place</h3>
      <p className="mb-4">
        The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Retention time</h2>
      <p className="mb-4">
        Personal Data shall be processed and stored for as long as required by the purpose they have been collected for and may be retained longer due to applicable legal obligation or based on the Users’ consent.
      </p>

      <h2 className="text-2xl font-semibold mb-2">The purposes of processing</h2>
      <p className="mb-4">
        The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests, detect malicious or fraudulent activity, as well as the following: Access to third-party accounts, Traffic optimization and distribution, and Hosting and backend infrastructure.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Detailed information on the processing of Personal Data</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Access to third-party accounts</li>
        <li>Hosting and backend infrastructure</li>
        <li>Traffic optimization and distribution</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Further Information for Users</h2>
      <h3 className="text-xl font-semibold mb-2">Legal basis of processing</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>User consent for specific purposes.</li>
        <li>Data necessary for contract performance or pre-contractual obligations.</li>
        <li>Compliance with legal obligations.</li>
        <li>Public interest or official authority tasks.</li>
        <li>Legitimate interests pursued by the Owner or third parties.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">How to exercise these rights</h3>
      <p className="mb-4">
        Any requests to exercise User rights can be directed to the Owner through the contact details provided. Such requests are free of charge and will be answered within one month.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes to this Privacy Policy</h2>
      <p className="mb-4">
        The Owner reserves the right to update this Privacy Policy at any time by notifying Users on this page. It is recommended to review this policy regularly.
      </p>

      <p className="text-sm text-gray-500">Last modified: April 20, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
