// eslint-disable-next-line no-unused-vars
import React from "react";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };
  return (
    <div id="contact" className="inner-content">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="your-name">Your Name</label>
        <input type="text" name="your-name" id="your-name" />
        <label htmlFor="your-company">Your Company</label>
        <input type="text" name="your-company" id="your-company" />
        <label htmlFor="your-email">Your Email</label>
        <input type="text" name="your-email" id="your-email" />
        <label htmlFor="your-message">Your Message</label>
        <textarea rows="7" type="text" name="your-message" id="your-message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
