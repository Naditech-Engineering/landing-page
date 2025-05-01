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
      <div className="transform transition duration-300 hover:scale-105 p-4">
        <div className="bg-[#f5f0e8] relative w-80 h-96 rounded-2xl shadow-lg overflow-hidden flex flex-col">
          {/* Image container with padding */}
          <div className="relative h-3/4 w-full p-2">
            <Image 
              src={image} 
              alt={title} 
              layout="fill" 
              className="rounded-xl"
              objectFit="cover"
            />
          </div>
          
          {/* Content area */}
          <div className="h-1/4 p-4 flex flex-col justify-center">
            <h1 className="text-gray-800 text-xl font-semibold line-clamp-1">{title}</h1>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
          </div>
          
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-100 opacity-60 rounded-bl-3xl"></div>
        </div>
      </div>
    </Link>
  );
};

export default MostPopularCard;