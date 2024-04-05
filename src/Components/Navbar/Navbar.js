import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../../Dataset/4.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-0">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          {" "}
          <img src={logoImage} alt="Logo" width="50" height="50" />{" "}
          <b> Savannah Builders </b>{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="custom-packaging">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Customer Reviews
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Pricing
                  </Link>
                </li>
                </ul>
                </li>

              <li className="nav-item dropdown">
                <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Digital Presence Services
              </Link>
              
              <ul className="dropdown-menu">
                
                <li>
                  <Link className="dropdown-item" to="/">
                  E-commerce Website Development:
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                  Landing Pages
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                  Social Media Management
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Explore All Services
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Business Solutions Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                  WhatsApp Business Integration
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                  Training and Consultation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                  Custom Solutions and Integrations
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                  Company Websites
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                  Business Websites
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                  Corporate Websites
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                  eCommerce Websites
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                  Portfolio Websites
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                  Organization Websites
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                  Personal Websites
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Explore All Products
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Login
                  </Link>
                </li>
                
                
              </ul>
            </li>
            
            <li>
              {" "}
              <button className="btn btn-success" type="submit">
                Contact Us
              </button>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            <Link className="dropdown-item" to="/">
              Login
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
