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
          <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
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
                  <Link className="dropdown-item" to="/website">
                 Website Development:
                  </Link>
                </li>
                
                <li>
                  <Link className="dropdown-item" to="/social">
                  Social Media Management
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/digital">
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
                  <Link className="dropdown-item" to="/whatsapp">
                  WhatsApp Business Integration
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/training">
                  Training and Consultation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/custom">
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
                  <Link className="dropdown-item" to="/business">
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
                Analytics, ML And AI Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/chatbot">
                  Chatbot Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/model">
                  Model Training and Fine tuning
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/annotation">
                  Data  collection and annotation
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/analytics">
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
