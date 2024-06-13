import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import classes from './Introduction.module.css';
import backgroundImage from "../Dataset/nairobi2.jpg";

const Introduction = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Set isTypingComplete to true when typing animation is complete
  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  // Use useEffect to trigger typing animation when component mounts
  useEffect(() => {
    setIsTypingComplete(false);
  }, []);

  return (
    <div className={`container-fluid ${classes.containerfluid}`} style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` 
    }}>
      <div className="container">
        <div className="row align-items-center" style={{ height: '100vh' }}>
          <div className="col-12 text-start">
            <Typist
              className={classes.typist}
              avgTypingDelay={50}
              startDelay={100}
              cursor={{ show: false }}
              onTypingDone={handleTypingComplete}
            >
              <h1 className={classes.title}>
                Software to transform <br /> your business
              </h1>
              <h2 className={`mt-4 ${classes.subtitle}`}>
                Experience improved operational efficiency, amplified growth and strategic scaling with our software solutions.
              </h2>
            </Typist>
            {isTypingComplete && (
              <Link to="/aboutus" className={`btn btn-success px-4 py-2 ${classes.button}`}>
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
