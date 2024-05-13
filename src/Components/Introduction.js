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
    <div className={'container-fluid ' + classes.containerfluid} style = {{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})` }} >
      <div className='container '>
        <div className='row align-items-center' style={{ height: '41rem' }}>
          <div className='col-12 text-start'>
            {/* Use Typist component for typing animation */}
            <Typist
              className={classes.h1}
              avgTypingDelay={50} // Adjust typing speed as needed
              startDelay={100} // Delay before typing starts
              cursor={{ show: false }} // Hide cursor during typing
              onTypingDone={handleTypingComplete} // Callback when typing is done
            >
              <h1>
                Software to transform <br /> your business
              </h1>
            
                <h2 className='mt-4 text-white'>
                  Experience improved operational efficiency, amplified growth and strategic scaling with our software solutions.
                </h2>
                </Typist>

              {/* Display secondary content after typing animation is complete */}
              {isTypingComplete && (
                <>
                <Link to="/aboutus" className={"btn btn-success px-3 py-2 " + classes.button}>
                  Learn More
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
