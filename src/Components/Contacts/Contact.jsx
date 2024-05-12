import React from 'react';
import './Contact.css'; // Import CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-section">
                <i className="fas fa-phone fa-3x" style={{ display: 'block', marginBottom: "10px", marginRight: "10px" }}></i>
                <p style={{ textAlign: 'center' }}>+1234567890</p>
            </div>
            <hr className="contact-divider" />
            <div className="contact-section">
                <i className="fas fa-envelope fa-3x" style={{ display: 'block', marginBottom: "10px", marginRight: "10px" }}></i>
                <p style={{ textAlign: 'center' }}>info@savannahbuilders.com</p>
            </div>
            <hr className="contact-divider" />
            <div className="contact-section">
                <i className="fas fa-map fa-3x" style={{ display: 'block', marginBottom: "10px" ,marginRight: "10px"}}></i>
                <p style={{ textAlign: 'center' }}>123 Main Street, Nairobi, Kenya</p>
            </div>
        </div>
    );
};

export default Contact;
