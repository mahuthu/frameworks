import React from "react";
import Blog from "../Components/Blog/Blog"; // Path to your Blog component
import blog1Image from "../Dataset/nairobi2.jpg";
import blog2Image from "../Dataset/pesapal1.png";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../Components/Styles.module.css";
import AboutUs1 from "../Components/Aboutus/Aboutus6";
import styles from "../Components/Blog/Blog.module.css";
const BlogPage = () => {
    return (
        <div className="App">
            <Navbar />
            <AboutUs1 mainHeading="Blog" subHeading="Home &raquo; Blog" />
            <div className={styles["blog-page-container"]}>
                <Blog
                    image={blog1Image}
                    title="Blog Title 1"
                    description="Short description for Blog 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Blog
                    image={blog2Image}
                    title="Blog Title 2"
                    description="Short description for Blog 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                {/* Add more Blog components as needed */}
            </div>
            <Footer/>
        </div>
    );
};

export default BlogPage;
