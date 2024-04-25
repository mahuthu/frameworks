import React from "react";
import classes from "./Styles.module.css";



const SubService = ({ title, image, description }) => {
    return (
      <section>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12 bg-light">
              <img src={image} alt={title} style={{ width: "50%", maxWidth: "50%" }} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SubService;