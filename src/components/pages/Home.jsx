import React from "react";
import Discover from "../Discover/Discover";
import Herosection from "../HeroSection/HeroSection";
import Inspiration from "../Inspiration/Inspiration";
import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <>
      <Herosection />
      <Partners />
      <Inspiration />
      <Discover />
    </>
  );
};

export default Home;
