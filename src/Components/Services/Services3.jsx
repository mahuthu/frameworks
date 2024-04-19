import React from 'react';
import './Services1.css'; // Import CSS file for styling
import backgroundImage from "../../Dataset/nairobi2.jpg"; // Import your background image
import landingPagesImage from "../../Dataset/initiateafrica.png"; // Import image for landing pages
import socialMediaImage from "../../Dataset/kofiake.png"; // Import image for social media management

const Services = () => {
    const services = [
        
        {
            title: "Custom solutions and Intergrations",
            description: "Let us handle your social media presence while you focus on growing your business. From content creation to community engagement, we help you build a strong brand presence on social platforms.",
            image: socialMediaImage,
        },

        {
            title: "Training and Consultation",
            description: "Our landing page designs are crafted to convert visitors into customers. With compelling visuals and persuasive copywriting, we help you make a lasting impression and drive conversions.",
            image: landingPagesImage,
        },
    ];

     
    return (
        <div className="services-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className = "services-overlay">
            <h2 className="services-heading">Business Solution Services</h2>
            <div className="service-info">
                {services.map((service, index) => (
                    <div key={index} className="service-section">
                        <div className="service-image">
                            <img src={service.image} alt={service.title} />
                        </div>
                        <div className="service-details">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );

};
    
export default Services;