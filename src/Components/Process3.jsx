import React from "react";

const processSteps = [
  {
    logo: <i className="fas fa-code " style={{ color: "#41E096", transition: "color 0.3s" }}></i>,
    id: "1",
    title: "Web Design and Development",
    description: "We specialize in creating robust eCommerce solutions tailored to your business needs. From user-friendly shopping carts to secure payment gateways, we ensure a seamless online shopping experience. We also offer other various website development services including portfolio websites, blog or personal websites, educational websites and corporate or business websites",
  },

  {
    logo: <i className="fas fa-globe" style={{ color: "#41E096", transition: "color 0.3s" }}></i>,
    id: "2",
    title: "Business Solutions",
    description: "Our Business and Customization services cover a wide range of solutions including ERP solutions, CRM solutions, third-party API integrations, Inventory Management Systems (IMS), Project Management Systems, Learning Management Systems (LMS), Supply Chain Management (SCM) Systems, and comprehensive training and consultation.",
  },

  {
    logo: <i className="fas fa-chart-line" style={{ color: "#41E096", transition: "color 0.3s" }}></i>,
    id: "3",
    title: "Analytics AI and ML Services",
    description: "Step into the future of business intelligence with our comprehensive AI-driven solutions. From developing intelligent chatbots for seamless customer interactions to cutting-edge model training and fine-tuning recommendation engines, we empower you to harness the full potential of artificial intelligence. Our expertise in data collection and annotation ensures accuracy and depth in your datasets, paving the way for actionable insights and strategic decision-making. Our Analytics Services also offer a wide range of solutions including customer segmentation, behavioral analysis, trend analysis and comprehensive training and consultation",
  },

  {
    logo: <i className="fab fa-whatsapp" style={{ color: "#41E096", transition: "color 0.3s" }}></i>,
    id: "4",
    title: "Social Media Management & WhatsApp Business Integration",
    description: "Our social media management services focus on enhancing brand presence and engagement across platforms. We customize strategies, create engaging content, manage communities, and provide analytics. Additionally, we integrate WhatsApp Business for real-time customer support, order updates, targeted campaigns, and automated messaging, aiming to build strong customer relationships, drive sales, and foster brand loyalty in the digital era",
  },


  {
    logo: <i className="fas fa-chalkboard-teacher"style={{ color: "#41E096", transition: "color 0.3s" }}></i>,
    id: "5",
    title: "Training",
    description: "We offer comprehensive training programs to help you and your team master the latest technologies and industry best practices. From software development to analytics and ML services, we provide hands-on training and expert guidance to enhance your skills and capabilities.",
  },
];

const Process1 = () => {
  const processDisplay = processSteps.map((step, index) => (
    <div
      className={`col-lg-12 ${index % 2 === 0 ? "bg-light" : "bg-light"}`} // Change col-lg-4 to col-lg-12 for full width
      key={step.id}
      style={{ order: index % 2 === 0 ? 1 : -1, marginBottom: "10px" }} // Added marginBottom for gap reduction
    >
      <h1>{step.logo}</h1>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  ));

  return (
    <section>
      <div className="container-fluid py-5" style={{ marginBottom: "-30px" }}> {/* Adjusted marginBottom */}
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h2 className = "ttle" style = {{textAlign:"center"}}>About Savannah Inc</h2>
              <h1>Driving Vision into Action</h1>
              <p>Savannah Inc is a leading technology consulting firm dedicated to helping businesses transform their digital landscape.</p>
              <p> Since its inception, Savannah Inc has worked tirelessly to build systems that tailor-fit to the size, budget, and needs of our customers. Our customers are empowered by technical expertise executing projects allocated to Savannah Inc and we ensure we deliver the customized solutions on time.</p>
              <p>At Savannah Inc, we know this success is the direct result of continued investment in our framework technology and a sustained commitment to the core values and best practices. As we continue to grow, scope, and influence, our purpose remains the same: to deliver dynamic IT solutions to our esteemed customers, to work with you in understanding your unique vision, implementation and to drive that vision into action through customer experience</p>
              <p>We specialize in:</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ margin: "20px auto", maxWidth: "80%" }} /> {/* Added underline */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row text-center">
            {processDisplay}
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="square-container bg-light">
                <i className="fas fa-bullseye fa-3x" style={{ color: "#32325c", transition: "color 0.3s" }}></i> {/* Mission Icon */}
                <h3>Mission</h3>
                <p>Our mission is to foster long-term partnerships, and exceeding customer expectations every step of the way.".</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="square-container bg-light">
                <i className="fas fa-chart-line fa-3x" style={{ color: "#32325c", transition: "color 0.3s" }}></i> {/* Goal Icon */}
                <h3>Goal</h3>
                <p>Our goal is to be a leader in the Industry by providing the right and concise solution</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="square-container bg-light">
                <i className="fas fa-handshake fa-3x" style={{ color: "#32325c", transition: "color 0.3s" }}></i> {/* Purpose Icon */}
                <h3>Purpose</h3>
                <p>Our purpose is drive value through provision of adaptive solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process1;
