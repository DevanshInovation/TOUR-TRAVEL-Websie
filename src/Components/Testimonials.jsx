import React from "react";
import Classes from "../Styles/Testimonials.module.css";

function Testimonials() {
  return (
    <section id="testimonials" className={Classes.testimonials}>
      <h1>Happy Customers</h1>

      <div className={Classes.boxContainer}>
        <div className={Classes.testimonialBox}>
          <p>
            I planned my first Goa trip using CDSPL WORLD and honestly, it was
            smooth AF. Flights, hotel, even scooter rentals were sorted. Zero
            stress, full vibes 😎.
          </p>
          <div className={Classes.info}>
            <div>
              <h3>Arjun Mehta</h3>
              <span>Student • Mumbai</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <p>
            The booking process was so simple my dad actually did it himself.
            That’s saying *a lot*. Great UI, fast confirmations, loved the
            service!
          </p>
          <div className={Classes.info}>
            <div>
              <h3>Sneha Iyer</h3>
              <span>UX Designer • Bangalore</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <p>
            Needed a quick weekend trip from Delhi. Found great deals here.
            Support team was helpful when I had to reschedule. Worth every
            rupee.
          </p>
          <div className={Classes.info}>
            <div>
              <h3>Rohit Chauhan</h3>
              <span>Sales Executive • Delhi</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <p>
            I used to call agents for bookings but now I only use this site. The
            reward points actually make sense. Great discounts for regular
            travelers.
          </p>
          <div className={Classes.info}>
            <div>
              <h3>Priya Kapoor</h3>
              <span>Entrepreneur • Indore</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <p>
            My wife and I booked a Kashmir tour — breathtaking views, perfect
            stay, and no hidden charges. I’m impressed with the transparency.
          </p>
          <div className={Classes.info}>
            <div>
              <h3>Vivek Agrawal</h3>
              <span>Chartered Accountant • Jaipur</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <p>
            Decent service overall. Some hotels were unavailable, but their
            support team instantly found alternatives. Feels like they care
            about customers.
          </p>
          <div className={Classes.info}>
            <div>
              <h3>Anonymous</h3>
              <span>Government Employee • Lucknow</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <p>
            I’m 60 and not into “online stuff”, but my daughter showed me this
            site. Booked our temple trip easily. No scams, no stress. Thank you
            beta ji 🙏.
          </p>
          <div className={Classes.info}>
            <div>
              <h3>Ramesh</h3>
              <span>Retired Teacher • Chennai</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <p>
            For my honeymoon in Bali, CDSPL WORLD gave a better deal than
            MakeMyTrip. The itinerary was tight and fun. 10/10 from this happy
            husband!
          </p>
          <div className={Classes.info}>
            <div>
              <h3>Aditya & Meera</h3>
              <span>Newlyweds • Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
