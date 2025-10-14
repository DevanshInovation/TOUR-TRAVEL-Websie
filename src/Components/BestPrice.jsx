import React from "react";
import styles from "../Styles/BestPrice.module.css";
import tumexploreImg from "../assets/explore.png";
import servicesImg from "../assets/services.png";
import experienceImg from "../assets/experience.jpg"; // left side big image
import exp1 from "../assets/exp1.jpg"; // bottom images
import exp2 from "../assets/exp2.jpg";
import exp3 from "../assets/exp3.jpg";

function BestPrice() {
  return (
    <section className={styles.bestPriceContainer}>
      <div className={styles.section}>
        {/* <h1>Best Price Page Loaded!</h1> */}
        <img src={tumexploreImg} alt="Explore the World" className={styles.bannerImg} />
        <p>Get special deals for memberships, holiday packages, events & resorts with CDSPL.</p>
      </div>

      {/* Company Experience */}
      <div className={styles.experienceBanner}>
        <div className={styles.expLeft}>
          <img src={experienceImg} alt="Experience" className={styles.expMainImg} />
        </div>
        <div className={styles.expRight}>
          <h2>Chhaya's Ultimate 17 Year+ Global Travel Experience</h2>
          <p>
            Chhaya Club & Holidays, a unit of Chhaya Development Services Pvt. Ltd., offers special deals on memberships, holiday packages, events, and resorts. With over 17 years of experience, it has escorted lakhs of travellers worldwide, specializing in customized holidays, incentive travel, and venue bookings.
          </p>
          <div className={styles.expImagesRow}>
            <img src={exp1} alt="Kerala" />
            <img src={exp2} alt="Delhi" />
            <img src={exp3} alt="Rajasthan" />
          </div>
        </div>
      </div>

      {/* Package Details */}
      <div className={styles.section}>
        <h2>Comprehensive Premium Travel Package Details</h2>
        <div className={styles.packageCards}>
          <div>
            <h3>One-Time Payment</h3>
            <p>6 Days 5 Nights<br />₹7,50,000 grant you a decade of complete travel access without any additional fees.</p>
          </div>
          <div>
            <h3>Duration & Coverage</h3>
            <p>6 Days 5 Nights<br />Enjoy 10 years of unlimited travel. The package includes 1 male adult, 1 female adult, 2 children eligible as per policy.</p>
          </div>
          <div>
            <h3>Annual Limit</h3>
            <p>6 Days 5 Nights<br />Up to 50 nights for 10 years to explore multiple destinations, flexibly planned for your family.</p>
          </div>
        </div>
      </div>

      {/* Who Benefits Section */}
      <div className={styles.section}>
        <h2>Who Benefits the Most from this Package?</h2>
        <div className={styles.benefitCards}>
          <div>
            <h3>Luxury-Seeking Families</h3>
            <p>Stress-free annual vacations with unforgettable memories for the entire family.</p>
          </div>
          <div>
            <h3>Professionals & Retirees</h3>
            <p>Explore the world with peace of mind, enjoying financial and lifestyle rewards simultaneously.</p>
          </div>
          <div>
            <h3>Astute Investors</h3>
            <p>Earn passive value from travel investments with robust refund policies and exclusive benefits.</p>
          </div>
        </div>
      </div>

      {/* Transparency & Reliability */}
      <div className={styles.section}>
        <h2>Transparency, Reliability, and Hassle-Free Luxury</h2>
        <div className={styles.transparencyCards}>
          <div>
            <h3>One-Time Investment</h3>
            <p>No renewals or annual fees. Pure luxury with financial clarity.</p>
          </div>
          <div>
            <h3>Inclusive Service</h3>
            <p>Complete travel and accommodation management by our expert concierge team.</p>
          </div>
          <div>
            <h3>Guaranteed Premium Experience</h3>
            <p>Limited availability ensures dedicated, personalized service for every client.</p>
          </div>
        </div>
      </div>

      {/* Net Returns Section */}
      <div className={styles.section}>
        <h2>Your Net Returns: Travel Cost-Free for a Decade</h2>
        <div className={styles.returnsCards}>
          <div>
            <h3>Free Travel</h3>
            <p>Explore global destinations for 10 years without additional expense on flights or hotels.</p>
          </div>
          <div>
            <h3>Full Investment Return</h3>
            <p>Your ₹7,50,000 investment is refunded fully over 10 years, with automatic yearly payouts.</p>
          </div>
          <div>
            <h3>Experience Value</h3>
            <p>Create precious memories for your family worth several lakhs every year.</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.section}>
        <h2>Our Services</h2>
        <img src={servicesImg} alt="Our Services" className={styles.servicesImg} />
        <ul>
          <li>Tour Guide</li>
          <li>Administration</li>
          <li>Transport</li>
          <li>Hotel Reservation</li>
          <li>Meals</li>
          <li>Ticketing</li>
        </ul>
      </div>

      {/* Destinations Section
      <div className={styles.section}>
        <h2>Domestic Destinations</h2>
        <img src={domesticImg} alt="Domestic Destinations" className={styles.destImg} />
        <p>
          <strong>North India:</strong> Agra, Shimla, Manali, Delhi, Srinagar, Mussoorie, Jim Corbett, Lucknow, Amritsar, Punjab, Chandigarh, Haridwar, Dharamshala, Dalhousie, Nainital, Pahalgam, Gulmarg, Rishikesh, Almora, Kasauni, Ranikhet, Jabalpur
        </p>
        <p>
          <strong>South India:</strong> Munnar, Kovalam, Ooty, Hyderabad, Chennai, Bengaluru, Mysore, Madurai, Rameshwaram, Puducherry, Kodaikanal, Kanyakumari, Vishakhapatnam, Thekkady, Coorg, Kumarakom, Alleppey, Wayanad, Tirupati, Hampi, Araku Valley, Kochi, Mangaluru
        </p>
        <p>
          <strong>East India:</strong> Kanha, Darjeeling, Gangtok, Kolkata, Puri, Shillong, Pelling, Bhubaneswar, Guwahati, Patna, Jamshedpur, Ranchi, Andaman, Sundarban, Kalimpong, Port Blair, Havelock Island, Neil Island, Kaziranga, Cherrapunjee, Lachung, Shantiniketan, Siliguri, Varanasi
        </p>
        <p>
          <strong>West India:</strong> Goa, Jaipur, Udaipur, Mumbai, Ahmedabad, Pune, Vadodara, Pushkar, Surat, Somnath, Mount Abu, Jaisalmer, Jodhpur, Bikaner, Gir, Mahabaleshwar, Nagpur, Nashik, Lonavla, Aurangabad, Ranthambore, Bhopal, Indore
        </p>
      </div> */}

      {/* <div className={styles.section}>
        <h2>International Destinations</h2>
        <img src={internationalImg} alt="International Destinations" className={styles.destImg} />
        <p>
          Dubai, Singapore, Bangkok, Kuala Lumpur, Hong Kong, Kathmandu, Switzerland, Ho Chi Minh, Pattaya, Phuket, Hanoi, Siam Rep, Genting Highland, Australia, Indonesia, Sri Lanka, Vietnam, Japan, Thimphu, Paro, Krabi, Macau, Colombo, Bentota, Dhaka, Pokhra, Thailand, Bali, Maldives, Paris, London, Kenia, United States
        </p>
      </div> */}
    </section>
  );
}

export default BestPrice;