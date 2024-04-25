import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import lmsImage from "../../Dataset/lms.png";

const Lms = () => {

    const crmService = {
        title: "LMS Solutions",
        image: lmsImage,
        description: (
            <>
              <p>
                Create engaging and effective learning experiences with custom learning management systems. LMS solutions offer personalized learning paths, interactive content, and advanced analytics to drive employee training and development.
              </p>
              <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px" }}>
                Advantages of LMS solutions include:
              </p>
              <ul>
                <li>Personalized Learning: Tailor learning paths and content to individual learners' needs, preferences, and learning styles.</li>
                <li>Interactive Content: Engage learners with interactive modules, quizzes, videos, and simulations for effective learning experiences.</li>
                <li>Analytics and Reporting: Track learner progress, assess performance, and generate reports for actionable insights and continuous improvement.</li>
                <li>Compliance and Certification: Ensure regulatory compliance, deliver certification programs, and manage training records efficiently.</li>
              </ul>
              <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px" }}>
                Businesses benefit from LMS solutions by:
              </p>
              <ul>
                <li>Enhanced Employee Training: Provide on-demand training, upskilling, and reskilling opportunities to improve employee knowledge and skills.</li>
                <li>Improved Training ROI: Measure training effectiveness, identify areas for improvement, and maximize return on investment (ROI) in training initiatives.</li>
                <li>Flexible Learning Environments: Offer flexible learning options, including mobile learning, self-paced modules, and virtual classrooms for diverse learner needs.</li>
                <li>Comprehensive Learning Analytics: Gain insights into learner engagement, performance trends, and learning outcomes to optimize training strategies.</li>
              </ul>
              <p style={{ backgroundColor: "#41E096", color: "#32325C", padding: "20px", borderRadius: "5px", textAlign: "left"  }}>
                At Savannah Builders, we specialize in designing and implementing customized Learning Management Systems tailored to your training and development goals. Let us empower your workforce with engaging and impactful learning experiences.
              </p>
            </>
          ),
      };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Learning Management System" subHeading="Home &raquo; Services" />
            

            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />
 
            <Footer />
        
        </div>
    );
    }

export default Lms;
