import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  // handle the data change event
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle data of form submission
  const handleSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      // console.log(res_data);

      if (response.ok) {
        toast.success("Register successful");
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", password: "", phone: "" });
        navigate("/");
      } else {
        toast.error(
          res_data.extraMessage ? res_data.extraMessage : res_data.message
        );
      }
    } catch (error) {
      console.log("register failed error: ", error);
    }
  };

  return (
    <>
      <section className="register-contact">
        <div className="register-content container">
          <h1 className="main-heading">Register Form</h1>
        </div>

        {/* Register page main */}
        <div className="register-content grid grid-two-cols">
          <div className="registration-img">
            <img
              src="/public/images/register.png"
              alt="registration Image"
              width="450"
              height="450"
            />
          </div>

          {/* Registeration Form */}
          <div className="registration-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your name"
                  required
                  autoComplete="false"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  required
                  autoComplete="false"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  autoComplete="false"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="phone">phone</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone"
                  required
                  autoComplete="false"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>

              <button type="submit" className="btn btn-submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
