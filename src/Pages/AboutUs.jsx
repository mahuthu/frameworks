import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../Components/Styles.module.css";
import Services from "../Components/Process3";
import AboutUs1 from "../Components/Aboutus/Aboutus1";
import CustomerReviews from "../Components/reviews/reviews";
import React from "react"



const Business = () => {
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 />

            <Services/>
            <CustomerReviews/>

            <Footer />
        
        </div>
    );
    }

export default Business;
