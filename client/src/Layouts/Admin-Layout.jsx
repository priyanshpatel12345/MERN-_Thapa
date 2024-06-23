import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUserLarge, FaHouseChimney } from "react-icons/fa6";
import { MdContacts, MdMiscellaneousServices } from "react-icons/md";

function AdminLayout() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  {" "}
                  <FaUserLarge /> users
                </NavLink>
              </li>

              <li>
                <NavLink to="/admin/contact">
                  <MdContacts /> Contact
                </NavLink>
              </li>

              <li>
                <NavLink to="/service">
                  <MdMiscellaneousServices /> Services
                </NavLink>
              </li>

              <li>
                <NavLink to="/">
                  <FaHouseChimney /> Home
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
