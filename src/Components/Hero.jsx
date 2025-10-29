import React, { useState } from "react";
import Slider from "react-slick";
import Classes from "../Styles/Hero.module.css";
import Logo from "../assets/logo2.png";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";

const images = [slider1, slider2, slider3, slider4];
const locations = [
  "India",
  "Singapore",
  "Thailand",
  "Goa",
  "Manali",
  "Jaipur",
  "Paris",
  "New Zealand",
  "Bora Bora",
  "London",
  "Dubai",
  "Mumbai",
  "Andaman Islands",
  "Maldives",
  "Bali",
  "Tokyo",
  "Rome",
  "Switzerland",
  "Kerala",
  "Darjeeling",
  "Rishikesh",
  "Shimla",
  "Udaipur",
  "Kashmir",
  "Varanasi",
  "Badrinath",
  "Dwarka",
  "Puri",
  "Rameswaram",
  "Somnath",
  "Mallikarjuna",
  "Mahakaleshwar",
  "Omkareshwar",
  "Kedarnath",
  "Bhimashankar",
  "Kashi Vishwanath",
  "Trimbakeshwar",
  "Baidyanath",
  "Nageshwar",
  "Rameshwaram Jyotirling",
  "Grishneshwar",
  "Kamakhya Temple",
  "Kanyakumari Temple",
  "Vaishno Devi",
  "Jwalamukhi Temple",
  "Kalighat Temple",
  "Hinglaj Mata",
  "Vindhyavasini Devi",
  "Tarapith Temple",
  "Amarnath Cave Temple",
  "Bhadrakali Temple",
  "Meenakshi Temple",
  "Chamundeshwari Temple",
  "Kalika Devi Temple",
  "Sharada Peeth",
  "Bhramaramba Devi",
  "Mahalakshmi Temple",
  "Kanyakubja Peeth",
  "Manasa Devi Temple",
  "Bhubaneshwari Temple",
  "New York",
  "Sydney",
  "Melbourne",
  "Los Angeles",
  "Istanbul",
  "Amsterdam",
  "Venice",
  "Athens",
  "Bangkok",
  "Phuket",
  "Cape Town",
  "Hong Kong",
  "Kuala Lumpur",
  "Seoul",
  "Barcelona",
  "Madrid",
  "Hawaii",
  "Mauritius",
  "Fiji",
  "Malta",
  "Santorini",
  "Vienna",
  "Prague",
  "Oslo",
  "Stockholm",
  "Berlin",
  "Budapest",
  "Copenhagen",
  "Toronto",
  "Vancouver",
  "Doha",
  "Muscat",
  "Beijing",
  "Shanghai",
  "Kyoto",
  "Nairobi",
  "Reykjavik",
  "Cairo",
  "Moscow",
  "Ooty",
  "Munnar",
  "Kodaikanal",
  "Srinagar",
  "Leh",
  "Ladakh",
  "Haridwar",
  "Nainital",
  "Mussoorie",
  "Gangtok",
  "Shillong",
  "Cherrapunji",
  "Tirupati",
  "Madurai",
  "Ayodhya",
  "Konark",
  "Bhubaneswar",
  "Amritsar",
  "Golden Temple",
  "Delhi",
  "Agra",
  "Pune",
  "Chennai",
  "Bangalore",
  "Kolkata",
  "Kochi",
  "Alleppey",
  "Wayanad",
  "Coorg",
  "Mahabaleshwar",
  "Lonavala",
  "Mount Abu",
  "Ranthambore",
  "Jim Corbett",
  "Kaziranga",
  "Sundarbans",
];

const HeroSlider = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = locations.filter((loc) =>
        loc.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (place) => {
    setQuery(place);
    setSuggestions([]);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 950,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3400,
    arrows: false,
    pauseOnHover: false,
  };

  const handleSubmit = () => {
    const msg = encodeURIComponent(
      query
        ? `Hi, I want to book a holiday trip to ${query}. Please provide more details.`
        : "Hi, I want to book a holiday trip. Please provide more details."
    );
    window.open(`https://wa.me/+918090754040?text=${msg}`, "_blank");
  };

  return (
    <div className={Classes.heroSliderWrapper}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className={Classes.sliderImgWrap}>
            <img
              src={img}
              alt={`slide-${i + 1}`}
              className={Classes.heroBgImg}
            />
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
            Save at least 15% on stays worldwide, from relaxing retreats to
            off-grid adventures
          </p>
          <div className={Classes.bookingContainer}>
            <div className={Classes.search}>
              <label>Where you want to go</label>
              <div className={Classes.searchInputWrapper}>
                <input
                  type="text"
                  value={query}
                  onChange={handleChange}
                  placeholder="Search your destination..."
                  className={Classes.searchInput}
                />
                {suggestions.length > 0 && (
                  <ul className={Classes.suggestions}>
                    {suggestions.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelect(item)}
                        className={Classes.suggestionItem}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <button onClick={handleSubmit}>BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
