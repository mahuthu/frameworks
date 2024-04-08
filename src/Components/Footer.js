import React from "react";
import classes from "./Styles.module.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className={"container " + classes.footer}>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Contact Information</h5>
                <li>Savannah Builders</li>
                <li> Kahawa Sukari, Thika Road,</li>
                <li>Nairobi, Kenya</li>
                <li>Phone1: 0793207217</li>
                <li>Phone2: 0726258462</li>
                <li>Email: SavannahBuilders@gmail.com</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Quick Links</h5>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Our Services</h5>
                <li>Web Design and Development</li>
                <li>Graphic Design</li>
                <li>E-commerce Solutions</li>
                <li>Social Media Management</li>
                <li>WhatsApp Business Integration</li>
                <li>Custom Solutions and Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{color: "white"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <p>
                &copy; 2024 Savannah Builders, All Rights Reserved. | Privacy
                Policy | Terms
              </p>
            </div>

            <div className="col-lg-6 col-12 text-center text-lg-end text-md-end text-sm-center ">
              <h4>
                 <i className="fab fa-facebook-f ms-3   "></i>
                <i className="fab fa-instagram   ms-3 "></i>
                <i className="fab fa-linkedin   ms-3 "></i>
                <i className="fab fa-twitter-square  ms-3  "></i>
                <i className="fab fa-youtube   ms-3 "></i>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
