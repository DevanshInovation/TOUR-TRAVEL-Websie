import React from "react";
import Hero from "./Hero";
import Service from "./Service";
import Recommendation from "./Recommendation";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Service />
      {/* <Recommendation /> */}
      <Testimonials />
    </>
  );
}

export default Home;