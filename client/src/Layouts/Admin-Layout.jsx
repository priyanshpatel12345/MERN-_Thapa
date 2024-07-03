import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUserLarge, FaHouseChimney } from "react-icons/fa6";
import { MdContacts, MdMiscellaneousServices } from "react-icons/md";
import { FaBookReader, FaAddressBook } from "react-icons/fa";

import { useAuth } from "../store/auth";
import { Navigate } from "react-router-dom";

function AdminLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading... </h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/admin/users"
                  className="flex gap-2 hover:opacity-75"
                >
                  <FaUserLarge /> users
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/contact"
                  className="flex gap-2 hover:opacity-75"
                >
                  <MdContacts /> Contact
                </NavLink>
              </li>

              <li>
                <NavLink to="/service" className="flex gap-2 hover:opacity-75">
                  <MdMiscellaneousServices /> Services
                </NavLink>
              </li>

              <li>
                <NavLink to="/" className="flex gap-2 hover:opacity-75">
                  <FaHouseChimney /> Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/createcourse"
                  className="flex gap-2 hover:opacity-75"
                >
                  <FaBookReader /> Create-Course
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/courses"
                  className="flex gap-2 hover:opacity-75"
                >
                  <FaAddressBook /> Courses
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AdminLayout;
