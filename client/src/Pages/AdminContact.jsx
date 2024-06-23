import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

const AdminContact = () => {
  const [contact, setContact] = useState([]);
  const { authorizationToken } = useAuth();
  const [loading, setLoading] = useState(false);

  const getContactData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/admin/contact", {
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
      loading(false);
    }

    useEffect(() => {
      getContactData();
    }, []);
  };
  return (
    <>
      <section>
        <h1>Admin Contact Data</h1>

        <div className="admin-users">
          {contact?.map((curData, index) => {
            return (
              <div key={index}>
                <p>{curData.username}</p>
                <p>{curData.email}</p>
                <p>{curData.message}</p>
                <button className="updateLink">Delete</button>
              </div>
            );
          })}
        </div>
        <h1>Helo</h1>
      </section>
    </>
  );
};

export default AdminContact;
