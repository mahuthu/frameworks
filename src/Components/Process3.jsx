import React from "react";

const processSteps = [
  {
    logo: <i className="fas fa-magic"></i>,
    id: "1",
    title: "Software Development",
    description: "AGILE offers scalable end-to-end application development and management solutions from requirement analysis for deployment and rollout. We are developing software, related to pension administration, manufacturing, Sacco Solutions, Education / School Management Solutions, Investment Solutions, Enterprise Resource Planning Solutions, Public Sector Solutions, document management solutions, mobile solutions.",
  },

  {
    logo: <i className="fa fa-dollar" aria-hidden="true"></i>,
    id: "3",
    title: "Network & Infrastructure Services",
    description: "AGILE services enable clients to identify, develop, and implement the best-ﬁt solutions which are equipped to meet their changing business requirements.",
  },

  {
    logo: <i className="fas fa-tools"></i>,
    id: "2",
    title: "Infrastructure & Support Services",
    description: "AGILE has the expertise and experience to manage an enabling infrastructure and applications and run outsourced operations for all industries. AGILE Manages Services offering that covers the entire IT including networks, IT infrastructure, applications and business processes. This provides our customers the best of both worlds - control and ﬂexibility over their information systems without either the pain or cost of running them",
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
              <h2>Company Overview</h2>
              <h1>Savannah Insights has been driving vision into action for our clients</h1>
              <p>We consult for high-end technology implementation at clients’ site or implementation of new technology according to the clients’ requirement or upgrading, enhancing the existing facilities in the clients end with the new technology integrated with the existing one. Our consulting services cover:</p>
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
                <i className="fas fa-bullseye fa-3x"></i> {/* Mission Icon */}
                <h3>Mission</h3>
                <p>Our mission is...</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="square-container bg-light">
                <i className="fas fa-chart-line fa-3x"></i> {/* Goal Icon */}
                <h3>Goal</h3>
                <p>Our goal is...</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="square-container bg-light">
                <i className="fas fa-handshake fa-3x"></i> {/* Purpose Icon */}
                <h3>Purpose</h3>
                <p>Our purpose is...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process1;
