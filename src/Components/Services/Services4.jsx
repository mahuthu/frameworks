import React from 'react';
import './Services1.css'; // Import CSS file for styling
import backgroundImage from "../../Dataset/nairobi2.jpg"; // Import your background image
import ecommerceImage from "../../Dataset/cart.png"; // Import image for e-commerce
import landingPagesImage from "../../Dataset/initiateafrica.png"; // Import image for landing pages
import socialMediaImage from "../../Dataset/kofiake.png"; // Import image for social media management
import { Link } from "react-router-dom";

const Services = () => {
    const services = [
        {
            logo: <i className="fa-solid fa-code"></i>,
            title: "Digital Presence Services",
            description: (
                <>
                    <p>- E-Commerce Solutions</p>
                    <p>- Portfolio Websites</p>
                    <p>- Blog or Personal Websites</p>
                    <p>- Educational Websites</p>
                    <p>- Corporate or Business Websites</p>
                    <p>- Social Media Management</p>
                </>
            ),
            image: ecommerceImage,
            route: "/digital"
        },
        {
            logo: <i className="fas fa-globe"></i>,
            title: "Business Solution Services",
            description: (
                <>
                    <p>- CRM solutions</p>
                    <p>- ERP solutions</p>
                    <p>- Third party API integrations</p>
                    <p>- Inventory Management Systems</p>
                    <p>- Project Management Systems</p>
                    <p>- Learning Management Systems</p>
                    <p>- Supply Chain Management Systems</p>
                    <p>- Training and Consultation</p>
                </>
            ),
            image: landingPagesImage,
            route: "/business"
        },
        {
            logo: <i className="fa-solid fa-brain"></i>,
            title: "Analytics, ML and AI Services",
            description: (
                <>
                    <p>- Chatbot Development</p>
                    <p>- Data collection and annotation</p>
                    <p>- Recommendation Engines</p>
                    <p>- Customer Analytics</p>
                    <p>- Marketing Analytics</p>
                    <p>- Training and Consultation</p>
                </>
            ),
            image: socialMediaImage,
            route: "/analytics"
        },
    ];

    return (
        <div className="services-container" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})` }}>
            <div className="services-overlay">
                <h2 className="services-heading">Our Solutions</h2>
                <p className='services-head'>Our solutions are designed to help you achieve your business goals. Our culture is to satisfy our client's needs by offering customized solutions that are in line with the latest technology and best IT practices.</p>
                <div className="service-info">
                    {services.map((service, index) => (
                        <div key={index} className="service-section">
                            <div className="service-header">
                                <h1 className='service-logo'>{service.logo}</h1>
                                <h3 className='service-title'>{service.title}</h3>
                            </div>
                            <hr className="service-divider" />
                            <div className="service-details">
                                {service.description}
                                <hr className="service-divider" />
                                <Link to={service.route} className="service-button">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
