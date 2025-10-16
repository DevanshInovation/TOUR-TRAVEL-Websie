import React, { useState } from "react";
import "../Styles/Recommendation.css";
import { FaWhatsapp, FaRupeeSign, FaClock } from "react-icons/fa";

import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import Andaman from "../assets/Andaman Islands.jpg";
import Bali from "../assets/Bali.jpg";
import Darjeeling from "../assets/Darjeeling.jpg";
import Dubai from "../assets/dubai.jpg";
import Goa from "../assets/Goa.jpg";
import Jaipur from "../assets/Jaipur.jpg";
import Kashmir from "../assets/Kashmir.jpg";
import Kerala from "../assets/Kerala.jpg";
import Manali from "../assets/Manali.jpg";
import Maldives from "../assets/Maldives.jpg";
import Mumbai from "../assets/Mumbai.jpg";
import Rishikesh from "../assets/Rishikesh.jpg";
import Rome from "../assets/Rome.jpg";
import Shimla from "../assets/Shimla.jpg";
import Switzerland from "../assets/Switzerland.jpg";
import Tokyo from "../assets/Tokyo.jpg";
import Udaipur from "../assets/Udaipur.jpg";
import Varanasi from "../assets/Varanasi.jpg";

function Recommendation() {
  const [active, setActive] = useState(0);

  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
      type: "International",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
      type: "International",
    },
    {
      image: Goa,
      title: "Goa",
      subTitle: "Goa, India’s beach paradise, known for parties and sunsets.",
      cost: "12,000",
      duration: "Approx 2 night trip",
      type: "Domestic",
    },
    {
      image: Manali,
      title: "Manali",
      subTitle: "Manali, Himachal’s gem, surrounded by snow-capped peaks.",
      cost: "10,500",
      duration: "Approx 3 night trip",
      type: "Domestic",
    },
    {
      image: Jaipur,
      title: "Jaipur",
      subTitle:
        "Jaipur, the Pink City, offers royal palaces and Rajasthani charm.",
      cost: "9,800",
      duration: "Approx 2 night trip",
      type: "Domestic",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
      type: "International",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
      type: "International",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
      type: "International",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
      type: "International",
    },
    {
      image: Dubai,
      title: "Dubai",
      subTitle:
        "Dubai, UAE's luxury hub, known for skyscrapers and desert adventures.",
      cost: "42,300",
      duration: "Approx 3 night trip",
      type: "International",
    },
    {
      image: Mumbai,
      title: "Mumbai",
      subTitle: "Mumbai, the city that never sleeps, mixes glamour and grit.",
      cost: "11,300",
      duration: "Approx 2 night trip",
      type: "Domestic",
    },
    {
      image: Andaman,
      title: "Andaman Islands",
      subTitle:
        "Andamans are famous for beaches, coral reefs, and scuba diving.",
      cost: "18,400",
      duration: "Approx 3 night trip",
      type: "Domestic",
    },
    {
      image: Maldives,
      title: "Maldives",
      subTitle:
        "The Maldives are tropical islands known for coral reefs and crystal-clear waters.",
      cost: "68,500",
      duration: "Approx 4 night trip",
      type: "International",
    },
    {
      image: Bali,
      title: "Bali",
      subTitle:
        "Bali, Indonesia, is loved for its beaches, temples, and rice terraces.",
      cost: "33,200",
      duration: "Approx 3 night trip",
      type: "International",
    },
    {
      image: Tokyo,
      title: "Tokyo",
      subTitle:
        "Tokyo, Japan’s bustling capital, mixes ultramodern with traditional.",
      cost: "72,600",
      duration: "Approx 4 night 3 day trip",
      type: "International",
    },
    {
      image: Rome,
      title: "Rome",
      subTitle:
        "Rome, Italy’s capital, is a city with ancient ruins and artistic heritage.",
      cost: "56,000",
      duration: "Approx 3 night trip",
      type: "International",
    },
    {
      image: Switzerland,
      title: "Switzerland",
      subTitle: "Switzerland offers scenic Alps, chocolates, and cozy towns.",
      cost: "82,900",
      duration: "Approx 5 night trip",
      type: "International",
    },
    // 🇮🇳 Domestic Destinations
    {
      image: Kerala,
      title: "Kerala",
      subTitle:
        "Kerala, God’s Own Country, is full of backwaters and palm trees.",
      cost: "15,600",
      duration: "Approx 3 night trip",
      type: "Domestic",
    },
    {
      image: Darjeeling,
      title: "Darjeeling",
      subTitle: "Darjeeling, the Queen of Hills, famous for tea and views.",
      cost: "8,900",
      duration: "Approx 2 night trip",
      type: "Domestic",
    },

    {
      image: Rishikesh,
      title: "Rishikesh",
      subTitle:
        "Rishikesh, yoga capital of the world, set along the Ganges River.",
      cost: "9,000",
      duration: "Approx 2 night trip",
      type: "Domestic",
    },
    {
      image: Shimla,
      title: "Shimla",
      subTitle:
        "Shimla, Himachal’s capital, is known for colonial charm and hills.",
      cost: "10,200",
      duration: "Approx 2 night trip",
      type: "Domestic",
    },
    {
      image: Udaipur,
      title: "Udaipur",
      subTitle:
        "Udaipur, the City of Lakes, is full of romance and royal architecture.",
      cost: "12,700",
      duration: "Approx 2 night trip",
      type: "Domestic",
    },
    {
      image: Kashmir,
      title: "Kashmir",
      subTitle:
        "Kashmir, paradise on Earth, is all about mountains and shikara rides.",
      cost: "14,900",
      duration: "Approx 3 night trip",
      type: "Domestic",
    },
    {
      image: Varanasi,
      title: "Varanasi",
      subTitle:
        "Varanasi, one of the oldest cities, known for ghats and spirituality.",
      cost: "8,600",
      duration: "Approx 2 night trip",
      type: "Domestic",
    },
  ];

  const packages = ["All Destinations", "Domestic", "International"];

  // Filter logic
  let filteredData = data;
  if (active === 1) {
    filteredData = data.filter((item) => item.type === "Domestic");
  } else if (active === 2) {
    filteredData = data.filter((item) => item.type === "International");
  }

  // WhatsApp inquiry handler
  const handleWhatsApp = (destination) => {
    const msg = encodeURIComponent(
      `Hi, I'm interested in booking a trip to ${destination}. Please provide more details.`
    );
    // here change your mobile number as you get whatsapp on that number
    window.open(`https://wa.me/+919999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Recommendations</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => (
              <li
                key={pkg}
                className={active === index ? "Active" : ""}
                onClick={() => setActive(index)}
              >
                {pkg}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="recommendationBox">
        {filteredData.map((item, index) => (
          <div className="box" key={item.title + index}>
            <div className="image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
            <div className="price">
              {/* <span className="priceTag">
                <FaRupeeSign className="icon priceIcon" />
                {item.cost}
              </span> */}
              {/* <span className="durationTag">
                <FaClock className="icon clockIcon" />
                {item.duration}
              </span> */}
              <button
                className="wp-btn"
                title="Inquire on WhatsApp"
                onClick={() => handleWhatsApp(item.title)}
              >
                <FaWhatsapp className="icon wpIcon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommendation;
