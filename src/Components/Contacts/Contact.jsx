import React from 'react';
import './Contact.css'; // Import CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-section">
                <i className="fas fa-phone fa-3x" style={{ display: 'block', marginBottom: "10px", marginRight: "10px" }}></i>
                <p style={{ textAlign: 'center' }}>+254793704217</p>
            </div>
            <hr className="contact-divider" />
            <div className="contact-section">
                <i className="fas fa-envelope fa-3x" style={{ display: 'block', marginBottom: "10px", marginRight: "10px" }}></i>
                <p style={{ textAlign: 'center' }}>info@savannahInc.com</p>
            </div>
            <hr className="contact-divider" />
            <div className="contact-section">
                <i className="fas fa-map-marker fa-2x" style={{ display: 'block', marginBottom: "10px" ,marginRight: "10px"}}></i>
                <p style={{ textAlign: 'center' }}>Kahawa Sukari, Nairobi, Kenya</p>
            </div>
        </div>
    );
};

export default Contact;
