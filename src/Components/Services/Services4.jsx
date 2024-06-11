import React from 'react';
import './Services1.css'; // Import CSS file for styling
import backgroundImage from "../../Dataset/nairobi2.jpg"; // Import your background image
//import { Link } from "react-router-dom";

const Services = () => {
    const services = [
        { icon: <i className="fa-solid fa-code"></i>, title: " Website Design and Development", route: "/ecommerce" },
        { icon: <i className="fas fa-globe"></i>, title: "CRM Solutions", route: "/crm" },
        { icon: <i className="fas fa-cogs"></i>, title: "ERP Solutions", route: "/erp" },
        { icon: <i className="fas fa-plug"></i>, title: "Third party API integrations", route: "/api" },
        { icon: <i className="fas fa-warehouse"></i>, title: "Inventory Management Systems", route: "/inventory" },
        { icon: <i className="fas fa-project-diagram"></i>, title: "Project Management Systems", route: "/project" },
        { icon: <i className="fas fa-graduation-cap"></i>, title: "Learning Management Systems", route: "/learning" },
        { icon: <i className="fas fa-shipping-fast"></i>, title: "Supply Chain Management Systems", route: "/supplychain" },
        { icon: <i className="fa-solid fa-robot"></i>, title: "Chatbot Development", route: "/chatbot" },
        { icon: <i className="fas fa-database"></i>, title: "Data collection and annotation", route: "/data" },
        { icon: <i className="fas fa-thumbs-up"></i>, title: "Recommendation Engines", route: "/recommendation" },
        { icon: <i className="fas fa-chart-line"></i>, title: "Customer Analytics", route: "/customeranalytics" },
        { icon: <i className="fas fa-bullhorn"></i>, title: "Marketing Analytics", route: "/marketinganalytics" },
        { icon: <i className="fas fa-chalkboard-teacher"></i>, title: "Training and Consultation", route: "/training" },
    ];

    return (
        <div className="services-container" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})` }}>
            <div className="services-overlay">
                <h2 className="services-heading">Our Solutions</h2>
                <p className='services-head'>Our solutions are designed to help you achieve your business goals. Our culture is to satisfy our client's needs by offering customized solutions that are in line with the latest technology and best IT practices.</p>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-icon-container">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
