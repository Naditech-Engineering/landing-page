
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {

  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        FEATURING
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {/* Each card directly inside the grid container */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
        <WhyChooseCard 
          image="/images/camera.png"
          title="Image Generation"
          description="From imagination to reality powered by Kh1ev Engine"
          linkText="Learn more"
        />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
        <WhyChooseCard 
          image="/images/earth.png"
          title="Indonesian Chatbot"
          description="Supported Indonesian Language."
          linkText="Discover"
        />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
        <WhyChooseCard 
          image="/images/bookmark.png"
          title="Community Management"
          description="Easy to manage community provides Partnership features between servers."
          linkText="Learn"
        />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
        <WhyChooseCard 
          image="/images/flash.png"
          title="Lightning-Fast Performance"
          description="Experience fast load times and a seamless interface optimized for users."
          linkText="Explore"
        />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
