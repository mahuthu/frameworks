import React from "react";
import backgroundImage from "../Dataset/nairobi2.jpg";

const CustomerReviews = () => {
  return (
    <section
      className="py-3"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: "#F8F9FA",
      }}
    >
      <div className="container-fluid">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h1>Customer Reviews</h1>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-3 ">
              <div className="card" style={{ width: "20rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Excellent Service</h5>
                  <p className="card-text">
                    Our experience with SavannahBuilders has been exceptional. They
                    crafted a stunning website for our business, exceeding our
                    expectations in every aspect. Their attention to detail,
                    timely delivery, and professionalism are commendable. We
                    highly recommend SavannahBuilders to anyone seeking top-notch
                    web design services.
                  </p>
                  <h5>Ann Wanjiru</h5>
                  <h6>
                    <i className="fa fa-star" aria-hidden="true" style={{color: "yellow"}}></i>&nbsp;
                    <i className="fa fa-star" aria-hidden="true" style={{color: "yellow"}}></i>&nbsp;
                    <i className="fa fa-star" aria-hidden="true" style={{color: "yellow"}}></i>&nbsp;
                    <i className="fa fa-star" aria-hidden="true" style={{color: "yellow"}}></i>&nbsp;
                    <i className="fa fa-star" aria-hidden="true" style={{color: "yellow"}}></i>
                  </h6>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
