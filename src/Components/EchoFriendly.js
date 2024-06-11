import React, { useEffect, useRef } from 'react';
import backgroundImage from "../Dataset/nairobi2.jpg";
import styles from './Echo.module.css'; // Import the CSS module

const EchoFriendly = () => {
  const headingRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const elements = [line1Ref.current, headingRef.current, line2Ref.current, paragraphRef.current];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles['fade-in']);
            entry.target.classList.remove(styles['initial-hidden']);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className='py-5' style={{ backgroundImage: `url(${backgroundImage})`, color: '#32325c' }}>
      <div className='container-fluid py-5'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className={styles['heading-container']}>
              <div ref={line1Ref} className={`${styles['heading-line']} ${styles['initial-hidden']} delay-1`}></div>
              <h1 ref={headingRef} className={`${styles['heading-text']} ${styles['initial-hidden']} delay-2`}>Company Overview</h1>
              <div ref={line2Ref} className={`${styles['heading-line']} ${styles['initial-hidden']} delay-1`}></div>
            </div>
          </div>
          <div className='col-lg-8 offset-lg-2'>
            <p ref={paragraphRef} className={`font-sans hover:font-serif text-center ${styles['small-font']} ${styles['initial-hidden']} delay-2`}>
              Savannah Inc, a place where digital design innovation and experience converge. With deep roots in our industry, we provide adequate and efficient superior IT solutions. We specialize in software development, customization, IT consultancy services and training, driving vision into action for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EchoFriendly;
