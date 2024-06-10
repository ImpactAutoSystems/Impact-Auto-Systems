import React from "react";
import "aos/dist/aos.css";

export const Services = (props) => {
  return (
    <div id="services" className="text-center"  data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2 className="fade-in-up feature-card">Our Services</h2>
          <p className="fade-in-up feature-card">
          We offer a range of innovative services to meet your needs.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" data-aos="fade-up">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3 className="feature-card">{d.name}</h3>
                    <p className="feature-card">{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
