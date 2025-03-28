import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
  description: string;
  linkText: string;
};

const WhyChooseCard = function({ image, title, description, linkText }: Props) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl">
      <Image
        src={image}
        alt={title}
        width={50}
        height={50}
        className="object-contain mx-auto"
      />
      <h1 className="text-center text-lg mt-5 mb-5 font-semibold text-gray-800">
        {title}
      </h1>
      <p className="text-gray-600 text-center font-medium text-sm mb-7">
        {description}
      </p>
      <p className="text-center font-semibold cursor-pointer hover:text-[#E93306] transition-all duration-200">
        {linkText}
      </p>
    </div>
  );
};

export default WhyChooseCard;