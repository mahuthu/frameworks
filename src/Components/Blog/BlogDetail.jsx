import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Blog.module.css";

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/blogs/${id}/`);
                console.log(response)
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles["blog-detail-container"]}>
            <img src={`http://localhost:8000${blog.image}`} alt="" className={styles["blog-image"]} />
            <h1 className={styles["blog-title"]}>{blog.title}</h1>
            <p className={styles["blog-description"]}>{blog.description}</p>
        </div>
    );
};

export default BlogDetail;
