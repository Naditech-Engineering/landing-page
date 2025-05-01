import Image from "next/image";
import React from "react";
import Link from "next/link";

type ImgProps = {
  id: string;
  title: string;
  image: string;
  description: string;
};

const MostPopularCard = ({ id, title, image, description }: ImgProps) => {
  return (
    <Link href={`/popular/${id}`}>
      <div className="flex justify-center items-center">
        <div className="bg-gradient-to-r from-[#E8D3C7] [background-size:200%_100%] via-[#D3B49B] to-[#E8D3C7] relative w-80 h-96 rounded-xl shadow-xl overflow-hidden">
          {/* Full-size image */}
          <Image src={image} alt={title} layout="fill" objectFit="contain" />
          {/* Overlay for title and description */}
          <div
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#4A3B2A] via-transparent to-transparent p-5"
            style={{
              background: "linear-gradient(to top, #4A3B2A 50%, transparent 100%)",
            }}
          >
            <h1 className="text-white text-xl font-semibold">{title}</h1>
            <p className="text-white text-sm mt-2">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MostPopularCard;
