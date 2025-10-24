import React from "react";
import Service from "./Service";
import Recommendation from "./Recommendation";
import Testimonials from "./Testimonials";
import HeroSlider from "./Hero";

function Home() {
  return (
    <>
      <HeroSlider />
      <Recommendation />
      <Service />
      <Testimonials />
    </>
  );
}

export default Home;