import React from "react";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { FaClock, FaEnvelope } from "react-icons/fa6";

function Footer() {
  const footerData = [
    {
      title: "ABOUT US",
      links: [
        "Server",
        "Kh1ev",
      ],
    },
    {
      title: "LEGAL",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Community Guidelines",
      ],
    },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold">
              YUKI 
              <span className="text-xl md:text-2xl text-[#F86401] font-extrabold">
                SUOU
              </span>
            </h1>
            <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600">
              Stay connected with Yuki Suou! Follow us for updates,
              maintance feature, and more.
            </p>
          </div>

          {/* Footer sections */}
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-800">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold text-gray-800">INFORMATION</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li className="flex items-center">
                <FaMapMarkedAlt className="mr-2"/>
                Kh1ev Community
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2"/>
                +081117042204
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2"/>
                8am - 10am
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2"/>
                contact@kh1ev.my.id
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 borrder-t pt-8 flex flex-col md:flex-row justify-center items-center text-black text-sm">
          <p className="text-center font-medium">Copyright © 2025 Kh1ev Community</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
