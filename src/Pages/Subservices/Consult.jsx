import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import crmImage from "../../Dataset/crm1.jpg"


const Training = () => {

    const crmService = {
        title: "Training and Consultation Services",
        image: crmImage,
        description: "",
      };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Training and Consultation" subHeading="Home &raquo; Services" />


            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />

            <Footer />
        
        </div>
    );
    }

export default Training;