import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import tumexploreImg from "../assets/explore.png";
import servicesImg from "../assets/services.png";
import Classes from "../Styles/Services.module.css";
import experienceImg from "../assets/experience.jpg";
import exp1 from "../assets/exp1.jpg";
import exp2 from "../assets/exp2.jpg";
import exp3 from "../assets/exp3.jpg";

function Service() {
  return (
    <section className={Classes.service}>
      {/* Service Cards */}
      <div className={Classes.cardsRow}>
        <div className={Classes.services}>
          <div className={Classes.icon}>
            <img src={service1} alt="Best Prices" />
          </div>
          <h3>Get Best Prices</h3>
          <p>
            Pay through our application and save thousands while earning amazing
            rewards.
          </p>
        </div>
        <div className={Classes.services}>
          <div className={Classes.icon}>
            <img src={service2} alt="Covid Safe" />
          </div>
          <h3>Covid Safe</h3>
          <p>
            All our curated hotels follow strict precautions for a covid-safe
            environment.
          </p>
        </div>
        <div className={Classes.services}>
          <div className={Classes.icon}>
            <img src={service3} alt="Flexible Payment" />
          </div>
          <h3>Flexible Payment</h3>
          <p>
            Enjoy flexible payment options and get rewards on every payment.
          </p>
        </div>
        <div className={Classes.services}>
          <div className={Classes.icon}>
            <img src={service4} alt="Find The Best Near You" />
          </div>
          <h3>Find The Best Near You</h3>
          <p>
            Discover the best hotels and places to visit near you in a single
            click.
          </p>
        </div>
      </div>

      {/* Best Price Details */}
      <div className={Classes.section}>
        <h1>Best Price Page Loaded!</h1>
        <img src={tumexploreImg} alt="Explore the World" className={Classes.bannerImg} />
        <p>Get special deals for memberships, holiday packages, events & resorts with CDSPL.</p>
      </div>

      {/* Company Experience */}
      <div className={Classes.experienceSection}>
  <div className={Classes.experienceHeading}>
    Chhaya's Ultimate 17 Year+ Global Travel Experience
        </div>
  <div className={Classes.experienceDescBox}>
            Chhaya Club & Holidays, a unit of Chhaya Development Services Pvt. Ltd., offers special deals on memberships, holiday packages, events, and resorts. With over 17 years of experience, it has escorted lakhs of travellers worldwide, specializing in customized holidays, incentive travel, and venue bookings.
  </div>
          <div className={Classes.expImagesRow}>
            <img src={exp1} alt="Kerala" />
            <img src={exp2} alt="Delhi" />
            <img src={exp3} alt="Rajasthan" />
          </div>
        </div>



      {/* Package Details */}
      <div className={Classes.section}>
        <h2>Comprehensive Premium Travel Package Details</h2>
        <div className={Classes.packageCards}>
          <div>
            <h3>One-Time Payment</h3>
            <p>
              6 Days 5 Nights
              <br />
              ₹7,50,000 grants you a decade of complete travel access with no
              additional fees.
            </p>
          </div>
          <div>
            <h3>Duration & Coverage</h3>
            <p>
              6 Days 5 Nights
              <br />
              Enjoy 10 years of unlimited travel. Includes 1 male adult, 1
              female adult, and 2 children as per policy.
            </p>
          </div>
          <div>
            <h3>Annual Limit</h3>
            <p>
              6 Days 5 Nights
              <br />
              Up to 50 nights for 10 years to explore multiple destinations,
              flexibly planned for your family.
            </p>
          </div>
        </div>
      </div>

      {/* Who Benefits Section */}
      <div className={Classes.section}>
        <h2>Who Benefits the Most from this Package?</h2>
        <div className={Classes.benefitCards}>
          <div>
            <h3>Luxury-Seeking Families</h3>
            <p>
              Stress-free annual vacations with unforgettable memories for the
              entire family.
            </p>
          </div>
          <div>
            <h3>Professionals & Retirees</h3>
            <p>
              Explore the world with peace of mind, enjoying financial and
              lifestyle rewards.
            </p>
          </div>
          <div>
            <h3>Astute Investors</h3>
            <p>
              Earn passive value from travel investments with robust refund
              policies and exclusive benefits.
            </p>
          </div>
        </div>
      </div>

      {/* Transparency & Reliability */}
      <div className={Classes.section}>
        <h2>Transparency, Reliability, and Hassle-Free Luxury</h2>
        <div className={Classes.transparencyCards}>
          <div>
            <h3>One-Time Investment</h3>
            <p>
              No renewals or annual fees. Pure luxury with financial clarity.
            </p>
          </div>
          <div>
            <h3>Inclusive Service</h3>
            <p>
              Complete travel and accommodation management by our expert
              concierge team.
            </p>
          </div>
          <div>
            <h3>Guaranteed Premium Experience</h3>
            <p>
              Limited availability ensures dedicated, personalized service for
              every client.
            </p>
          </div>
        </div>
      </div>

      {/* Net Returns Section */}
      <div className={Classes.section}>
        <h2>Your Net Returns: Travel Cost-Free for a Decade</h2>
        <div className={Classes.returnsCards}>
          <div>
            <h3>Free Travel</h3>
            <p>
              Explore global destinations for 10 years without additional
              expense on flights or hotels.
            </p>
          </div>
          <div>
            <h3>Full Investment Return</h3>
            <p>
              Your ₹7,50,000 investment is refunded fully over 10 years, with
              automatic yearly payouts.
            </p>
          </div>
          <div>
            <h3>Experience Value</h3>
            <p>
              Create precious memories for your family worth several lakhs every
              year.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className={Classes.section}>
        <h2>Our Services</h2>
        <img
          src={servicesImg}
          alt="Our Services"
          className={Classes.servicesImg}
        />
        {/* <ul className={Classes.serviceList}>
          <li>Tour Guide</li>
          <li>Administration</li>
          <li>Transport</li>
          <li>Hotel Reservation</li>
          <li>Meals</li>
          <li>Ticketing</li>
        </ul> */}
      </div>
    </section>
  );
}

export default Service;
