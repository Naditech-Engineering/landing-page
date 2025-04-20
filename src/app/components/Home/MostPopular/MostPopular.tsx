import React from "react";
import MostPopularCard from "./MostPopularCard";

const MostPopular = () => {
  const cardData = [
    {
      image: "/images/img1.png",
      title: "KH1EV Community",
      description:
        "Official Yuki Suou Discord Bot.",
    },
    {
      image: "/images/img2.png",
      title: "Partnership",
      description:
        "Server Partnership Affiliate with Kh1ev Community.",
    },
    {
      image: "/images/img3.png",
      title: "Member",
      description:
        "Member Information.",
    },
    {
      image: "/images/img5.png",
      title: "Privacy Policy",
      description:
        "Policy about Yuki Suou.",
    },
  ];
  return (
    <div className="pt-24 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        SELECTION
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {cardData.map((data, index) => (
          <div
            key={index} 
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${index * 100}`} 
          >
            <MostPopularCard
              id={String(index)}
              image={data.image}
              title={data.title}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
