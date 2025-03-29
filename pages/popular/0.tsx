import React from "react";
import Head from "next/head";

const KH1EVCommunity: React.FC = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Our Server</title>
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <style>
          {`
            body {
              font-family: 'Inter', sans-serif;
            }
          `}
        </style>
      </Head>
      <body className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="text-center p-6 bg-gray-100">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">About Our Server</h1>
          <p className="text-gray-600">
            We are an active community where you can find fun, learning, and a great time. From gaming to tech discussions, we offer a diverse range of channels that cater to all interests.
          </p>
        </div>
      </body>
    </>
  );
};

export default KH1EVCommunity;