import React from "react";
import { useAuth } from "../store/auth";

function About() {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1>Why Choose Us?</h1>
              {user ? (
                <p>Welcome {user.username},</p>
              ) : (
                <p>Welcome to our website</p>
              )}
              <p>
                Expertise: Our team boasts extensive expertise in the latest
                technologies, ensuring top-notch solutions for your needs. With
                years of industry experience, we provide expert guidance and
                innovative strategies to drive your success.
              </p>
              <p>
                customization: We offer highly customizable services tailored to
                meet the unique requirements of each client. Our solutions are
                designed with flexibility in mind, allowing for seamless
                customization to fit your specific goals.
              </p>
              <p>
                Affordability: We provide high-quality services at competitive
                prices, ensuring affordability without compromising on
                excellence. Our pricing model is designed to be budget-friendly,
                making top-tier solutions accessible to businesses of all sizes.
              </p>
              <p>
                Customer: We prioritize customer satisfaction, delivering
                personalized support and ensuring a positive experience. Our
                customer-centric approach focuses on understanding and
                fulfilling your needs with utmost dedication.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn text-black hover:opacity-75">
                    connect now
                  </button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn hover:opacity-55">
                    learn more
                  </button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
