import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

const AdminContact = () => {
  const [contact, setContact] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getContactData = async () => {
    try {
      const response = await fetch(`${API}/admin/contact`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log("Contact data", data);

      if (response.ok) {
        setContact(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`${API}/admin/contact/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();

      console.log("Delete Contact", data);

      if (response.ok) {
        getContactData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);
  return (
    <>
      <section className="admin-user-section">
        <div className="container">
          <h1>Admin Contact Data</h1>
        </div>

        <div className="container admin-user">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {contact?.map((curContact, index) => (
                <tr key={index}>
                  <td>{curContact.username}</td>
                  <td>{curContact.email}</td>
                  <td>{curContact.message}</td>
                  <td>
                    <button
                      className="updateLink"
                      onClick={() => deleteContact(curContact._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminContact;
