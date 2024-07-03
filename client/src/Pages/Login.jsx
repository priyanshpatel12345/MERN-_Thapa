import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS, API } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // -----------------------
  //  to Update the Data dynamically
  //-------------------------

  const handleSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    try {
      const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("res_data :", res_data);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Login successful");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(
          res_data.extraMessage ? res_data.extraMessage : res_data.message
        );
      }
    } catch (error) {
      console.log("Login failed error: ", error);
    }
  };
  return (
    <section className="login-contact">
      <div className="login-content container">
        <h1 className="main-heading">Login Form</h1>
      </div>

      {/* login page main */}

      <div className="login-content grid grid-two-cols">
        <div className="login-img">
          <img
            src="/public/images/login.png"
            alt="login Image"
            width="450"
            height="450"
          />
        </div>

        {/* Login Form Section */}
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                autoComplete="false"
                onChange={handleInput}
                value={user.email}
                className="bg-gray-700 text-white p-4  w-full mb-4 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                autoComplete="false"
                onChange={handleInput}
                value={user.password}
                className="bg-gray-700 text-white p-4  w-full mb-4 rounded-lg"
              />
            </div>

            <button type="submit" className="btn btn-submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
