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
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          {/* Full-size image */}
          <div className="relative w-80 h-80">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl"
            />
          </div>
          {/* Overlay for title and description */}
          <div
            className="p-6 bg-white bg-opacity-90 rounded-b-2xl"
            style={{
              background: "linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))",
            }}
          >
            <h1 className="text-gray-800 text-2xl font-semibold">{title}</h1>
            <p className="text-gray-600 text-sm mt-2">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MostPopularCard;
