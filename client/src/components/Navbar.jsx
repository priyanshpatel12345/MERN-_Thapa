import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../index.css";
import { useAuth } from "../store/auth";
import { useState } from "react";

export const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  const [element, setElement] = useState("home");
  return (
    <>
      <header>
        <div className="container navbar">
          <div className={element === "admin" ? "active" : ""}>
            <NavLink to="/">priyansh </NavLink>
          </div>

          <nav>
            <ul>
              {user.isAdmin ? (
                <>
                  <li
                    onClick={() => setElement("admin")}
                    className={element === "admin" ? "active" : ""}
                  >
                    <NavLink to="/admin">Admin</NavLink>
                  </li>

                  <li className="hover:opacity-75">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="hover:opacity-75">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="hover:opacity-75">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li className="hover:opacity-75">
                    <NavLink to="/service">Service</NavLink>
                  </li>
                  <li className="hover:opacity-75">
                    <NavLink to="/course">Course</NavLink>
                  </li>

                  {isLoggedIn ? (
                    <li className="hover:opacity-75">
                      <NavLink to="/logout">Logout</NavLink>
                    </li>
                  ) : (
                    <>
                      <li className="hover:opacity-75">
                        <NavLink to="/login">Login</NavLink>
                      </li>
                      <li className="hover:opacity-75">
                        <NavLink to="/signup">Signup</NavLink>
                      </li>
                    </>
                  )}
                </>
              ) : (
                <>
                  <li className="hover:opacity-75">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="hover:opacity-75">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="hover:opacity-75">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li className="hover:opacity-75">
                    <NavLink to="/service">Service</NavLink>
                  </li>
                  <li className="hover:opacity-75">
                    <NavLink to="/course">Course</NavLink>
                  </li>

                  {isLoggedIn ? (
                    <li className="hover:opacity-75">
                      <NavLink to="/logout">Logout</NavLink>
                    </li>
                  ) : (
                    <>
                      <li className="hover:opacity-75">
                        <NavLink to="/login">Login</NavLink>
                      </li>
                      <li className="hover:opacity-75">
                        <NavLink to="/signup">Signup</NavLink>
                      </li>
                    </>
                  )}
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
