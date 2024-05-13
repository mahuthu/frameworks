
import React from 'react'
import backgroundImage from "../Dataset/nairobi2.jpg";
const EchoFriendly = () => {
  return (
    <section className='py-5' style = {{  backgroundImage: `url(${backgroundImage})`, color: '32325c' }}>
        <div className='container-fluid py-5'>
            <div className='row'>
                <div className='col-lg-2 offset-lg-1'>
                    <h1> About Us </h1>
                </div>
                <div className='col-lg-8'>
                    <p className=" font-sans hover:font-serif text-lg-start ">
                        Savannah Inc, a place where digital design innovation and experience converge. With deep roots in our industry, Savannah Inc was established to provide adequate and efficient superior IT solutions through customization and that is exactly what we have been doing. We specialize in software development, customization, IT consultancy services and training, driving vision into action for our clients.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EchoFriendly




// import React from "react";
// import classes from "./Styles.module.css"
// //import { Link } from "react-router-dom";
// const EchoFriendly = () => {
//   return (
//     <div className={"container-fluid " + classes.echo}>
//       <div className="container">
//         <div className="row text-center">
//           <div className="col-12">
//             <h1> About Us </h1>
//             <p>
//               Welcome to Savannah Builders, a place where digital design innovation and experience converge. As a leading web design business in Kenya, we take great satisfaction in offering expert web design services .<br/>
//               We understand that a website acts as the digital face of your business and is a lot more than just an online presence. Every project we work on is a perfect combination of outstanding functionality and eye-catching design.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EchoFriendly;
