import React from "react";
import "../index.css";
import { useAuth } from "../store/auth";

function Service() {
  const { services } = useAuth();
  console.log(services);
  if (!Array.isArray(services)) {
    console.error(
      "Expected services to be an array, but got:",
      typeof services
    );
    return <p>Loading services...</p>; // Or any other fallback UI
  }
  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((curEle, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src="/images/design.png" alt="designer" width="300" />
            </div>
            <div className="card-details">
              <div className="grid grid-two-cols">
                <p>{curEle.provider}</p>
                <p>{curEle.price}</p>
              </div>
              <h2>{curEle.service}</h2>
              <p>{curEle.description}</p>
            </div>
          </div>
        ))}
        ;
      </div>
    </section>
  );
}

export default Service;
