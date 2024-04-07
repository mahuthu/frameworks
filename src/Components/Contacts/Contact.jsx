import React from 'react';
import './Contact.css'; // Import CSS file for styling
import companyImage from "../../Dataset/nairobi2.jpg"; // Import your company image

const Contact = () => {
    return (
      <div className="contact-container">
        <div className="contact-image">
          <img src={companyImage} alt=" Nairobi Company " />
          <div className="contact-overlay">
            <h2>Contact Us</h2>
            <div className="contact-info">
              <div className="contact-section">
                <h3>Location</h3>
                <p>Kahawa Sukari, Nairobi, Kenya</p>
              </div>
              <div className="contact-section">
                <h3>Contact Details</h3>
                <p>Email: SavannahBuilders@gmail.com</p>
                <p>Phone: +254793704217</p>
              </div>
              <div className="contact-section">
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;