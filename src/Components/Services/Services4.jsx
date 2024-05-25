import React from 'react';
import './Services1.css'; // Import CSS file for styling
import backgroundImage from "../../Dataset/nairobi2.jpg"; // Import your background image
import ecommerceImage from "../../Dataset/cart.png"; // Import image for e-commerce
import landingPagesImage from "../../Dataset/initiateafrica.png"; // Import image for landing pages
import socialMediaImage from "../../Dataset/kofiake.png"; // Import image for social media management
import {Link} from "react-router-dom"
const Services = () => {
    const services = [
        {
           
            logo: <i className="fa-solid fa-code"></i>,
            title: "Digital Prescence Services",
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
            description: (
                <>
                    <p>- CRM solutions</p>
                    <p>- ERP solutions</p>
                    <p>- Third party API integrations</p>
                    <p>- Inventory Management Systems </p>
                    <p>- Project Management Systems</p>
                    <p>- Learning Management Systems</p>
                    <p>- Supply Chain Management Systems</p>
                    <p>- Training and Consultation</p>
                    
                    
                </>
            ),

            title: "Business Integration services",
            image: landingPagesImage,
            route: "/business"
        },
        {
            logo: <i className="fa-solid fa-brain"></i>,

            title: "Analytics, Ml and AI services",
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
        <div className="services-container" style = {{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})` }}>
            <div className = "services-overlay">
            <h2 className="services-heading">Our Solutions</h2>
            <p className='services-head' style = {{color: '#fff'}}>Our solutions are designed to help you achieve your business goals. Our culture is to satisfy our client's needs by offering customized solutions that are in line with the latest technology and best IT practices.</p>

            <div className="service-info" >
                {services.map((service, index) => (
                    <div key={index} className="service-section" style={{backgroundColor: "#000",  color:"#fff"}}
                    >
                        <h1 className='head' style = {{color:"#40E096"}}>{service.logo}</h1>  <h3>{service.title}</h3>


                        <hr style={{ margin: "20px auto", maxWidth: "100%" }} /> {/* Added underline */}

                        <div className="service-details">
                            <p>{service.description}</p>
                            <hr style={{ margin: "20px auto", maxWidth: "100%" }} /> {/* Added underline */}

                            <Link to={service.route} className="btn btn-success px-3 py-2 " style={{backgroundColor:"#32325C", color:"#42E096"}}>
                            Read More
                             </Link>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );

};
    
export default Services;