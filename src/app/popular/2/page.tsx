'use client';
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white text-black container mx-auto pt-24 p-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service of Yuki Suou</h1>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Introduction</h2>
      <p className="mb-4">
        Welcome to Yuki Suou ("Service"), operated by the Yuki Suou Bot Team ("we", "us", "our"). By accessing or using our Service, you agree to be bound by these Terms of Service. If you do not agree with any part of the terms, you may not access or use the Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Eligibility</h2>
      <p className="mb-4">
        You must be at least 13 years old to use this Service. By using the Service, you affirm that you meet this requirement.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update these Terms at any time. Changes will be posted on this page and will become effective immediately. Continued use of the Service after changes are posted constitutes acceptance of those changes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Use of the Service</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">4.1 User Conduct</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Use the Service only for lawful purposes.</li>
        <li>Do not attempt to harm, disrupt, or interfere with the Service.</li>
        <li>Do not use the Service to distribute malicious content, including malware or spam.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">4.2 Prohibited Content</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Illegal, harmful, or abusive material.</li>
        <li>Defamatory, obscene, or offensive content.</li>
        <li>Content that violates privacy, publicity rights, or intellectual property.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Privacy</h2>
      <p className="mb-4">
        Your use of the Service is also governed by our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Intellectual Property</h2>
      <p className="mb-4">
        All content, trademarks, logos, and designs are our property or licensed to us. You may not use them without express permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Disclaimer of Warranties</h2>
      <p className="mb-4">
        The Service is provided "as is" and "as available" without warranties of any kind. We do not guarantee uninterrupted or error-free operation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Limitation of Liability</h2>
      <p className="mb-4">
        To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages resulting from your use of the Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">9. Indemnification</h2>
      <p className="mb-4">
        You agree to indemnify and hold harmless Yuki Suou Bot Team and its affiliates from any claims or damages resulting from your violation of these Terms or misuse of the Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">10. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of Indonesia. Any disputes arising from these Terms shall be resolved in Indonesian courts.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">11. Contact Us</h2>
      <p className="mb-8">
        If you have any questions about these Terms, please contact us at <a href="mailto:contact@yukisuou.xyz" className="text-blue-600 underline">contact@yukisuou.xyz</a>.
      </p>

      <p className="text-sm text-gray-500">Last updated: May 6, 2025</p>
    </div>
  );
};

export default TermsOfService;
