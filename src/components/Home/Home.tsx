'use client'
import React, { useEffect } from "react";
import Hero from "../../app/Hero/page";
import WhyChoose from "../../app/WhyChoose/page";
import About from "../../app/About/page";
import MostPopular from "../../app/mostPopular/page";
import Review from "../../app/Review/page";
import Price from "../../app/Price/page";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
       AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease',
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  },[])

  return (
    <div className="overflow-hidden bg-[url('/images/Frame.png')] bg-contain bg-center bg-repeat">
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="whychoose">
        <WhyChoose />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="mostpopular">
        <MostPopular />
      </section>
      <section id="review">
        <Review />
      </section>
      <section id="price">
        <Price />
      </section>
    </div>
    </div>
  );
};

export default Home;
