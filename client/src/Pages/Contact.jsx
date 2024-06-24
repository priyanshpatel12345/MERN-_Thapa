import React, { useState } from "react";
import { useAuth } from "../store/auth";
import "../index.css";
function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const { user, API } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Contact form send Successfully");

    try {
      const response = await fetch(`${API}/Contact/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      // console.log(response);
      if (response.ok) {
        setContact({ message: "" });
      }
    } catch (error) {
      console.log("Error from contact", error);
    }
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>

        {/* contact page main */}
        <div className="contact-content grid grid-two-cols">
          <div className="contact-img ">
            <img
              src="/public/images/support.png"
              alt="contact Image"
              width="500"
              height="500"
            />
          </div>

          {/* //form Section */}
          <div className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your name"
                  autoComplete="false"
                  required
                  onChange={handleInput}
                  value={contact.username}
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  autoComplete="false"
                  required
                  onChange={handleInput}
                  value={contact.email}
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  placeholder="Write message here..."
                  required
                  autoComplete="false"
                  onChange={handleInput}
                  value={contact.message}
                />
              </div>

              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.638569145417!2d72.52451452509348!3d23.073708679137948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e834ea2bc19cb%3A0xfee976aa31b03825!2sSHIVAM%20RESIDENCY%2C%20Vishwas%20City%201%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380061!5e0!3m2!1sen!2sin!4v1718516801715!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contact;
