import React from "react";
import "./ContactForm.css";

const ContactPage = () => {
  return (
    <section className="container">
      <div className="section-title">
        <h2>Contact Us</h2>
        <p>
          Get in touch for customized travel plans and temple visit assistance.
        </p>
      </div>

      <div className="two-column">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Address</h4>
              <p>Mahakaleshwar Temple Road, Ujjain, Madhya Pradesh 456006</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>Phone</h4>
              <p>+91 1234567890</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>info@mahakaleshwartemple.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.498157883766!2d75.76646307532979!3d23.182887979088906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963746c6687e8a5%3A0xf834069f6fea0209!2sMahakaleshwar%20Jyotirlinga!5e0!3m2!1sen!2sin!4v1681215421437!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mahakaleshwar Temple Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="Your Phone Number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-control"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
