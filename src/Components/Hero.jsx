import React from "react";
import Slider from "react-slick";
import Classes from "../Styles/Hero.module.css";
import Logo from "../assets/logo2.png";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";

const images = [slider1, slider2, slider3, slider4];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 950,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3400,
    arrows: false,
    pauseOnHover: false
  };

  return (
    <div className={Classes.heroSliderWrapper}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className={Classes.sliderImgWrap}>
            <img src={img} alt={`slide-${i + 1}`} className={Classes.heroBgImg} />
          </div>
        ))}
      </Slider>
      <div className={Classes.heroOverlayContent}>
        <img src={Logo} alt="CDSPL Logo" className={Classes.bannerLogo} />
        <div className={Classes.heroContentBlock}>
          <h1>
            Travel & Explore With{" "}
            <span className={Classes.nickName}>CDSPL WORLD</span>
          </h1>
          <p>
            Save at least 15% on stays worldwide, from relaxing retreats to off-grid adventures
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
    </div>
  );
};

export default HeroSlider;
