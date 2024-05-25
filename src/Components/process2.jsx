import React from "react";

const processSteps = [
  {
    logo: <i className="fas fa-shopping-cart"></i>,
    id: "1",
    title: "Retail",
    description: "We provide innovative solutions for retail businesses, from e-commerce platforms to inventory management systems. Our services are designed to enhance customer experience and streamline operations.",
  },

  {
    logo: <i className="fas fa-graduation-cap"></i>,
    id: "2",
    title: "Learning Institutions",
    description: "Empower your learning institution with our tailored solutions. From student management systems to e-learning platforms, we help you deliver quality education in a digital age.",
  },

  {
    logo: <i className="fas fa-bullhorn"></i>,
    id: "3",
    title: " Personal Brands",
    description: "Stand out in the digital landscape with our personal brand services. From website development to content management, we help you create a strong online presence.",
  },

  {
    logo: <i className="fas fa-building"></i>,
    id: "4",
    title: "Organizations",
    description: "Drive organizational efficiency with our solutions tailored for businesses and nonprofits. From CRM systems to workflow automation, we optimize your operations for success.",
  },

  {
    logo: <i className="fas fa-industry"></i>,
    id: "5",
    title: "Manufacturing",
    description: "Transform your manufacturing processes with our technology solutions. From production management to supply chain optimization, we help you achieve operational excellence.",
  },

  {
    logo: <i className="fas fa-shipping-fast"></i>,
    id: "6",
    title: "Logistics",
    description: "Optimize your logistics operations with our comprehensive solutions. From route planning to warehouse management, we streamline your supply chain for maximum efficiency.",
  },

  
];

const Process1 = () => {
  const processDisplay = processSteps.map((step) => (
    <div className="col-lg-4" key={step.id} style={{ backgroundColor: "#000", color:"#fff" }}>
      <h1 className="head" style = {{color:"#40E096"}}>{step.logo}</h1>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  ));

  return (
    <section>
      <div className="container-fluid py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h2 className="tite" style={{textAlign:"center"}}>Our Involvement </h2>
              <h1>Industry Solutions</h1>
              <p>We offer industry-specific solutions tailored to your business needs. Explore our range of services designed to drive growth and success.</p>
            </div>
            {processDisplay}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process1;
