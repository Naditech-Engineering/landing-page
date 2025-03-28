"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const reviewData = [
    {
      name: "Nick Aidil",
      review:
        "Yuki Suou very helpfully to manage my server!",
        title: "Developer",
        image: "/images/p1.png", 
    },
    {
      name: "Ph1on",
      review:
        "Yuki Suou is the ultimate anime companion on Discord! From timeless classics to the latest episodes, this bot has everything you need for your anime cravings. It’s the perfect place to find and enjoy anime content, all within your server!",
        title: "Wibu",
        image: "/images/p2.png", 
    },
    {
      name: "Len",
      review:
        "Yuki Suou is your go-to Discord bot for anime and server management! Enjoy a vast collection of anime, plus handy features like partnership management for server collaborations—all in one bot!",
        title: "Partner Manager",
        image: "/images/p4.png", 
    },
    {
      name: "Michael Jackson",
      review:
        "The bot is so good that I'm left speechless.",
        title: "Discord Member",
        image: "/images/p3.png", 
    },
  ];
  

const Review = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        REVIEW
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite
          responsive={responsive}
          showDots
        >
          {reviewData.map((review) => (
            <ReviewCard 
            key={review.name}
            name={review.name} 
            image={review.image} 
            review={review.review}
            title={review.title}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
