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
import Badrinath from "../assets/Badrinath.jpg";
import Dwarka from "../assets/Dwarka.jpg";
import Puri from "../assets/Puri.jpg";
import Rameswaram from "../assets/Rameswaram.jpg";
import Somnath from "../assets/Somnath.jpg";
import Mallikarjuna from "../assets/Mallikarjuna.jpg";
import Mahakaleshwar from "../assets/Mahakaleshwar.jpg";
import Omkareshwar from "../assets/Omkareshwar.jpg";
import Kedarnath from "../assets/Kedarnath.jpg";
import Bhimashankar from "../assets/Bhimashankar.jpg";
import KashiVishwanath from "../assets/Kashi Vishwanath.jpg";
import Trimbakeshwar from "../assets/Trimbakeshwar.jpg";
import Baidyanath from "../assets/Baidyanath.jpg";
import Nageshwar from "../assets/Nageshwar.jpg";
import RameshwaramJyotirling from "../assets/Rameshwaram Jyotirling.jpg";
import Grishneshwar from "../assets/Grishneshwar.webp";
import Kamakhya from "../assets/Kamakhya Temple.jpg";
import Kanyakumari from "../assets/Kanyakumari Temple.jpg";
import Vaishno from "../assets/Vaishno Devi.jpg";
import Jwalamukhi from "../assets/Jwalamukhi.jpg";
import Kalighat from "../assets/Kalighat.jpg";
import Hinglaj from "../assets/Hinglaj.webp";
import Vindhyavasini from "../assets/Vindhyavasini.webp";
import Tarapith from "../assets/Tarapith.webp";
import Amarnath from "../assets/Amarnath Cave.webp";
import Bhadrakali from "../assets/Bhadrakali.webp";
import Meenakshi from "../assets/Meenakshi.webp";
import Chamundeshwari from "../assets/Chamundeshwari.webp";
import Kalika from "../assets/Kalika Devi.webp";
import Sharada from "../assets/Sharada Peeth.webp";
import Bhramaramba from "../assets/Bhramaramba.webp";
import Mahalakshmi from "../assets/Mahalakshmi.webp";
import Kanyakubja from "../assets/Kanyakubja.webp";
import Manasa from "../assets/Manasa Devi.webp";
import Bhubaneshwari from "../assets/Bhubaneshwari.webp";

function Recommendation() {
  const [active, setActive] = useState(0);

  const data = [
    // 🌍 International - Luxury / City / Modern
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officially the Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
      type: "International",
      category: "Luxury",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
      type: "International",
      category: "Beach",
    },
    {
      image: Goa,
      title: "Goa",
      subTitle: "Goa, India’s beach paradise, known for parties and sunsets.",
      cost: "12,000",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Beach",
    },
    {
      image: Manali,
      title: "Manali",
      subTitle: "Manali, Himachal’s gem, surrounded by snow-capped peaks.",
      cost: "10,500",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Nature",
    },
    {
      image: Jaipur,
      title: "Jaipur",
      subTitle:
        "Jaipur, the Pink City, offers royal palaces and Rajasthani charm.",
      cost: "9,800",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Cultural",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
      type: "International",
      category: "Luxury",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
      type: "International",
      category: "Nature",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
      type: "International",
      category: "Beach",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
      type: "International",
      category: "Luxury",
    },
    {
      image: Dubai,
      title: "Dubai",
      subTitle:
        "Dubai, UAE's luxury hub, known for skyscrapers and desert adventures.",
      cost: "42,300",
      duration: "Approx 3 night trip",
      type: "International",
      category: "Luxury",
    },
    {
      image: Mumbai,
      title: "Mumbai",
      subTitle: "Mumbai, the city that never sleeps, mixes glamour and grit.",
      cost: "11,300",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Cultural",
    },
    {
      image: Andaman,
      title: "Andaman Islands",
      subTitle:
        "Andamans are famous for beaches, coral reefs, and scuba diving.",
      cost: "18,400",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Beach",
    },
    {
      image: Maldives,
      title: "Maldives",
      subTitle:
        "The Maldives are tropical islands known for coral reefs and crystal-clear waters.",
      cost: "68,500",
      duration: "Approx 4 night trip",
      type: "International",
      category: "Beach",
    },
    {
      image: Bali,
      title: "Bali",
      subTitle:
        "Bali, Indonesia, is loved for its beaches, temples, and rice terraces.",
      cost: "33,200",
      duration: "Approx 3 night trip",
      type: "International",
      category: "Beach",
    },
    {
      image: Tokyo,
      title: "Tokyo",
      subTitle:
        "Tokyo, Japan’s bustling capital, mixes ultramodern with traditional.",
      cost: "72,600",
      duration: "Approx 4 night 3 day trip",
      type: "International",
      category: "Luxury",
    },
    {
      image: Rome,
      title: "Rome",
      subTitle:
        "Rome, Italy’s capital, is a city with ancient ruins and artistic heritage.",
      cost: "56,000",
      duration: "Approx 3 night trip",
      type: "International",
      category: "Cultural",
    },
    {
      image: Switzerland,
      title: "Switzerland",
      subTitle: "Switzerland offers scenic Alps, chocolates, and cozy towns.",
      cost: "82,900",
      duration: "Approx 5 night trip",
      type: "International",
      category: "Nature",
    },

    // 🇮🇳 Domestic - Nature & Cultural
    {
      image: Kerala,
      title: "Kerala",
      subTitle:
        "Kerala, God’s Own Country, is full of backwaters and palm trees.",
      cost: "15,600",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Nature",
    },
    {
      image: Darjeeling,
      title: "Darjeeling",
      subTitle: "Darjeeling, the Queen of Hills, famous for tea and views.",
      cost: "8,900",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Nature",
    },
    {
      image: Rishikesh,
      title: "Rishikesh",
      subTitle:
        "Rishikesh, yoga capital of the world, set along the Ganges River.",
      cost: "9,000",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Shimla,
      title: "Shimla",
      subTitle:
        "Shimla, Himachal’s capital, is known for colonial charm and hills.",
      cost: "10,200",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Nature",
    },
    {
      image: Udaipur,
      title: "Udaipur",
      subTitle:
        "Udaipur, the City of Lakes, is full of romance and royal architecture.",
      cost: "12,700",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Cultural",
    },
    {
      image: Kashmir,
      title: "Kashmir",
      subTitle:
        "Kashmir, paradise on Earth, is all about mountains and shikara rides.",
      cost: "14,900",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Nature",
    },
    {
      image: Varanasi,
      title: "Varanasi",
      subTitle:
        "Varanasi, one of the oldest cities, known for ghats and spirituality.",
      cost: "8,600",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    // 🛕 4 Dham (Spiritual)
    {
      image: Badrinath,
      title: "Badrinath",
      subTitle:
        "Badrinath, dedicated to Lord Vishnu, one of the Char Dhams in Uttarakhand.",
      cost: "16,500",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Dwarka,
      title: "Dwarka",
      subTitle:
        "Dwarka, Gujarat — sacred city of Lord Krishna, part of Char Dham.",
      cost: "14,200",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Puri,
      title: "Puri",
      subTitle:
        "Puri, Odisha — home to Lord Jagannath Temple and part of Char Dham.",
      cost: "12,800",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Rameswaram,
      title: "Rameswaram",
      subTitle:
        "Rameswaram, Tamil Nadu — island temple town dedicated to Lord Shiva.",
      cost: "17,400",
      duration: "Approx 4 night trip",
      type: "Domestic",
      category: "Spiritual",
    },

    // 🔱 12 Jyotirlingas (Spiritual)
    {
      image: Somnath,
      title: "Somnath",
      subTitle:
        "Somnath, Gujarat — the first among the 12 Jyotirlingas of Lord Shiva.",
      cost: "13,500",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Mallikarjuna,
      title: "Mallikarjuna",
      subTitle:
        "Mallikarjuna, Srisailam — a major Jyotirlinga on the Krishna River.",
      cost: "15,200",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Mahakaleshwar,
      title: "Mahakaleshwar",
      subTitle:
        "Mahakaleshwar, Ujjain — famous temple of Lord Shiva, Jyotirlinga in Madhya Pradesh.",
      cost: "10,600",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Omkareshwar,
      title: "Omkareshwar",
      subTitle:
        "Omkareshwar, on Narmada River island, one of the 12 Jyotirlingas.",
      cost: "9,800",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Kedarnath,
      title: "Kedarnath",
      subTitle:
        "Kedarnath, Uttarakhand — high-altitude temple dedicated to Lord Shiva.",
      cost: "14,900",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Bhimashankar,
      title: "Bhimashankar",
      subTitle:
        "Bhimashankar, Maharashtra — temple in Sahyadri hills, Jyotirlinga of Lord Shiva.",
      cost: "8,700",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: KashiVishwanath,
      title: "Kashi Vishwanath",
      subTitle:
        "Kashi Vishwanath, Varanasi — one of the holiest Shiva temples in India.",
      cost: "9,000",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Trimbakeshwar,
      title: "Trimbakeshwar",
      subTitle:
        "Trimbakeshwar, Nashik — sacred Jyotirlinga located near Godavari River.",
      cost: "8,400",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Baidyanath,
      title: "Baidyanath",
      subTitle:
        "Baidyanath, Deoghar — known as Baba Dham, one of the 12 Jyotirlingas.",
      cost: "10,200",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Nageshwar,
      title: "Nageshwar",
      subTitle:
        "Nageshwar, near Dwarka — one of the oldest Jyotirlinga shrines.",
      cost: "11,500",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: RameshwaramJyotirling,
      title: "Rameshwaram Jyotirling",
      subTitle:
        "Rameshwaram — sacred Jyotirlinga located in Tamil Nadu, linked to Ramayana.",
      cost: "16,800",
      duration: "Approx 4 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Grishneshwar,
      title: "Grishneshwar",
      subTitle:
        "Grishneshwar, near Ellora — last among the 12 Jyotirlingas of Shiva.",
      cost: "8,900",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },

    // 🕉️ 18 Shakti Peeth (Spiritual)
    {
      image: Kamakhya,
      title: "Kamakhya Temple",
      subTitle:
        "Kamakhya Temple, Assam — one of the most revered Shakti Peethas of Goddess Shakti.",
      cost: "14,600",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Kanyakumari,
      title: "Kanyakumari Temple",
      subTitle: "Kanyakumari, Tamil Nadu — where Goddess Parvati meditated.",
      cost: "15,000",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Vaishno,
      title: "Vaishno Devi",
      subTitle:
        "Vaishno Devi, Jammu — major pilgrimage in Trikuta Hills dedicated to Goddess Durga.",
      cost: "13,200",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Jwalamukhi,
      title: "Jwalamukhi Temple",
      subTitle: "Jwalamukhi, Himachal — temple of the flaming mouth Goddess.",
      cost: "9,700",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Kalighat,
      title: "Kalighat Temple",
      subTitle:
        "Kalighat, Kolkata — one of the 51 Shakti Peethas of Goddess Kali.",
      cost: "10,800",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Hinglaj,
      title: "Hinglaj Mata",
      subTitle:
        "Hinglaj Mata, Balochistan — ancient Shakti Peeth located in Hingol National Park.",
      cost: "21,000",
      duration: "Approx 4 night trip",
      type: "International",
      category: "Spiritual",
    },
    {
      image: Vindhyavasini,
      title: "Vindhyavasini Devi",
      subTitle: "Vindhyachal, UP — sacred seat of Goddess Durga.",
      cost: "9,400",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Tarapith,
      title: "Tarapith Temple",
      subTitle: "Tarapith, West Bengal — famous Shakti Peeth of Goddess Tara.",
      cost: "10,500",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Amarnath,
      title: "Amarnath Cave Temple",
      subTitle: "Amarnath, Jammu & Kashmir — sacred cave shrine of Lord Shiva.",
      cost: "15,300",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Bhadrakali,
      title: "Bhadrakali Temple",
      subTitle: "Bhadrakali, Haryana — one of the ancient Shakti Peeths.",
      cost: "8,800",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Meenakshi,
      title: "Meenakshi Temple",
      subTitle:
        "Madurai — architectural marvel and major Shakti Peeth of Goddess Parvati.",
      cost: "14,500",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Chamundeshwari,
      title: "Chamundeshwari Temple",
      subTitle:
        "Mysuru, Karnataka — temple dedicated to Goddess Durga atop Chamundi Hills.",
      cost: "11,400",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Kalika,
      title: "Kalika Devi Temple",
      subTitle:
        "Ratnagiri, Maharashtra — one of the ancient Shakti Peeths on western coast.",
      cost: "8,900",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Sharada,
      title: "Sharada Peeth",
      subTitle:
        "Sharada Peeth, Kashmir — ancient learning center and Shakti temple.",
      cost: "15,700",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Bhramaramba,
      title: "Bhramaramba Devi",
      subTitle:
        "Srisailam, Andhra Pradesh — Shakti Peeth paired with Mallikarjuna Jyotirlinga.",
      cost: "14,200",
      duration: "Approx 3 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Mahalakshmi,
      title: "Mahalakshmi Temple",
      subTitle:
        "Kolhapur — one of the sacred Shakti Peeths of Goddess Lakshmi.",
      cost: "9,600",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Kanyakubja,
      title: "Kanyakubja Peeth",
      subTitle: "Kannauj, UP — ancient Shakti Peeth mentioned in Hindu texts.",
      cost: "9,800",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Manasa,
      title: "Manasa Devi Temple",
      subTitle:
        "Haridwar, Uttarakhand — one of the most visited Shakti Peeth temples.",
      cost: "10,200",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
    {
      image: Bhubaneshwari,
      title: "Bhubaneshwari Temple",
      subTitle:
        "Odisha — dedicated to Goddess Bhuvaneshwari, part of 18 Maha Peeths.",
      cost: "11,000",
      duration: "Approx 2 night trip",
      type: "Domestic",
      category: "Spiritual",
    },
  ];

  const packages = ["International", "Domestic", "Religious"];

  // Filter logic
  let filteredData = data;
  if (active === 0) {
    filteredData = data.filter((item) => item.type === "International");
  } else if (active === 1) {
    filteredData = data.filter((item) => item.type === "Domestic");
  } else if (active === 2) {
    filteredData = data.filter((item) => item.category === "Spiritual");
  }

  // WhatsApp inquiry handler
  const handleWhatsApp = (destination) => {
    const msg = encodeURIComponent(
      `Hi, I'm interested in booking a trip to ${destination}. Please provide more details.`
    );
    // here change your mobile number as you get whatsapp on that number
    window.open(`https://wa.me/+918090754040?text=${msg}`, "_blank");
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
