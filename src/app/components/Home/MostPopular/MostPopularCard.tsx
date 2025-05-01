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
        <div className="bg-gradient-to-r from-[#FD8E3F] [background-size:200%_100%] via-[#F8D3A9] to-[#F8D3A9] relative w-80 h-96 rounded-xl shadow-xl overflow-hidden bg-white">
          {/* Full-size image */}
          <Image src={image} alt={title} layout="fill" objectFit="contain" />
          {/* Overlay for title and description */}
          <div
            className="absolute bottom-0 left-0 w-full p-5"
            style={{
              backgroundColor: "white",
            }}
          >
            <h1 className="text-black text-xl font-semibold">{title}</h1>
            <p className="text-black text-sm mt-2">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MostPopularCard;
