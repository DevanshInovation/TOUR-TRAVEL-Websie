import React from "react";

import Classes from "../Styles/Hero.module.css";
import Banner from "../assets/hero.png";
import Logo from "../assets/logo2.png";


function Hero() {
  return (
    <section className={Classes.heroContainer}>

        {/* Banner outer container */}
      <div className={Classes.heroBannerOuter}>
        {/* Banner background img */}
        <img src={Banner} alt="" className={Classes.heroBgImg} />

        {/* Centered logo absolutely on banner */}
        <img src={Logo} alt="CDSPL Logo" className={Classes.bannerLogo} />

        {/* Content block overlays banner from lower part */}
        <div className={Classes.heroContentBlock}>
          <h1>
            Travel & Explore With{" "}
            <span className={Classes.nickName}>CDSPL WORLD</span>
          </h1>
          <p>
            Save at least 15% on stays worldwide, from relaxing retreats to
            off-grid adventures
          </p>
          <div className={Classes.bookingContainer}>
            <div className={Classes.search}>
              <label>Where you want to go</label>
              <input type="text" placeholder="search your location" />
            </div>
            <button>BOOK NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
