import React from "react";
import Service from "./Service";
// import Recommendation from "./Recommendation";
import HomeRecommendations from "./HomeRecommendations";
import Testimonials from "./Testimonials";
import HeroSlider from "./Hero";

function Home() {
  return (
    <>
      <HeroSlider />
      {/* <Recommendation /> */}
      {/* HomeRecommendations ko yahan laga do (destinations same as map karte ho grid me) */}
      <HomeRecommendations />
      <Service />
      <Testimonials />
    </>
  );
}

export default Home;