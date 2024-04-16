import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../Components/Styles.module.css";
import Services from "../Components/Services/Services3";
import AboutUs1 from "../Components/Aboutus/Aboutus6";
import React from "react"

const Business = () => {
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Business Solution Services" subHeading="Home &raquo; Business Solution Services" />

            <Services/>
            <Footer />
        
        </div>
    );
    }

export default Business;
