import React from "react";
import styles from "./Blog.module.css";

const Blog = ({ image, title, description }) => {
    return (
        <div className={styles["blog-container"]}>
            <img src={image} alt="Blog Image" className={styles["blog-image"]} />
            <h3 className={styles["blog-title"]}>{title}</h3>
            <p className={styles["blog-description"]}>{description}</p>
            <a href="#" className={styles["view-more-link"]}>
                View More &gt;&gt;
            </a>
        </div>
    );
};

export default Blog;
