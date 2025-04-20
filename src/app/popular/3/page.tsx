'use client';
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#5e5247] px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            This Privacy Policy outlines the types of personal data that are collected by YukiSuou ("we", "our", or "us") and how we use, process, and protect that information. By using our services, you agree to the collection and use of your data as outlined in this document. Please read this Privacy Policy carefully before using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Owner and Data Controller</h2>
          <p><strong>Owner:</strong> YukiSuou</p>
          <p><strong>Contact Information:</strong> support@yukisuou.com</p>
          <p>The owner and controller of your personal data is responsible for the processing of your data as outlined in this Privacy Policy.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Types of Data Collected</h2>
          <p>We collect the following types of personal data:</p>
          <ul className="list-disc pl-6">
            <li><strong>Personal Information:</strong> This includes your name, email address, and other details that you provide when signing up or using our services.</li>
            <li><strong>Usage Data:</strong> This refers to information collected automatically while you use our services, such as your device’s IP address, browser type, and actions taken on our website.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to track activity on our website and improve our services. You may disable cookies in your browser settings, but this may affect the functionality of the site.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mode and Place of Processing the Data</h2>
          <p>The Owner uses appropriate security measures to protect your personal data from unauthorized access or disclosure. Data is processed using computers and IT tools, with organizational procedures strictly related to the purposes outlined in this policy.</p>

          <h3 className="font-semibold mt-4">Methods of Processing</h3>
          <p>Data processing is carried out through the use of secure servers, encrypted communication channels, and secure authentication protocols. All data is processed only for the purposes mentioned in this Privacy Policy.</p>

          <h3 className="font-semibold mt-4">Place of Processing</h3>
          <p>Your data is processed within our operating offices and, in some cases, by third-party service providers located in various countries. Transfers of personal data to other countries will comply with applicable data protection laws.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Retention Time</h2>
          <p>Personal data will be stored only for as long as necessary to fulfill the purposes for which it was collected, and in accordance with any applicable legal requirements. Data will be retained for a longer period if required by law or upon user consent.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Purposes of Processing</h2>
          <p>We collect and process personal data for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li><strong>To provide and maintain our services</strong> – We use your data to ensure smooth operation and provide a personalized experience.</li>
            <li><strong>To comply with legal obligations</strong> – We may process data to comply with any applicable laws or requests from legal authorities.</li>
            <li><strong>For fraud detection and security purposes</strong> – We use your data to detect fraudulent activities and maintain the security of our services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>You have the following rights with respect to your personal data:</p>
          <ul className="list-disc pl-6">
            <li><strong>Right to Access</strong> – You may request a copy of the personal data we process about you.</li>
            <li><strong>Right to Rectification</strong> – You can correct any inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure</strong> – You may request the deletion of your data, subject to legal obligations or contractual requirements.</li>
            <li><strong>Right to Restrict Processing</strong> – You may ask us to restrict the processing of your data under certain conditions.</li>
            <li><strong>Right to Object</strong> – You may object to the processing of your data in specific situations.</li>
            <li><strong>Right to Data Portability</strong> – You may request a copy of your data in a structured, machine-readable format.</li>
          </ul>
          <p>If you wish to exercise any of these rights, please contact us using the contact details provided below.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Legal Basis for Processing</h2>
          <p>We process personal data based on the following legal grounds:</p>
          <ul className="list-disc pl-6">
            <li><strong>Consent</strong> – You have given us permission to process your data for specific purposes.</li>
            <li><strong>Performance of a Contract</strong> – Data processing is necessary for the performance of a contract between us and you.</li>
            <li><strong>Legal Obligation</strong> – We may process your data to comply with legal obligations or requests from authorities.</li>
            <li><strong>Legitimate Interests</strong> – We may process your data based on our legitimate business interests, provided these do not override your rights and freedoms.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
          <p>We reserve the right to update this Privacy Policy at any time. Any changes will be communicated through this page, and the date of the latest revision will be indicated. Please review this page regularly to stay informed about our privacy practices.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:</p>
          <p>Email: <strong>support@yukisuou.com</strong></p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
