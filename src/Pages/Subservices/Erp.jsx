import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import erpImage from "../../Dataset/erp1.jpg"


const ERP = () => {

    const crmService = {
        title: "ERP Solutions",
        image: erpImage,
        description: (
            <>
              <p>
                Enhance business operations and efficiency with Microsoft Dynamics ERP solutions. ERP solutions integrate seamlessly with your existing systems, providing real-time insights, automating processes, and optimizing resource allocation.
              </p>
              <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px" }}>
                Advantages of ERP solutions include:
              </p>
              <ul>
                <li>Streamlined Operations: Consolidate and automate business processes, reduce manual tasks, and improve operational efficiency across departments.</li>
                <li>Real-time Insights: Access up-to-date data and analytics for informed decision-making, resource allocation, and performance tracking.</li>
                <li>Integrated Systems: Connect different business functions and departments, ensuring data consistency, collaboration, and seamless workflows.</li>
                <li>Scalability: Adapt and scale your ERP system as your business grows, accommodating new processes, users, and functionalities.</li>
              </ul>
              <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px" }}>
                Businesses benefit from ERP solutions by:
              </p>
              <ul>
                <li>Improved Efficiency: Streamline operations, reduce errors, and enhance productivity with automated workflows and standardized processes.</li>
                <li>Better Decision-making: Gain actionable insights, track key performance indicators, and optimize resource allocation for strategic decision-making.</li>
                <li>Enhanced Collaboration: Foster collaboration among teams, departments, and stakeholders through integrated systems and shared data.</li>
                <li>Adaptability: Respond quickly to market changes, business needs, and regulatory requirements with flexible and scalable ERP solutions.</li>
              </ul>
              <p style={{ backgroundColor: "#41E096", color: "#32325C", padding: "20px", borderRadius: "5px", textAlign: "left"  }}>
                At Savannah Builders, we specialize in ERP implementation, customization, and optimization tailored to your business goals. Let us help you harness the power of ERP to drive operational excellence and business growth.
              </p>
            </>
          ),
      };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Enterprise Reasource Planning" subHeading="Home &raquo; Services" />

            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />

            <Footer />
        
        </div>
    );
    }

export default ERP;
