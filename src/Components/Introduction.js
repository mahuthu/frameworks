import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import classes from './Introduction.module.css';
import backgroundImage from "../Dataset/nairobi2.jpg";


const Introduction = () => {
  return (
    <div className={'container-fluid ' + classes.containerfluid} style = {{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})` }} >
      <div className='container '>
        <div className='row align-items-center' style={{ height: '41rem' }}>
          <div className='col-12 text-start'>
            <h1 className={classes.h1}>
              Software to transform <br /> your business
            </h1>
            
            <h2 className='mt-4 text-white'>
            Experience improved operational efficiency, amplified growth and strategic scaling with our software solutions.            </h2>
            <Link to="/aboutus" className={"btn btn-success px-3 py-2 " + classes.button}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
