import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy of Yuki Suou</h1>
      <p className="text-lg mb-4">This Application collects some Personal Data from its Users.</p>

      <h2 className="text-2xl font-semibold mb-4">Owner and Data Controller</h2>
      <p className="mb-4">Yuki Suou</p>
      <p className="mb-4">Owner contact email: contact@yukisuou-bot.xyz</p>

      <h2 className="text-2xl font-semibold mb-4">Types of Data collected</h2>
      <p className="mb-4">
        Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Usage Data; Data communicated while using the service.
      </p>
      <p className="mb-4">
        Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Mode and place of processing the Data</h2>
      <h3 className="text-xl font-semibold mb-2">Methods of processing</h3>
      <p className="mb-4">
        The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.
      </p>
      <p className="mb-4">
        The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner.
      </p>

      <h3 className="text-xl font-semibold mb-2">Place</h3>
      <p className="mb-4">
        The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Retention time</h2>
      <p className="mb-4">
        Personal Data shall be processed and stored for as long as required by the purpose they have been collected for and may be retained for longer due to applicable legal obligation or based on the Users’ consent.
      </p>

      <h2 className="text-2xl font-semibold mb-4">The purposes of processing</h2>
      <p className="mb-4">
        The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following: Access to third-party accounts, Traffic optimization and distribution, and Hosting and backend infrastructure.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Detailed information on the processing of Personal Data</h2>
      <p className="mb-4">
        Personal Data is collected for the following purposes and using the following services:
      </p>
      <ul className="list-disc ml-6">
        <li>Access to third-party accounts</li>
        <li>Hosting and backend infrastructure</li>
        <li>Traffic optimization and distribution</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Further Information for Users</h2>
      <h3 className="text-xl font-semibold mb-2">Legal basis of processing</h3>
      <p className="mb-4">
        The Owner may process Personal Data relating to Users if one of the following applies:
      </p>
      <ul className="list-disc ml-6">
        <li>Users have given their consent for one or more specific purposes.</li>
        <li>Provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof.</li>
        <li>Processing is necessary for compliance with a legal obligation to which the Owner is subject.</li>
        <li>Processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner.</li>
        <li>Processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">How to exercise these rights</h3>
      <p className="mb-4">
        Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. Such requests are free of charge and will be answered by the Owner as early as possible and always within one month, providing Users with the information required by law.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
      <p className="mb-4">
        The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within this Application. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.
      </p>
      <p className="text-sm text-gray-500 mt-6">Last modified: [Insert Date]</p>
    </div>
  );
};

export default PrivacyPolicy;
