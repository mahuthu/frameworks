import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import classes from './Introduction.module.css';

const Introduction = () => {
  return (
    <div className={'container-fluid ' + classes.containerfluid}>
      <div className='container '>
        <div className='row align-items-center' style={{ height: '41rem' }}>
          <div className='col-12 text-start'>
            <h1 className={classes.h1}>
              Usiachwe Nyuma <br /> Eka Biz Yako Online
            </h1>
            <h2 className='mt-4 text-white'>
              We are helping YOU establish a presence online kwa bei ya MWANANCHI
            </h2>
            {/* Use Link component to create a link for the button */}
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
