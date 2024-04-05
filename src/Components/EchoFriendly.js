import React from "react";
import classes from "./Styles.module.css"
import { Link } from "react-router-dom";
const EchoFriendly = () => {
  return (
    <div className={"container-fluid " + classes.echo}>
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h1> About Us </h1>
            <p>
              Welcome to Savannah Builders, a place where digital design innovation and experience converge. As a leading web design business in Kenya, we take great satisfaction in offering expert web design services .<br/>
              We understand that a website acts as the digital face of your business and is a lot more than just an online presence. Every project we work on is a perfect combination of outstanding functionality and eye-catching design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EchoFriendly;
