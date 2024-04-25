import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import pmsImage from "../../Dataset/pms.png";

const Pms = () => {

    const crmService = {
        title: "PMS Solutions",
        image: pmsImage,
        description: (
            <>
              <p>
                Efficiently manage projects and tasks with customized project management systems. Project management solutions streamline workflows, enhance collaboration, and ensure timely project delivery with comprehensive project tracking.
              </p>
              <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px" }}>
                Advantages of PMS solutions include:
              </p>
              <ul>
                <li>Task Management: Organize tasks, assign responsibilities, and track progress to ensure project milestones are met.</li>
                <li>Collaboration Tools: Facilitate team communication, file sharing, and collaboration on project-related activities.</li>
                <li>Resource Allocation: Optimize resource allocation, manage budgets, and track project costs for efficient resource utilization.</li>
                <li>Timeline and Gantt Charts: Create visual timelines, Gantt charts, and project schedules to monitor project timelines and dependencies.</li>
              </ul>
              <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px" }}>
                Businesses benefit from PMS solutions by:
              </p>
              <ul>
                <li>Improved Project Efficiency: Streamline workflows, reduce bottlenecks, and enhance project coordination for faster project delivery.</li>
                <li>Enhanced Collaboration: Foster team collaboration, improve communication, and ensure everyone stays aligned with project goals.</li>
                <li>Resource Optimization: Allocate resources effectively, manage workloads, and optimize resource utilization for cost savings.</li>
                <li>Project Tracking and Reporting: Monitor project progress, generate reports, and analyze performance metrics to make data-driven decisions.</li>
              </ul>
              <p style={{ backgroundColor: "#41E096", color: "#32325C", padding: "20px", borderRadius: "5px", textAlign: "left"  }}>
                At Savannah Builders, we specialize in designing and implementing customized Project Management Systems tailored to your project management needs. Let us help you streamline your project workflows and achieve project success.
              </p>
            </>
          ),
      };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Project Management System" subHeading="Home &raquo; Services" />


            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />

            <Footer />
        
        </div>
    );
    }

export default Pms;
