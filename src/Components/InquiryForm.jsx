import React, { useState } from "react";
import styles from "../Styles/InquiryForm.module.css";

function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "",
    startDate: "",
    endDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission (API call, etc.)
    setSubmitted(true);
  };

  return (
    <div className={styles.inquiryContainer}>
      <h1 className={styles.heading}>Holiday Inquiry Form</h1>
      {submitted ? (
        <div className={styles.successMsg}>
          Thank you for your inquiry! We will contact you soon.
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="travelers">No. of Travelers</label>
              <input
                type="number"
                id="travelers"
                name="travelers"
                min="1"
                required
                value={form.travelers}
                onChange={handleChange}
                placeholder="e.g. 2"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                id="destination"
                name="destination"
                required
                value={form.destination}
                onChange={handleChange}
                placeholder="Where do you want to go?"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                required
                value={form.startDate}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                required
                value={form.endDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="Any special requests or info?"
            />
          </div>
          <button className={styles.submitBtn} type="submit">
            Submit Inquiry
          </button>
        </form>
      )}
    </div>
  );
}

export default InquiryForm;
